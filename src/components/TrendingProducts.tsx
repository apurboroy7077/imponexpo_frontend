import React from "react";

const TrendingProducts = () => {
  return (
    <section>
      <div className=" px-2 py-10 lg:py-5   flex items-center justify-center">
        <div className="w-full max-w-[100rem] ">
          <div className="text-center font-bold md:text-3xl md:mb-3">
            Trending Products On Imponexpo Channels
          </div>
          <div className="text-center text-xs md:text-xl  text-[#454545] mb-5  font-medium md:mb-10">
            Explore great Products from great Suppliers
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.from({ length: 10 }).map((_, index) => {
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
                        <button className="border-[black] border-[1px] rounded px-4 py-[0.15rem] font-medium">
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
                      <button className="text-[0.5rem] font-bold bg-black text-white px-3 py-1 rounded">
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
                            className="w-[1.5rem]"
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
                            className="w-[1.5rem]"
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
                            className="w-[1.5rem]"
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
                            className="w-[1.5rem]"
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
                        <button className=" font-sans text-sm bg-[#1d5dc7] border-[#1d5dc7] border-[1.5px] px-3 py-2 rounded text-white">
                          Make an Order
                        </button>
                      </div>
                      <div>
                        <button className=" font-sans text-sm border-[#1d5dc7] text-[#1d5dc7] border-[1.5px] px-3 py-2 rounded">
                          Group import
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-5">
            <div className="flex items-center gap-1 justify-center">
              <div className="text-[#ff603d] text-center font-bold md:text-lg">
                See more Channels
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
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
