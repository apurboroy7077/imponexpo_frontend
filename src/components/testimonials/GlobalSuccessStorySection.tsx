import React from "react";
import TheSection from "../TheSection";

const GlobalSuccessStorySection = () => {
  return (
    <TheSection>
      <div>
        <div className="font-bold md:text-xl lg:text-2xl">
          Global Success Story
        </div>
      </div>
      <div>
        <div className=" mt-7 md:mt-10 ">
          <img className="w-full" src="/images/travel-map.png" alt="" />
        </div>
      </div>
    </TheSection>
  );
};

export default GlobalSuccessStorySection;
