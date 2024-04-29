import Footer1 from "@/components/Footer1";
import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import ProductsListSection from "@/components/products/ProductsListSection";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar2 />
      <ProductsListSection />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default page;
