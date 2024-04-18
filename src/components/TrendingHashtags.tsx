import React from "react";
import TheSection from "./TheSection";

const TrendingHashtags = () => {
  return (
    <TheSection>
      <div className="font-bold text-lg md:text-2xl lg:text-3xl">
        Dive Deeper into Our Trending Hashtags
      </div>
      <div className="flex justify-between items-center md:mt-2">
        <div className="font-medium text-lg md:text-2xl">Trending Hashtags</div>
        <div className="font-medium text-[#ff603d] underline md:text-2xl">
          Browse Now
        </div>
      </div>
      <div className="mt-5">
        <div className="flex gap-2 flex-wrap">
          {[
            "BusinessSolutions",
            "BulkOrders",
            "DistributionHub",
            "BulkSavings",
            "BulkBuys",
          ].map((data) => {
            return (
              <button
                className="bg-[#696969] text-white font-medium px-3 lg:px-7 py-1 lg:py-3 rounded md:text-lg lg:text-xl"
                key={Math.random().toString()}
              >
                #{data}{" "}
                <img
                  className="inline w-[1rem] ml-1 "
                  src="/icons/fire-icon.png"
                  alt=""
                />
              </button>
            );
          })}
        </div>
        <div className="flex gap-2 flex-wrap mt-5 ">
          {[
            "B2BProducts",
            "BusinessSolutions",
            "B2BProducts",
            "BusinessSolutions",
            "B2BProducts",
          ].map((data) => {
            return (
              <button
                className="bg-[#979797] text-white font-medium px-3 lg:px-7 py-1 lg:py-3 rounded md:text-lg lg:text-xl"
                key={Math.random().toString()}
              >
                #{data}{" "}
              </button>
            );
          })}
        </div>
        <div
          className="flex gap-2 flex-wrap mt-5 "
          key={Math.random().toString()}
        >
          {[
            "BusinessSolutions",
            "B2BProducts",
            "BusinessSolutions",
            "B2BProducts",
            "BusinessSolutions",
          ].map((data) => {
            return (
              <button
                className="bg-[#979797] text-white font-medium px-3 lg:px-7 py-1 lg:py-3 rounded md:text-lg lg:text-xl"
                key={Math.random().toString()}
              >
                #{data}{" "}
              </button>
            );
          })}
        </div>
        <div
          className="flex gap-2 flex-wrap mt-5 "
          key={Math.random().toString()}
        >
          {[
            "B2BProducts",
            "BusinessSolutions",
            "B2BProducts",
            "BusinessSolutions",
            "B2BProducts",
          ].map((data) => {
            return (
              <button
                className=" border-[2px] border-[#2e2f32] text-[#696969] font-medium px-3 lg:px-7 py-1 lg:py-3 rounded md:text-lg lg:text-xl"
                key={Math.random().toString()}
              >
                #{data}{" "}
              </button>
            );
          })}
        </div>
      </div>
    </TheSection>
  );
};

export default TrendingHashtags;
