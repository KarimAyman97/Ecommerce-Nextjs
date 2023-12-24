"use client";
import Image from "next/image";
import { useAppSelector } from "../_store/store";

export const Background: React.FC = () => {
  const direction = useAppSelector((state) => state.direction.direction);
  return (
    <div className="relative w-full h-screen z-0">
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black opacity-50"></div>
      <Image
        className={`${direction === "rtl" ? "transform -scale-x-100" : ""}`}
        key={0}
        src="/imgs/bg36.jpg"
        alt="carousel image"
        fill={true}
      />
    </div>
  );
};
4;
