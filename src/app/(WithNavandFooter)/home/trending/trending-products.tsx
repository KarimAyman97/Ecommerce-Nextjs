"use client";
import { NoProductsFound } from "@/app/_components/shared/no-products";
import { ProductItemType } from "@/app/_types/types";
import { ProductItem } from "@/app/_components/product/product-item";
import { useAppSelector } from "@/app/_store/store";

export const TrendingProducts = ({
  fakeProducts,
}: {
  fakeProducts: ProductItemType[];
}) => {
  const selectedCategory = useAppSelector(
    (state) => state.TrendingProductsSlice.category
  );
  const filteredData = fakeProducts.filter(
    (product) => product.category === selectedCategory
  );
  return (
    <div
      className={`mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8`}
    >
      {filteredData.length > 0 ? (
        filteredData.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <NoProductsFound />
      )}
    </div>
  );
};
