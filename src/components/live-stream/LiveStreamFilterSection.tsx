import React from "react";
import TheSection from "../TheSection";

const LiveStreamFilterSection = () => {
  return (
    <TheSection>
      <div>
        <div className=" bg-[#f3f3f3] grid grid-cols-4 md:grid-cols-8 gap-3 px-2 py-3 md:py-4 lg:py-5 rounded">
          {[
            "All",
            "Following",
            "Time",
            "Supplier",
            "Category",
            "Product",
            "Trending",
            "Icon",
          ].map((data) => {
            return (
              <div key={Math.random().toString()}>
                <div className="text-center text-[#0e1514] font-medium text-sm lg:text-lg">
                  {data}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-3 mt-5 md:py-5 lg:py-10">
          <div>
            <div className="text-center">
              <button className="text-xs lg:text-lg border-[1px] border-[#ff603d] text-[#0e1514] px-2 md:px-5 lg:px-10 py-1 md:py-2 rounded-lg md:rounded-2xl lg:rounded-3xl">
                {"Last 24 hours"}
              </button>
            </div>
          </div>
          {["Last 07 days", "Last 14 days", "This month"].map((data) => {
            return (
              <div key={Math.random().toString()}>
                <div className="text-center">
                  <button className="text-xs lg:text-lg border-[1px] border-[#b9b9b9] text-[#c2c2c2] px-2 md:px-5 lg:px-10 py-1 md:py-2 rounded-lg md:rounded-2xl lg:rounded-3xl">
                    {data}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="mt-5 lg:mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 21 }).map(() => {
            return (
              <div key={Math.random().toString()}>
                <iframe
                  className="w-full h-[20rem]  md:h-[20rem] lg:h-[30rem] rounded-lg"
                  src="https://www.youtube.com/embed/7PIji8OubXU?si=nW3MH-1C1YeE9iFS"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </TheSection>
  );
};

export default LiveStreamFilterSection;
