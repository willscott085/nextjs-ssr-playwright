import httpProxy from "http-proxy";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_BASE_URL;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(request, response) {
  request.url = request.url?.replace("/api/gateway", "");

  const proxy = httpProxy.createProxy();

  return new Promise((resolve, reject) => {
    proxy
      .once("proxyRes", resolve)
      .once("error", reject)
      .web(request, response, {
        changeOrigin: true,
        target: API_DOMAIN,
        onProxyReq: function (request) {
          request.setHeader("origin", API_DOMAIN);
        },
      });
  });
}
