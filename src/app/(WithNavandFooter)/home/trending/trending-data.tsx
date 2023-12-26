import { ProductItemType } from "@/app/_types/types";
import { TrendingProducts } from "./trending-products";
import { TrendingData } from "@/app/api/home/trending/route";

// export async function fetchProducts(): Promise<ProductItemType[]> {
//   const response = await fetch("http://localhost:3000/api/home/trending", {
//     method: "GET",
//   });
//   const products = await response.json();
//   return products;
// }

// this is only to export it on Vercel
async function fetchProducts(): Promise<ProductItemType[]> {
  return TrendingData;
}

export const TrendingDaata: React.FC = async () => {
  const fakeProducts = await fetchProducts();
  return <TrendingProducts fakeProducts={fakeProducts} />;
};
