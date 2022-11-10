import "../styles/globals.css";
import Layout from "../Layout/Layout";
function MyApp({ Component, pageProps }) {
  switch (Component.name) {
    case "Home":
      return <Component {...pageProps} />;
      break;
    default:
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
      break;
  }
}

export default MyApp;
