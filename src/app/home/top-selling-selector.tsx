"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../store/store";
import { changeCategory } from "../store/features/most-selling-home-category";

interface CategoryItemProps {
  name: string;
}

export const TopSellingSelector: React.FC<CategoryItemProps> = ({ name }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedCategory = useAppSelector(
    (state) => state.MostSellingHomeCategory.category
  );

  const handleClick = () => {
    dispatch(changeCategory(name));
  };

  return (
    <div
      className={`inline-block px-4 py-2 mx-2 my-2 border rounded-lg cursor-pointer ${
        name === selectedCategory ? "bg-rose-400 text-white" : "border-black"
      }`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
};
