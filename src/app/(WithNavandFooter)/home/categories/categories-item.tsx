import { CSSProperties, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader } from "@/app/_components/product/product-image-loader";

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  imageWidth: number;
}

export const CategoriesItem = ({
  category,
  linkStyle,
}: {
  category: Category;
  linkStyle: CSSProperties;
}) => {
  const { name, image, link } = category;

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleIsLoading = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader />
        </div>
      )}
      <Link
        href={link}
        className={` ${
          isLoading ? "opacity-0" : "opacity-100"
        } flex flex-col  relative flex-wrap items-center justify-center max-w-xs bg-rose-100 rounded-lg `}
        style={linkStyle}
      >
        <Image
          src={image}
          width={170}
          height={150}
          alt="image"
          onLoadingComplete={handleIsLoading}
          className={`-mt-24  transform hover:scale-105 transition-transform duration-500`}
        />
        <div className="flex flex-col items-center justify-end mt-4">
          <p className="text-gray-900 text-center">{category.description}</p>
          <div className="hover:bg-gray-800 hover:opacity-70 cursor-pointer px-4 py-2 mt-8 text-white bg-gray-900 rounded-lg transition-all duration-400 focus:outline-none">
            Show More
          </div>
        </div>
      </Link>
    </>
  );
};
