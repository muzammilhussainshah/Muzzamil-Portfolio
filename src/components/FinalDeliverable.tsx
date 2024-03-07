import { FC } from "react";
import { Figma, React, Nodejs, Monogdb } from "../icons";

const FinalDeliverable: FC = () => {
  return (
    <section className="bg-[#5e96e1] h-[80vh] relative overflow-hidden">
      <div className="maincontainer">
        <div className="w-[65%] h-[60vh] flex flex-col justify-around">
          <div>
            <div className="font-jakarta font-extrabold text-[#f7a746fa]  text-h4 lg:text-h2">Chat To Potato Final Deliverable</div>
            <div className="font-poppins font-semibold lg:text-h4 mt-6 text-white md:text-paraGraphMedium">The end result is a fully functional mobile app with a user-centric design, providing a seamless experience for both advertisers and helpers in the job marketplace.</div>
            <div className="lg:body1 text-white py-2 w-[22rem] rounded-[1.5rem] bg-[#2d486b5e] text-center mt-4">Visit live at www.chattoapotato.com</div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="font-poppins font-semibold lg:text-h4 mt-6 text-white md:text-paraGraphMedium">Design & Development Stack</div>
            <div className="flex gap-x-2 items-center">
              <div className="bg-[#2d486b5e] py-2 px-3 flex justify-center rounded-full">
                <Figma width={30} />
              </div>
              <div className="bg-[#2d486b5e] p-3 rounded-full">
                <img src="images/chattopotato/AdobePhotoShop.png" className="w-[2rem] h-[2rem]" alt="Chattopotatologo" />
              </div>
              <div className="bg-[#2d486b5e] p-3 rounded-full">
                <img src="images/chattopotato/adobPhotoshop.png" className="w-[2rem] h-[2rem]" alt="Chattopotatologo" />
              </div>
              <div className="font-poppins font-semibold lg:text-h4  text-white md:text-paraGraphMedium">{" "}for Design</div>
            </div>
            <div className="flex  gap-x-2 items-center">
              <div className="bg-[#2d486b5e]  p-3 flex justify-center rounded-full">
                <React width={30} />
              </div>
              <div className="bg-[#2d486b5e]  p-3 flex justify-center rounded-full">
                <Nodejs width={30} />
              </div>
              <div className="bg-[#2d486b5e]  p-3 flex justify-center rounded-full">
                <Monogdb width={30} />
              </div>
              <div className="font-poppins font-semibold lg:text-h4 text-white md:text-paraGraphMedium">{" "}for Development</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-40 -right-14">
        <img src="images/chattopotato/OverView.png" alt="Chattopotatologo" />
      </div>
    </section>
  );
};

export default FinalDeliverable;
