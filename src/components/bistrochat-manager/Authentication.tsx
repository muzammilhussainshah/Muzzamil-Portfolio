import { FC } from "react";

const Authentication: FC = () => {
  return (
    <section>
      <div className="maincontainer">
        <div className="flex flex-col gap-y-6 items-center lg:items-start">
          <div className="font-poppins font-bold lg:body1 text-white py-2 w-[10rem] rounded-[1.2rem] bg-[#2e3a59] text-center">Authentication</div>
          <div className="font-bold  text-head text-center text-[#2e3a59] text-h3 md:text-h2 lg:text-left">Sign Up & Login</div>
          <div className="font-poppins font-semibold text-center text-li lg:text-left">Detailed wireframes incorporate the final design elements, ensuring a visually appealing and functional user interface.</div>
        </div>
        <div className="w-full lg:flex sm:h-[100vh] lg:h-[50vh] justify-between  my-7">
          <div className="lg:w-[49%] h-[50%] lg:h-full flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 justify-evenly  w-full lg:my-0 my-4 p-4 rounded-lg bg-[#f5f5f5]">
            <img
              className="rounded-lg"
              src="images/bistrochatManager/homescreen.jpg" alt="Chattopotatologo" />
            <img src="images/bistrochatManager/Signup.jpg"
              className="rounded-lg"
              alt="Chattopotatologo" />
          </div >
          <div className="lg:w-[49%] h-[50%] lg:h-full flex flex-col sm:flex-row justify-evenly gap-y-2 sm:gap-y-0  w-full lg:my-0 my-4 p-4 rounded-lg bg-[#f5f5f5]">
            <img src="images/bistrochatManager/Login.jpg"
              className="rounded-lg"
              alt="Chattopotatologo" />
            <img
              className="rounded-lg"
              src="images/bistrochatManager/forgot.jpg" alt="Chattopotatologo" />
          </div >
        </div>
      </div>
      <div className="my-10 relative">
        <div className="maincontainer lg:flex">
          <div className="lg:w-1/2 flex flex-col gap-y-3 justify-center items-center lg:items-start">
            <div className="font-poppins font-bold lg:body1 text-white text-head py-2 w-[10rem] rounded-lg bg-[#2e3a59] text-center">Popular Tools</div>
            <div className="font-bold  text-head text-[#2e3a59] text-center text-h3  lg:text-left">Booking Workflows Managed by our Saas Platform</div>
            <div className="font-poppins font-semibold text-center text-li lg:text-left">
              Our software handles everything: sending confirmations, updates, and cancellation emails to customers regardless of how they booked. It also informs them about our loyalty program every time. Plus, if they book through our website, they'll get an automatic SMS with all the details.
              </div>
          </div>
          <div className="lg:w-1/2 my-8 flex justify-end ">
            <div className="w-[97%] p-2 rounded-lg">
              <img src="images/bistrochatmanager/ipad-restaurant-booking-workflow-automation.png"
                alt="Chattopotatologo" />
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-0 ">
          <img src="images/chattopotato/rigthArrow.jpg" className="hidden xl:block w-[6rem]" alt="" />
        </div>
      </div>
      <div className="my-10 relative">
        <div className="maincontainer flex flex-col-reverse lg:flex-row ">
          <div className="lg:w-1/2 w-full my-8 flex justify-end ">
            <div className="w-full flex justify-center p-2 rounded-lg">
              <img src="images/bistrochatmanager/Chatbot.gif"
                alt="Chattopotatologo" />
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex justify-end items-center">
            <div className="lg:w-[90%] w-full flex flex-col gap-y-3 items-center lg:items-start">
              <div className="font-poppins font-bold lg:body1 text-head py-2 w-[10rem] text-white rounded-lg bg-[#2e3a59] text-center">Popular Tools</div>
              <div className="font-bold text-[#2e3a59] text-h3 text-center lg:text-left">Booking Workflows Managed by our Saas Platform</div>
              <div className="font-poppins font-semibold text-li text-center lg:text-left">
                This system handles restaurant reservations from WhatsApp, Facebook, and Bistrochat 24/7, translating live for language differences and automatically updating booking and customer information for marketing.
              </div>
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
          <div className="font-poppins font-bold lg:body1 text-head py-2 w-[10rem] text-white rounded-lg bg-[#2e3a59] text-center">Popular Tools</div>
          <div className="font-bold  text-head text-[#2e3a59] text-center text-h3  lg:text-left">Restaurant Booking System That Makes Staff & Guests Happier</div>
          <div className="font-poppins font-semibold text-center text-li lg:text-left">
            Bistrochat TMS automates reservation confirmations, reminders, table allocation, POS order integration, "thank you" emails, and feedback requests, letting you focus on building connections and providing exceptional hospitality.
          </div>
        </div>
        <div className="lg:w-1/2 my-8 w-full flex justify-end">
          <div className="w-[97%] p-2 rounded-lg">
            <img src="images/bistrochatmanager/restaurant-booking-TMS-workflow.png"
              alt="Chattopotatologo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authentication;
