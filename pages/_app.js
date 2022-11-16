import "../styles/globals.css";
import Layout from "../Layout/Layout";
function MyApp({ Component, pageProps }) {
  switch (Component.name) {
    case "Home":
      return <Component {...pageProps} />;
    default:
      return (
        <Layout>
          <Component {...pageProps} />
          {console.log(Component.name)}
        </Layout>
      );
  }
}

export default MyApp;
