import { FC} from "react";


import { React } from "../../src/icons";
import OverView from "../../src/components/bistrochat/Overview";
import TimelineofProject from "../../src/components/bistrochat/TimelineofProject";
import BrandIdentity from "../../src/components/bistrochat/BrandIdentity";
import Sketching from "../../src/components/bistrochat/Sketching";
import FinalDeliverable from "../../src/components/bistrochat/FinalDeliverable";
import BistrochatHero from "../../src/components/bistrochat/BistrochatHero";
import ScreenShots from "../../src/components/bistrochat/ScreenShots";




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
      <BistrochatHero />
      <OverView />
      <TimelineofProject />
      <BrandIdentity />
      <Sketching />
      <ScreenShots />
      <FinalDeliverable />
    </div>
  );
};

export default Portfolio;
