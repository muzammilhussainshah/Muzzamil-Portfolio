import { FC, useContext, useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import MenuContext from "../context/displayMenu.context";

import Menu from "./Menu";
import { useRouter } from "next/router";

const Navbar: FC = () => {
  const { displayMenu, toggleDisplayMenu } = useContext(MenuContext);
  const [url, setUrl] = useState<string>('');
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 64,
    });
  };

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setUrl(url);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // If you also want to capture the initial route when the component mounts
    handleRouteChange(router.pathname);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  console.log(url, 'url')

  return (
    <>
      {displayMenu === false ? (
        <div className="flex items-center justify-center h-[80px] lg:h-auto px-3">
          <div className="flex flex-1 flex-row lg:flex-none">
            <a href="/" className="ml-2 text-h4 lg:text-h2 font-semibold"><span className="align-middle border-4 border-black text-h4  lg:border-[5px]  lg:text-h3 rounded-full lg:px-2 lg:py-2 px-1 py-1.5">MS</span> Muzzammil Shah</a>
          </div>

          <div className="hidden lg:flex lg:flex-1  lg:justify-end">
            {url !== '/bistrochat-manager' && <a className="p-5 text-h4 hover:underline decoration-primary decoration-2" href={url?.length > 1 ? '/bistrochat-manager' : "#Bistrochat-Manager"} >
              Bistrochat Manager
            </a>}
            {url !== '/bistrochat' && <a href={url?.length > 1 ? '/bistrochat' : "#Bistrochat"} className="p-5 text-h4 hover:underline decoration-primary decoration-2" onClick={() => { }}>
              Bistrochat
            </a>}
            {url !== '/chat-to-potato' && <a href={url?.length > 1 ? '/chat-to-potato' : "#Chat-To-Potato"} className="p-5 text-h4 hover:underline decoration-primary decoration-2" onClick={() => { }}>
              Chat To Potato
            </a>}
          </div>

          <div className="lg:hidden">
            <div className="ml-[12px] transition duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-100">
              <BiMenuAltRight
                size={34}
                onClick={() => {
                  toggleDisplayMenu();
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <Menu url={url} />
      )}
    </>
  );
};

export default Navbar;
