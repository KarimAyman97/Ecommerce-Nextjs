"use client";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/app/store/store";
import { closeMenu } from "@/app/store/features/section-header.slice";
import { Fragment, useState } from "react";
import { CloseSidebarButton } from "./close-button";
import { SidebarNavBtn } from "./navButton";
import { MenuSidebar } from "./sidebars/menu-sidebar";

export const ProductListSidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const mobileMenuOpen = useAppSelector((state) => state.mobileMenu.isOpen);
  const [activeBtn, setActiveBtn] = useState<string>("Menu");
  const handleClick = (btnText: string) => {
    setActiveBtn(btnText);
  };
  const onCloseMobileMenuHandler = () => {
    dispatch(closeMenu());
  };
  return (
    <Transition show={mobileMenuOpen} as={Fragment}>
      <Dialog
        as="div"
        // className="lg:hidden"
        onClose={onCloseMobileMenuHandler}
      >
        {/* backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/20" />
        </Transition.Child>

        {/* sidebar  */}
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="fixed inset-y-0 right-0  z-10 w-80  bg-white sm:ring-1 sm:ring-gray-900/10 transform transition-transform ease-in-out duration-300">
            <div className=" absolute -left-12 bg-black bg-opacity-10 px-2 py-2 ">
              <CloseSidebarButton />
            </div>
            <div className=" grid grid-cols-2">
              <SidebarNavBtn onClick={() => handleClick("Menu")}>
                Menu
              </SidebarNavBtn>
              <SidebarNavBtn onClick={() => handleClick("Search")}>
                Search
              </SidebarNavBtn>
              <div
                className={`h-1 bg-red-500 transition-transform duration-300 ease-in-out transform  ${
                  activeBtn === "Menu" ? "translate-x-0" : "translate-x-full"
                }`}
              ></div>
            </div>
            {activeBtn === "Menu" && (
              <MenuSidebar onClickSearch={() => handleClick("Search")} />
            )}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
