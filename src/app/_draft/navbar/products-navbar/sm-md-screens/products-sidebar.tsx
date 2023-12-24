"use client";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/app/_store/store";
import { closeMenu } from "@/app/_store/features/section-header.slice";
import { useState } from "react";
import { SidebarNavBtn } from "./navButton";
import { MenuSidebar } from "./sidebars/menu-sidebar";
import { SearchSideBar } from "./sidebars/search-sidebar";
import { Sidebar } from "@/app/_components/shared/sidebar";

export const ProductListSidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productSideBarOpen = useAppSelector(
    (state) => state.productSidebar.isOpen
  );
  const [activeBtn, setActiveBtn] = useState<string>("Menu");
  const handleClick = (btnText: string) => {
    setActiveBtn(btnText);
  };
  const onCloseProductSidebarHandler = () => {
    dispatch(closeMenu());
  };
  return (
    <Sidebar
      menuOpen={productSideBarOpen}
      onCloseMenuHandler={onCloseProductSidebarHandler}
    >
      <div className=" grid grid-cols-2">
        <SidebarNavBtn onClick={() => handleClick("Menu")}>Menu</SidebarNavBtn>
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
      {activeBtn === "Search" && <SearchSideBar />}
    </Sidebar>
  );
};
