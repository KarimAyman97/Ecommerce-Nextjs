"use client";
import { AppDispatch } from "@/app/store/store";

import { UserActions } from "./user-actions";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/app/store/features/section-header.slice";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { SearchInput } from "../../shared/search-input";
import { Logo } from "../../shared/logo";
import { Navbar } from "../../shared/navbar";

export const SearchNavbar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onOpenMobileMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <Navbar>
      {/* Add mobile menu button */}
      <div className="flex items-center   lg:hidden justify-center">
        <button
          type="button"
          className=" inline-flex items-center justify-start rounded-md md:w-32 w-24  text-gray-700 "
          onClick={onOpenMobileMenuHandler}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className=" w-56 hidden lg:block ">
        <SearchInput />
      </div>
      <div>
        <Logo />
      </div>
      <div className="  w-24 md:w-32 lg:w-56 ">
        <UserActions />
      </div>
    </Navbar>
  );
};
