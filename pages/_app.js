import "../styles/globals.css";
import Layout from "../Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function MyApp({ Component, pageProps }) {
  const client = new QueryClient();
  if (typeof Component.exclude === "undefined") {
    return (
      <QueryClientProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    );
  } else {
    return <Component {...pageProps} />;
  }
}

export default MyApp;
