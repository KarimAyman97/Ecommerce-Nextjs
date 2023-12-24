"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface Category {
  id: number;
  name: string;
  image: string;
  link: string;
}

interface CategoriesItemProps {
  size: string;
  category: Category;
}

export const CategoriesItem: React.FC<CategoriesItemProps> = ({
  size,
  category,
}) => {
  const { name, image, link } = category;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href={link}
      className="flex flex-col items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${size} relative overflow-hidden`}
        style={{
          boxShadow: isHovered ? "none" : "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Image
          src={image}
          alt={name}
          fill={true}
          className={`transform duration-200 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: isHovered ? "0" : "1",
            transition: "opacity 0.3s ease",
          }}
        ></div>
        <p
          className={`absolute bottom-2 left-0 right-0 text-center font-semibold text-white text-xl tracking-widest`}
          style={{
            textShadow: isHovered ? "0 0 5px rgba(0, 0, 0, 1)" : "none",
          }}
        >
          {name}
        </p>
      </div>
    </Link>
  );
};
