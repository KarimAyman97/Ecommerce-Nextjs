import { ProductItemType } from "../types/types";
import { TopSellingProducts } from "./top-selling-products";

export async function fetchProducts(): Promise<ProductItemType[]> {
  //   return new Promise((resolve) => {
  //     setTimeout(async () => {
  //       console.log(products);
  //       resolve(products);
  //     }, 10000);
  //   });
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
}

export const TopSelling: React.FC = async () => {
  const fakeProducts = await fetchProducts();
  return <TopSellingProducts fakeProducts={fakeProducts} />;
};
