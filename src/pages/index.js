import * as React from "react";
import Helmet from "react-helmet";
 import { QueryClient, QueryClientProvider } from 'react-query'

 import Header from '../components/header'
 import Layout from '../components/layout'
 // import Footer from "../components/footer";

 const queryClient = new QueryClient()

 const IndexPage = () => {
     return (
         <QueryClientProvider client={queryClient}>
             <div className="h-screen w-screen overflow-hidden  font-mono">
                 <Helmet>
                     <meta charSet="utf-8" />
                     <meta
                         property="og:title"
                         content="Portfolio - sidgangs99"
                     />
                     <meta
                         property="og:url"
                         content="https://sidgangs99.github.io/resume/"
                     />
                     <meta
                         property="og:image"
                         content="https://avatars.dicebear.com/api/pixel-art/Siddharth.svg"
                     />
                     <title>Portfolio - Siddharth Gangwar</title>
                     <link
                         rel="canonical"
                         href="https://sidgangs99.github.io/resume/"
                     />
                     {/* <link rel="icon" type="image/png" href="" sizes="16x16" /> */}
                 </Helmet>
                 <div className="sticky top-0 z-50 flex h-10 w-screen items-center justify-around bg-zinc-800 text-zinc-400">
                     <Header />
                 </div>
                 <div className="bg-custom-color-300 h-screen snap-y snap-mandatory overflow-scroll">
                     <Layout />
                 </div>
                 {/* <Footer /> */}
             </div>
         </QueryClientProvider>
     )
 }

export default IndexPage;
