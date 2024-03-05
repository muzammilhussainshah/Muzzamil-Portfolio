import { FC } from "react";
import About from "../src/components/About";
import Hero from "../src/components/Hero";
import Portfolio from "../src/components/Portfolio";
import Quote from "../src/components/Quote";
import Services from "../src/components/Services";
import Skills from "../src/components/Skills";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Quote />
      <About />
      <Services />
      <Skills />
      <Portfolio />
    </>
  );
};
export default Home;
