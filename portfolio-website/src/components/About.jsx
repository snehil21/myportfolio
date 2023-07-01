import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2 ">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Versatile software developer looking to leverage my passion for
          problem solving and algorithm design into an engineering role that
          allows me to create engaging products and user experiences. I'm
          excited about the opportunity to work on meaningful projects that have
          a positive impact. Whether it's developing innovative software
          solutions, optimizing existing systems for performance, or
          troubleshooting complex issues, I am committed to delivering
          exceptional results that drive business success. I also have a strong
          aptitude for problem solving using data structures and algorithms.
        </p>

        <br />

        <p className="text-xl">
          Feel free to reach out to me for collaboration, projects, or potential
          opportunities. You can find more details and explore my portfolio. I
          look forward to connecting with you!
        </p>
      </div>
    </div>
  );
};

export default About;
