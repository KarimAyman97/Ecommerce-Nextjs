"use client";
import Modal from "@/app/_components/shared/Modal";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/app/_store/store";
import { addCartItem } from "@/app/_store/features/cart-slice";
import { addWishlistItem } from "@/app/_store/features/wishlist-slice";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export async function getProduct(
  category: string,
  productId: string | number
): Promise<any> {
  const response = await fetch(
    `http://localhost:3000/api/home/product/${category}/${productId}`,
    {
      method: "GET",
    }
  );
  const product = await response.json();
  return product;
}

export default async function ProductDetailsModal({
  params,
}: {
  params: { product: string; category: string };
}) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const selectedProduct = useAppSelector(
    (state) => state.wishListSlice.wishlist
  );
  const foundProduct = selectedProduct.find(
    (wishlistItem) => wishlistItem.id == params.product
  );
  const [isAddedToWishList, setWishListProduct] = useState(false);
  const [isAddedToCart, setCartProduct] = useState(false);

  const addWishlistItemHandler = (item: any) => {
    dispatch(addWishlistItem(item));
    setWishListProduct(true);
  };

  const addCartItemHandler = (item: any) => {
    dispatch(addCartItem(item));
    setCartProduct(true);
  };

  const product = await getProduct(params.category, params.product);

  return (
    <Modal>
      <div
        className="grid relative w-full grid-cols-1  gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 
        items-center bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 md:h-full h-96  overflow-y-auto md:overflow-y-visible lg:overflow-y-visible"
      >
        <button
          type="button"
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
          onClick={() => router.back()}
        >
          <span className="sr-only">Close</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="aspect-h-16 aspect-w-9 relative overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
          <Image src={product.image} alt="image" fill={true} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
            {product.title}
          </h2>

          <section aria-labelledby="information-heading" className="mt-2">
            <h3 id="information-heading" className="sr-only">
              Product information
            </h3>

            <p className="text-2xl text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h4 className="sr-only">Reviews</h4>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
                <Link
                  href="#"
                  className="ml-3 text-sm font-medium text-rose-600 hover:text-indigo-500"
                >
                  {product.reviewCount} reviews
                </Link>
              </div>
            </div>
          </section>

          <section aria-labelledby="options-heading" className="mt-10">
            <h3 id="options-heading" className="sr-only">
              Product options
            </h3>

            <form>
              <div className="flex flex-col ">
                <div className="flex justify-center items-center flex-nowrap gap-2 ">
                  <button
                    onClick={() => router.refresh()}
                    type="submit"
                    className="mt-6 flex  w-full items-center justify-center rounded-md border border-transparent bg-rose-400 px-8 py-3 text-base font-medium text-white"
                  >
                    View Full Details
                  </button>
                  <button
                    type="button"
                    className="mt-6   px-2 py-3   rounded-md border  border-black  text-base font-medium text-black "
                    onClick={() => addWishlistItemHandler(product)}
                  >
                    <div>
                      {foundProduct ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 22 22"
                          strokeWidth={1.5}
                          stroke="red" // Set the stroke color to red if a product is found
                          fill="red"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      ) : (
                        // Render the same SVG without the color change if no product is found
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 22 22"
                          strokeWidth={1.5}
                          stroke="black"
                          fill="white"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => addCartItemHandler(product)}
                    className="mt-6 flex  w-full items-center justify-center rounded-md border border-transparent bg-rose-400 px-8 py-3 text-base font-medium text-white"
                  >
                    Add to bag
                  </button>
                  {isAddedToCart && (
                    <div className="mt-3 text-green-600">
                      Added to Cart! {/* You can customize this message */}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </Modal>
  );
}
