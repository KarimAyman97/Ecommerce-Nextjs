"use client";
import { useDispatch } from "react-redux";
import { ProductItem } from "../components/product-item";
import { AppDispatch, useAppSelector } from "../store/store";
import { ProductItemType } from "../types/types";
import { NoProductsFound } from "../components/shared/no-products";

interface TopTopSellingProductsProps {
  fakeProducts: ProductItemType[];
}

export const TopSellingProducts: React.FC<TopTopSellingProductsProps> = ({
  fakeProducts,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedCategory = useAppSelector(
    (state) => state.MostSellingHomeCategory.category
  );
  const filteredData = fakeProducts.filter(
    (product) => product.category === selectedCategory
  );
  return (
    <div
      className={`grid ${
        filteredData.length > 0
          ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
          : "grid-cols-1"
      } gap-4 m-10 justify-center`}
    >
      {filteredData.length > 0 ? (
        filteredData.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            description={product.description}
            image={product.image}
            hoverImage={product.hoverImage}
            discount={product.discount}
          />
        ))
      ) : (
        <NoProductsFound />
      )}
    </div>
  );
};
