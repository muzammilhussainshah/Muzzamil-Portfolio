import { FC } from "react";
import { Figma, React, Nodejs, Monogdb } from "../../icons";

const FinalDeliverable: FC = () => {
  return (
    <section style={{ background: 'linear-gradient(135deg, #370E3D 0%, #7C0E80 100%)' }}
      className="relative overflow-hidden p-8">
      <div className="max-w-[1440px] m-auto">
        <div className="wrapper lg:flex items-center">
          <div className="lg:w-[65%] h-[70vh] px-2 flex flex-col justify-evenly lg:pl-[15px]">
            <div className='lg:text-left lg:block flex flex-col items-center'>
              <div className="font-jakarta font-extrabold text-white  text-h3 lg:text-left text-center">Bistrochat Final Deliverable</div>
              <div className="font-poppins font-semibold text-h4 mt-6 text-white lg:w-[70%] lg:text-left text-center">The end result is a fully functional mobile app with a user-centric design, Bistrochat app allows users to make online bookings and view all available restaurants.</div>
            </div>
            <div className="flex my-6 sm:my-0 justify-evenly md:justify-center lg:justify-start gap-x-4">
              <button>
                <a href="https://apps.apple.com/us/app/bistrochat-hong-kong/id1097314607">
                  <img src="images/bistrochat/appstore.png" alt="Google" />
                </a>
              </button>
              <button>
                <a href="https://play.google.com/store/apps/details?id=com.bistrochat.bistrochatclient&hl=en&gl=US">
                  <img src="images/bistrochat/googleplay.png" alt="Google" />
                </a>
              </button>
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