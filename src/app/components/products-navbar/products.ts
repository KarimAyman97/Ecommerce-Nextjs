import { DropDownLink } from "@/app/types/types";
import { SquaresPlusIcon } from "@heroicons/react/24/outline";

export const cookwareProducts: DropDownLink = {
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
export const servewareProducts: DropDownLink = {
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
