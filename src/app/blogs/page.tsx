import Navbar2 from "@/components/Navbar2";
import BlogsByRegionSection from "@/components/blogs/BlogsByRegionSection";
import BlogsHeroSection from "@/components/blogs/BlogsHeroSection";
import FeaturedBlogsSection from "@/components/blogs/FeaturedBlogsSection";
import RecommendedBlogs from "@/components/blogs/RecommendedBlogs";
import TopCategoriesOfBlogsSection from "@/components/blogs/TopCategoriesOfBlogsSection";
import TradeBlogsTextSection from "@/components/blogs/TradeBlogsTextSection";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar2 />
      <BlogsHeroSection />
      <TradeBlogsTextSection />
      <TopCategoriesOfBlogsSection />
      <FeaturedBlogsSection />
      <BlogsByRegionSection />
      <RecommendedBlogs />
    </>
  );
};

export default page;
