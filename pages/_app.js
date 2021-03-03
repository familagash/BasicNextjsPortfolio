import Layout from "../components/Layout";
import "../sass/main.scss";
import "../styles/base.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
