import { animated } from "@react-spring/web";
import { useContext } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import MenuContext from "../context/displayMenu.context";
const Menu = ({ url }: { url: string }) => {
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
      <div className="flex flex-col text-center  gap-5 font-jakarta font-semibold text-[2rem] sm:text-h2">
        <span className="font-bold  text-white">
          {" "}
          <a href={url?.length > 1 ? '/bistrochat-manager' : "#Bistrochat-Manager"} onClick={toggleDisplayMenu}>
            Bistrochat Manager
          </a>
        </span>
        <span className="font-bold text-white">
          <a href={url?.length > 1 ? '/bistrochat' : "#Bistrochat"} onClick={toggleDisplayMenu}>
            Bistrochat
          </a>
        </span>
        <span className="font-bold text-white">
          <a href={url?.length > 1 ? '/chat-to-potato' : "#Chat-To-Potato"} onClick={toggleDisplayMenu}>
            Chat To Potato
          </a>
        </span>
      </div>
    </animated.div>
  );
};

export default Menu;
