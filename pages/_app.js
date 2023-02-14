const isServer = typeof window === "undefined";
const isMockingEnabled = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";

export const requestInterceptor =
  isMockingEnabled && isServer
    ? (async function () {
        const { setupServer } = await import("msw/node");
        const { handlers } = await import("../tests/handlers");
        const server = setupServer(...handlers);

        server.listen({
          onUnhandledRequest: "warn",
        });

        return server;
      })()
    : undefined;

if (isMockingEnabled && !isServer) {
  async function initWorker() {
    const { worker } = await import("../tests/worker");
    worker.start();
  }
  initWorker();
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
