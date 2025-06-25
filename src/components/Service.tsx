import { FC } from "react";

interface ServiceProps {
  category: string;
  description: string;
}

const Service: FC<ServiceProps> = ({ category, description }) => {
  return (
    <div  data-aos="fade-up" className="bg-[#252537] p-7 rounded-md">
      <div className="text-[#FFFFFF] mt-5 mb-2 text-center text-h3 lg:mt-1 lg:mb-2 lg:my-4  md:text-left">{category}</div>
      <div className="font-medium text-justify text-[#E5E5E5] mb-4 lg:mb-2">{description}</div>
    </div>
  );
};

export default Service;
