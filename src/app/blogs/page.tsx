import ExclusiveOfferSection from "@/components/ExclusiveOfferSection";
import Footer1 from "@/components/Footer1";
import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import Navbar3 from "@/components/Navbar3";
import Navbar4 from "@/components/Navbar4";
import BlogsSection from "@/components/blogs/BlogsSection";
import ExploreZoomNeatSection from "@/components/blogs/ExploreZoomNeatSection";
import Navbar5 from "@/components/navbar/Navbar5";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs of Imponexpo",
};
const page = () => {
  return (
    <>
      <Navbar5 />
      <BlogsSection />
      <ExploreZoomNeatSection />
      <ExclusiveOfferSection />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default page;
