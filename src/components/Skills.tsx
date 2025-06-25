import { FC, useMemo } from "react";
import {
  Expo,
  Express,
  Figma,
  Firebase,
  Git,
  Github,
  Javascript,
  Monogdb,
  MySQL,
  Nestjs,
  Nextjs,
  Nodejs,
  React,
  ReactNative,
  Tailwindcss,
  Typescript,
  OpenAI,
  PostgresIcon
} from "../icons";
import Skill from "./Skill";

const Skills: FC = () => {
  const techs = useMemo(
    () => [
      { component: <Typescript />, name: "TypeScript" },
      { component: <React />, name: "React" },
      { component: <ReactNative width={132} />, name: "React Native" },
      { component: <Expo width={115} />, name: "Expo" },
      { component: <Nextjs />, name: "Nextjs" },
      { component: <Javascript />, name: "JavaScript" },
      { component: <Tailwindcss />, name: "Tailwind CSS" },
      { component: <Nodejs />, name: "Node.js" },
      { component: <Express />, name: "Express.js" },
      { component: <Git />, name: "Git" },
      { component: <Github />, name: "Github" },
      { component: <Monogdb />, name: "MongoDB" },
      { component: <Firebase />, name: "Firebase" },
      { component: <MySQL />, name: "MySQL" },
      { component: <Figma />, name: "Figma" },
      { component: <Nestjs />, name: "NestJs" },
      { component: <PostgresIcon />, name: "PostgresSql" },
      { component: <OpenAI width={132} />, name: "OpenAI" },
    ],
    []
  );

  return (
    <div className="mb-10 ">
      <div data-aos="fade-down" className="mb-4 font-bold text-center text-h2" id="tech">
        My Tech Stack
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 my-16">
        {techs.map((tech) => {
          return <Skill key={tech.name} {...tech} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
