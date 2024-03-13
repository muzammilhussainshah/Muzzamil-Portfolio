import { FC } from "react";

const Quote: FC = () => {
  return (
    <div data-aos="zoom-out-up">
      <div className="px-1 sm:px-0 flex flex-col justify-center my-10 md:flex-row">
        <div className="italic font-medium text-h3 text-dark md:max-w-lg lg:max-w-none">
          &quot;make it work, make it right, make it fast&quot;
        </div>
        <div className="font-bold text-right text-dark text-h4 lg:ml-4">
          -Kent Beck
        </div>
      </div>

      <div className="flex justify-center my-4">
        <a
          href="#"
          className="py-5 text-white transition duration-300 ease-in-out delay-150 rounded-lg cursor-pointer px-7 bg-primary hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
        >
          view my services
        </a>
      </div>
    </div>
  );
};

export default Quote;
