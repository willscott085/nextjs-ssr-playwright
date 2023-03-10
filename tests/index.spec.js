import { test, expect } from "./playwrightEnd2EndTest";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_BASE_URL;

// test("no mocks, real call to Canary", async ({ page, port }) => {
//   await page.goto(`http://localhost:${port}`);

//   const button = await page.innerText("button");

//   expect(button).toBe("Load data");

//   await page.getByRole("button").click();

//   const data = await page.innerText("pre");

//   expect(data).toBe("EUR");
// });

test("browser mocks", async ({ page, port, worker, rest }) => {
  await worker.use(
    rest.get("*/api/gateway/info", (_req, res, ctx) => {
      return res(
        ctx.json({
          inventoryValueCurrency: "Browser -> Node",
        })
      );
    })
  );

  await page.goto(`http://localhost:${port}`);

  const button = await page.innerText("button");

  expect(button).toBe("Load data");

  await page.getByRole("button").click();

  const data = await page.innerText("pre");

  expect(data).toBe("Browser -> Node");
});

test("server-to-server mocks", async ({
  page,
  port,
  requestInterceptor,
  rest,
}) => {
  requestInterceptor.use(
    rest.get("https://api.test.qogita.com/info", (_req, res, ctx) =>
      res(
        ctx.json({
          inventoryValueCurrency: "Node -> Canary",
        })
      )
    )
  );

  await page.goto(`http://localhost:${port}`);

  const button = await page.innerText("button");

  expect(button).toBe("Load data");

  await page.getByRole("button").click();

  const data = await page.innerText("pre");

  expect(data).toBe("Node -> Canary");
});
