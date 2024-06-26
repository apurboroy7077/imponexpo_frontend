import React from "react";
import TheSection from "./TheSection";

const TrendingDeals = () => {
  return (
    <TheSection>
      <div>
        <div className="flex flex-col gap-2 md:flex-row justify-between md:items-center">
          <div className="font-bold text-lg md:text-2xl lg:text-3xl">
            Trending On Imponexpo Deals
          </div>
          <div className="md:text-lg">
            Ends in
            <span className="bg-[#ff603d] p-1 rounded font-medium text-white ml-1 md:ml-3">
              04
            </span>{" "}
            :{" "}
            <span className="bg-[#ff603d] p-1 rounded font-medium text-white ">
              24
            </span>{" "}
            :{" "}
            <span className="bg-[#ff603d] p-1 rounded font-medium text-white ">
              39
            </span>
          </div>
        </div>
      </div>
      <div className="my-5 md:my-10">
        <div className="flex flex-wrap gap-3 md:gap-7 font-medium md:text-xl">
          <div className="text-[#ff603d]">All</div>
          <div>Cannels</div>
          <div>Live Stream</div>
          <div>Readymade</div>
          <div>OEM/ODM</div>
          <div>Latest Deal</div>
        </div>
      </div>
      <div className="md:mt-10">
        <div className="md:flex gap-5">
          <div className="bg-[#f3f3f3] rounded p-2 md:p-5 md:w-[25%]">
            <div className="font-bold text-lg md:text-2xl lg:text-3xl">
              By Deals Category
            </div>
            <div className="mt-2 md:mt-7">
              <div className="font-medium text-[#505059] flex md:flex-col flex-wrap gap-3 md:gap-6 md:text-xl">
                <div className="text-[#ff603d] font-bold bg-[#fefefe] px-5 py-1 rounded">
                  Apparels
                </div>
                <div>Jewelry</div>
                <div>E-Commerce Platforms</div>
                <div>Marketing Automation</div>
                <div>Accounting</div>
                <div>CRM</div>
                <div>Expense Management</div>
                <div>ERP Systems</div>
                <div>Online Backup</div>
              </div>
            </div>
          </div>
          <div className="md:w-[75%]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, index) => {
                return (
                  <div
                    className="m-auto w-[100%]  border-[#e5e5e5] border-[2px] rounded-lg"
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Beatae, vitae magni voluptate corporis doloremque
                        voluptatum. Beatae ipsa vel, animi quo eum labore
                        perspiciatis ab asperiores ut odit est quia libero.
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="font-medium">$79.99-$299.9</div>
                        <div className="text-xs font-medium text-[#696969]">
                          Min 20 Units
                        </div>
                      </div>
                      <div className="flex gap-2 items-center justify-between mt-4 mb-2">
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
        </div>
      </div>
      <div className="my-5">
        <div className="flex items-center gap-1 justify-center">
          <div className="text-[#ff603d] text-center font-bold md:text-lg">
            See more Categories
          </div>
          <div>
            <img
              className="w-[1.1rem]"
              src="/icons/arrow-down-orange.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default TrendingDeals;
