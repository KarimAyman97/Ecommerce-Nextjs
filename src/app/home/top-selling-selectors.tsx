import { categories } from "../store/features/most-selling-home-category";
import { TopSellingSelector } from "./top-selling-selector";

export const TopSellingSelectors: React.FC = () => {
  return (
    <>
      {categories.map((category) => (
        <TopSellingSelector key={category} name={category} />
      ))}
    </>
  );
};
