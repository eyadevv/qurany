import "../styles/globals.css";
import Layout from "../Layout/Layout";
function MyApp({ Component, pageProps }) {
  if (typeof Component.exclude === "undefined") {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  } else {
    return <Component {...pageProps} />;
  }
}

export default MyApp;
