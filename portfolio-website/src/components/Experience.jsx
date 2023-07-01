import React from "react";

import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import java from "../assets/java.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import androidstudio from "../assets/androidstudio.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import sql from "../assets/sql.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: c,
      title: "C",
      style: "shadow-white",
    },
    {
      id: 2,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-600",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-cyan-200",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: git,
      title: "Git",
      style: "shadow-red-300",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: androidstudio,
      title: "Android Studio",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 11,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-gray-600",
    },
    {
      id: 12,
      src: sql,
      title: "SQL",
      style: "shadow-cyan-300",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
