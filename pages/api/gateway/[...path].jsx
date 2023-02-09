import httpProxy from "http-proxy";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_BASE_URL;

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default async function handler(request, response) {
  // request.url = request.url?.replace("/api/gateway", "");

  const result = await fetch("https://api.qogita.com/info/").then((response) =>
    response.json()
  );

  response.json(result);

  // const proxy = httpProxy.createProxy();
  // return new Promise((resolve, reject) => {
  //   proxy
  //     .once("proxyRes", resolve)
  //     .once("error", reject)
  //     .web(request, response, {
  //       changeOrigin: true,
  //       target: API_DOMAIN,
  //       pathRewrite: {
  //         "^/api/gateway/": "",
  //       },
  //       onProxyReq: function (request) {
  //         request.setHeader("origin", API_DOMAIN);
  //       },
  //     });
  // });
}
