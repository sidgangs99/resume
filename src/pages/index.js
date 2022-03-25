import * as React from "react";

import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "./layout";

const IndexPage = () => {
  return (
    <>
      <Header />
      <div className="snap-mandatory snap-y overflow-scroll h-screen w-screen">
        <Layout />
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
