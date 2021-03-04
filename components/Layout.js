import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>title</title>
      </Head>
      <Nav />
      <div> {children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
