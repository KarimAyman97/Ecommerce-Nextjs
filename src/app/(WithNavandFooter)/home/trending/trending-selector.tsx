"use client";
import { changeCategory } from "@/app/_store/features/trending-slice";
import { AppDispatch, useAppSelector } from "@/app/_store/store";
import { useDispatch } from "react-redux";

export const TrendingSelector = ({ name }: { name: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedCategory = useAppSelector(
    (state) => state.TrendingProductsSlice.category
  );

  const handleClick = () => {
    dispatch(changeCategory(name));
  };

  return (
    <div
      className={`inline-block px-4  mx-2 mb-2 border-b  cursor-pointer text-sm gap-3 ${
        name === selectedCategory
          ? "border-rose-400  text-rose-500"
          : "border-black text-gray-700"
      }`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
};
