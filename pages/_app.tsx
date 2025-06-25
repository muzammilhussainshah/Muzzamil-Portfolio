import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/navbar";
import { MenuContextProvider } from "../src/context/displayMenu.context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      duration: 800, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Timing function for the animation
      once: true // Only animate elements once
    });
  }, []);
  return (
    <MenuContextProvider>
      <Navbar />
      <div className="overflow-hidden bg-[#1E1E2F]">
        <Component {...pageProps} />
      </div>

      <Footer />
    </MenuContextProvider>
  );
}

export default MyApp;
