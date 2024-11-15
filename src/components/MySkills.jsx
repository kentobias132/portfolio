import React from "react";
import fstImage from "../assets/fst.png";
import appImage from "../assets/apl.png";
import webImage from "../assets/webi.webp";

const SkillCard = ({ icon, title, description }) => (
  <div data-aos="zoom-in-down" className="text-center">
    <img src={icon} alt={title} className="w-32 h-32 mx-auto mb-4" />
    <h3 className="text-yellow-300 text-xl font-bold mb-2">{title}</h3>
    <p className="text-white text-sm sm:text-base">{description}</p>
  </div>
);

const MySkills = () => {
  const skills = [
    {
      icon: appImage,
      title: "App Development",
      description:
        "Crafting intuitive mobile experiences with React Native, Flutter, and native iOS/Android development.",
    },
    {
      icon: webImage,
      title: "Web Development",
      description:
        "Building responsive and dynamic websites using modern frameworks like React, Vue, and Angular.",
    },
    {
      icon: fstImage,
      title: "Full-Stack Development",
      description:
        "Seamlessly integrating front-end and back-end technologies to create robust, scalable applications.",
    },
  ];

  return (
    <div
      data-aos="fade-right"
      className="bg-purple-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container my-10 mx-auto max-w-6xl">
        <h2 className="text-white text-3xl sm:text-4xl font-light mb-12">
          My skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
