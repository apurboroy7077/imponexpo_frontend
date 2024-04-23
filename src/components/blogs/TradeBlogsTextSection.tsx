import React from "react";
import TheSection from "../TheSection";

const TradeBlogsTextSection = () => {
  return (
    <TheSection>
      <div>
        <div>
          <div className="text-sm text-center font-bold">
            International Trade Blogs On Imponexpo{" "}
          </div>
        </div>
        <div>
          <div className="text-center text-xs mt-2 font-medium">
            Get an Amazing Discount on Great Products
          </div>
        </div>
        <div>
          <div className="flex justify-between mt-3">
            <div className="w-[30%]">
              <hr className=" border-[black]" />
            </div>
            <div className="w-[30%]">
              <hr className=" border-[black]" />
            </div>
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default TradeBlogsTextSection;
