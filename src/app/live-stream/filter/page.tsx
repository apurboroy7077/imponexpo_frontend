import Footer1 from "@/components/Footer1";
import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import LiveStreamFilterSection from "@/components/live-stream/LiveStreamFilterSection";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar2 />
      <LiveStreamFilterSection />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default page;
