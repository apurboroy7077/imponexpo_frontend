import Footer1 from "@/components/Footer1";
import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import ProductsSection from "@/components/products/ProductsSection";
import TotalBalanceAndCurrentCategoryInfoSection from "@/components/products/TotalBalanceAndCurrentCategoryInfoSection";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar2 />
      <TotalBalanceAndCurrentCategoryInfoSection />
      <ProductsSection />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default page;
