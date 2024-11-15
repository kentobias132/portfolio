import React from "react";
import prj1 from "../assets/Cover.png";
import prj2 from "../assets/ROCKET.png";
import prj3 from "../assets/ss3.png";
import { Github, Play } from "lucide-react";

const WorkCard = ({ image, title, description, githubUrl, demoUrl }) => (
  <div
    data-aos="fade-down"
    className="bg-purple-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 text-center">
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex justify-between">
        {/* <button className="bg-yellow-300 text-purple-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
          View project
        </button> */}
        <a href={demoUrl} target="_blank">
          <Play className="text-yellow-300 hover:fill-current" size={30} />
        </a>
        <a href={githubUrl} target="_blank">
          <Github className="text-yellow-300 hover:fill-current" size={30} />
        </a>
      </div>
    </div>
  </div>
);

const MyWorks = () => {
  const works = [
    {
      image: prj2,
      title: "Rocket Crypto",
      description:
        "A dynamic crypto landiing page that pulls real-time data from the CoinGecko API, users can see live market updates and even use a tool to convert their currency into different cryptocurrencies. I built it with Next.js, so it’s super fast and user-friendly",
      githubUrl: "https://github.com/kentobias132/rocket-crypto",
      demoUrl: "https://rocket-crypto.vercel.app/",
    },
    {
      image: prj1,
      title: "Synny Bloto",
      description:
        "An inviting, greek yogurt landing page that highlights the different flavors and makes the brand feel fresh and premium. It’s like giving yogurt lovers a little tour of the brand’s best offerings! ",
      githubUrl: "https://github.com/kentobias132/Synny-Blotto-Yugurt",
      demoUrl: "https://synny-blotto-yugurt.vercel.app/",
    },
    {
      image: prj3,
      title: "Portfolio",
      description:
        "Onfashion is a landing page web design for an e-commerce app for this brand have an exiting application",
      githubUrl: "https://github.com/kentobias132/portfolio",
      demoUrl: "#",
    },
  ];

  return (
    <div
      data-aos="zoom-right-up"
      className="bg-purple-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-white text-3xl sm:text-4xl font-light">
            My works
          </h2>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            See All
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
