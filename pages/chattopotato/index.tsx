import { FC} from "react";


import { React } from "../../src/icons";
import OverView from "../../src/components/Overview";

import TimelineofProject from "../../src/components/TimelineofProject";
import BrandIdentity from "../../src/components/BrandIdentity";
import CHTHero from "../../src/components/CHTHero";
import Sketching from "../../src/components/Sketching";
import Authentication from "../../src/components/Authentication";
import FinalDeliverable from "../../src/components/FinalDeliverable";




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
      <CHTHero />
      <OverView />
      <TimelineofProject />
      <BrandIdentity />
      <Sketching />
      <Authentication />
      <FinalDeliverable />
    </div>
  );
};

export default Portfolio;
