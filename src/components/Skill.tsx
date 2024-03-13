import { FC, ReactElement } from "react";

interface SkillProps {
  component: ReactElement;
  name: string;
}

const Skill: FC<SkillProps> = ({ component, name }) => {
  return (
    <div data-aos="flip-left" className="flex flex-col items-center">
      {component}
      <p className="text-bodyTitleBig text-dark">{name}</p>
    </div>
  );
};

export default Skill;
