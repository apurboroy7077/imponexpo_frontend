import React from "react";
import TheSection from "../TheSection";

const TrendingSuppliersLiveStream = () => {
  return (
    <TheSection>
      <div>
        <div className="text-lg md:text-2xl lg:text-4xl font-medium">
          Live Stream from Trending Suppliers
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 lg:mt-10">
          {Array.from({ length: 4 }).map(() => {
            return (
              <div key={Math.random().toString()}>
                <div className="bg-[#f3f3f3] rounded-lg overflow-hidden ">
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1 pl-2">
                          <div>
                            <div className="border-[1px] border-[#eb2b2b] p-[3px] rounded-full">
                              <div className="bg-[#eb2b2b]  w-[0.8rem] h-[0.8rem] rounded-full"></div>
                            </div>
                          </div>

                          <div>
                            <div className="text-[#696969] text-lg">Live</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className="bg-[#1d5ec9]  font-bold text-[0.4rem] md:text-xs text-white px-2 md:px-3 py-3 ">
                          <img
                            className="inline w-[1.7rem]"
                            src="/icons/user-plus-solid-white.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center">
                      <img
                        className="w-[7.5rem] h-[7.5rem] object-cover object-center rounded-full"
                        src="/images/messi-smiling.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-center mt-3 font-medium">
                      Horizon Export Co.
                    </div>
                  </div>
                  <div>
                    <div className="mt-1 tex-xs text-center text-[#696969]">
                      @tradesolution1098
                    </div>
                  </div>
                  <div>
                    <div className="text-center text-xs mt-1 mb-5">
                      12.1K followers
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="my-5">
          <div className="flex items-center gap-1 justify-center">
            <div className="text-[#1d5ec9] text-center font-bold md:text-lg">
              See more Channels
            </div>
            <div>
              <img
                className="w-[1.1rem]"
                src="/icons/chevron-down-solid-blue.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default TrendingSuppliersLiveStream;
