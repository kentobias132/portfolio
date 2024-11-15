import React from "react";
import cImage from "../assets/ruby.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Client Data
const clients = [
  {
    name: "John Doe",
    review: "Excellent work, very creative and professional.",
    image: cImage,
  },
  {
    name: "Jane Smith",
    review: "Loved the attention to detail and timely delivery.",
    image: cImage,
  },
  {
    name: "Alice Johnson",
    review: "Impressive designs that perfectly captured our brand.",
    image: cImage,
  },
  {
    name: "Bob Williams",
    review: "Great communication throughout the project.",
    image: cImage,
  },
  {
    name: "Eva Brown",
    review: "Exceeded our expectations. Highly recommended!",
    image: cImage,
  },
  {
    name: "Mike Davis",
    review: "Innovative solutions to our design challenges.",
    image: cImage,
  },
];

// Client Card Component
const ClientCard = ({ name, review, image }) => (
  <div
    data-aos="slide-right"
    className="bg-purple-800 text-center h-80 rounded-lg p-8 my-8 mx-4 transition-all duration-300 hover:bg-purple-950"
  >
    <div className="">
      <img
        src={image}
        alt={`${name} photo`}
        className="bg-purple-700 rounded-full w-16 h-16 mx-auto mb-4"
      />
      {/* <div className="bg-purple-700 rounded-full w-16 h-16 mx-auto mb-4">
        {image}
      </div> */}
      <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-2xl">
            ★
          </span>
        ))}
      </div>
      <p className="text-purple-200">{review}</p>
    </div>
  </div>
);

const MyClients = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {" "}
      <h2 className="text-3xl font-light text-white mb-6">My Clients</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={4}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="pb-16"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <ClientCard {...client} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MyClients;
