import { Popover } from "@headlessui/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/app/store/features/section-header.slice";
import { AppDispatch } from "@/app/store/store";
import { DropDownMenu } from "./dropdown-menu";
import styles from "@/app/styles/components/products-navbar/products-list-nav.module.scss";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { cookwareProducts, servewareProducts } from "../products";
import { Logo } from "../../shared/logo";

const ProductsListNav = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onOpenMobileMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      {/* Add mobile menu button */}
      <div className="flex items-center  justify-between w-screen">
        <Logo width={100} height={100} />
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={onOpenMobileMenuHandler}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <Popover.Group className="hidden lg:flex lg:gap-x-12 mx-auto">
        <Link href="#" className={`${styles.navLink}`}>
          Home
        </Link>
        <Link href="#" className={`${styles.navLink}`}>
          All Products
        </Link>
        <DropDownMenu dropDown={cookwareProducts} linkStyle={styles.navLink} />
        <DropDownMenu dropDown={servewareProducts} linkStyle={styles.navLink} />
        <Link href="#" className={`${styles.navLink}`}>
          Hot Sale
        </Link>
        <Link href="#" className={`${styles.navLink}`}>
          Best Sellers
        </Link>
      </Popover.Group>
    </nav>
  );
};

export default ProductsListNav;
