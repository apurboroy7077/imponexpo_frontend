import React from "react";
import ProductsCard1 from "../ProductsCard1";
import TheSection from "../TheSection";
import { dummyProductData } from "@/data/Other";

const FeaturedBlogsSection = () => {
  return (
    <TheSection>
      <div>
        <div>
          <div className="text-sm font-bold">Featured Blogs on Imponexpo</div>
        </div>
        <div>
          <div className=" mt-5 grid grid-cols-1 ">
            {Array.from({ length: 4 }).map(() => {
              return (
                <ProductsCard1
                  productData={dummyProductData}
                  key={Math.random().toString()}
                />
              );
            })}
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default FeaturedBlogsSection;
