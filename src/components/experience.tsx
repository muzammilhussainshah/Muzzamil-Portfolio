// todo: complete this component in future
import { useState } from "react";

const PlacesIHaveWorkedWith = () => {
  const [currentOpen, setCurrentOpen] = useState(0);

  const handleClick = (index: any) => {
    setCurrentOpen(index === currentOpen ? 0 : index);
  };

  const workPlaces = [
    {
      name: "Code-Huddle",
      duration: "August 2022 - Present",
      designation: "Associate Software Engineer (MERN)",
      responsibilities: [
        "Developed a full-stack web application for a client using React, Node.js, Express, and MongoDB.",
        "Developed a full-stack web application for a client using React, Node.js, Express, and MongoDB.",
        "Developed a full-stack web application for a client using React, Node.js, Express, and MongoDB.",
      ],
    },
    {
      name: "Techblink",
      duration: "May 2022 - July 2022",
      designation: "Product Innovation Intern",
      responsibilities: [
        "Developed a full-stack web application for a client using React, Node.js, Express, and MongoDB.",
        "Developed a full-stack web application for a client using React, Node.js, Express, and MongoDB.",
        "Developed a full-stack web application for a client using React, Node.js, Express, and MongoDB.",
      ],
    },
  ];

  return (
    <div className="flex flex-row">
      <ul className="w-1/3 text-xl font-bold p-4">
        {workPlaces.map((workPlace, index) => (
          <li
            key={workPlace.name}
            className={`cursor-pointer ${index === currentOpen ? "bg-gray-300" : "bg-white"}`}
            onClick={() => handleClick(index)}
          >
            {workPlace.name}
          </li>
        ))}
      </ul>
      <div className="w-2/3 p-4">
        {workPlaces.map((workPlace, index) => (
          <div key={workPlace.name} className={`transition duration-300 ${index === currentOpen ? "opacity-1" : "opacity-0"} text-gray-700 mb-4`}>
            {workPlace.designation}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesIHaveWorkedWith;
