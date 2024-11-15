import React from "react";
import myPhoto from "../assets/mine.png";
import angular from "../assets/angular.png";
import django from "../assets/django.png";
import graphql from "../assets/graphql.png";
import nextjs from "../assets/nextjs.png";
import react from "../assets/react.png";
import ruby from "../assets/ruby.png";
import spring from "../assets/spring.png";
import { Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-purple-900 text-white min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div data-aos="slide-right" className="max-w-lg mt-8 lg:mt-0 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Hi! I'm Tobi
            <br />
            <span className="text-yellow-300">Frontend Developer</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-8 max-w-md">
            To be a Frontend developer is so amazing, I can help everyone build
            their business, it such happiness for me. So let me to help you!
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <button className="w-full sm:w-auto bg-yellow-300 text-purple-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
              Hire me
            </button>
            <button className="w-full sm:w-auto border border-yellow-300 text-yellow-300 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-purple-900 transition duration-300">
              Download CV
            </button>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/kentobias132/"
              target="_blank"
              className="text-yellow-300 hover:text-white transition-colors duration-300"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/tobi-kehinde-2a11a7213/"
              target="_blank"
              className="text-yellow-300 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={30} />
            </a>
          </div>
        </div>
        <div className="relative mt-12 lg:mt-0">
          <img
            data-aos="zoom-out-up"
            src={myPhoto}
            alt="Tobi"
            className=" w-[310px] h-[310px] sm:w-[410px] sm:h-[410px] object-contain"
          />
          <img
            data-aos="zoom-out-left"
            src={nextjs}
            alt="nextjs"
            className="absolute top-0 right-32 w-8 h-8 sm:w-12 sm:h-12"
          />
          <img
            data-aos="zoom-out-up"
            src={angular}
            alt="angular"
            className="absolute top-20 right-8 w-8 h-8 sm:w-12 sm:h-12"
          />
          <img
            data-aos="slide-left"
            src={django}
            alt="django"
            className="absolute bottom-24 left-0 w-8 h-8 sm:w-12 sm:h-12"
          />
          <img
            data-aos="slide-up"
            src={react}
            alt="react"
            className="absolute bottom-44 right-0 w-8 h-8 sm:w-12 sm:h-12"
          />
          <img
            data-aos="zoom-out-down"
            src={graphql}
            alt="graphql"
            className="absolute bottom-10 right-16 w-8 h-8 sm:w-12 sm:h-12"
          />
          <img
            data-aos="zoom-out-up"
            src={ruby}
            alt="ruby"
            className="absolute top-16 left-0 w-8 h-8 sm:w-11 sm:h-11"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
