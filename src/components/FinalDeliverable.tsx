import { FC } from "react";
import { Figma, React, Nodejs, Monogdb } from "../icons";

const FinalDeliverable: FC = () => {
  return (
    <section className="bg-[#5e96e1] lg:h-[80vh] relative overflow-hidden">
      <div className="max-w-[1440px] m-auto">
        <div className="wrapper lg:flex items-center">
          <div className="lg:w-[65%] h-[60vh] flex flex-col justify-around pl-[15px]">
            <div className='lg:text-left lg:block flex flex-col items-center'>
              <div className="font-jakarta font-extrabold text-[#f7a746fa]  text-h2 lg:text-left text-center">Chat To Potato Final Deliverable</div>
              <div className="font-poppins font-semibold text-h4 mt-6 text-white lg:w-[70%] lg:text-left text-center">The end result is a fully functional mobile app with a user-centric design, providing a seamless experience for both advertisers and helpers in the job marketplace.</div>
              <div className="lg:body1 text-white py-2 w-[22rem] rounded-[1.5rem] bg-[#2d486b5e] text-center mt-4">Visit live at www.chattoapotato.com</div>
            </div>
            <div className="flex flex-col gap-y-5 items-center lg:items-start">
              <div className="font-poppins font-semibold text-h4 mt-6 text-white">Design & Development Stack</div>
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
                <div className="font-poppins font-semibold text-h4  text-white">{" "}for Design</div>
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
                <div className="font-poppins font-semibold text-h4 text-white">{" "}for Development</div>
              </div>
            </div>
          </div>
          <div className="lg:block xl:hidden pl-2 lg:p-0 flex justify-end mt-8 lg:mt-0">
            <img src="images/chattopotato/OverView.png" alt="Chattopotatologo" />
          </div>
        </div>
      </div>
      <div className="hidden xl:block absolute top-40 -right-14">
        <img src="images/chattopotato/OverView.png" alt="Chattopotatologo" />
      </div>
    </section>
  );
};

export default FinalDeliverable;