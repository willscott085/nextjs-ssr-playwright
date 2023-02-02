import { test, expect } from "./playwrightEnd2EndTest";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_BASE_URL;

test.only("no mocks, real call to Canary", async ({ page, port }) => {
  await page.goto(`http://localhost:${port}`);

  const button = await page.innerText("button");

  expect(button).toBe("Load data");

  await page.getByRole("button").click();

  const data = await page.innerText("pre");

  expect(data).toBe(
    "This call was mocked in the app by intercepting the call between node and Canary"
  );
});

test("server-to-server mocks", async ({
  page,
  port,
  requestInterceptor,
  rest,
}) => {
  // requestInterceptor.use(
  //   rest.get(`${API_DOMAIN}/info`, (req, res, ctx) =>
  //     res(
  //       ctx.json({
  //         inventoryValueCurrency:
  //           "This call was mocked in a test by intercepting the call between node and Canary",
  //       })
  //     )
  //   )
  // );

  await page.goto(`http://localhost:${port}`);

  const button = await page.innerText("button");

  expect(button).toBe("Load data");

  await page.getByRole("button").click();

  const data = await page.innerText("pre");

  expect(data).toBe(
    "This call was mocked in the app by intercepting the call between node and Canary"
  );
});
