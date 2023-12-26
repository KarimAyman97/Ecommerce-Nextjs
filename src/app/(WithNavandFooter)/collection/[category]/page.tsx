import { NoProductsFound } from "@/app/_components/shared/no-products";
import { ProductItemType } from "@/app/_types/types";
import { ProductItem } from "@/app/_components/product/product-item";
import Filters from "@/app/_components/shared/filters";
import { TrendingData } from "@/app/api/home/product/[category]/route";

// export async function getProducts(
//   category: string
// ): Promise<ProductItemType[]> {
//   const response = await fetch(
//     `http://localhost:3000/api/home/product/${category}`,
//     {
//       method: "GET",
//     }
//   );
//   const product = await response.json();
//   return product;
// }

// only to deploy it on vercel
async function getProducts(category: string): Promise<ProductItemType[]> {
  const filteredData = TrendingData.filter((item) => item.category == category);
  return filteredData;
}

export default async function CategoryProducts({
  params,
}: {
  params: { category: string };
}) {
  let products = await getProducts(params.category);
  return (
    <Filters>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        ))
      ) : (
        <div className="col-span-full">
          <NoProductsFound />
        </div>
      )}
    </Filters>
  );
}
