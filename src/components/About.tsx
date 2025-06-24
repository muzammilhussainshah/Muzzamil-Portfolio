import { FC } from "react";

const About: FC = () => {
  return (
    <div className="my-[100px] mb-10 px-2" id="about">
      <div
        data-aos="fade-right"
        className="container mb-4 font-bold text-center lg:text-left text-h2"
      >
        About Me
      </div>
      <div className="container text-justify md:text-[17px]">
        <p data-aos="fade-right">
          I&apos;m an expert in creating easy-to-use digital platforms. I know
          all about making websites look great and work smoothly, using tools
          like HTML, CSS, and React.js. I&apos;m also skilled in building strong
          backend systems with Node.js or Python. I&apos;m great with databases
          too, using MySQL, MongoDB, and others to manage data efficiently.
          Whether it&apos;s mobile apps using React Native or Flutter, or fun
          chatbot's with Dialogflow or Rasa, I specialize in making tech that
          people love to use.
        </p>
        <br />

        <p data-aos="fade-right">
          With a Bachelor&apos;s degree in Computer Science from Master Mind
          School System and Virtual University of Pakistan, along with six years
          of freelancing experience, I&apos;ve honed my skills in both
          theoretical knowledge and practical application. I specialize in
          creating user-friendly interfaces and strong backend systems, always
          prioritizing the specific needs of my clients. My blend of academic
          learning and hands-on experience allows me to stay up-to-date in the
          ever-changing tech world, ensuring I deliver creative and efficient
          solutions consistently.
        </p>
        <br />

        <p data-aos="fade-right">
          As an experienced professional, I have a strong presence on top
          freelancing platforms like Upwork and Fiver. With a top-rated seller
          badge on Upwork and Level One seller status on Fiver, I&apos;ve
          completed over 23 jobs on Upwork, earning over $40K and dedicating
          nearly 3,000 hours to delivering exceptional results. My commitment to
          excellence is evident in my 100% job success rate on Upwork and a
          stellar 5-star rating on Fiver. I consistently exceed expectations
          and am ready to tackle any project with expertise and dedication.
        </p>
      </div>
    </div>
  );
};

export default About;
