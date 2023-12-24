"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoriesItem, Category } from "./categories-item";
import { Autoplay } from "swiper/modules";
import { useWindowSize } from "react-use";
import { CSSProperties } from "react";

const categories: Category[] = [
  {
    id: 1,
    name: "Dinner sets",
    description: "Set the table with exquisite dinner sets for any occasion.",
    image: "/imgs/categories/mug2.png",
    link: "/collection/serveware",
    imageWidth: 250,
  },

  {
    id: 2,
    name: "Food Buckets",
    description:
      "Serve and display your favorite dishes in stylish food buckets.",
    image: "/imgs/categories/dinner-set3.png",
    link: "/collection/serveware",
    imageWidth: 230,
  },
  {
    id: 3,
    name: "Cooking Tools",
    description:
      "Explore essential cooking tools and utensils to elevate your culinary skills.",
    image: "/imgs/categories/bowl3.png",
    link: "/collection/cookware",
    imageWidth: 200,
  },
  {
    id: 4,
    name: "Drinkware",
    description:
      "Discover a variety of drinkware options to quench your thirst.",
    image: "/imgs/categories/pan2.png",
    link: "/collection/cookware",
    imageWidth: 270,
  },

  {
    id: 5,
    name: "Trays & Bowls",
    description: "Enhance your dining experience with elegant trays and bowls.",
    image: "/imgs/categories/tools2.png",
    link: "/collection/cookware",
    imageWidth: 230,
  },
];

export const CategoriesSection = () => {
  const linkStyle: CSSProperties = {
    color: "white",
    padding: "10px 7px 30px",
    backgroundSize: "130px 100px",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    height: "310px",
    margin: "100px auto 30px",
    borderRadius: "100px 100px 40px 40px",
  };

  const size = useWindowSize();
  let slidesPerView;
  if (size.width <= 710) {
    slidesPerView = 1;
  } else if (size.width > 710 && size.width <= 1120) {
    slidesPerView = 2;
  } else {
    slidesPerView = 3;
  }

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      spaceBetween={1}
      slidesPerView={slidesPerView}
      className="mt-28"
    >
      {categories.map((category) => (
        <SwiperSlide
          className="gap-2"
          key={category.id}
          id={category.id.toLocaleString()}
        >
          <CategoriesItem
            key={category.id}
            category={category}
            linkStyle={linkStyle}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
