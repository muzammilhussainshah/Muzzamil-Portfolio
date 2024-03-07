import { FC } from "react";

const Authentication: FC = () => {
  return (
    <section>
      <div className="maincontainer">
        <div className="flex flex-col gap-y-6">
          <div className="font-poppins font-bold lg:body1 text-[#7c5c34] py-2 w-[10rem] rounded-[1.2rem] bg-[#fea1308a] text-center">Authentication</div>
          <div className="font-bold  text-head  text-h4 lg:text-h1">Sign Up & Login</div>
          <div className="font-poppins font-semibold lg:text-li text-paraColor md:text-paraGraphMedium">Detailed wireframes incorporate the final design elements, ensuring a visually appealing and functional user interface.</div>
        </div>
        <div className="w-full flex justify-between  my-7">
          <div className="w-[49%] p-2 shadow-2xl bg-[#5e95e0] rounded-lg">
            <img
              style={{ aspectRatio: '5/3' }} src="images/chattopotato/signUp.JPG" alt="Chattopotatologo" />
          </div >
          <div className="w-[49%]  p-2  shadow-2xl  bg-[#5e95e0] rounded-lg">
            <img src="images/chattopotato/login.JPG"
              style={{ aspectRatio: '5/3' }}
              alt="Chattopotatologo" />
          </div>
        </div>
      </div>
      <div className="my-28 relative">
        <div className="maincontainer flex">
          <div className="w-1/2 flex flex-col gap-y-3 justify-center">
            <div className="font-poppins font-bold lg:body1 text-head py-2 w-[10rem] rounded-lg bg-[#eb56531f] text-center">Popular Tools</div>
            <div className="font-bold text-[#eb5553] text-h4 lg:text-h3">Post a question</div>
            <div className="font-poppins font-semibold lg:text-li  text-paraColor md:text-paraGraphMedium">Detailed wireframes incorporate the final design elements, ensuring a visually appealing and functional user interface.</div>
          </div>
          <div className="w-1/2 flex justify-end ">
            <div className="w-[97%] p-2 shadow-2xl bg-[#5e95e0] rounded-lg">
              <img src="images/chattopotato/login.JPG"
                style={{ aspectRatio: '5/3' }}
                alt="Chattopotatologo" />
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-0 ">
          <img src="images/chattopotato/rigthArrow.jpg" className="w-[6rem]" alt="" />
        </div>
      </div>
      <div className="my-28 relative">
        <div className="maincontainer flex">
          <div className="w-1/2 flex justify-end ">
            <div className="w-[97%] p-2 shadow-2xl bg-[#5e95e0] rounded-lg">
              <img src="images/chattopotato/login.JPG"
                style={{ aspectRatio: '5/3' }}
                alt="Chattopotatologo" />
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-y-3 justify-center items-end">
            <div className="w-[90%]">
              <div className="font-poppins font-bold lg:body1 text-head py-2 w-[10rem] rounded-lg bg-[#eb56531f] text-center">Popular Tools</div>
              <div className="font-bold text-[#eb5553] text-h4 lg:text-h3">Post a question</div>
              <div className="font-poppins font-semibold lg:text-li  text-paraColor md:text-paraGraphMedium">Detailed wireframes incorporate the final design elements, ensuring a visually appealing and functional user interface.</div>
            </div>
          </div>
        </div>
        <div className="absolute top-20 left-0 ">
          <img src="images/chattopotato/leftArrow.jpg" className="w-[6rem]" alt="" />
        </div>
      </div>
      <div className="maincontainer flex my-28">
        <div className="w-1/2 flex relative flex-col gap-y-3 justify-center">
          <div className="absolute top-0 right-0 ">
            <img src="images/chattopotato/centerArrow.jpg" className="w-[6rem]" alt="" />
          </div>
          <div className="font-poppins font-bold lg:body1 text-head py-2 w-[10rem] rounded-lg bg-[#eb56531f] text-center">Popular Tools</div>
          <div className="font-bold text-[#eb5553] text-h4 lg:text-h3">AI Detector</div>
          <div className="font-poppins font-semibold lg:text-li  text-paraColor md:text-paraGraphMedium">Detailed wireframes incorporate the final design elements, ensuring a visually appealing and functional user interface.</div>
        </div>
        <div className="w-1/2 flex justify-end ">
          <div className="w-[97%] p-2 shadow-2xl bg-[#5e95e0] rounded-lg">
            <img src="images/chattopotato/login.JPG"
              style={{ aspectRatio: '5/3' }}
              alt="Chattopotatologo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authentication;
