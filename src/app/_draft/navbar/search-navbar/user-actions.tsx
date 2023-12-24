import { CartIcon } from "@/app/_components/icons/user-action/cart-icon";
import { ProfileIcon } from "@/app/_components/icons/user-action/profile-icon";
import { WishlistIcon } from "@/app/_components/icons/user-action/wishlist-icon";

export const UserActions: React.FC = () => {
  return (
    <div className="flex justify-end align-center h-5 gap-3 mx-auto">
      <ProfileIcon />
      <WishlistIcon />
      <CartIcon />
    </div>
  );
};
