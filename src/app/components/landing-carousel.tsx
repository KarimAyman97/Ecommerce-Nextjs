"use client";
import React from "react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles/carousel.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

export const LandingCarousel = () => {
  const backgroundImageUrl = "/2442.jpg";

  const slideData = [
    {
      id: 1,
      images: [
        { src: "/imgs/home-carousel/1.jpg", alt: "Image 1" },
        { src: "/imgs/home-carousel/2.jpg", alt: "Image 2" },
        { src: "/imgs/home-carousel/3.jpg", alt: "Image 3" },
      ],
    },
    {
      id: 2,
      images: [
        { src: "/imgs/home-carousel/4.jpg", alt: "Image 4" },
        { src: "/imgs/home-carousel/5.jpg", alt: "Image 5" },
        { src: "/imgs/home-carousel/6.jpg", alt: "Image 6" },
      ],
    },
  ];

  return (
    <div className="h-full relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 13000, disableOnInteraction: false }}
        pagination={{
          el: ".swiper-custom-pagination",
          clickable: true,
          bulletClass: `swiper-pagination-bullet ${styles["pagination-bullet-color"]}`,
        }}
        style={{ height: "100%" }}
        draggable={true}
        simulateTouch={true}
        grabCursor
        loop
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4000, disableOnInteraction: true }}
              slidesPerView={1}
              direction={"vertical"}
              pagination={{
                clickable: true,
                bulletClass: `swiper-pagination-bullet ${styles["pagination-bullet-color"]}`,
              }}
              loop={true}
            >
              {slide.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image alt={image.alt} src={image.src} fill={true} />
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="swiper-custom-pagination"
        style={{
          position: "absolute",
          top: "-20px",
          left: "0px",
          height: "10px",
        }}
      ></div>
    </div>
  );
};

{
  /* <div className=" w-100 h-96 md:h-100 mt-5 md:mt-0 md:w-1/2 bg-rose-50">
          <LandingCarousel />
        </div> */
}
