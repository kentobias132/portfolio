import myImage from "../assets/mine3.png";

import React from "react";

const AboutMe = () => {
  return (
    <div
      data-aos="zoom-out-up"
      className="bg-purple-900 py-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <img
            src={myImage}
            alt="Tobi"
            className="hidden lg:block lg:mx-0 h-auto lg:max-w-none lg:-mr-16 lg:translate-y-8"
          />
          <div className="w-full lg:w-[80%] bg-purple-800 rounded-lg p-6 sm:p-8 shadow-2xl lg:-ml-16 lg:mt-28">
            <h2 className="text-yellow-300 text-3xl sm:text-4xl font-bold mb-6">
              About me
            </h2>
            <ul className="text-white space-y-4 lg:pl-28">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 text-2xl leading-none">
                  •
                </span>
                <p className="text-sm sm:text-base">
                  A passionate frontend developer with a strong foundation in
                  building responsive and user-friendly web applications,
                  committed to writing clean, efficient code and staying current
                  with modern web technologies.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 text-2xl leading-none">
                  •
                </span>
                <p className="text-sm sm:text-base">
                  I'm available for full-time, part-time, or freelance projects,
                  with expertise in essential frontend tools and frameworks like
                  React, JavaScript, HTML5, CSS3, and modern build tools.
                  <a href="#" className="text-yellow-300 hover:underline ml-1">
                    Read more
                  </a>
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 text-2xl leading-none">
                  •
                </span>
                <p className="text-sm sm:text-base">
                  Dedicated to creating performant web experiences with a keen
                  eye for detail, focusing on both pixel-perfect implementations
                  and optimal user experiences across all devices and platforms.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 text-2xl leading-none">
                  •
                </span>
                <p className="text-sm sm:text-base">
                  Open to collaborative projects and continuous learning, with
                  experience using industry-standard tools like Git, VS Code,
                  and modern CSS frameworks. I stay updated with the latest
                  frontend trends and best practices.
                  <a href="#" className="text-yellow-300 hover:underline ml-1">
                    Read more
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
