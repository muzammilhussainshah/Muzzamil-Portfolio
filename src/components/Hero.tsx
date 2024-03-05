import { FC, useMemo } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";

const Hero: FC = () => {
  const services = useMemo(() => ["Web", "Android", "iOS", "Cross Platform"], []);

  return (
    <div className=" py-12 lg:flex lg:flex-row-reverse lg:px-16 lg:py-36 lg:justify-between lg:items-center" id="home">
      <div className="flex justify-center lg:w-3/5 ">
        <img
          src="/images/portfolio-main1.png"
          alt="Picture of the author"
          className="border-2 rounded-lg border-primary w-[250px] lg:mb-28  lg:w-[390px] mb-8"
        />
      </div>

      <div>
        <div className=" lg:text-h2 mb-8 font-semibold text-center text-h3 lg:text-left xl:text-h1 lg:max-w-screen-lg xl:max-w-screen-xl">
          Sleek <span className="underline decoration-primary">Web</span> & <span className="underline decoration-primary">Mobile Apps</span>, from
          design to development that fit your needs.
        </div>

        <div className="grid grid-cols-2 px-7 lg:px-0 grid-rows-2 mb-8 lg:grid-rows-none lg:grid-cols-none">
          {services.map((service) => {
            return (
              <div key={service} className="flex items-center justify-center lg:justify-start">
                <BsCheckLg color="#1D53FF" className="mr-2 min-w-fit" />
                <div className="font-medium md:text-li text-[#59647B] ">{service}</div>
              </div>
            );
          })}
        </div>

        <div className="md:flex md:justify-center lg:flex-none lg:justify-start">
          <div className="flex justify-center mb-8 md:mb-0 md:mr-8">
            <a href="#" className="p-[16px] border-2 border-primary font-bold text-primary hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
              check out my work
            </a>
          </div>

          <div className="flex items-center justify-center">
            <a
              className="text-[16px] font-semibold text-[#59647B] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              href="#"
            >
              get in touch
            </a>
            <BiRightArrowAlt size={22} color="#59647B" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
