import { FC, useMemo } from "react";
import Project from "./Project";

import { AWS, Firebase, Javascript, MySQL, Nestjs, React, ReactNative, TypeORM, Typescript } from "../icons";

const Portfolio: FC = () => {
  const projects = useMemo(
    () => [
      {
        title: "Home Gym Partner",
        images: ["images/home-gym-partner/img1.png", "images/home-gym-partner/img2.png"],
        description:
          "I am thrilled to include my work on the home gym partner project in my software developer portfolio. As part of the development team at my organization, I was given the opportunity to work on this exciting project from start to finish.The home gym partner platform consists of an intuitive admin panel for trainers and coaches, enabling them to easily add workouts, music, and schedule gym sessions. On the client side, the app features a webRTC module implemented with daily.co API, allowing clients to join in on gym sessions through convenient video conference calls. Unfortunately, due to an NDA I have signed, I am unable to share the project link or github repository. However, I am confident that my work on this project speaks for itself and demonstrates my ability to create user-friendly and innovative solutions.",
        type: "Web App",
        role: "Full-Stack",
        // skills: ["React.js", "TypeScript", "Nest.js", "MySQL", "TypeORM"],
        skills: [
          <React key={Math.random().toFixed(3)} width={40} />,
          <Typescript key={Math.random().toFixed(3)} width={40} />,
          <Nestjs key={Math.random().toFixed(3)} width={40} />,
          <MySQL key={Math.random().toFixed(3)} width={40} />,
          <TypeORM key={Math.random().toFixed(3)} width={40} />,
          <AWS key={Math.random().toFixed(3)} width={90} />,
        ],
      },
      {
        title: "Disney UI Clone",
        images: ["images/disney/img1.png", "images/disney/img2.png"],
        description:
          "As a software developer, it is important to constantly challenge myself and learn new technologies. That's why I was excited to take on the task of building a Disney UI clone as a personal project.I am thrilled with the results of this project and am proud to include it in my portfolio. The Disney UI clone is a visually stunning and user-friendly application, with features and functionality inspired by the real Disney website.Building this project allowed me to solidify my understanding of UI design and development. The skills i gained greatly improved my ability to create intuitive and visually appealing applications.",
        type: "Web App",
        role: "Full-Stack",
        skills: [
          <React key={Math.random().toFixed(3)} width={40} />,
          <Javascript key={Math.random().toFixed(3)} width={40} />,
          <Firebase key={Math.random().toFixed(3)} width={40} />,
        ],
      },
      {
        title: "MiCryoto App UI",
        images: ["images/mi-crypto/img1.png", "images/mi-crypto/img2.png"],
        description:
          "I am pleased to present my work on the crypto mobile app UI as part of my software developer portfolio. This project was completed for a client who was in need of a user-friendly and visually appealing interface for their cryptocurrency tracking app.I am proud of the results of this project and believe it showcases my abilities as a developer. The crypto mobile app UI is intuitive and easy to navigate, with a clean and modern design. It allows users to easily track their portfolio and view live prices and market data.I enjoyed the opportunity to work on this project for a client and am grateful for the chance to contribute my skills to their success.",
        type: "Mobile App",
        role: "Front end",
        skills: [<ReactNative key={Math.random().toFixed(3)} width={55} />, <Typescript key={Math.random().toFixed(3)} width={40} />],
      },
      {
        title: "Netflix App UI",
        images: ["images/netflix/img1.png", "images/netflix/img2.png"],
        description:
          "As a software developer, I am always looking for new and interesting challenges to tackle, even just for fun. That's why I decided to create a custom Netflix mobile app UI as a personal project.I am thrilled with the end result and am excited to share it with you as part of my portfolio. The Netflix mobile app UI is a visually stunning and intuitive application, designed to give users a seamless and enjoyable experience. From browsing their favorite shows to discovering new ones, users will love the sleek and modern design of this app.Although this app is not currently deployed and does not include a streaming module, I had a blast creating it and hope you enjoy exploring it as much as I enjoyed building it! This project allowed me to exercise my creative skills and expand my knowledge of UI design and development.",
        type: "Mobile App",
        role: "Front end",
        skills: [<ReactNative key={Math.random().toFixed(3)} width={55} />, <Javascript key={Math.random().toFixed(3)} width={40} />],
      },
    ],
    []
  );

  return (
    <div className="lg:px-16 lg:py-12 lg:mt-12">
      <div className="font-bold text-center text-h3 lg:text-h2" id="projects">
        Noteworthy Projects{" "}
      </div>
      <div className="mb-10 text-center text-[#59647B]">
        Take a look at the frontend, backend and full-stack projects I have built or worked on for work and fun!
      </div>

      {projects.map((project, index) => {
        // console.log(project.title);
        return <Project key={index} {...project} />;
      })}
    </div>
  );
};

export default Portfolio;
