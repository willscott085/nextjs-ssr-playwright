import { rest } from "msw";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_BASE_URL;

export const handlers = [
  // rest.get("*/api/gateway/info", (_req, res, ctx) =>
  //   res(
  //     ctx.json({
  //       inventoryValueCurrency: "Browser -> Node",
  //     })
  //   )
  // ),
  rest.get("https://api.qogita.com/info/", (_req, res, ctx) =>
    res(
      ctx.json({
        inventoryValueCurrency: "Node -> Canary",
      })
    )
  ),
];
