import { Popover } from "@headlessui/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/app/store/features/section-header.slice";
import { AppDispatch } from "@/app/store/store";
import { DropDownMenu } from "./dropdown-menu";
import styles from "@/app/styles/components/products-navbar/products-list-nav.module.scss";
import { SquaresPlusIcon } from "@heroicons/react/24/outline";
import { DropDownLink } from "@/app/types/types";

const cookwareProducts: DropDownLink = {
  linkName: "Cookware",
  dropDownItems: [
    {
      name: "Pans",
      description:
        "Find a wide range of high-quality pans for your cooking needs.",
      href: "#",
      icon: "/svgs/products-nav/pan.svg",
    },
    {
      name: "Casseroles & Tajins",
      description:
        "Discover durable casseroles and tajins for delicious home-cooked meals.",
      href: "#",
      icon: "/svgs/products-nav/casserole.svg",
    },
    {
      name: "Cooking Tools",
      description:
        "Explore essential cooking tools and utensils to elevate your culinary skills.",
      href: "#",
      icon: "/svgs/products-nav/cooking-tools.svg",
    },
    {
      name: "All Cookware",
      description:
        "Browse our complete collection of cookware products for your kitchen.",
      href: "#",
      icon: SquaresPlusIcon,
    },
  ],
};
const servewareProducts: DropDownLink = {
  linkName: "Serveware",
  dropDownItems: [
    {
      name: "Food Buckets",
      description:
        "Serve and display your favorite dishes in stylish food buckets.",
      href: "#",
      icon: "/svgs/products-nav/food-bucket.svg",
    },
    {
      name: "Trays & Bowls",
      description:
        "Enhance your dining experience with elegant trays and bowls.",
      href: "#",
      icon: "/svgs/products-nav/bowls.svg",
    },
    {
      name: "Dinner Sets",
      description: "Set the table with exquisite dinner sets for any occasion.",
      href: "#",
      icon: "/svgs/products-nav/dinner-set.svg",
    },
    {
      name: "Drinkware",
      description:
        "Discover a variety of drinkware options to quench your thirst.",
      href: "#",
      icon: "/svgs/products-nav/drinkware.svg",
    },
    {
      name: "Serving Plates",
      description:
        "Present your culinary creations on beautiful serving plates.",
      href: "#",
      icon: "/svgs/products-nav/serve-plate.svg",
    },
    {
      name: "Serving Stands",
      description: "Elevate your table setting with elegant serving stands.",
      href: "#",
      icon: "/svgs/products-nav/serve-stand.svg",
    },
    {
      name: "All Serveware",
      description:
        "Explore our complete collection of serveware for all your hosting needs.",
      href: "#",
      icon: SquaresPlusIcon,
    },
  ],
};

const ProductsListNav = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onOpenMobileMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      aria-label="Global"
    >
      {/* Add mobile menu button */}
      {/* <div className="flex lg:hidden ml-auto">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={onOpenMobileMenuHandler}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div> */}
      <Popover.Group className="hidden lg:flex lg:gap-x-12 mx-auto">
        <Link href="#" className={`${styles.navLink}`}>
          Home
        </Link>
        <Link href="#" className={`${styles.navLink}`}>
          All Products
        </Link>
        <DropDownMenu dropDown={cookwareProducts} linkStyle={styles.navLink} />
        <DropDownMenu dropDown={servewareProducts} linkStyle={styles.navLink} />
      </Popover.Group>
    </nav>
  );
};

export default ProductsListNav;
