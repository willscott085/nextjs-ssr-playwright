import httpProxy from "http-proxy";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const proxy = httpProxy.createProxy();

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default async function handler(request, response) {
  request.url = request.url?.replace("/api/gateway", "");

  return new Promise((resolve, reject) => {
    proxy
      .once("proxyRes", resolve)
      .once("error", reject)
      .web(request, response, {
        changeOrigin: true,
        target: API_URL,
      });
  });
}
