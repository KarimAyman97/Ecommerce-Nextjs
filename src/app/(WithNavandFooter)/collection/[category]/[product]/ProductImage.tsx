"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Lightbox from "../Lightbox";

const ProductImage = ({ image }: { image: string }) => {
  const allProductImage = [
    {
      id: 1,
      img: image,
      thumbnail: image,
      isActive: true,
    },
    {
      id: 2,
      img: image,
      thumbnail: image,
      isActive: false,
    },
    {
      id: 3,
      img: image,
      thumbnail: image,
      isActive: false,
    },
    {
      id: 4,
      img: image,
      thumbnail: image,
      isActive: false,
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const handleLightbox = () => {
    setLightbox((prev) => !prev);
  };

  return (
    <>
      {/* MOBILE IMAGE */}
      <div
        className="navigation-wrapper md:hidden"
        aria-label="image-display-mobile"
      >
        <div
          ref={sliderRef}
          className="keen-slider relative h-full grid items-center"
        >
          <button
            className="absolute z-50 bg-white w-10 aspect-square left-3 grid place-items-center rounded-full"
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
          >
            <Image
              src={"/images/icon-next.svg"}
              alt=""
              height={18}
              width={13}
              className="rotate-180"
            />
            <span className="sr-only">back button</span>
          </button>
          {allProductImage.map((el) => (
            <div
              key={el.id}
              className={`keen-slider__slide number-slide${el.id}`}
            >
              <Image src={el.img} alt="" width={1000} height={1000} />
            </div>
          ))}
          <button
            className="absolute z-50 bg-white rounded-full aspect-square w-10 grid place-items-center right-3"
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
          >
            <Image
              src={"/images/icon-next.svg"}
              alt=""
              height={18}
              width={13}
            />
            <span className="sr-only">next button</span>
          </button>
        </div>
      </div>
      {/* DESKTOP IMAGE */}
      <ProductImageDesktop
        handleLightbox={handleLightbox}
        allProductImage={allProductImage}
      />
      {lightbox && (
        <Lightbox
          handleClose={() => setLightbox(false)}
          allProductImage={allProductImage}
        />
      )}
    </>
  );
};

type ProductImageDesktopType = {
  handleLightbox?: () => void;
  allProductImage: any[];
};

export const ProductImageDesktop = ({
  handleLightbox,
  allProductImage,
}: ProductImageDesktopType) => {
  const [productImg, setProductImg] = useState(allProductImage);

  const handleActive = (id: number) => {
    const newActive = productImg.map((each) => {
      if (id === each.id) {
        return { ...each, isActive: true };
      } else {
        return { ...each, isActive: false };
      }
    });

    setProductImg(newActive);
  };

  const activeImg = productImg.filter((el) => el.isActive);

  return (
    <div className="hidden md:grid gap-8 place-items-center">
      <div>
        <Image
          src={activeImg[0].img}
          width={460}
          height={460}
          alt=""
          className="object-contain rounded-lg cursor-pointer"
          onClick={handleLightbox}
        />
      </div>
      <div className="flex gap-10">
        {productImg.map((el) => (
          <button
            key={el.id}
            onClick={() => handleActive(el.id)}
            className={el.isActive ? "border-2 border-orange rounded-lg" : ""}
          >
            <Image
              src={el.thumbnail}
              alt=""
              width={176}
              height={176}
              className={`${
                el.isActive ? " opacity-50 border-orange" : ""
              } object-contain w-[5.25rem] rounded-lg`}
            />
            <span className="sr-only">Product Image</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
