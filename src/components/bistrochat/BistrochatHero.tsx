import { FC } from "react";
import { Bistrochat } from "../../icons";

const BistrochatHero: FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] m-auto py-4">
        <div className="flex   lg:px-0 px-4 justify-between ">
          <Bistrochat width={50} className="rounded-lg" />
          <div className="font-bold text-center text-[#4e0d53] text-h4">2023{" "}</div>
        </div>
        <div className='mt-4 flex flex-col md:flex-row md:justify-center md:space-y-0 md:space-x-4 lg:space-x-0  items-center'>
          <img src="images/bistrochat/hero.png" alt="Bistrochat" />
        </div>
        <div className="mt-[50px] flex flex-col md:flex-row  lg:justify-between md:justify-center md:gap-x-5 lg:gap-x-0  lg:px-0 px-4  ">
          <div className="">
            <div className="font-bold text-black text-h4 text-center lg:text-left">Our Role</div>
            <div className="font-bold  text-[#4e0d53] text-center md:text-left text-h4">Development{" "}</div>
          </div>
          <div className="">
            <div className="font-bold text-black text-h4 text-center lg:text-right">Project</div>
            <div className="font-bold  text-[#4e0d53] text-center md:text-right	black text-h4">Bistrochat{" "}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BistrochatHero;
