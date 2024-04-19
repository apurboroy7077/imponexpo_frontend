import React from "react";
import TheSection from "./TheSection";

const SourceByRegionSection = () => {
  return (
    <TheSection>
      <div>
        <div className="bg-[#f3f3f3] p-2 md:p-7 lg:p-10 lg:px-16 rounded-lg">
          <div>
            <div className=" text-center md:py-5 lg:py-7  font-bold text-lg md:text-2xl lg:text-3xl">
              Source By Region
            </div>
          </div>
          <div>
            <div className=" py-5 md:pb-7 lg:pb-8">
              <select className="w-full text-[#696969] border-[#1d5ec9] border-[2px] px-3 lg:px-5 py-2 lg:py-4 rounded-lg text-sm md:text-base lg:text-lg ">
                <option>Select Country Or Region Here</option>
                <option>Nigeria</option>
                <option>United States</option>
              </select>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pb-5 md:pb-7">
              <div>
                <select className="w-full border-[black] border-[2px] px-3 py-2 rounded-lg text-sm md:text-base lg:text-lg ">
                  <option>Africa</option>
                  <option>Nigeria</option>
                  <option>United States</option>
                </select>
              </div>
              <div>
                <select className="w-full border-[black] border-[2px] px-3 py-2 rounded-lg text-sm md:text-base lg:text-lg ">
                  <option>America</option>
                  <option>Nigeria</option>
                  <option>United States</option>
                </select>
              </div>
              <div>
                <select className="w-full border-[black] border-[2px] px-3 py-2 rounded-lg text-sm md:text-base lg:text-lg ">
                  <option>Europe</option>
                  <option>Nigeria</option>
                  <option>United States</option>
                </select>
              </div>
              <div>
                <select className="w-full border-[black] border-[2px] px-3 py-2 rounded-lg text-sm md:text-base lg:text-lg ">
                  <option>Oceania</option>
                  <option>Nigeria</option>
                  <option>United States</option>
                </select>
              </div>
              <div>
                <select className="w-full border-[black] border-[2px] px-3 py-2 rounded-lg text-sm md:text-base lg:text-lg ">
                  <option>Asia</option>
                  <option>Nigeria</option>
                  <option>United States</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-5 md:gap-6 lg:gap-10 py-5 md:py-7 lg:py-10">
              {Array.from({ length: 18 }).map(() => {
                return (
                  <div key={Math.random().toString()}>
                    <div>
                      <img src="/icons/kfc.svg" alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default SourceByRegionSection;
