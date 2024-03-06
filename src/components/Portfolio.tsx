import { FC, useMemo } from "react";
import Project from "./Project";

import { Firebase, Javascript, Nextjs, React, Square, Typescript, Monogdb, Nodejs, Bistrochat, ChatToPotato, BistroChatManager } from "../icons";

const Portfolio: FC = () => {
  const projects = useMemo(
    () => [
      {
        title: "Bistrochat Manager",
        images: ["images/bistrochatManager/image.png", "images/bistrochatManager/image2.png"],
        description:
          'Bistrochat Manager revolutionizes restaurant operations by offering an all-in-one solution for owners, managers, and staff members. Our platform seamlessly consolidates reservations and guest data, streamlining operations into one user-friendly system. With powerful automation features like reminders, deposits management, and integration with POS systems, SMS, and email platforms, Bistrochat Manager empowers restaurants to deliver exceptional guest experiences. Whether managing reservations, coordinating with staff, or enhancing communication channels, our comprehensive solution elevates restaurant management to new heights. For those seeking to make reservations, our customer app "Bistrochat Hong Kong" provides easy access, ensuring a seamless dining experience from start to finish.',
        type: "Mobile App",
        role: "Full-Stack",
        icon: <BistroChatManager key={Math.random().toFixed(3)} width={50} />,
        skills: [
          <React key={Math.random().toFixed(3)} width={40} />,
          <Typescript key={Math.random().toFixed(3)} width={40} />,
          <Square key={Math.random().toFixed(3)} width={40} />,
          <Nodejs key={Math.random().toFixed(3)} width={40} />,
          <Monogdb key={Math.random().toFixed(3)} width={40} />,
        ],
      },
      {
        title: "Bistrochat",
        images: ["images/bistrochat/image.png", "images/bistrochat/image2.png"],
        description:
          "Bistrochat redefines the dining experience in Hong Kong with its innovative restaurant booking and loyalty program. With a user-friendly interface, users can effortlessly search for restaurants based on location, cuisine, or specific dishes, while also accessing ratings and recommendations from friends. The convenience of booking restaurants via chat eliminates the need for traditional phone calls, allowing reservations to be made from any location, whether it's the MTR or an open space. The integrated map feature facilitates finding nearby restaurants, making dining decisions easier than ever. Additionally, Bistrochat rewards users with stamps, cashback, and discounts for dining out, further enhancing the dining experience. With multilingual support and translation features, communication with restaurant staff is seamless. Bistrochat truly brings the magic of dining to life, offering thousands of options in its Hong Kong Restaurants Directory, all accessible through a free app. Bon appétit awaits with Bistrochat!",
        type: "Mobile App",
        role: "Full-Stack",
        icon: <Bistrochat key={Math.random().toFixed(3)} width={50} />,
        // skills: ["React.js", "TypeScript", "Nest.js", "MySQL", "TypeORM"],
        skills: [
          <React key={Math.random().toFixed(3)} width={40} />,
          <Typescript key={Math.random().toFixed(3)} width={40} />,
          <Square key={Math.random().toFixed(3)} width={40} />,
          <Nodejs key={Math.random().toFixed(3)} width={40} />,
          <Monogdb key={Math.random().toFixed(3)} width={40} />,
        ],
      },
      {
        title: "Chat To Potato",
        images: ["images/chattopotato/image.png", "images/chattopotato/image2.png"],
        description:
          "This is both an app and a website that I have created. In this app, we have 'guiders' who are available to offer guidance or advice on any issues or queries you may have. You can share anything with these guiders, and the app ensures the maintenance of your privacy, hence its name, 'Chat to Potato'. Through this platform, we engage in chatting where users can seek support and share experiences.",
        type: "Website & App",
        role: "Full-Stack",
        icon: <ChatToPotato key={Math.random().toFixed(3)} width={50} />,
        skills: [
          <React key={Math.random().toFixed(3)} width={40} />,
          <Javascript key={Math.random().toFixed(3)} width={40} />,
          <Firebase key={Math.random().toFixed(3)} width={40} />,
          <Nextjs key={Math.random().toFixed(3)} width={40} />,
        ],
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
