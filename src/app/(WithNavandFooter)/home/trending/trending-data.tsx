import { ProductItemType } from "@/app/_types/types";
import { TrendingProducts } from "./trending-products";

export async function fetchProducts(): Promise<ProductItemType[]> {
  const response = await fetch("http://localhost:3000/api/home/trending", {
    method: "GET",
  });
  const products = await response.json();
  return products;
}

export const TrendingData: React.FC = async () => {
  const fakeProducts = await fetchProducts();
  return <TrendingProducts fakeProducts={fakeProducts} />;
};
