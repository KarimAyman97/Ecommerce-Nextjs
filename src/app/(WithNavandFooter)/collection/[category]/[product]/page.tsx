import React from "react";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import { TrendingData } from "@/app/api/home/product/[category]/[productId]/route";

// export async function getProduct(
//   category: string,
//   productId: string | number
// ): Promise<any> {
//   console.log("asdasd");
//   const response = await fetch(
//     `http://localhost:3000/api/home/product/${category}/${productId}`,
//     {
//       method: "GET",
//     }
//   );
//   const product = await response.json();
//   return product;
// }

// this is only to export it on Vercel
export async function getProduct(
  category: string,
  productId: string | number
): Promise<any> {
  if (category && productId) {
    const filteredData = TrendingData.filter(
      (item) => item.category == category && item.id == productId
    );
    return filteredData[0];
  }
}

export default async function Product({
  params,
}: {
  params: { category: string; product: number };
}) {
  const product = await getProduct(params.category, params.product);
  console.log(product);
  return (
    <div className="md:grid md:grid-cols-2 md:my-20 md:gap-16">
      <ProductImage image={product.image} />
      <ProductDetails product={product} />
    </div>
  );
}
