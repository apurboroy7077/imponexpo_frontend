import React from "react";
import TheSection from "./TheSection";

const ProductsCategoryOnImponexpo = () => {
  return (
    <TheSection>
      <div className=" text-center font-bold text-lg md:text-2xl lg:text-3xl">
        Products Category On Imponexpo
      </div>
      <div className=" text-[#454545] text-xs md:text-lg lg:text-xl font-medium text-center my-2 md:my-7">
        Get an Amazing Discount on Great Products
      </div>
      <div className="my-7 md:my-10 lg:my-16">
        <div className="text-xs md:text-sm lg:text-base font-medium flex items-center flex-wrap gap-3 md:gap-5 lg:gap-7">
          <div className="text-[#ff603d] font-bold text-base md:text-lg lg:text-xl">
            Electronics
          </div>
          <div>Deals</div>
          <div>On Going Group Imports</div>
          <div>Trendings</div>
          <div>Top Products</div>
          <div>Latest Deals</div>
          <div>Cheap Prices</div>
        </div>
        <hr className="mt-3 border-[1px] border-[#9ea1a0]" />
      </div>
      <div className="md:flex justify-between">
        <div className="md:w-[40%]">
          <div className="flex justify-between items-center bg-[#fefefe]">
            <div className=" w-[4rem]  border-[#929497] border-[2px] rounded-full p-5">
              <img className="w-full" src="/icons/arrow-left.svg" alt="" />
            </div>
            <div className="">
              <img src="/images/hair-trimmer.png" alt="" />
            </div>
            <div className=" w-[4rem]  border-[#929497] border-[2px] rounded-full p-5">
              <img className="w-full" src="/icons/arrow-right.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="md:w-[50%]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map(() => {
              return (
                <div
                  className=" bg-[#f3f3f3] p-5 rounded"
                  key={Math.random().toString()}
                >
                  <div>
                    <img src="/images/rolex-watch.png" alt="" />
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="my-2 text-center font-medium md:text-xl text-[#ff603d] underline ">
              Explore All
            </div>
          </div>
          <div className="mt-5">
            <div className="font-bold text-lg md:text-2xl lg:text-3xl">
              Suggested Hashtags
            </div>
            <div className="my-5">
              <div
                className="flex gap-2 flex-wrap mt-5 "
                key={Math.random().toString()}
              >
                {[
                  "B2BProducts",
                  "BusinessSolutions",
                  "B2BProducts",
                  "BusinessSolutions",
                  "B2BProducts",
                ].map((data) => {
                  return (
                    <button
                      className=" border-[2px] border-[#2e2f32] text-[#696969] font-medium px-3 lg:px-7 py-1 lg:py-3 rounded md:text-lg lg:text-xl"
                      key={Math.random().toString()}
                    >
                      #{data}{" "}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="my-2 text-center font-medium md:text-xl text-[#ff603d] underline ">
                Explore All
              </div>
            </div>
            <div className="font-bold text-lg md:text-2xl lg:text-3xl">
              Suggested Exporters
            </div>
            <div className="my-5">
              <div
                className="flex gap-2 flex-wrap mt-5 "
                key={Math.random().toString()}
              >
                {[
                  "B2BProducts",
                  "BusinessSolutions",
                  "B2BProducts",
                  "BusinessSolutions",
                  "B2BProducts",
                ].map((data) => {
                  return (
                    <button
                      className=" border-[2px] border-[#2e2f32] text-[#696969] font-medium px-3 lg:px-7 py-1 lg:py-3 rounded md:text-lg lg:text-xl"
                      key={Math.random().toString()}
                    >
                      #{data}{" "}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="my-2 text-center font-medium md:text-xl text-[#ff603d] underline ">
                Explore All
              </div>
            </div>
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default ProductsCategoryOnImponexpo;
