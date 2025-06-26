import { FC } from "react";
import { ChatToPotato } from "../../icons";

const Sketching: FC = () => {
  return (
    <section className="p-8 bg-[#0D1117]">
      <div className="maincontainer text-[#FFFF]">
        <div >
          <div className="font-bold text-[#E5E5E5]  text-center lg:text-left text-h2">Sketching</div>
          <div className="font-poppins font-semibold  text-center lg:text-left text-li mt-6">Initial sketches focus on creating an intuitive interface prioritizing efficient learning and user convenience.</div>
        </div>
        <div className="flex  justify-center my-10">
          <img src="images/bistrochat/sketching.jpg" className="w-full" alt="Chattopotatologo" />
        </div>
      </div>
    </section>
  );
};

export default Sketching;
