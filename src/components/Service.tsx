import { FC } from "react";

interface ServiceProps {
  category: string;
  description: string;
}

const Service: FC<ServiceProps> = ({ category, description }) => {
  return (
    <div>
      <div className=" mt-5 mb-2 text-center text-h3 lg:mt-1 lg:mb-2 lg:my-4  md:text-left">{category}</div>
      <div className="font-medium text-justify text-[#59647B] mb-4 lg:mb-2">{description}</div>
    </div>
  );
};

export default Service;
