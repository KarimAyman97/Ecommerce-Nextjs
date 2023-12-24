"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/app/_store/store";
import { removeWishlistItem } from "@/app/_store/features/wishlist-slice";
import Link from "next/link";
import { addCartItem } from "@/app/_store/features/cart-slice";

export default function WishList({
  show,
  closeCart,
}: {
  show: boolean;
  closeCart: () => void;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const wishlists = useAppSelector((state) => state.wishListSlice.wishlist);

  const removeItemHandler = (item: any) => {
    dispatch(removeWishlistItem(item.id));
  };

  const addToCartItemHandler = (item: any) => {
    dispatch(addCartItem(item));
  };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Wish-List
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={closeCart}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {wishlists?.map((wishlist) => (
                              <li key={wishlist.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={wishlist.image}
                                    alt={wishlist.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <Link
                                          href={`/collection/cookware/${wishlist.id}`}
                                        >
                                          {wishlist.title}
                                        </Link>
                                      </h3>
                                      <p className="ml-4">{wishlist.price}</p>
                                      <button
                                        type="button"
                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                        onClick={() =>
                                          removeItemHandler(wishlist)
                                        }
                                      >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">
                                          Close panel
                                        </span>
                                        <XMarkIcon
                                          className="h-6 w-6"
                                          aria-hidden="true"
                                        />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex">
                                      <button
                                        type="button"
                                        hidden={wishlist.quantity > 0}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() =>
                                          addToCartItemHandler(wishlist)
                                        }
                                      >
                                        Add to Cart
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={closeCart}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
