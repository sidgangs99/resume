import * as React from "react";

import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <div className="font-mono">
      <div className="sticky top-0 z-50 flex h-10 w-full items-center justify-around bg-zinc-800 text-zinc-400">
        <Header />
      </div>
      <div className="bg-custom-color-300 h-screen snap-y snap-mandatory overflow-scroll">
        <Layout />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default IndexPage;
