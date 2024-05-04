import ExclusiveOfferSection from "@/components/ExclusiveOfferSection";
import Footer3 from "@/components/Footer3";
import Navbar3 from "@/components/Navbar3";
import OrderingProcedure from "@/components/basics/OrderingProcedure";
import ShippingSection from "@/components/shipping/ShippingSection";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar3 />
      <main className="bg-[#e5e5e5]">
        <OrderingProcedure />
        <ShippingSection />
        <ExclusiveOfferSection />
      </main>
      <Footer3 />
    </>
  );
};

export default page;
