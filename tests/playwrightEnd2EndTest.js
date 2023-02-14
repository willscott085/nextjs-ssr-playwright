import { expect, test as base } from "@playwright/test";
import http from "http";
import { parse } from "url";
import { rest } from "msw";
import next from "next";
import path from "path";
import { createWorkerFixture } from "playwright-msw";
import { handlers } from "./handlers";

const test = base.extend({
  worker: createWorkerFixture(handlers),

  port: [
    async ({}, use) => {
      const app = next({
        dev: false,
        dir: path.resolve(__dirname, ".."),
      });

      await app.prepare();
      const handleNextRequests = app.getRequestHandler();

      const customServer = new http.Server(async (req, res) => {
        const parsedUrl = parse(req.url, true);
        return handleNextRequests(req, res, parsedUrl);
      });

      await new Promise((resolve, reject) => {
        customServer.listen((err) => {
          if (err) {
            return reject(err);
          }
          resolve(customServer);
        });
      });

      const port = String(customServer.address().port);
      await use(port);
    },
    {
      scope: "worker",
      auto: true,
    },
  ],

  requestInterceptor: [
    async ({}, use) => {
      const { requestInterceptor } = await import("../.next/server/pages/_app");
      const interceptor = await requestInterceptor;
      await use(interceptor);
    },
    {
      scope: "test",
    },
  ],

  rest,
});

export { test, expect };
