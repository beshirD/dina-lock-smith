import PropTypes from "prop-types";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const SharedLayout = ({ children, title, className = "" }) => {
  const titleText = `DLS | ${title}`;
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>{titleText}</title>
      </Head>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default SharedLayout;
