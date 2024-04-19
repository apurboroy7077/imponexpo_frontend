import React from "react";
import TheSection from "./TheSection";

const ImporterCentricToolSection = () => {
  return (
    <TheSection>
      <div>
        <div className=" text-center font-bold text-lg md:text-2xl lg:text-3xl">
          {" "}
          ImporterCentricToolSection
        </div>
      </div>
      <div>
        <div className="font-medium text-sm  md:text-base lg:text-xl text-center my-2 md:my-7 lg:my-10">
          Optimize Your Imports with our powerful tools. From seamless customs
          to real time tracking, we got you covered.
        </div>
      </div>
      <div>
        <div className="border-[#e5e5e5]  border-[0.4rem] md:rounded-[8rem] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[0.4rem]   bg-[#e5e5e5] ">
            <div>
              <div className="bg-[#1d5ec9]">
                <div>
                  <div className="flex justify-center py-5">
                    <img
                      className="w-[50%] rounded-full"
                      src="/images/air-hostess.avif"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[white] md:text-base lg:text-lg font-medium text-center py-2 md:pb-4">
                    Want to Travel Abroad for your Business Trip?
                  </div>
                </div>
                <div>
                  <div className="text-center pt-1 pb-5 md:pb-9">
                    <button className="text-xs md:text-sm text-[#1d5dc7] bg-[#ffffff] px-2 md:px-4 py-2 md:py-3 rounded hover:scale-[1.05] active:scale-[1] min-w-[60%]">
                      Need Help?
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {Array.from({ length: 5 }).map(() => {
              return (
                <div key={Math.random().toString()}>
                  <div className="bg-[#ffffff]">
                    <div>
                      <div className="flex justify-center py-5">
                        <img
                          className="w-[50%] rounded-full"
                          src="/images/air-hostess.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm md:text-base lg:text-lg font-medium text-center py-2 md:pb-4">
                        Want to Travel Abroad for your Business Trip?
                      </div>
                    </div>
                    <div>
                      <div className="text-center pt-1 pb-5 md:pb-9">
                        <button className="text-xs md:text-sm bg-[#1d5dc7] text-[white] px-2 md:px-4 py-2 md:py-3 rounded hover:scale-[1.05] active:scale-[1] min-w-[60%]">
                          Book your Visa, Flight and Accomdation
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default ImporterCentricToolSection;
