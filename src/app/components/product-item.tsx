"use client";
import Image from "next/image";
import { useState } from "react";
import { WishlistIcon } from "./icons/user-action/wishlist-icon";

interface ProductItemProps {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  hoverImage?: string;
  discount?: number;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  id,
  title,
  price,
  category,
  description,
  image,
  hoverImage,
  discount,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col items-start p-5">
      <div
        className="relative w-full h-80 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={isHovered && hoverImage ? hoverImage : image}
          alt={title}
          fill={true}
          className={`${
            isHovered ? "scale-105" : "scale-100"
          } transition-transform duration-300`}
        />
        <div className="absolute top-1 left-1 px-2 bg-white rounded-full">
          <WishlistIcon />
        </div>
        {discount && (
          <div className="absolute top-1 right-1 py-2 px-1 bg-black text-white rounded-full">
            {discount}%
          </div>
        )}
      </div>
      <div className="h-16">
        <p className="font-semibold line-clamp-3">{title}</p>
      </div>
      <div className="flex items-center mt-3">
        {discount ? (
          <>
            <span className="line-through text-gray-500">
              {price.toLocaleString("en-EG", {
                style: "currency",
                currency: "EGP",
              })}
            </span>
            <span className="ml-2 text-red-500">
              {Math.round(price - (price * discount) / 100).toLocaleString(
                "en-EG",
                {
                  style: "currency",
                  currency: "EGP",
                }
              )}
            </span>
          </>
        ) : (
          <span>
            {price.toLocaleString("en-EG", {
              style: "currency",
              currency: "EGP",
            })}
          </span>
        )}
      </div>
      <button className="mt-2 px-4 py-2 bg-none text-black border border-black rounded hover:bg-rose-400 hover:text-white hover:border-none">
        Add to Cart
      </button>
    </div>
  );
};
