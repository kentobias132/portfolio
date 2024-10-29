import React from "react";
import prj1 from "../assets/ss1.png";
import prj2 from "../assets/ss2.png";
import prj3 from "../assets/ss3.png";

const WorkCard = ({ image, title, description }) => (
  <div className="bg-purple-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 text-center">
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <button className="bg-yellow-300 text-purple-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
        View project
      </button>
    </div>
  </div>
);

const MyWorks = () => {
  const works = [
    {
      image: prj1,
      title: "Donuts House",
      description:
        "Social media poster for Donuts house store with colorful design.",
    },
    {
      image: prj2,
      title: "Business dashboard",
      description: "A dashboard for workers to measure productivity",
    },
    {
      image: prj3,
      title: "Helper website",
      description:
        "Onfashion is a landing page web design for an e-commerce app for this brand have an exiting application",
    },
  ];

  return (
    <div className="bg-purple-900 py-16 px-4 sm:px-6 lg:px-8">
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

// const WorkCard = ({ title, description, image }) => {
//   return (
//     <div className="bg-purple-900 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
//       <img
//         src={image}
//         alt={title}
//         className="rounded-t-lg w-full h-48 object-cover"
//       />
//       <div className="mt-4">
//         <h3 className="text-white text-2xl font-semibold">{title}</h3>
//         <p className="text-gray-300 mt-2">{description}</p>
//         <button className="mt-4 bg-yellow-400 text-purple-900 font-bold py-2 px-4 rounded hover:bg-yellow-300">
//           View project
//         </button>
//       </div>
//     </div>
//   );
// };

// const MyWorks = () => {
//   const projects = [
//     {
//       title: "Donuts House",
//       description:
//         "Social media poster for Donuts house store with colorful design.",
//       image: prj1,
//     },
//     {
//       title: "Business Dashboard",
//       description: "A dashboard for workers to measure productivity.",
//       image: prj2,
//     },
//     {
//       title: "Helper Website",
//       description: "Landing page web design for an e-commerce app.",
//       image: prj3,
//     },
//   ];

//   return (
//     <div className="bg-purple-800 py-10 px-5">
//       <h2 className="text-white text-4xl font-bold mb-8">My Works</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <WorkCard key={index} {...project} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyWorks;
