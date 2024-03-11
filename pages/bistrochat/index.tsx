import { FC} from "react";


import { React } from "../../src/icons";
import OverView from "../../src/components/bistrochat/Overview";

import TimelineofProject from "../../src/components/bistrochat/TimelineofProject";
import BrandIdentity from "../../src/components/bistrochat/BrandIdentity";
import CHTHero from "../../src/components/bistrochat/CHTHero";
import Sketching from "../../src/components/bistrochat/Sketching";
import Authentication from "../../src/components/bistrochat/Authentication";
import FinalDeliverable from "../../src/components/bistrochat/FinalDeliverable";




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
