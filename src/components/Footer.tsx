import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Footer = () => {
  const router = useRouter();
  const [url, setUrl] = useState<string>();

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

  return (
    <div  data-aos="fade-up" className="bg-[#1E1E2F] text-[#E5E5E5] flex flex-col px-16 py-11 w-full" id="contact">      <div className="flex flex-col-reverse justify-center items-center gap-7 mb-5  ">
        <div className="space-y-2 text-sm">
          <div className="flex justify-center items-center">
            <a
              href="tel:+923425500944"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +92 346 41 00 928
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 text-[.9rem] sm:text-bodyTitleSmall hover:text-deep-purple-800"
            >
              mynameismuzammilhussainshah@gmail.com
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Karachi, Pakistan
            </a>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-row items-center mt-1 space-x-3">
            <a
              href="https://www.linkedin.com/in/myname-muzammil-shah/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill={url === '/bistrochat-manager' ? '#2c3653' : url === '/bistrochat'? '#421b4b' : url === '/chat-to-potato'? '#fea130': '#1d53ff'}
                className=" hover:-translate-y-2 transition-transform duration-300 ease-in-out "
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="mailto:mynameismuzammilhussainshah@gmail.com" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill={url === '/bistrochat-manager' ? '#2c3653' : url === '/bistrochat'? '#421b4b' : url === '/chat-to-potato'? '#fea130': '#1d53ff'}
                xmlns="http://www.w3.org/2000/svg"
                className=" hover:-translate-y-2 transition-transform duration-300 ease-in-out "
              >
                <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142h-13.718c-.63 0-1.141.512-1.141 1.142v9.05c0 .63.511 1.142 1.141 1.142h13.718zm-6.859-4.058l-6.228-4.321-.014 7.712h12.457v-7.712l-6.215 4.321zm5.913-6.609c-1.745 1.215-5.913 4.153-5.913 4.153l-5.947-4.153h11.86z" />
              </svg>
            </a>
            <a href="https://wa.me/923464100928" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill={url === '/bistrochat-manager' ? '#2c3653' : url === '/bistrochat'? '#421b4b' : url === '/chat-to-potato'? '#fea130': '#1d53ff'}
                className=" hover:-translate-y-2 transition-transform duration-300 ease-in-out "
              >
                <path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z" />
              </svg>
            </a>
            <a href="https://github.com/muzammilhussainshah" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill={url === '/bistrochat-manager' ? '#2c3653' : url === '/bistrochat'? '#421b4b' : url === '/chat-to-potato'? '#fea130': '#1d53ff'}
                className=" hover:-translate-y-2 transition-transform duration-300 ease-in-out "
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-5 pb-10 border-t gap-4 lg:flex-row">
        <p className="text-sm text-gray-600 font-bold inline-block ">© Copyright 2024 </p> <p className="text-[.9rem] sm:text-bodyTitleSmall">mynameismuzammilhussainshah@gmail.com</p> <p>All rights reserved.</p>
      </div>
    </div >
  );
};

export default Footer;
