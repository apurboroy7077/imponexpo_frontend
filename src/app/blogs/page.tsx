import ExclusiveOfferSection from "@/components/ExclusiveOfferSection";
import Footer1 from "@/components/Footer1";
import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import BlogsSection from "@/components/blogs/BlogsSection";
import ExploreZoomNeatSection from "@/components/blogs/ExploreZoomNeatSection";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar2 />
      <BlogsSection />
      <ExploreZoomNeatSection />
      <ExclusiveOfferSection />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default page;
