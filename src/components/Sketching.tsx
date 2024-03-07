import { FC } from "react";
import { ChatToPotato } from "../icons";

const Sketching: FC = () => {
  return (
    <section>
      <div className="maincontainer">
        <div >
          <div className="font-bold text-[#eb5553]  text-h4 lg:text-h1">Sketching</div>
          <div className="font-poppins font-semibold lg:text-li mt-6 text-paraColor md:text-paraGraphMedium">Initial sketches focus on creating an intuitive interface prioritizing efficient learning and user convenience.</div>
        </div>
        <div className="flex  justify-center my-10">
          <img src="images/chattopotato/sketching.jpg" className="w-full" alt="Chattopotatologo" />
        </div>
      </div>
    </section>
  );
};

export default Sketching;
