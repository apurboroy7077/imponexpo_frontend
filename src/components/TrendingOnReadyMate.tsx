import React from "react";
import TheSection from "./TheSection";
import ProductsCard1 from "./ProductsCard1";
import { dummyProductData } from "@/data/Other";
const TrendingOnReadyMate = () => {
  return (
    <TheSection>
      <div className="font-bold text-lg md:text-2xl lg:text-3xl">
        Trending On Ready-Made in Imponexpo Warehouse
      </div>
      <div className="my-7 md:my-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
    </TheSection>
  );
};

export default TrendingOnReadyMate;
