import { FC } from "react";
import { Figma, React, Nodejs, Monogdb } from "../../icons";

const FinalDeliverable: FC = () => {
  return (
    <section style={{ background: 'linear-gradient(135deg, #370E3D 0%, #7C0E80 100%)' }}
      className="relative overflow-hidden">
      <div className="max-w-[1440px] m-auto">
        <div className="wrapper lg:flex items-center">
          <div className="lg:w-[65%] h-[70vh] px-2 flex flex-col justify-evenly lg:pl-[15px]">
            <div className='lg:text-left lg:block flex flex-col items-center'>
              <div className="font-jakarta font-extrabold text-white  text-h3 lg:text-left text-center">Bistrochat Final Deliverable</div>
              <div className="font-poppins font-semibold text-h4 mt-6 text-white lg:w-[70%] lg:text-left text-center">The end result is a fully functional mobile app with a user-centric design, providing a seamless experience for both advertisers and helpers in the job marketplace.</div>
              <div className="lg:body1 text-white py-2 px-3 sm:w-[22rem] rounded-[1.5rem] bg-[#8e42945b] text-center mt-4">Visit live at www.chattoapotato.com</div>
            </div>
            <div className="flex flex-col gap-y-5 items-center lg:items-start">
              <div className="font-poppins font-semibold text-h4 mt-6 text-white">Design & Development Stack</div>
              <div className="flex  gap-x-2 flex-col-reverse items-center gap-y-3  sm:flex-row">
                <div className="flex gap-x-3">
                  <div className="bg-[#2d486b5e] py-2 px-3 flex justify-center rounded-full">
                    <Figma width={30} />
                  </div>
                  <div className="bg-[#2d486b5e] p-3 rounded-full">
                    <img src="images/chattopotato/AdobePhotoShop.png" className="w-[2rem] h-[2rem]" alt="Chattopotatologo" />
                  </div>
                  <div className="bg-[#2d486b5e] p-3 rounded-full">
                    <img src="images/chattopotato/adobPhotoshop.png" className="w-[2rem] h-[2rem]" alt="Chattopotatologo" />
                  </div>
                </div>
                <div className="font-poppins font-semibold text-h4  text-white">{" "}for Design</div>
              </div>
              <div className="flex  gap-x-2 flex-col-reverse items-center gap-y-3  sm:flex-row">
                <div className="flex gap-x-3">
                  <div className="bg-[#2d486b5e]  p-3 flex justify-center rounded-full">
                    <React width={30} />
                  </div>
                  <div className="bg-[#2d486b5e]  p-3 flex justify-center rounded-full">
                    <Nodejs width={30} />
                  </div>
                  <div className="bg-[#2d486b5e]  p-3 flex justify-center rounded-full">
                    <Monogdb width={30} />
                  </div>
                </div>
                <div className="font-poppins font-semibold text-h4 text-white">{" "}for Development</div>
              </div>
            </div>
          </div>
          <div className="lg:block lg:p-0 px-2 flex justify-center mt-8 lg:mt-0">
            <img src="images/bistrochat/hero.png" alt="Chattopotatologo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalDeliverable;