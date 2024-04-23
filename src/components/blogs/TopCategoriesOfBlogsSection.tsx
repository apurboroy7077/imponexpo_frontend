import React from "react";
import TheSection from "../TheSection";

const TopCategoriesOfBlogsSection = () => {
  return (
    <TheSection>
      <div>
        <div>
          <div>
            <div className="text-sm font-bold">Top Categories of Blogs</div>
          </div>
          <div>
            <div className="mt-5 grid grid-cols-2 gap-5">
              {Array.from({ length: 12 }).map(() => {
                return (
                  <div key={Math.random().toString()}>
                    <div className="bg-[#d3e3fd] py-3 rounded-lg">
                      <div className="flex items-center justify-center">
                        <img
                          className="w-[50%]"
                          src="/icons/hammer.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="text-xs text-center font-bold mt-2">
                          Product Spotlight
                        </div>
                      </div>
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

export default TopCategoriesOfBlogsSection;
