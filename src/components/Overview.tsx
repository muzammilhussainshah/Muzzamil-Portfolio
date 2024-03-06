import { FC } from "react";


const OverView: FC = () => {
    return (
        <div className="relative h-ful overflow-hidden">
            <div className="lg:px-72">
                <div className="font-bold text-[#eb5553]  text-h3 lg:text-h2 " id="projects">Overview</div>
                <div className="font-medium mt-4 text-h3 lg:text-h4 " id="projects">
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
            <div className="flex justify-end lg:-mr-10 mt-10">
                <img src="images/chattopotato/OverView.png" className="w-1/2" alt="Chattopotatologo" />
            </div>
            <div className="lg:space-y-16 mt-6">
                <div className="lg:px-72 flex flex-row lg:gap-x-20">
                    <div className="font-bold text-[#eb5553]  text-h3" id="projects">Problem</div>
                    <div className="font-medium text- lg:text-h4 lg:mt-2 text-paraColor md:text-paraGraphMedium">The diverse job market lacked a user-friendly platform for efficient connections between those needing assistance and those with the right skills. Burj aims to simplify this process.</div>
                </div>
                <div className="lg:px-72 flex flex-row lg:gap-x-20">
                    <div className="font-bold text-[#eb5553]  text-h3" id="projects">Solution</div>
                    <div className="font-medium text-h3 lg:text-h4 lg:mt-2 text-paraColor md:text-paraGraphMedium">The diverse job market lacked a user-friendly platform for efficient connections between those needing assistance and those with the right skills. Burj aims to simplify this process.</div>
                </div>
            </div>
        </div>
    );
};

export default OverView;
