import { FC } from "react";

const About: FC = () => {
  return (
    <div className="my-[100px] mb-10 pr-6" id="about">
      <div className="mb-4 font-bold text-center text-h2">About Me</div>
      <div className="container text-justify text-paraColor md:text-paraGraphMedium">
        <p>
          As a software engineer with expertise in MERN stack development, I have a strong track record of building efficient and scalable web and
          mobile applications for businesses of all sizes. With experience working with a wide range of clients, I have a proven ability to deliver
          technical solutions that drive business growth and success.
        </p>

        <br />
        <br />

        <p>
          In my current role, I have helped small and medium businesses optimize their processes and scale their operations through the implementation
          of custom software solutions. My passion for technology and problem-solving drives me to stay up-to-date on the latest industry trends and
          techniques, ensuring that my clients always receive the best possible service.
        </p>

        <br />
        <br />

        <p>
          If you&rsquo;re in need of a new web application, a mobile app, or simply looking to improve your current software infrastructure, I am
          ready to provide you with the expertise and guidance you need to succeed. I am confident that my skills and experience make me a strong
          candidate for your next project and I look forward to the opportunity to work with you.
        </p>
      </div>
    </div>
  );
};

export default About;
