"use client";
import ProductsListNav from "./large-screens/navbar";
import { ProductListSidebar } from "./sm-md-screens/sidebar";

export default function ProductNavbar() {
  return (
    <header className="bg-white">
      {/* large screens  */}
      <ProductsListNav />
      {/* small medium  screens */}
      <ProductListSidebar />
    </header>
  );
}
