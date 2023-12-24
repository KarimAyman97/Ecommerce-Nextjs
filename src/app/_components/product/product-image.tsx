"use client";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { Loader } from "./product-image-loader";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { ProductItemType } from "@/app/_types/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/_store/store";
import { addWishlistItem } from "@/app/_store/features/wishlist-slice";
import { addCartItem } from "@/app/_store/features/cart-slice";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";

export const ProductImage = ({ product }: { product: ProductItemType }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hovered, setIsHovered] = useState<boolean>(false);
  const [src, setSrc] = useState(product.image);

  const dispatch = useDispatch<AppDispatch>();

  const addWishlistItemHandler = (item: any) => {
    dispatch(addWishlistItem(item));
  };

  const handleIsLoading = () => {
    setIsLoading(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="aspect-h-1 aspect-w-1 w-full h-80 overflow-hidden rounded-md
      bg-gray-200   lg:h-80"
    >
      {/* Loader */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <Loader />
        </div>
      )}
      {/* Product BackDrop */}
      <ProductBackdrop hovered={hovered} />
      {/* Image */}
      <Image
        src={src}
        alt={product.title}
        fill={true}
        onLoadingComplete={handleIsLoading}
        // onError={() => setSrc("/imgs/bg3.jpg")}
        className={` ${
          isLoading ? "opacity-0" : "opacity-100"
        } className="h-full w-full object-cover object-center lg:h-full lg:w-full"`}
      />
      {/* buttons on hover */}
      <ActionButons hovered={hovered} isLoading={isLoading} product={product} />
    </div>
  );
};

interface productBackDropProps {
  hovered: boolean;
}
const ProductBackdrop: React.FC<productBackDropProps> = ({ hovered }) => {
  return (
    <div
      className={`${
        hovered ? "opacity-10" : "opacity-0"
      } absolute inset-0 bg-black transition-opacity duration-300 z-10`}
    ></div>
  );
};

interface ActionButonsProps {
  hovered: boolean;
  isLoading: boolean;
  product: ProductItemType;
}
const ActionButons = ({ hovered, isLoading, product }: ActionButonsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isWishListDialogOpen, setWishListIsDialogOpen] = useState(false);
  const [isCartDialogOpen, setCartDialogOpen] = useState(false);

  const addWishlistItemHandler = (item: any) => {
    dispatch(addWishlistItem(item));
    setWishListIsDialogOpen(true);
  };

  useEffect(() => {
    if (isWishListDialogOpen) {
      const timeoutId = setTimeout(() => {
        setWishListIsDialogOpen(false);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isWishListDialogOpen]);

  const addCartItemHandler = (item: any) => {
    dispatch(addCartItem(item));
    setCartDialogOpen(true);
  };

  useEffect(() => {
    if (isCartDialogOpen) {
      const timeoutId = setTimeout(() => {
        setCartDialogOpen(false);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isCartDialogOpen]);

  return (
    <div
      className={`absolute flex flex-col justify-center items-end p-2 space-y-2 text-white z-10 ${
        hovered ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <HeartIcon
          onClick={() => addWishlistItemHandler(product)}
          className={`text-black bg-white h-10 w-10 p-2  rounded-full cursor-pointer transition duration-300 hover:text-white hover:bg-rose-400`}
          data-te-toggle="tooltip"
          title="Add to Wishlist"
        />
        <Link href={`/collection/cookware/${product.id}`}>
          <MagnifyingGlassIcon
            className={`text-black bg-white h-10 w-10 p-2 rounded-full cursor-pointer transition duration-300 hover:text-white hover:bg-rose-400`}
            data-te-toggle="tooltip"
            title="Quick View"
          />
        </Link>
        {product.quantity > 0 && (
          <ShoppingBagIcon
            onClick={() => addCartItemHandler(product)}
            className={`text-black bg-white h-10 w-10 p-2 rounded-full cursor-pointer transition duration-300 hover:text-white hover:bg-rose-400`}
            data-te-toggle="tooltip"
            title="Add To Cart"
          />
        )}
      </div>

      {/* WishList Notification */}
      <Transition appear show={isWishListDialogOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-hidden"
          onClose={() => setWishListIsDialogOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            {/* Overlay */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay />
            </Transition.Child>

            {/* Dialog Content */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-full"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-full"
            >
              <div className=" bg-rose-400 inline-block max-w-sm px-2 py-1 my-8 overflow-hidden text-center align-middle transition-all transform shadow-xl rounded">
                <p className="text-sm text-white mb-2">Added to WishList</p>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* Cart Notification */}
      <Transition appear show={isCartDialogOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-hidden"
          onClose={() => setCartDialogOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            {/* Overlay */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay />
            </Transition.Child>

            {/* Dialog Content */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-full"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-full"
            >
              <div className=" bg-rose-400 inline-block max-w-sm px-2 py-1 my-8 overflow-hidden text-center align-middle transition-all transform shadow-xl rounded">
                <p className="text-sm text-white mb-2">Added to Cart</p>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
