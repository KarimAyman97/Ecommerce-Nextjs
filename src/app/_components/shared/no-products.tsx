import Image from "next/image";
import React from "react";

export const NoProductsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center ">
      <div className="w-full h-96 text-gray-400 mb-4 relative">
        <Image src="/imgs/no-product.png" alt="not found image" fill={true} />
      </div>
    </div>
  );
};
