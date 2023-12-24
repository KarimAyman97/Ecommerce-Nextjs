import { NextResponse } from "next/server";
import { ProductItemType } from "@/app/_types/types";

const TrendingData: ProductItemType[] = [
  {
    id: 1,
    title: "Wooden Circular Bowls 1",
    price: 500,
    category: "cookware",
    quantity: 2,
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/bowl.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 4,
    reviewCount: 122,
  },
  {
    id: 2,
    title: "Wooden Circular Bowls 2",
    price: 500,
    quantity: 1,

    category: "cookware",
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/bowl.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 5,
    reviewCount: 640,
  },
  {
    id: 3,
    title: "Wooden Circular Bowls 3",
    quantity: 0,

    price: 500,
    category: "cookware",
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/bowl.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 3.2,
    reviewCount: 323,
  },
  {
    id: 4,
    title: "Wooden Circular Bowls 4 ",
    quantity: 0,

    price: 500,
    category: "cookware",
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/bowl.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 4,
    reviewCount: 222,
  },
  {
    id: 5,
    title: "Pan 1",
    price: 500,
    category: "cookware",
    quantity: 2,
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/pan.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 4,
    reviewCount: 222,
  },
  {
    id: 6,
    title: "Pan 2",
    price: 500,
    quantity: 1,

    category: "cookware",
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/pan.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 4,
    reviewCount: 222,
  },
  {
    id: 7,
    title: "Pan 3",
    quantity: 0,

    price: 500,
    category: "cookware",
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/pan.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 4,
    reviewCount: 222,
  },
  {
    id: 8,
    title: "Pan 4",
    quantity: 0,

    price: 500,
    category: "cookware",
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/pan.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 4,
    reviewCount: 222,
  },
  {
    id: 9,
    title: "bottle 1 ",
    price: 500,
    category: "cookware",
    quantity: 2,
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/bottle.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 4,
    reviewCount: 222,
  },
  {
    id: 10,
    title: "bottle 2",
    price: 500,
    quantity: 1,

    category: "cookware",
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/bottle.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 4,
    reviewCount: 222,
  },
  {
    id: 11,
    title: "bottle 3",
    quantity: 0,

    price: 500,
    category: "cookware",
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/bottle.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 4,
    reviewCount: 222,
  },
  {
    id: 12,
    title: "bottle 4",
    quantity: 0,

    price: 500,
    category: "cookware",
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/bottle.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 4,
    reviewCount: 222,
  },
  {
    id: 13,
    title: "Tray 1",
    price: 500,
    category: "cookware",
    quantity: 2,
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/trays.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 4,
    reviewCount: 222,
  },
  {
    id: 14,
    title: "Tray 2 ",
    price: 500,
    quantity: 1,

    category: "cookware",
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/trays.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 4,
    reviewCount: 222,
  },
  {
    id: 15,
    title: "Tray 3 ",
    quantity: 0,

    price: 500,
    category: "cookware",
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/trays.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 4,
    reviewCount: 222,
  },
  {
    id: 16,
    title: "Tray 4",
    quantity: 0,
    price: 500,
    category: "cookware",
    description:
      "A set of 4 natural wood bowls for safe and healthy usage to serve nuts , fruits and salad.",
    image: "/imgs/home/trending/trays.jpg",
    hoverImage: "/imgs/home/trending/bowls/1hover.jpg",
    discount: 22,
    rating: 4,
    reviewCount: 222,
  },
];
export async function GET() {
  return NextResponse.json(TrendingData);
}
