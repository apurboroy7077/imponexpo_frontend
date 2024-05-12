import Footer1 from "@/components/Footer1";
import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import Navbar3 from "@/components/Navbar3";
import RequestForQuotationSection from "@/components/RequestForQuotationSection";
import ProductsUploadSection from "@/components/products/ProductsUploadSection";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar3 />
      <ProductsUploadSection />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default page;
