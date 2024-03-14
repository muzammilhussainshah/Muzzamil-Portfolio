import { FC } from "react";


const OverView: FC = () => {
    return (
        <section>
            <div className="maincontainer overflow-hidden">
                <div className="font-bold text-[#2e3a59] text-h2 text-center lg:text-left">Overview</div>
                <div className="font-poppins font-semibold lg:text-li mt-6 leading-8  text-center lg:text-left">
                    <p>
                        Our system gathers bookings from various platforms like Instagram, Facebook, Google Reserve, Openrice, and more. It brings together all your reservations and guest information into one easy-to-use system.
                    </p>
                    <br />
                    <p>
                        Bistrochat manager also offers useful automation such as reminders, deposit management, integration with POS systems, SMS, connecting to your emailing system, and more to ensure your guests are delighted.
                    </p>
                    <br />
                    <p>
                        And the best part? It&apos;s all available at an affordable flat fee with unlimited bookings.
                    </p>
                </div>
            </div>
            <div className="flex my-5 justify-center lg:justify-end">
                <img src="images/bistrochatManager/Home.png" className="hidden lg:block" alt="Chattopotatologo" />
                <img src="images/bistrochatManager/Home.png" className="lg:hidden" alt="Chattopotatologo" />
            </div>
            <section>
                <div className="maincontainer">
                    <div className="flex flex-col text-center gap-y-5 lg:text-left lg:flex-row  lg:gap-x-20">
                        <div className="font-bold text-[#2e3a59]  text-h3">Problem</div>
                        <div className="font-poppins font-semibold lg:text-li lg:mt-2 text-paraColor md:text-paraGraphMedium ">
                            How can I find out which tables are available and which ones are booked at a restaurant?
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col text-center gap-y-5 lg:text-left lg:flex-row  lg:gap-x-20">
                        <div className="font-bold text-[#2e3a59]  text-h3">Solution</div>
                        <div className="font-poppins font-semibold lg:text-li lg:mt-2 text-paraColor md:text-paraGraphMedium">You can book a table through this app, and it will also let you know which table you can book.</div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default OverView;
