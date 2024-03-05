import { animated } from "@react-spring/web";
import { useContext } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import MenuContext from "../context/displayMenu.context";
const Menu = () => {
  const { toggleDisplayMenu } = useContext(MenuContext);

  return (
    // animate this menu

    <animated.div className="flex flex-col  justify-center items-center  bg-primary min-w-full min-h-screen fixed ">
      <div className="absolute top-10 right-10 text-white hover:cursor-pointer">
        <FaRegWindowClose
          size={24}
          onClick={() => {
            toggleDisplayMenu();
          }}
        />
      </div>
      <div className="flex flex-col gap-5 font-jakarta font-semibold text-h2">
        <span className="font-bold text-white">
          {" "}
          <a href="#about" onClick={toggleDisplayMenu}>
            About
          </a>
        </span>
        <span className="font-bold text-white">
          <a href="#services" onClick={toggleDisplayMenu}>
            Services
          </a>
        </span>
        <span className="font-bold text-white">
          <a href="#tech" onClick={toggleDisplayMenu}>
            Tech Stack
          </a>
        </span>
        <span className="font-bold text-white">
          <a href="#projects" onClick={toggleDisplayMenu}>
            Projects
          </a>
        </span>
        <span className="font-bold text-white">
          <a href="#contact" onClick={toggleDisplayMenu}>
            Contact
          </a>
        </span>
      </div>
    </animated.div>
  );
};

export default Menu;
