"use client";

import { MouseEventHandler, useState } from "react";
import { DropDownMenuSideBar } from "../dropdown-item";
import { DropDownLink } from "@/app/types/types";
import {
  SquaresPlusIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { cookwareProducts, servewareProducts } from "../../products";

interface MenuSidebarProps {
  onClickSearch: MouseEventHandler<HTMLAnchorElement>;
}

export const MenuSidebar: React.FC<MenuSidebarProps> = ({ onClickSearch }) => {
  const [cookwareOpen, setCookwareOpen] = useState<boolean>(false);
  const [servewareOpen, setServewareOpen] = useState<boolean>(false);
  const cookwareButtonToggleHandler = () => {
    setCookwareOpen(!cookwareOpen);
  };
  const servewareButtonToggleHandler = () => {
    setServewareOpen(!servewareOpen);
  };

  return (
    <div className="mt-6 flow-root px-6">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          <DropDownMenuSideBar
            dropDownOpen={cookwareOpen}
            dropDownToggle={cookwareButtonToggleHandler}
            dropDown={cookwareProducts}
          />
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <DropDownMenuSideBar
            dropDownOpen={servewareOpen}
            dropDownToggle={servewareButtonToggleHandler}
            dropDown={servewareProducts}
          />
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <Link
            href="#"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Hot Sale
          </Link>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <Link
            href="#"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Best Sellers
          </Link>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <Link
            onClick={onClickSearch}
            href="#"
            className="-mx-3 block flex flex-start rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            <MagnifyingGlassIcon
              width={20}
              className="mr-1"
              aria-hidden="true"
            />
            Search
          </Link>
        </div>

        <div className="py-6">
          <Link
            href="#"
            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Log in / Register
          </Link>
        </div>
      </div>
    </div>
  );
};
