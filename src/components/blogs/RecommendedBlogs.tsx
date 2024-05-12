import React from "react";
import TheSection from "../TheSection";
import ProductsCard1 from "../ProductsCard1";
import { dummyProductData } from "@/data/Other";

const RecommendedBlogs = () => {
  return (
    <TheSection>
      <div>
        <div className="mt-10">
          <div>
            <div className="text-sm font-bold">Recommended Blogs for you</div>
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
      </div>
    </TheSection>
  );
};

export default RecommendedBlogs;
