"use client";
import React from "react";
import TheSection from "../TheSection";

const TrendingLiveStreamSection = () => {
  return (
    <TheSection>
      <div>
        <div className="text-lg md:text-2xl lg:text-4xl font-medium">
          Our Trending Live Streams
        </div>
      </div>
      <div>
        <div className="mt-5  md:mt-7 lg:mt-10 flex gap-2 lg:gap-5 overflow-x-auto scrollbar-1">
          {Array.from({ length: 10 }).map(() => {
            return (
              <div key={Math.random().toString()}>
                <div className=" w-[4.2rem] md:w-[7rem] lg:w-[10rem]">
                  <div>
                    <div className="flex items-center justify-center">
                      <div className=" relative border-[1px] border-[#ff603d] w-fit rounded-full p-1">
                        <div>
                          <div className="rounded-full w-fit overflow-hidden">
                            <img
                              className="h-[3.5rem] md:h-[5rem] lg:h-[7rem] max-w-[3.5rem]  md:max-w-[5rem] lg:max-w-[7rem] min-w-[3.5rem] md:min-w-[5rem] lg:min-w-[7rem] object-cover object-center"
                              src="/images/messi-smiling.jpg"
                              alt=""
                            />
                          </div>
                        </div>

                        <div className=" absolute  text-nowrap  top-0 left-0 text-[0.6rem] md:text-xs bg-[#F13232] text-white w-fit px-[5px] rounded-[2px]">
                          Live
                          <img
                            className="inline w-[0.4rem]"
                            src="/icons/circle-solid-white.svg "
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className=" mt-1 text-center text-[0.5rem] lg:text-xs font-medium">
                      Global Trade Solutions Inc.
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="mt-5 md:mt-10 lg:mt-16">
          <div className="relative flex flex-col md:flex-row gap-5 md:gap-0">
            <div className="md:w-[70%] ">
              <iframe
                className="w-full h-[20rem]  md:h-[45rem] lg:h-[45rem] rounded-lg"
                src="https://www.youtube.com/embed/7PIji8OubXU?si=nW3MH-1C1YeE9iFS"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="md:w-[30%]">
              <div className="bg-[#f3f3f3] md:min-h-[45rem] rounded-lg px-2 lg:px-5 py-2 md:py-5">
                <div>
                  <div className="text-lg font-bold">About Products</div>
                </div>
                <div>
                  <div className="text-[#ff603d] font-bold">Name</div>
                </div>
                <div>
                  <div className="font-medium text-[#0e1514] mt-1">
                    RadiantGlow Facial Serum
                  </div>
                </div>
                <div>
                  <div className="font-medium text-[#0e1514] mt-1">
                    RadiantGlow Intense Repair Serum
                  </div>
                </div>
                <div>
                  <div className="font-medium text-[#0e1514] mt-1">
                    RadiantGlow Hydrating Serum
                  </div>
                </div>
                <div>
                  <div className="text-[#ff603d] font-bold mt-2">Quantity</div>
                </div>
                <div>
                  <div className="font-medium text-[#0e1514] mt-1">30ml</div>
                </div>
                <div>
                  <div className="font-medium text-[#0e1514]">50ml</div>
                </div>
                <div>
                  <div className="text-[#ff603d] font-bold mt-2">Price</div>
                </div>
                <div>
                  <div className="font-medium text-[#0e1514] mt-1 flex justify-between items-center">
                    <div>$19.99-$300.0</div>
                    <div>700 Pieces</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-[#0e1514]  flex justify-between items-center">
                    <div>$19.99-$500.0</div>
                    <div>800 Pieces</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-[#0e1514]  flex justify-between items-center">
                    <div>$19.99-$800.0</div>
                    <div>900 Pieces</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-[#0e1514] flex justify-between items-center">
                    <div>$19.99-$10,000.0</div>
                    <div>1,000 Pieces</div>
                  </div>
                </div>
                <div>
                  <div className="text-[#ff603d] font-bold mt-2">
                    Other Charges
                  </div>
                </div>
                <div>
                  <div className="font-medium text-[#0e1514] flex justify-between items-center">
                    <div>Shipping</div>
                    <div>US $2.20</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-[#0e1514] flex justify-between items-center">
                    <div>Quality Checking</div>
                    <div>US $5.35</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-[#0e1514] flex justify-between items-center">
                    <div>Shipping</div>
                    <div>US $2.20</div>
                  </div>
                </div>
                <div>
                  <div className="mt-5">
                    <button className="w-full bg-[#1d5ec9] text-white font-bold py-2 rounded-lg">
                      Make an Order
                    </button>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-[#0e1514] mt-3">
                    Not meeting up with the Minimum Quantity? Don&apos;t worry,
                    you can
                  </div>
                </div>
                <div>
                  <div className="mt-5">
                    <button className="w-full border-[#1d5ec9] border-[2px] text-[#1d5ec9] font-bold py-2 rounded-lg">
                      Group Import
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 w-[50%] md:w-[35%] h-[20rem] md:h-[45rem] ">
              {/* LIVE CHAT SECTION STARTS---------------------------------------------------------------------------------------- */}
              <div className="bg-black flex flex-col justify-between bg-opacity-50 backdrop-blur-sm h-full px-1 md:px-3 py-2 md:py-4 rounded-lg overflow-hidden">
                <div className=" ">
                  <div className=" h-[15rem] md:h-[39rem] overflow-y-scroll scrollbar-2 flex flex-col gap-3 ">
                    {Array.from({ length: 15 }).map(() => {
                      return (
                        <div key={Math.random().toString()}>
                          <div className="flex gap-1  items-center">
                            <div className="">
                              <img
                                className="min-w-[2.5rem] md:min-w-[4rem] h-[2.5rem] md:h-[4rem] object-center object-cover rounded-full"
                                src="/images/messi-smiling.jpg"
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="text-[0.5rem] md:text-xs text-white font-bold">
                                SkincareAddict99 - 0:00:56
                              </div>
                              <div className=" text-[0.45rem] md:text-[0.65rem] md:mt-1 text-white">
                                Efficient B2B Platform, Simplified Procurement
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <form>
                  <div className="mt-5 lg:mb-10 relative">
                    <input
                      className="bg-[white] rounded outline-none text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 pr-9 lg:pr-11 w-full"
                      placeholder="Send Message"
                      type="text"
                    />
                    <button className="absolute top-1 lg:top-[0.40rem] right-3">
                      <img
                        className=" active:scale-[0.95]  w-[1.1rem] lg:w-[1.3rem]"
                        src="/icons/paper-plane-solid-2.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </form>
              </div>
              {/* LIVE CHAT SECTION ENDS---------------------------------------------------------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-3 md:mt-7 lg:mt-16">
          <div>
            <div className="font-bold md:text-xl lg:text-2xl">
              Beauty Voyage: Explore Skincare Marvels with SkinElegance Exports
            </div>
          </div>
          <div>
            <div className="mt-2 text-xs md:text-sm font-medium opacity-[0.9]">
              Transform the way you sell online with our complete video commerce
              solution by providing improved Product Experience, Real-time
              Engagement & Shoppertainment to your Buyers.
            </div>
          </div>
          <div>
            <div className="mt-5 md:mt-7">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div>
                      <img
                        className="md:w-[5rem]"
                        src="/icons/ellipse.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="flex flex-col md:gap-1">
                        <div className="text-[0.5rem] md:text-sm font-medium">
                          @skinelegance export
                        </div>
                        <div>
                          <button className="bg-[#1d5ec9]  font-bold text-[0.4rem] md:text-xs text-white px-2 md:px-3 py-1   rounded">
                            Follow{" "}
                            <img
                              className="inline w-[1rem]"
                              src="/icons/user-plus-solid-white.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 md:gap-7">
                    {Array.from({ length: 4 }).map(() => {
                      return (
                        <div key={Math.random().toString()}>
                          <div className="flex items-center flex-col gap-1 ">
                            <div>
                              <img
                                className="w-[1rem] md:w-[2rem]"
                                src="/icons/love.svg"
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="text-[0.25rem] md:text-xs text-center">
                                8000 comments
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
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default TrendingLiveStreamSection;
