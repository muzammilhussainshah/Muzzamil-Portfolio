import { FC } from "react";


const OverView: FC = () => {
    return (
        <section>
            <div className="maincontainer">
                <div className="font-bold text-[#eb5553]  text-h4 lg:text-h1">Overview</div>                
                <div className="font-poppins font-semibold lg:text-li mt-6 text-paraColor md:text-paraGraphMedium">
                    <p>
                        The client approached us with a web application called CollegeCat, expressing the desire to integrate OpenAI and ChatGPT into their educational tool aimed at making college life easier for students. The tool included features such as essay writing assistance, help with complex math problems, a chat-based layout for asking general knowledge questions, an AI-based rephrase similar to Quilbot, and an AI Detector to aid in rephrasing homework or essays.
                    </p>
                    <br />
                    <p>
                        To bring this vision to life, we conducted extensive research with the client’s team, examining competitors in the field. After gathering insights, we created designs that the client enthusiastically approved. Subsequently, we commenced the development process.
                    </p>
                    <br />
                    <p>
                        The technical backbone of College Cat utilizes React.js | Next.js, Nest.js, MySQL, and AWS ensuring a robust, scalable, and secure platform for an optimal learning experience.
                    </p>
                </div>
            </div>
            <div className="flex justify-end -mr-10">
                <img src="images/chattopotato/OverView.png" alt="Chattopotatologo" />
            </div>
            <section>
                <div className="maincontainer">
                    <div className="flex flex-row lg:gap-x-20">
                        <div className="font-bold text-[#eb5553]  text-h3">Problem</div>
                        <div className="font-poppins font-semibold lg:text-li lg:mt-2 text-paraColor md:text-paraGraphMedium">The diverse job market lacked a user-friendly platform for efficient connections between those needing assistance and those with the right skills. Burj aims to simplify this process.</div>
                    </div>
                    <div className="flex flex-row lg:gap-x-20 mt-10">
                        <div className="font-bold text-[#eb5553]  text-h3">Solution</div>
                        <div className="font-poppins font-semibold lg:text-li lg:mt-2 text-paraColor md:text-paraGraphMedium">The diverse job market lacked a user-friendly platform for efficient connections between those needing assistance and those with the right skills. Burj aims to simplify this process.</div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default OverView;
