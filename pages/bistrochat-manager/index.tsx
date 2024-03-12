import { FC } from "react";


import { React } from "../../src/icons";
import OverView from "../../src/components/bistrochat-manager/Overview";

import TimelineofProject from "../../src/components/bistrochat-manager/TimelineofProject";
import BrandIdentity from "../../src/components/bistrochat-manager/BrandIdentity";
import Sketching from "../../src/components/bistrochat-manager/Sketching";
import Authentication from "../../src/components/bistrochat-manager/Authentication";
import FinalDeliverable from "../../src/components/bistrochat-manager/FinalDeliverable";
import BMHero from "../../src/components/bistrochat-manager/CHTHero";
import HighFidelityWireframes from "../../src/components/bistrochat-manager/HighFidelityWireframes";




const Portfolio: FC = () => {
  const styling = {
    backgroundImage: `url('images/Background.png')`,
    width: "100%",
    height: "100%",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  return (
    <div style={styling}>
      <BMHero />
      <OverView />
      <TimelineofProject />
      <BrandIdentity />
      <Sketching />
      <HighFidelityWireframes />
      <Authentication />
      <FinalDeliverable />
    </div>
  );
};

export default Portfolio;
