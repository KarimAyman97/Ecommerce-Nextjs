"use client";
import { PageReview } from "@/app/_types/types";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { UsersReviewAnimation } from "./users-review-animation";
import { UsersReviewHeaderAnimation } from "./users-review-header-animation";

const usersReview: PageReview[] = [
  {
    name: "User 1",
    review: `Amazing cookware website! Their selection is top-notch, and I
        found everything I needed quickly. Superb customer service too!"
        "Love this website! High-quality cookware, fast shipping, and
        great prices. Highly recommended!'`,
    image: "/imgs/home/users-review/1.jpg",
  },
  {
    name: "user 2",
    review: `Impressive cookware collection! Easy to navigate, and
    their products are excellent. Will shop here again!"
    "Top-notch cookware and user-friendly site. Best
    online shopping experience for kitchen essentials!`,
    image: "/imgs/home/users-review/2.jpg",
  },
];

export const UsersReview = () => {
  return (
    <>
      <section className=" bg-white  mt-32 relative">
        <div>
          <div className="flex items-center justify-between h-full w-full absolute z-0">
            <div className="w-1/3 bg-white h-full" />
            <div className="w-4/6 ml-16 bg-gray-100 h-full" />
          </div>
          <div className="xl:px-20 px-8 py-20 2xl:mx-auto  relative z-10">
            <div>
              <UsersReviewHeaderAnimation>
                <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
                  What our customers are
                  <br />
                  saying
                </h1>
                <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
                  What our customers are saying
                </h1>
              </UsersReviewHeaderAnimation>
              <UsersReviewAnimation>
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 5000, disableOnInteraction: true }}
                  spaceBetween={1}
                  slidesPerView={1}
                >
                  {usersReview.map((review) => (
                    <SwiperSlide key={review.name}>
                      <UserReviewElement
                        userReview={review}
                        key={review.name}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </UsersReviewAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

interface UserReviewElement {
  userReview: PageReview;
}
const UserReviewElement: React.FC<UserReviewElement> = ({ userReview }) => {
  return (
    <div className="flex">
      <div className="mt-14 md:flex">
        <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
          <Image
            src={userReview.image ? userReview.image : ""}
            alt="image of profile"
            fill={true}
            className="w-full h-full flex-shrink-0 object-fit object-cover  rounded"
          />
          <div className="w-32 md:flex hidden items-center justify-center absolute top-0 mx-5 -mt-14  h-32 bg-indigo-100 rounded-full">
            <Image
              width={70}
              height={70}
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
              alt="commas"
            />
          </div>
        </div>
        <div className="md:w-1/3 lg:w-1/3 xl:mx-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
              Some of the best work that was done!
            </h1>
            <p className="text-base font-medium leading-6 mt-4 text-gray-600">
              {userReview.review}
            </p>
          </div>
          <div className="md:mt-0 mt-8">
            <p className="text-base font-medium leading-4 text-gray-800">
              {userReview.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
