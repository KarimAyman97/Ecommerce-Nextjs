"use client";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { AppDispatch, useAppSelector } from "@/app/store/store";
import { useDispatch } from "react-redux";
import { openMenu } from "@/app/store/features/section-header.slice";
import { Sidebar } from "./sidebar";
import { CartIcon } from "../icons/user-action/cart-icon";
import { ProfileIcon } from "../icons/user-action/profile-icon";
import { WishlistIcon } from "../icons/user-action/wishlist-icon";
import Link from "next/link";
import { Navigation } from "@/app/types/types";
import { NavDropDownMenu } from "./dropdown-menu";
import Image from "next/image";

const navigation: Navigation = {
  categories: [
    {
      id: "cookware",
      name: "Cookware",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc: "/imgs/navbar/cookware-latest.jpg",
          imageAlt: "New Arrivals Alt",
        },
        {
          name: "Basic Cooking Tools",
          href: "#",
          imageSrc: "/imgs/navbar/cookware-tools.jpg",
          imageAlt: "Basic Cooking Tools",
        },
      ],
      sections: [
        {
          id: "cookware",
          name: "COOKWARE",
          items: [
            { name: "Pans", href: "#" },
            { name: "Casseroles & Tajins", href: "#" },
            { name: "Cooking Tools", href: "#" },
            { name: "Browse All", href: "#" },
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
          href: "#",
          imageSrc: "/imgs/navbar/serveware-latest.jpg",
          imageAlt: "Serveware new arrivals",
        },
        {
          name: "Basic Serve Tools",
          href: "#",
          imageSrc: "/imgs/navbar/serveware-tools.jpg",
          imageAlt: "Basic Serve Tools",
        },
      ],
      sections: [
        {
          id: "serveware",
          name: "ServeWare",
          items: [
            { name: "Food Buckets", href: "#" },
            { name: "Trays & Bowls", href: "#" },
            { name: "Dinner Sets", href: "#" },
            { name: "DrinkWare", href: "#" },
            { name: "Serving Plates", href: "#" },
            { name: "Serving Stands", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
      ],
    },
  ],
  mainPages: [{ name: "Home", href: "#" }],
  pages: [{ name: "Best Sellers", href: "#" }],
};

export const Navbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const direction = useAppSelector((state) => state.direction.direction);
  const onOpenSidebarHandler = () => {
    dispatch(openMenu());
  };

  return (
    <div className="relative z-10">
      {/* Mobile menu */}
      <Sidebar />
      <header className="relative">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
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
                <Link href="#">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className="h-8 w-8 "
                    width={8}
                    height={8}
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
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

                  {navigation.categories.map((category) => (
                    <NavDropDownMenu key={category.id} menu={category} />
                  ))}

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
              <div className={`flex items-center w-32`}>
                <div
                  className={`ml-4 flow-root  ${
                    direction === "ltr" ? "lg:ml-2" : "lg:mr-2"
                  }`}
                >
                  <ProfileIcon />
                </div>
                <div
                  className={`ml-4 flow-root  ${
                    direction === "ltr" ? "lg:ml-2" : "lg:mr-2"
                  }`}
                >
                  <WishlistIcon />
                </div>
                <div
                  className={`ml-4 flow-root  ${
                    direction === "ltr" ? "lg:ml-2" : "lg:mr-2"
                  }`}
                >
                  <CartIcon />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
