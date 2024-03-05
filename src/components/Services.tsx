import { FC, useMemo } from "react";
import Service from "./Service";

const Services: FC = () => {
  const myServices = useMemo(
    () => [
      {
        category: "Web Development",
        description:
          "As a skilled software engineer, I offer top-notch web development services to help businesses of all sizes achieve their online goals. With a focus on clean, responsive design and intuitive user experience, I work with my clients to create custom solutions that drive engagement and conversion. From building new websites from scratch to updating and improving existing sites, I have the skills and experience to deliver results that exceed your expectations.",
      },
      {
        category: "Mobile App Development",
        description:
          "In today's digital age, a strong mobile presence is essential for any business looking to stay competitive. With experience developing custom mobile apps for a wide range of clients, I have a proven track record of creating user-friendly apps that drive engagement and deliver real value to users. Whether you need a simple app to showcase your products or a more complex solution to streamline your business processes, I am here to help you achieve your mobile goals.",
      },
      {
        category: "UI/UX Design",
        description:
          "As a software engineer with a background in UI/UX design, I understand the importance of creating intuitive and visually appealing user interfaces. Whether you're building a website, a mobile app, or any other digital product, I can help you craft a user experience that engages and delights your users. With a focus on usability, accessibility, and aesthetics, I work closely with my clients to create designs that not only look great, but also drive conversions and achieve business objectives.",
      },
      {
        category: "No Code Development",
        description:
          "For businesses that don't have the resources or expertise to build custom software solutions, no code development can be a game-changer. As a no code developer, I offer a range of services to help you leverage the power of no code platforms to build custom solutions without the need for traditional coding. Whether you're looking to automate your business processes, create custom integrations, or build a simple application, I am here to help you achieve your goals without the need for complex coding.",
      },
    ],
    []
  );

  return (
    <div className="mb-10 px-3 md:pr-7 " id="services">
      <div className="mb-4 font-bold text-center text-h2 ">Services</div>
      <div className="flex mb-6 text-justify text-paraColor md:text-paraGraphMedium lg:justify-center">
        <div className="lg:max-w-4xl">
          Being a hybrid designer and developer means that I have all the reins. This allows me to build sleek webs and mobile applications quickly,
          well and effectively
        </div>
      </div>

      <div className="grid-cols-2 grid-rows-2 gap-10 lg:grid lg:container">
        {myServices.map((service) => {
          return <Service key={service.category} {...service} />;
        })}
      </div>
    </div>
  );
};

export default Services;
