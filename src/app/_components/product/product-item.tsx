import { ProductItemType } from "@/app/_types/types";
import { ProductImage } from "./product-image";

export const ProductItem = ({ product }: { product: ProductItemType }) => {
  return (
    <div className="group relative">
      <div className="relative w-full h-80  overflow-hidden">
        <ProductImage product={product} />

        {product.discount && product.quantity > 0 && (
          <div className="absolute top-2 left-3 py-1 px-2 bg-rose-400 text-white rounded z-10 text-xs">
            -{product.discount}%
          </div>
        )}
        {product.quantity === 0 && (
          <div className="absolute top-2 left-3 py-1 px-2 bg-rose-400 text-white rounded z-10 text-xs">
            SOLDOUT
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <p className="font-semibold line-clamp-3">{product.title}</p>
      </div>
      <div className="flex items-center mt-3">
        {product.discount ? (
          <>
            <span className="line-through text-gray-500">
              {product.price.toLocaleString("en-EG", {
                style: "currency",
                currency: "EGP",
              })}
            </span>
            <span className="ml-2 text-red-500">
              {Math.round(
                product.price - (product.price * product.discount) / 100
              ).toLocaleString("en-EG", {
                style: "currency",
                currency: "EGP",
              })}
            </span>
          </>
        ) : (
          <span>
            {product.price.toLocaleString("en-EG", {
              style: "currency",
              currency: "EGP",
            })}
          </span>
        )}
      </div>
    </div>
  );
};
