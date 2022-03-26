import * as React from "react";

import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <div className="font-mono">
      <div className="sticky top-0 h-10 w-full flex items-center justify-around bg-zinc-800 text-zinc-400 z-50">
        <Header />
      </div>
      <div className="snap-mandatory snap-y overflow-scroll h-screen bg-custom-color-300">
        <Layout />
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
