import { useAppSelector } from "@/app/_store/store";

export const WishlistIcon = () => {
  const wishlists = useAppSelector((state) => state.wishListSlice.wishlist);
  return (
    <div className="bg-none flex justify-center items-center cursor-pointer ">
      <div className="relative py-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={wishlists.length > 0 ? "red" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="black"
            className="md:w-7 md:h-7 w-6 h-6 border-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
