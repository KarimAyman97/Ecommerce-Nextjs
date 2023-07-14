"use client";
import React, { useState } from "react";
import "./whychooseus.scss";
import {
  FaGlobe,
  FaAnchor,
  FaHourglassHalf,
  FaDatabase,
  FaUpload,
  FaCamera,
} from "react-icons/fa";

// interface FeatureBoxProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   colorClass: string;
// }

// const FeatureBox: React.FC<FeatureBoxProps> = ({
//   icon,
//   title,
//   description,
//   colorClass,
// }) => {
//   return (
//     <div className="group bg-white text-center items-center justify-center flex flex-col p-8 shadow-lg   mb-8 hover:bg-rose-400 hover:text-white transition-all duration-500 ease-in-out">
//       <span
//         className={`transition-all duration-500 ease-in text-5xl text-rose-400 mb-6 rounded-full inline-block w-20 h-20 ${colorClass} group-hover:rounded-full group-hover:scale-110 group-hover:bg-white flex justify-center items-center`}
//       >
//         {icon}
//       </span>
//       <h6 className="text-2xl text-center font-semibold ">{title}</h6>
//       <p className="text-center text-xs">{description}</p>
//     </div>
//   );
// };

const Card: React.FC = () => {
  return (
    <div className="card">
      <div className="imgbox">
        <FaHourglassHalf size={70} />
      </div>
      <div className="content">
        <h3 id="idq">HOUR GLASS</h3>
        <p>
          When you choose us, you'll feel the benefit of 10 years' experience of
        </p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        {/* <div className="mb-16">
          <h4 className="relative text-4xl font-bold text-rose-500 mb-8 text-center">
            <span className="text-gray-900">Why Choose</span> Us?
            <span className="absolute -bottom-5 left-0 right-0 h-1  bg-rose-500 mx-auto w-24"></span>
          </h4>
          <p className="text-center text-gray-600">
            When you choose us, you'll feel the benefit of 10 years' experience
            of Web Development. Because we know the digital world and we know
            how to handle it. With working knowledge of online, SEO, and social
            media.
          </p>
        </div> */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
