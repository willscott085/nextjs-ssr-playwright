import { rest } from "msw";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_BASE_URL;

export const handlers = [
  rest.get(`${API_DOMAIN}/info`, (req, res, ctx) =>
    res(
      ctx.json({
        inventoryValueCurrency:
          "This call was mocked in the app by intercepting the call between node and Canary",
      })
    )
  ),
];
