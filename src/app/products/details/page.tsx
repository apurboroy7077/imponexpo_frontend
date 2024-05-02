import Navbar2 from "@/components/Navbar2";
import Navbar3 from "@/components/Navbar3";
import OrderingProcedure from "@/components/basics/OrderingProcedure";
import CompanyDetailsSection from "@/components/products/CompanyDetailsSection";
import ProductsDetailsSection from "@/components/products/ProductsDetailsSection";
import ProductsDetailsSection2 from "@/components/products/ProductsDetailsSection2";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar3 />
      <div className=" bg-[#f7f7f7]">
        <OrderingProcedure />
        <CompanyDetailsSection />
        <ProductsDetailsSection />
        <ProductsDetailsSection2 />
      </div>
    </>
  );
};

export default page;
