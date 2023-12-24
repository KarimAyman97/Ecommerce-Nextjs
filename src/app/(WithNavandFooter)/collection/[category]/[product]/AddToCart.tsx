"use client";

import { addCartItem } from "@/app/_store/features/cart-slice";
import { addWishlistItem } from "@/app/_store/features/wishlist-slice";
import { AppDispatch } from "@/app/_store/store";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddToCart = ({ product }: { product: any }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [itemCount, setItemCount] = useState(1);

  const increaseItemCount = () => {
    const newCount = itemCount + 1;
    setItemCount(newCount);
  };

  const decreaseItemCount = () => {
    if (itemCount > 1) {
      const newCount = itemCount - 1;
      setItemCount(newCount);
    }
  };

  const addCartItemHandler = (item: any) => {
    dispatch(addCartItem(item));
  };

  return (
    <div className="grid gap-3 md:grid-cols-[0.5fr_1fr]  items-center">
      <div className="bg-gray-300 flex items-center justify-between p-4 font-bold rounded-xl">
        <button className="hover:opacity-50" onClick={decreaseItemCount}>
          <Image src={"/images/icon-minus.svg"} alt="" width={12} height={4} />
          <span className="sr-only">remove product items</span>
        </button>
        <span>{itemCount}</span>
        <button className="hover:opacity-50" onClick={increaseItemCount}>
          <Image src={"/images/icon-plus.svg"} alt="" width={12} height={12} />
          <span className="sr-only">add product items</span>
        </button>
      </div>
      <button
        onClick={() => addCartItemHandler(product)}
        className="flex gap-2 items-center justify-center bg-black text-white font-semibold p-4 rounded-xl shadow-md shadow-black/40 hover:opacity-50"
      >
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </svg>
        <span>Add to cart</span>
      </button>
    </div>
  );
};

export default AddToCart;
