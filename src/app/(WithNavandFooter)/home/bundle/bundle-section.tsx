import Image from "next/image";
import Link from "next/link";
import { BundleAnimation } from "./bundle-animation";

export const BundleSection = () => {
  return (
    <BundleAnimation>
      <div className="mt-32">
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-y-4 md:gap-8 lg:gap-12">
          <Link
            className=" w-full h-96 relative mt-5 "
            href="/collection/cookware"
          >
            <Image
              src="/imgs/home/bundle/bundle2.jpg"
              alt="bundle 1 image"
              fill={true}
              className="rounded-lg filter brightness-75"
            />
            <div className="flex flex-col justify-start items-start font-bold text-4xl text-white absolute top-10 left-10">
              <p>Bundle & Save </p>
              <p>10% Off</p>
              <p className="text-lg font-normal">Shop Now</p>
            </div>
          </Link>
          <Link
            className="w-full h-96 relative mt-5"
            href="/collection/serveware"
          >
            <Image
              src="/imgs/home/bundle/bundle1.jpg"
              alt="bundle 1 image"
              fill={true}
              className="rounded-lg filter brightness-75"
            />
            <div className="flex flex-col justify-start items-start font-bold text-4xl text-white absolute bottom-10 right-10">
              <p>Up to 55% Off </p>
              <p className="text-lg font-normal">Shop Now</p>
            </div>
          </Link>
        </div>
      </div>
    </BundleAnimation>
  );
};
