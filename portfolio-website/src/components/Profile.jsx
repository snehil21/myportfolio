import React from "react";
import gfg from "../assets/gfg.png";
import leetcode from "../assets/leetcode.png";
import codechef from "../assets/codechef.png";
import codeforces from "../assets/codeforces.png";

const Profile = () => {
  const profiles = [
    {
      id: 1,
      src: gfg,
      title: "GeeksForGeeks",
      style: "shadow-green-600",
      href: "https://auth.geeksforgeeks.org/user/snehilthakur/practice",
    },
    {
      id: 2,
      src: leetcode,
      title: "LeetCode",
      style: "shadow-yellow-500",
      href: "https://leetcode.com/snehilthakur21/",
    },
    {
      id: 3,
      src: codeforces,
      title: "CodeForces",
      style: "shadow-red-500",
      href: "https://codeforces.com/profile/snehilthakur",
    },
    {
      id: 4,
      src: codechef,
      title: "CodeChef",
      style: "shadow-cyan-200",
      href: "https://www.codechef.com/users/snehil21",
    },
  ];

  return (
    <div
      name="profile"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Coding Profiles
          </p>
          <p className="py-6">Check out my Coding Profiles</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {profiles.map(({ id, src, title, style, href }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <div className=" flex items-center justify-center">
                <a className="mt-4" href={href}>
                  {title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
