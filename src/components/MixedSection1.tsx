import React from "react";
import TheSection from "./TheSection";

const MixedSection1 = () => {
  return (
    <section>
      <div className=" px-2 py-7 lg:py-16   flex items-center justify-center">
        <div className="flex flex-col md:flex-row gap-5  w-full max-w-[100rem] bg-[#f3f3f3] rounded p-2 md:p-5">
          <div className="bg-[#fff7f5] md:max-w-[30%] p-2 md:p-5 rounded-lg">
            <div className="w-full my-3 text-center font-bold text-lg md:text-2xl lg:text-3xl">
              New Products
            </div>
            <div className="">
              <div className=" flex flex-col gap-5">
                {Array.from({ length: 4 }).map((_, index) => {
                  return (
                    <div
                      className="m-auto w-[100%] bg-[#fefefe]  border-[#e5e5e5] border-[2px] rounded-lg"
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
                            <button className="bg-[#f3f3f3]  w-full rounded px-4 py-[0.15rem] hover:bg-[black] hover:text-[white] font-medium active:scale-[0.99]">
                              Follow
                            </button>
                          </div>
                          <div>
                            <button className=" w-full border-[1px] border-black text-[0.5rem] font-bold bg-white text-black px-3 py-1 rounded hover:scale-[1.05]">
                              Contact Supplier
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* <div>
                        <div className="text-center">
                          <button className=" text-[0.5rem] font-bold bg-black text-white px-3 py-1 rounded hover:scale-[1.05]">
                            Contact Supplier
                          </button>
                        </div>
                      </div> */}
                      <hr className="mt-2" />
                      <div>
                        <div className="bg-[#f7f7f7] py-5">
                          <img
                            className="w-[80%] m-auto"
                            src="/images/tv.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <hr className="mb-2" />
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
                          elit. Beatae, vitae magni voluptate corporis
                          doloremque voluptatum. Beatae ipsa vel, animi quo eum
                          labore perspiciatis ab asperiores ut odit est quia
                          libero.
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
              <div className="my-2 text-center font-medium text-[#0e1514] underline ">
                Browse Now
              </div>
            </div>
          </div>
          <div className="bg-[#fff7f5] md:max-w-[40%] p-2 md:p-5 rounded-lg">
            <div className=" my-3 text-center font-bold text-lg md:text-2xl lg:text-3xl">
              Trending Products On ImpoNexpo Customized
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {Array.from({ length: 16 }).map(() => {
                  return (
                    <div
                      className="bg-[#f3f3f3] py-5 rounded"
                      key={Math.random().toString()}
                    >
                      <div>
                        <img
                          className="w-[60%] m-auto"
                          src="/images/tshirt.png"
                          alt=""
                        />
                      </div>
                      <div className="text-center font-bold mt-3">
                        Men&apos;s Clothing
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="my-2 text-center font-medium text-[#0e1514] underline ">
                Browse Now
              </div>
            </div>
          </div>
          <div className="bg-[#fff7f5] md:max-w-[30%] p-2 md:p-5 rounded-lg">
            <div className="w-full my-3 text-center font-bold text-lg md:text-2xl lg:text-3xl">
              On-Going Group Import
            </div>
            <div className="">
              <div className="flex flex-col gap-5 ">
                {Array.from({ length: 6 }).map(() => {
                  return (
                    <div
                      className="p-2 bg-[#f3f3f3] rounded-lg md:px-4"
                      key={Math.random().toString()}
                    >
                      <div className="flex gap-2">
                        <div className="w-[35%]">
                          <img src="/images/jacket.png" alt="" />
                        </div>
                        <div className="w-[65%]">
                          <hr className="mt-5 mb-1" />
                          <div className="text-xs text-end text-[#696969]">
                            Product Seller
                          </div>
                          <div className="text-xs text-end text-[#696969]">
                            10000 Pieces
                          </div>
                          <div className="text-xs text-end text-[#696969]">
                            Nigeria
                          </div>
                          <div className="text-xs text-end text-[#696969]">
                            Worldwide
                          </div>
                          <div className="text-xs text-end text-[#696969]">
                            22 April, 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="my-2 text-center font-medium text-[#0e1514] underline ">
                Browse Now
              </div>
            </div>
            <div className=" my-3 text-center font-bold text-lg md:text-2xl lg:text-3xl">
              Free Shipping Products
            </div>
            <div className="">
              <div className=" flex flex-col gap-5">
                {Array.from({ length: 2 }).map((_, index) => {
                  return (
                    <div
                      className="m-auto w-[100%] bg-[#fefefe]  border-[#e5e5e5] border-[2px] rounded-lg"
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
                            <button className="bg-[#f3f3f3]  w-full rounded px-4 py-[0.15rem] hover:bg-[black] hover:text-[white] font-medium active:scale-[0.99]">
                              Follow
                            </button>
                          </div>
                          <div>
                            <button className=" w-full border-[1px] border-black text-[0.5rem] font-bold bg-white text-black px-3 py-1 rounded hover:scale-[1.05]">
                              Contact Supplier
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* <div>
                        <div className="text-center">
                          <button className=" text-[0.5rem] font-bold bg-black text-white px-3 py-1 rounded hover:scale-[1.05]">
                            Contact Supplier
                          </button>
                        </div>
                      </div> */}
                      <hr className="mt-2" />
                      <div>
                        <div className="bg-[#f7f7f7] py-5">
                          <img
                            className="w-[80%] m-auto"
                            src="/images/tv.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <hr className="mb-2" />
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
                          elit. Beatae, vitae magni voluptate corporis
                          doloremque voluptatum. Beatae ipsa vel, animi quo eum
                          labore perspiciatis ab asperiores ut odit est quia
                          libero.
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
              <div className="my-2 text-center font-medium text-[#0e1514] underline ">
                Browse More
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MixedSection1;
