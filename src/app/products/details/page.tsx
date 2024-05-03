import Footer3 from "@/components/Footer3";
import Navbar2 from "@/components/Navbar2";
import Navbar3 from "@/components/Navbar3";
import OrderingProcedure from "@/components/basics/OrderingProcedure";
import CompanyDetailsSection from "@/components/products/CompanyDetailsSection";
import ProductsDetailsSection from "@/components/products/ProductsDetailsSection";
import ProductsDetailsSection2 from "@/components/products/ProductsDetailsSection2";
import RelatedProductsSection from "@/components/products/RelatedProductsSection";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar3 />
      <main className=" bg-[#e5e5e5]">
        <OrderingProcedure />
        <CompanyDetailsSection />
        <ProductsDetailsSection />
        <ProductsDetailsSection2 />
        <RelatedProductsSection />
      </main>
      <Footer3 />
    </>
  );
};

export default page;
