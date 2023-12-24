import { categories } from "@/app/_store/features/trending-slice";
import { TrendingSelector } from "./trending-selector";

export const TrendingSelectors = () => {
  return (
    <>
      {categories.map((category) => (
        <TrendingSelector key={category} name={category} />
      ))}
    </>
  );
};
