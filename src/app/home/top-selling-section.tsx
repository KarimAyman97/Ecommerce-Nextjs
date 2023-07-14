import { Suspense } from "react";
import { TopSellingSelectors } from "./top-selling-selectors";
import TopSellingLoading from "./top-selling-loading";
import { TopSelling } from "./top-selling";

export const TopSellingProductsSection: React.FC = async () => {
  return (
    <section>
      <div className="flex items-center justify-center pt-8 md:pt-32">
        <TopSellingHeader />
      </div>
      <div className="flex flex-wrap justify-start mt-12">
        <TopSellingSelectors />
      </div>
      <div>
        <Suspense fallback={<TopSellingLoading />}>
          <TopSelling />
        </Suspense>
      </div>
    </section>
  );
};

const TopSellingHeader: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-1/4 h-1 border-t border-black opacity-50"></div>
      <h1 className="text-4xl md:text-5xl lg:text-3xl font-bold text-black capitalize">
        Most Selling Products
      </h1>
      <div className="absolute top-0 right-0 w-1/4 h-1 border-t border-black opacity-50"></div>
    </div>
  );
};
