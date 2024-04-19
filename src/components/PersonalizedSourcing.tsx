import React from "react";
import TheSection from "./TheSection";

const PersonalizedSourcing = () => {
  return (
    <TheSection>
      <div>
        <div className=" text-center md:py-2 lg:py-3 mb-5 md:mb-7 lg:mb-10  font-bold text-lg md:text-2xl lg:text-3xl">
          Personalized Sourcing for you!
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, index) => {
            return (
              <div
                className="m-auto w-[19rem] lg:w-[100%]  border-[#e5e5e5] border-[2px] rounded-lg"
                key={Math.random().toString()}
              >
                <div className=" px-2 py-1 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div>
                      <img
                        className="min-w-[3rem]"
                        src="/icons/ellipse.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="text-[0.6rem] font-bold">
                        Skinelegance Exports
                      </div>
                      <div className="text-[0.5rem] text-[#696969] font-bold">
                        @Skineleganceexports
                      </div>
                      <div className="text-[0.5rem]">United States</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[0.5rem]">
                      <button className="border-[black] border-[1px] rounded px-4 py-[0.15rem] hover:bg-[black] hover:text-[white] font-medium active:scale-[0.99]">
                        Follow
                      </button>
                    </div>
                    <div className="text-[0.5rem] font-bold mt-1 text-[#4e4e4e]">
                      1.2k followers
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-center">
                    <button className=" text-[0.5rem] font-bold bg-black text-white px-3 py-1 rounded hover:scale-[1.05]">
                      Contact Supplier
                    </button>
                  </div>
                </div>
                <hr className="my-2" />
                <div>
                  <div>
                    <img className="w-full" src="/images/shoe.png" alt="" />
                  </div>
                </div>
                <hr className="my-2" />
                <div className="px-2 py-1">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col items-center">
                      <div>
                        <img
                          className="w-[1.5rem] hover:scale-[1.05]"
                          src="/icons/love.svg"
                          alt=""
                        />
                      </div>
                      <div className="text-[#696969] text-[0.7rem] font-bold">
                        9,200
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div>
                        <img
                          className="w-[1.5rem] hover:scale-[1.05]"
                          src="/icons/message.svg"
                          alt=""
                        />
                      </div>
                      <div className="text-[#696969] text-[0.7rem] font-bold">
                        5,900
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div>
                        <img
                          className="w-[1.5rem] hover:scale-[1.05]"
                          src="/icons/share.svg"
                          alt=""
                        />
                      </div>
                      <div className="text-[#696969] text-[0.7rem] font-bold">
                        2,300
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div>
                        <img
                          className="w-[1.5rem] hover:scale-[1.05]"
                          src="/icons/love.svg"
                          alt=""
                        />
                      </div>
                      <div className="text-[#696969] text-[0.7rem] font-bold">
                        7,350
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-bold mt-2 ">
                    Sleek, wireless earbuds for immersive sound
                  </div>
                  <div className="text-xs">#sellers #shoes #china</div>
                  <div className="text-[0.5rem] my-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Beatae, vitae magni voluptate corporis doloremque
                    voluptatum. Beatae ipsa vel, animi quo eum labore
                    perspiciatis ab asperiores ut odit est quia libero.
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-medium">$79.99-$299.9</div>
                    <div className="text-xs font-medium text-[#696969]">
                      Min 20 Units
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 mb-2">
                    <div>
                      <button className=" font-sans text-sm bg-[#1d5dc7] border-[#1d5dc7] border-[1.5px] px-3 py-2 rounded text-white hover:scale-[1.02] active:scale-[0.97]">
                        Make an Order
                      </button>
                    </div>
                    <div>
                      <button className=" font-sans text-sm border-[#1d5dc7] text-[#1d5dc7] border-[1.5px] px-3 py-2 rounded hover:scale-[1.02] active:scale-[0.97]">
                        Group import
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="my-2 md:my-5 lg:my-10 text-center font-medium md:text-xl text-[#ff603d] underline ">
          Explore All
        </div>
      </div>
    </TheSection>
  );
};

export default PersonalizedSourcing;
