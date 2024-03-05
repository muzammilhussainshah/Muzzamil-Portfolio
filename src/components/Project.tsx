import { FC } from "react";

interface ProjectProps {
  title: string;
  images: Array<string>;
  description: string;
  role: string;
  type: string;
  skills: Array<any>;
}

const Project: FC<ProjectProps> = ({ title, images, description, type, role, skills }) => {
  return (
    <div className="my-5 lg:flex lg:flex-row-reverse lg:my-[50px] lg:justify-around">
      <div className="mb-4 lg:max-w-lg ">
        <div className="mb-4 text-center text-h3 lg:hidden">{title}</div>
        <div
          className={` mt-11 flex flex-col md:flex-row  lg:flex-${
            type === "Mobile App" ? "row" : "col"
          } md:justify-center md:space-y-0 md:space-x-4 lg:space-x-0 lg:space-y-${type === "Mobile App" ? "0" : "4"} items-center space-y-${
            type === "Mobile App" ? "0" : "4"
          }`}
        >
          {images.map((image, idx) => {
            return <img key={idx} src={image} alt={title} className={`w-[300px] lg:w-[${type === "Mobile App" ? "200" : "400"}px]`} height="auto" />;
          })}
        </div>
      </div>

      <div className="lg:max-w-lg">
        <div className="hidden mb-2 lg:flex text-h2">{title}</div>
        <div className="mb-4 text-justify lg:w-4/5 xl:w-full">{description}</div>

        <div className="grid grid-cols-2 mb-5">
          <div className="font-semibold mb-2">Type</div>
          <div className="font-semibold mb-2">Tech Stack</div>

          <div>{type}</div>
          <div>{role}</div>
        </div>

        <div className="font-semibold text-left mb-2">Skills</div>
        <div className="grid grid-cols-3 gap-4 ">
          {skills.map((skill, idx) => {
            return <div key={idx}>{skill}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
