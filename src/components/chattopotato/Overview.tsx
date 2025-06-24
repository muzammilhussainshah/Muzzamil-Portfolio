import { FC } from "react";


const OverView: FC = () => {
    return (
        <section className="p-8">
            <div className="maincontainer overflow-hidden">
                <div className="font-bold text-[#fea130] text-h2 text-center lg:text-left">Overview</div>
                <div className="font-poppins font-semibold lg:text-li mt-6 leading-8  text-center lg:text-left">
                    <p className="text-[16px]">
                        There is proof that expressing your feelings through writing can make you feel better both physically and mentally. When you keep painful secrets inside, it can make you feel stressed and more likely to get sick. Sharing your feelings, whether by talking or writing, can help reduce this stress and improve your health in the long run. Connecting with someone and discussing your problems can help you let go of emotional pain and see things from a clearer perspective.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        There are many online therapy apps, but Chat to a Potato is unique. We&apos;re dedicated to problem-solving. When personal issues arise, not everyone wants traditional therapy. Some just need someone to offer advice and perspective. That&apos;s where we come in.
                    </p>
                    <br />
                    <p className="text-[16px]">
                        The technical backbone of Chat To Potato utilizes React Native, React.js | Next.js, Nest.js, MySQL, and Square, scalable, and secure platform for an optimal learning experience.
                    </p>
                </div>
            </div>
            <div className="flex my-5 justify-center lg:justify-end">
                <img src="images/chattopotato/OverView.png" className="hidden lg:block" alt="Chattopotatologo" />
                <img src="images/chattopotato/image1.png" className="lg:hidden" alt="Chattopotatologo" />
            </div>
            <section>
                <div className="maincontainer">
                    <div className="flex flex-col text-center gap-y-5 lg:text-left lg:flex-row  lg:gap-x-20">
                        <div className="font-bold text-[#fea130]  text-h3">Problem</div>
                        <div className="font-poppins font-semibold lg:text-li lg:mt-2 text-paraColor md:text-paraGraphMedium lg:text-[16px]">
                            Are you divorced or have you broken up? Are you feeling restless? Do you have problems at home or issues in your life?
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col text-center gap-y-5 lg:text-left lg:flex-row  lg:gap-x-20">
                        <div className="font-bold text-[#fea130]  text-h3">Solution</div>
                        <div className="font-poppins font-semibold lg:text-li lg:mt-2 text-paraColor md:text-paraGraphMedium lg:text-[16px]">I&apos;m here to help with any problems you may have.</div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default OverView;
