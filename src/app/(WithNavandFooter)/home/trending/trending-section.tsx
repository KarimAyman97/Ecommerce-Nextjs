import { Suspense } from "react";
import { TrendingSelectors } from "./trending-selectors";
import TrendingLoading from "./trending-loading";
import { TrendingData } from "./trending-data";
import { TrendingHeaderAnimation } from "./trending-header-animation";

export const TrendingSection = () => {
  return (
    <section className="mt-32">
      <TrendingHeaderAnimation>
        <div className="flex flex-col items-center justify-center pt-8 md:pt-24">
          <TrendingHeader />
        </div>
        <div className="flex flex-wrap justify-center my-8 gap-3">
          <TrendingSelectors />
        </div>
      </TrendingHeaderAnimation>
      <div>
        <Suspense fallback={<TrendingLoading />}>
          <TrendingData />
        </Suspense>
      </div>
    </section>
  );
};

const TrendingHeader: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl  font-semibold text-black capitalize font-sans">
        New Trending Products
      </h1>
      <h3 className="mt-5 capitalize font-sans text-xl">
        Our latest item collection of 2023
      </h3>
    </>
  );
};
