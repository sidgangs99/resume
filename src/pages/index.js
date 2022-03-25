import * as React from "react";

import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "./layout";

const IndexPage = () => {
  return (
    <>
      <div className="sticky top-0 h-10 w-full flex items-center justify-around bg-zinc-800 text-zinc-400">
        <Header />
      </div>
      <div className="snap-mandatory snap-y overflow-scroll h-screen bg-custom-color-300">
        <Layout />
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
