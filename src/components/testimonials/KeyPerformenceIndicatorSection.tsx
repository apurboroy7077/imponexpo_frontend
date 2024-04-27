import React from "react";
import TheSection from "../TheSection";

const KeyPerformenceIndicatorSection = () => {
  return (
    <TheSection>
      <div>
        <div className="font-bold md:text-xl lg:text-2xl">
          Key Performence Indicators Revealed
        </div>
      </div>
      <div>
        <div className="mt-5 lg:mt-16 flex flex-col md:flex-row justify-around items-center gap-5">
          <div className="md:w-[30%]  flex justify-center items-center">
            <div>
              <div className="font-medium md:text-lg lg:text-xl text-center">
                Unlocking Insights
              </div>
              <div className="text-sm lg:text-base text-center font-medium text-[#696969] mt-1 lg:mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum autem labore vel quos error dolore doloremque
                delectus architecto sed tempore.
              </div>
              <div className="mt-3 lg:mt-6 text-center">
                <button className="bg-[#1d5ec9] text-sm lg:text-base font-medium text-white px-3 lg:px-7 py-1 lg:py-2 rounded">
                  Learn More{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[65%]">
            <div className=" grid grid-cols-3 gap-5 lg:gap-10">
              {Array.from({ length: 6 }).map(() => {
                return (
                  <div key={Math.random().toString()}>
                    <div>
                      <div className="text-center font-medium text-2xl lg:text-4xl">
                        25B
                      </div>
                      <div className="text-center font-medium text-[#696969]">
                        Keywords{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" bg-[#fff7f5]   rounded mt-10 lg:mt-16 flex flex-col md:flex-row justify-around items-center md:gap-5">
          <div className="md:w-[50%]  flex justify-center items-center">
            <div>
              <div className="font-medium md:text-lg lg:text-xl text-center">
                Work Seamlessly, Connect Remotely, Get things Done.
              </div>
              <div className="text-sm lg:text-base text-center font-medium text-[#696969] mt-1 lg:mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum autem labore vel quos error dolore doloremque
                delectus architecto sed tempore.
              </div>
              <div className="mt-3 lg:mt-6 text-center">
                <button className="border-[#1d5ec9] text-[#1d5ec9] border-[2px] text-sm lg:text-base font-medium  px-3 lg:px-7 py-1 lg:py-2 rounded">
                  Connect and Collaborate
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] ">
            <div className="flex items-center justify-center">
              <img
                className="w-full md:w-[70%]"
                src="/images/hand-shake.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default KeyPerformenceIndicatorSection;
