import React from "react";
import TheSection from "../TheSection";
import ProductsCard1 from "../ProductsCard1";
import TradeBlogsTextSection from "./TradeBlogsTextSection";

const BlogsHeroSection = () => {
  return (
    <TheSection>
      <div
        className=" bg-cover bg-center px-2 py-3"
        style={{
          backgroundImage: `url("/images/blog-hero-section-background-image.png")`,
        }}
      >
        <div>
          <div className="text-center font-bold">
            Welcome to Imponexpo Blogs, Knowledge Base and News
          </div>
        </div>
        <div>
          <div className="text-xs text-[white] font-bold text-center mt-2">
            Your Gateway to Insights, News and Experties in International Trade
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default BlogsHeroSection;
