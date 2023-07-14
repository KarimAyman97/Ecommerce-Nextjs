import { Popover } from "@headlessui/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/app/store/features/section-header.slice";
import { AppDispatch } from "@/app/store/store";
import { DropDownMenu } from "./dropdown-menu";
import styles from "@/app/styles/components/products-navbar/products-list-nav.module.scss";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { cookwareProducts, servewareProducts } from "../products";
import { Navbar } from "@/app/components/shared/navbar";

const ProductsListNav = () => {
  return (
    <Navbar>
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
    </Navbar>
  );
};

export default ProductsListNav;
