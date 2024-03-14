import { FC } from "react";

const Authentication: FC = () => {
  return (
    <section>
      <div className="maincontainer">
        <div className="flex flex-col gap-y-6 items-center lg:items-start">
          <div className="font-poppins font-bold lg:body1 text-white py-2 w-[10rem] rounded-[1.2rem] bg-[#fea130] text-center">Authentication</div>
          <div className="font-bold  text-head text-center text-h3 md:text-h2 lg:text-left">Sign Up & Login</div>
          <div className="font-poppins font-semibold text-center text-li lg:text-left">Detailed wireframes incorporate the final design elements, ensuring a visually appealing and functional user interface.</div>
        </div>
        <div className="w-full lg:flex justify-between  my-7">
          <div className="lg:w-[49%] w-full p-2 lg:my-0 my-4 shadow-2xl bg-[#5e95e0] rounded-lg">
            <img
              style={{ aspectRatio: '5/3' }} src="images/chattopotato/signUp.JPG" alt="Chattopotatologo" />
          </div >
          <div className="lg:w-[49%] w-full p-2  shadow-2xl  bg-[#5e95e0] rounded-lg">
            <img src="images/chattopotato/login.JPG"
              style={{ aspectRatio: '5/3' }}
              alt="Chattopotatologo" />
          </div>
        </div>
      </div>
      <div className="my-28 relative">
        <div className="maincontainer lg:flex">
          <div className="lg:w-1/2 flex flex-col gap-y-3 justify-center items-center lg:items-start">
            <div className="font-poppins font-bold lg:body1 text-head py-2 w-[10rem] rounded-lg text-white bg-[#fea130] text-center">Popular Tools</div>
            <div className="font-bold  text-head text-[#fea130] text-center text-h3  lg:text-left">Find Help from Real People on This App</div>
            <div className="font-poppins font-semibold text-center text-li lg:text-left">There are many people available on this app to give you advice on various issues you might be facing, whether it&apos;s family problems, divorce, anxiety, career issues, or anything else bothering you.</div>
          </div>
          <div className="lg:w-1/2 my-8 flex justify-end ">
            <div className="w-[97%] p-2 shadow-2xl bg-[#5e95e0] rounded-lg">
              <img src="images/chattopotato/helperslist.jpg"
                style={{ aspectRatio: '5/3' }}
                alt="Chattopotatologo" />
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-0 ">
          <img src="images/chattopotato/rigthArrow.jpg" className="hidden xl:block w-[6rem]" alt="" />
        </div>
      </div>
      <div className="my-28 relative">
        <div className="maincontainer flex flex-col-reverse lg:flex-row ">
          <div className="lg:w-1/2 w-full my-8 flex justify-end ">
            <div className="w-[97%] p-2 shadow-2xl bg-[#5e95e0] rounded-lg">
              <img src="images/chattopotato/chatShedule.jpg"
                style={{ aspectRatio: '5/3' }}
                alt="Chattopotatologo" />
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex justify-end items-center">
            <div className="lg:w-[90%] w-full flex flex-col gap-y-3 items-center lg:items-start">
              <div className="font-poppins font-bold lg:body1 text-head py-2 w-[10rem] rounded-lg bg-[#fea130] text-white text-center">Popular Tools</div>
              <div className="font-bold text-[#fea130] text-h3 text-center lg:text-left">Scheduling with Chat to Potato</div>
              <div className="font-poppins font-semibold text-li text-center lg:text-left">At Chat to Potato, we ensure your privacy while scheduling. Your identity remains confidential, providing peace of mind.</div>
            </div>
          </div>
        </div>
        <div className="absolute top-20 left-0 ">
          <img src="images/chattopotato/leftArrow.jpg" className="hidden xl:block w-[6rem]" alt="" />
        </div>
      </div>
      <div className="maincontainer lg:flex my-28 ">
        <div className="lg:w-1/2 w-full flex relative flex-col gap-y-3 justify-center items-center lg:items-start">
          <div className="absolute top-0 right-0 ">
            <img src="images/chattopotato/centerArrow.jpg" className="hidden xl:block w-[6rem]" alt="" />
          </div>
          <div className="font-poppins font-bold lg:body1 text-head py-2 w-[10rem] rounded-lg text-white bg-[#fea130] text-center">Popular Tools</div>
          <div className="font-bold  text-head text-[#fea130] text-center text-h3  lg:text-left">Anonymous Chat: Share Thoughts, Get Advice</div>
          <div className="font-poppins font-semibold text-center text-li lg:text-left">Want to talk without revealing your identity? Our anonymous chat lets you do just that. Share freely, get advice, all while staying private. Start chatting now!</div>
        </div>
        <div className="lg:w-1/2 my-8 w-full flex justify-end ">
          <div className="w-[97%] p-2 shadow-2xl bg-[#5e95e0] rounded-lg">
            <img src="images/chattopotato/chatpage.jpg"
              style={{ aspectRatio: '5/3' }}
              alt="Chattopotatologo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authentication;
