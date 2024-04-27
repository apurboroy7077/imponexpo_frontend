import React from "react";
import TheSection from "../TheSection";

const ExploreZoomNeatSection = () => {
  return (
    <TheSection>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 ">
        <div className="md:w-[25%]">
          <div className="font-bold lg:text-2xl">
            Explore what&apos;s possible with Zoom
          </div>
          <div className="text-sm lg:text-lg mt-1 lg:mt-4 font-medium">
            Our Customers inspires us, see how organizations are using our
            platform to connect.
          </div>
        </div>
        <div className="md:w-[33%]">
          <div
            style={{ boxShadow: "2px 2px 3px black" }}
            className=" flex w-full justify-between gap-3 border-[1px] border-[#e5e5e5] px-2 lg:px-4 py-4 lg:py-6 rounded"
          >
            <div className="min-w-[30%]">
              <img className="w-full" src="/icons/Ellipse-2.png" alt="" />
            </div>
            <div className="w-[60%] ">
              <div className="flex justify-center items-center h-full">
                <div>
                  <div className="text-xs lg:text-base">
                    GHI Solutions, a consultancy firm specializing in project
                    management and implementation.
                  </div>
                  <div className="text-center lg:text-base mt-2 lg:mt-4">
                    <button className="border-[#ff603d] text-[#ff603d] text-sm px-3 py-1 border-[1px] rounded">
                      Read Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[33%]">
          <div
            style={{ boxShadow: "2px 2px 3px black" }}
            className=" flex w-full justify-between gap-3 border-[1px] border-[#e5e5e5] px-2 lg:px-4 py-4 lg:py-6 rounded"
          >
            <div className="min-w-[30%]">
              <img className="w-full" src="/icons/Ellipse-2.png" alt="" />
            </div>
            <div className="w-[60%] ">
              <div className="flex justify-center items-center h-full">
                <div>
                  <div className="text-xs lg:text-base">
                    GHI Solutions, a consultancy firm specializing in project
                    management and implementation.
                  </div>
                  <div className="text-center lg:text-base mt-2 lg:mt-4">
                    <button className="border-[#ff603d] text-[#ff603d] text-sm px-3 py-1 border-[1px] rounded">
                      Read Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default ExploreZoomNeatSection;
