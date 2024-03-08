import { FC } from "react";
import { ChatToPotato } from "../icons";

const CHTHero: FC = () => {
  return (
    <div className="w-full bg-[#6697e0]">
      <div className="max-w-[1440px] m-auto">
        <div className="my-2 flex  lg:my-[50px]  lg:px-0 px-4 justify-between ">
          <ChatToPotato width={40} />
          <div className="font-bold text-center text-[#fea130] text-h4">2023{" "}</div>
        </div>
        <div className='mt-4 flex flex-col md:flex-row md:justify-center md:space-y-0 md:space-x-4 lg:space-x-0  items-center'>
          <img src="images/chattopotato/Chattopotatologo.png" alt="Chattopotatologo" />
        </div>
        <div className="mt-[50px] flex flex-col md:flex-row  lg:justify-between md:justify-center md:gap-x-5 lg:gap-x-0  lg:px-0 px-4  ">
          <div className="">
            <div className="font-bold text-[#fea130] text-h4 text-center lg:text-left">Our Role</div>
            <div className="font-bold  text-white text-center md:text-left text-h4">Development{" "}</div>
          </div>
          <div className="">
            <div className="font-bold text-[#fea130] text-h4 text-center lg:text-right">Project</div>
            <div className="font-bold  text-white text-center md:text-right	black text-h4">Chat to a Potato{" "}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CHTHero;
