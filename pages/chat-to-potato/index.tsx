import { FC} from "react";


import { React } from "../../src/icons";
import OverView from "../../src/components/chattopotato/Overview";

import TimelineofProject from "../../src/components/chattopotato/TimelineofProject";
import BrandIdentity from "../../src/components/chattopotato/BrandIdentity";
import CHTHero from "../../src/components/chattopotato/CHTHero";
import Sketching from "../../src/components/chattopotato/Sketching";
import Authentication from "../../src/components/chattopotato/Authentication";
import FinalDeliverable from "../../src/components/chattopotato/FinalDeliverable";




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
