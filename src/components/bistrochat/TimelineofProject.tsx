import { FC } from "react";
import {
    colors,
    timeperiod
} from "../../constant/data";


const TimelineofProject: FC = () => {
    return (
        <section className="p-8">
            <div className="maincontainer">
                <div className="font-bold text-[#4e0d53] text-h2 text-center lg:text-left">Timeline of Project</div>
                <div className="sm:flex justify-center mt-10 hidden">
                    <img src="images/bistrochat/timeperiod.jpg" alt="Chattopotatologo" />
                </div>
                <div className="flex items-center flex-col gap-y-4 mt-10 sm:hidden">
                    {timeperiod.map((text: string, index: number) => <div key={index.toString()} className={`font-bold text-white text-center min-w-[50%] p-4  rounded-lg text-h4`} style={{ backgroundColor: colors[index] }}>{text}</div>)}
                </div>
            </div>
        </section>
    );
};

export default TimelineofProject;
