import React from "react";
import TheSection from "../TheSection";

const LiveStreamFromCategorySection = () => {
  return (
    <TheSection>
      <div>
        <div className="text-lg md:text-2xl lg:text-4xl font-medium">
          Livestreams From Categories
        </div>
      </div>
      <div>
        <div className="mt-5 lg:mt-7 grid gap-5 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
          {Array.from({ length: 12 }).map(() => {
            return (
              <div key={Math.random().toString()}>
                <div>
                  <div>
                    <div className="bg-[#f6f6f8] flex items-center justify-center rounded-lg py-2 md:py-5">
                      <img
                        className="max-h-[5rem] md:max-h-[7rem] lg:max-h-[8rem]"
                        src="/images/rolex-watch.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-center mt-2">
                      Expensive Products
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </TheSection>
  );
};

export default LiveStreamFromCategorySection;
