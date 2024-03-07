import { FC } from "react";
import { ChatToPotato } from "../icons";

const CHTHero: FC = () => {
  return (
    <section>
      <div className="maincontainer">
        <div className="my-2 flex  lg:my-[50px]  lg:px-0 px-4 justify-between ">
          <ChatToPotato key={Math.random().toFixed(3)} width={40} />
          <div className="font-bold text-center text-[#fea130] text-h4">2023{" "}</div>
        </div>
        <div className='mt-4 flex flex-col md:flex-row md:justify-center md:space-y-0 md:space-x-4 lg:space-x-0  items-center'>
          <img src="images/chattopotato/Chattopotatologo.png" alt="Chattopotatologo" />
        </div>
        <div className="my-2 flex  lg:my-[50px]  justify-between lg:px-0 px-4  ">
          <div>
            <div className="font-bold text-[#fea130] text-h4 ">Our Role</div>
            <div className="font-bold  text-[#629fe3] text-h4">Development{" "}</div>
          </div>
          <div>
            <div className="font-bold text-[#fea130] text-h4 md:text-right">Project</div>
            <div className="font-bold  text-[#629fe3]	black text-h4">Chat to a Potato{" "}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CHTHero;
