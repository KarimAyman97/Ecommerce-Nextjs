"use client";
import ProductsListNav from "./large-screens/products-navbar";
import { ProductListSidebar } from "./sm-md-screens/products-sidebar";

export default function ProductNavbar() {
  return (
    <header className="bg-none">
      {/* large screens  */}
      <ProductsListNav />
      {/* small medium  screens */}
      <ProductListSidebar />
    </header>
  );
}
