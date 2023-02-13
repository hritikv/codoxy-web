import React, { useState, useEffect } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
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
  return (
    <>
    {showButton && (
        <button
          onClick={handleClick}
          className="fixed bottom-0 right-0 m-4 p-3 bg-sky-800 rounded-full shadow-lg hover:shadow-xl"
        >
          <ArrowUpwardIcon sx={{color:"white"}} />
        </button>
      )}
    <Navbar/>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
