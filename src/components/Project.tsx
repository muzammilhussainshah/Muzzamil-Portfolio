import Link from "next/link";
import { FC } from "react";

interface ProjectProps {
  title: string;
  images: Array<string>;
  description: string;
  role: string;
  type: string;
  id: string;
  skills: Array<any>;
  icon: any;
  path: string;
}

const Project: FC<ProjectProps> = ({ title, images, description, type, role, skills, icon, path, id }) => {
  return (
    <div className="my-5 lg:flex lg:flex-row-reverse lg:my-[50px] lg:justify-around" id={id}>
      <div className="mb-4 lg:max-w-lg ">
        <div data-aos="zoom-in-right" className="mb-4 text-center text-h3 lg:hidden">{title}</div>
        <div data-aos="zoom-in-right" className="mb-4 flex justify-center lg:hidden">{icon}</div>
        <div
          className={` mt-11 flex flex-col gap-y-4 md:gap-y-0 md:flex-row  lg:flex-${type === "Mobile App" ? "row" : "col"
            } md:justify-center md:space-y-0 md:space-x-4 lg:space-x-0 lg:space-y-${type === "Mobile App" ? "0" : "4"} items-center space-y-${type === "Mobile App" ? "0" : "4"
            }`}
        >
          {images.map((image, idx) => {
            return <img key={idx} src={image} alt={title} className={`w-[300px] lg:w-[${type === "Mobile App" ? "200" : "400"}px]`} height="auto" />;
          })}
        </div>
        <div data-aos="fade-up-left" className="flex justify-center my-10">
          <Link
            target="_blank"
            href={path}
          >
            <a href="" className=" py-3 lg:py-5 text-white transition duration-300 ease-in-out delay-150 rounded-lg cursor-pointer px-7
             bg-primary hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">View case study</a>
          </Link>
        </div>
      </div>

      <div className="lg:max-w-lg md:mx-1 lg:mx-0">
        <div className="hidden mb-2 lg:flex text-h2" data-aos="fade-right">{title}</div>
        <div className="hidden mb-2 lg:flex text-h2" data-aos="fade-right">{icon}</div>
        <div data-aos="fade-right" className="mb-4 px-2 sm:px-0   text-center lg:text-justify text-paraColor md:text-paraGraphMedium lg:text-start lg:tracking-wide lg:w-4/5 xl:w-full">{description}</div>
        <div className="grid grid-cols-2 mb-5  place-items-center lg:place-items-start">
          <div data-aos="fade-right" className="font-semibold mb-2">Type</div>
          <div data-aos="fade-right" className="font-semibold mb-2">Tech Stack</div>
          <div data-aos="fade-right">{type}</div>
          <div data-aos="fade-right">{role}</div>
        </div>

        <div className="font-semibold mb-3 place-items-center text-center lg:text-left">Skills</div>
        <div className="grid grid-cols-5 gap-4 place-items-center lg:place-items-start">
          {skills.map((skill, idx) => {
            return <div data-aos="flip-left" key={idx}>{skill}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
