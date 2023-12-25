"use client";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { AppDispatch, useAppSelector } from "@/app/_store/store";
import { useDispatch } from "react-redux";
import { openMenu } from "@/app/_store/features/section-header.slice";
import { Sidebar } from "./sidebar";
import { CartIcon } from "../icons/user-action/cart-icon";
import { ProfileIcon } from "../icons/user-action/profile-icon";
import { WishlistIcon } from "../icons/user-action/wishlist-icon";
import Link from "next/link";
import { Navigation } from "@/app/_types/types";
import { NavDropDownMenu } from "./dropdown-menu";
import Image from "next/image";
import { SearchIcon } from "../icons/user-action/search-icon";
import { useState } from "react";
import ShoppingCart from "../shopping-cart/cart";
import WishList from "../wish-list/wishlist";
import SearchSidebar from "../search/search-sidebar";

const navigation: Navigation = {
  categories: [
    {
      id: "cookware",
      name: "Cookware",
      featured: [
        {
          name: "New Arrivals",
          href: "/collection/cookware-latest",
          imageSrc: "/imgs/navbar/cookware-latest.jpg",
          imageAlt: "New Arrivals Alt",
        },
        {
          name: "Basic Cooking Tools",
          href: "/collection/cookware",
          imageSrc: "/imgs/navbar/cookware-tools.jpg",
          imageAlt: "Basic Cooking Tools",
        },
      ],
      sections: [
        {
          id: "cookware",
          name: "COOKWARE",
          items: [
            { name: "Pans", href: "/collection/pans" },
            {
              name: "Casseroles & Tajins",
              href: "/collection/casseroles-tajins",
            },
            { name: "Cooking Tools", href: "/collection/cooking-tools" },
            { name: "Browse All", href: "/collection/cookware" },
          ],
        },
      ],
    },
    {
      id: "serveware",
      name: "Serveware",
      featured: [
        {
          name: "New Arrivals",
          href: "/collection/serveware-latest",
          imageSrc: "/imgs/navbar/serveware-latest.jpg",
          imageAlt: "Serveware new arrivals",
        },
        {
          name: "Basic Serve Tools",
          href: "/collection/serveware",
          imageSrc: "/imgs/navbar/serveware-tools.jpg",
          imageAlt: "Basic Serve Tools",
        },
      ],
      sections: [
        {
          id: "serveware",
          name: "ServeWare",
          items: [
            { name: "Food Buckets", href: "/collection/food-buckets" },
            { name: "Trays & Bowls", href: "/collection/trays-bowls" },
            { name: "Dinner Sets", href: "/collection/dinner-sets" },
            { name: "DrinkWare", href: "/collection/drinkware" },
            { name: "Serving Plates", href: "/collection/serving-plates" },
            { name: "Serving Stands", href: "/collection/serving-stands" },
            { name: "Browse All", href: "/collection/serveware" },
          ],
        },
      ],
    },
  ],
  mainPages: [{ name: "Home", href: "/home" }],
  pages: [{ name: "Best Sellers", href: "/collection/best-seller" }],
};

export const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const direction = useAppSelector((state) => state.direction.direction);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishListOpen, setIsWishListOpen] = useState<boolean>(false);
  const [isSearchSidebarOpen, setIsSearchSidebarOpen] =
    useState<boolean>(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleWishList = () => {
    setIsWishListOpen(!isWishListOpen);
  };

  const toggleSearchSidebar = () => {
    setIsSearchSidebarOpen(!isSearchSidebarOpen);
  };

  const onOpenSidebarHandler = () => {
    dispatch(openMenu());
  };

  return (
    <div className="relative z-50">
      {/* Mobile menu */}
      <Sidebar />
      <header className="relative">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between ">
              {/* minimize button */}
              <button
                type="button"
                className="rounded-md  text-gray-400 lg:hidden w-32"
                onClick={onOpenSidebarHandler}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div
                className={`mx-4 flex w-32 justify-center ${
                  direction === "ltr" ? "lg:ml-0" : "lg:mr-0"
                }`}
              >
                <Link href="/home">
                  <span className="sr-only">Your Company</span>
                  <Image
                    src={"/images/logo.svg"}
                    alt=""
                    width={100}
                    height={100}
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:mx-8 lg:block lg:self-stretch">
                <div className="flex h-full justify-between">
                  {/* Main Links */}
                  {navigation.mainPages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 mx-3"
                    >
                      {page.name}
                    </Link>
                  ))}
                  {/* dropdown menu */}
                  {navigation.categories.map((category) => (
                    <NavDropDownMenu key={category.id} menu={category} />
                  ))}
                  {/* links */}
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 mx-3"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              {/* links  */}
              <div className={`  flex items-center w-32`}>
                <div
                  onClick={toggleSearchSidebar}
                  className={`   lg:block hidden  ${
                    direction === "ltr" ? "lg:ml-2 ml-4" : "lg:mr-3 mr-4"
                  }`}
                >
                  {/* <SearchIcon /> */}
                </div>
                <SearchSidebar
                  show={isSearchSidebarOpen}
                  closeSearchSidebar={toggleSearchSidebar}
                />
                <Link
                  className={` flow-root  ${
                    direction === "ltr" ? "lg:ml-2 ml-4" : "lg:mr-3 mr-4"
                  }`}
                  href="/register"
                >
                  <ProfileIcon />
                </Link>
                <div
                  onClick={toggleWishList}
                  className={` flow-root  ${
                    direction === "ltr" ? "lg:ml-2 ml-4" : "lg:mr-3 mr-4"
                  }`}
                >
                  <WishlistIcon />
                </div>
                <WishList show={isWishListOpen} closeCart={toggleWishList} />
                <div
                  onClick={toggleCart}
                  className={` flow-root  ${
                    direction === "ltr" ? "lg:ml-2 ml-4" : "lg:mr-3 mr-4"
                  }`}
                >
                  <CartIcon />
                </div>
                <ShoppingCart show={isCartOpen} closeCart={toggleCart} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
