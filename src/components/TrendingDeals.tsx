import React from "react";
import TheSection from "./TheSection";

const TrendingDeals = () => {
  return (
    <TheSection>
      <div>
        <div className="flex flex-col gap-2 md:flex-row justify-between md:items-center">
          <div className="font-bold text-lg md:text-2xl lg:text-3xl">
            Trending On Imponexpo Deals
          </div>
          <div className="md:text-lg">
            Ends in
            <span className="bg-[#ff603d] p-1 rounded font-medium text-white ml-1 md:ml-3">
              04
            </span>{" "}
            :{" "}
            <span className="bg-[#ff603d] p-1 rounded font-medium text-white ">
              24
            </span>{" "}
            :{" "}
            <span className="bg-[#ff603d] p-1 rounded font-medium text-white ">
              39
            </span>
          </div>
        </div>
      </div>
      <div className="my-5">
        <div className="flex flex-wrap gap-3 font-medium md:text-xl">
          <div>All</div>
          <div>Cannels</div>
          <div>Live Stream</div>
          <div>Readymade</div>
          <div>OEM/ODM</div>
          <div>Latest Deal</div>
        </div>
      </div>
      <div>
        <div>By Deals Category</div>
      </div>
    </TheSection>
  );
};

export default TrendingDeals;
