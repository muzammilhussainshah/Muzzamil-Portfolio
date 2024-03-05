import type { AppProps } from "next/app";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/navbar";
import { MenuContextProvider } from "../src/context/displayMenu.context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuContextProvider>
      <Navbar />
      <div className="px-1">
        <Component {...pageProps} />
      </div>

      <Footer />
    </MenuContextProvider>
  );
}

export default MyApp;
