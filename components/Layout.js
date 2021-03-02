import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>title</title>
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />
      <div> {children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
