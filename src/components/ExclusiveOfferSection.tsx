import React from "react";
import TheSection from "./TheSection";

const ExclusiveOfferSection = () => {
  return (
    <TheSection>
      <div>
        <div className="bg-[#f3f3f3] rounded-lg p-5 md:px-10 md:py-10 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="md:w-[30%]">
            <div className="text-sm md:text-base lg:text-lg font-medium ">
              Get exclusive offers, unique gift ideas, and Personalized Shopping
              tips from imponexpo
            </div>
          </div>
          <div className="md:w-[60%] ">
            <div className="flex">
              <div className="w-[70%]">
                <input
                  className=" w-full  px-3 py-1 md:py-4 text-sm md:text-base font-bold"
                  type="text"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="w-[30%]">
                <button className="  bg-[#ff603d] text-[white] px-3 text-sm py-1 md:py-4 rounded-tr-lg rounded-br-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default ExclusiveOfferSection;
