import React, { useState, useEffect } from 'react'
import LoadingBar from "react-top-loading-bar";

import { useRouter } from "next/router";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
 
  const [progress, setProgress] = useState(0);
  const router = useRouter();
//=================for scroll buttton bottom to top==========================
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //======================================loading navbar

  useEffect(() => {
    const RouteChangeStart = () => {
      setProgress(40);
    };
    const RouteChangeComplete = () => {
      setProgress(100);
    };

//
    router.events.on("routeChangeStart", RouteChangeStart);
    router.events.on("routeChangeComplete", RouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", RouteChangeStart);
      router.events.off("routeChangeComplete", RouteChangeComplete);
    };
    
  }, []);




  
  return (
    <>
   
   
       <LoadingBar
        color="#f11946"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
    <Navbar/>
      <Component {...pageProps} />
      {showButton && (
        <button
          onClick={handleClick}
          className="fixed bottom-0 right-0 m-4 p-3 bg-sky-800 rounded-full shadow-lg hover:shadow-xl"
        >
          <ArrowUpwardIcon sx={{color:"white"}} />
        </button>
      )}
      <Footer />
    </>
  )
}
