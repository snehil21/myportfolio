import React from "react";
import ChatClique from "../assets/portfolio/ChatClique.jpg";
import resumeCraft from "../assets/portfolio/resumeCraft.png";
import Notesapp from "../assets/portfolio/Notesapp.png";
import VideoBrowser from "../assets/portfolio/VideoBrowser.png";
import quizapp from "../assets/portfolio/quiz1.png";
import ATM from "../assets/portfolio/ATM.webp";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ChatClique,
      demo: "",
      code: "https://github.com/snehil21/ChatClique",
      name: "Chat Application",
    },
    {
      id: 2,
      src: resumeCraft,
      demo: "https://649deef2e90193335df8001c--celadon-faloodeh-b178a7.netlify.app/",
      code: "https://github.com/snehil21/ResumeCraft",
      name: "Resume Builder",
    },
    {
      id: 3,
      src: Notesapp,
      demo: "https://sweet-kitten-6dd4ab.netlify.app/",
      code: "https://github.com/snehil21/Notesapp",
      name: "Notes Application",
    },
    {
      id: 4,
      src: VideoBrowser,
      demo: "https://merry-salamander-4526bd.netlify.app/",
      code: "https://github.com/snehil21/VideoBrowser",
      name: "Video Browser",
    },
    {
      id: 5,
      src: quizapp,
      demo: "",
      code: "https://github.com/snehil21/Quiz-App",
      name: "Quiz Application",
    },
    {
      id: 6,
      src: ATM,
      demo: "",
      code: "https://github.com/snehil21/ATM-Data-managment",
      name: "ATM Application",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="text-center mt-3 decoration-solid duration-200 hover:scale-105">
                {name}
              </div>
              <div className="flex items-center justify-center">
                <a
                  className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105"
                  href={demo}
                >
                  Demo
                </a>
                <a
                  className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105"
                  href={code}
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
