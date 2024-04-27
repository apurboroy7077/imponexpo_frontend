"use client";
import React from "react";
import TheSection from "../TheSection";
import Image from "next/image";

const FeaturedUserStoriesSection = () => {
  return (
    <TheSection>
      <div>
        <div className="font-bold md:text-xl lg:text-2xl">
          Featured User Stories
        </div>
      </div>
      <div>
        <div className="mt-5 flex flex-col md:flex-row justify-between gap-10">
          <div className="md:w-[35%]">
            <input
              className=" w-full pb-1 pl-1 outline-none border-b-[2px] border-b-[#1d5ec9]"
              type="text"
              placeholder="Search user stories here"
            />
          </div>
          <div className="md:w-[20%]">
            <select className="w-full pb-1 bg-transparent outline-none border-b-[#b2b2b2] border-b-[2px]">
              <option>Products</option>
              <option>Test</option>
            </select>
          </div>
          <div className="md:w-[20%]">
            <select className="w-full pb-1 bg-transparent outline-none border-b-[#b2b2b2] border-b-[2px]">
              <option>Industries</option>
              <option>Test</option>
            </select>
          </div>
          <div className="md:w-[20%]">
            <select className="w-full pb-1 bg-transparent outline-none border-b-[#b2b2b2] border-b-[2px]">
              <option>Countries</option>
              <option>Test</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-10">
          {Array.from({ length: 9 }).map(() => {
            return (
              <div key={Math.random().toString()}>
                <div className="border-[#e5e5e5] border-[1px] rounded-lg overflow-hidden">
                  <div>
                    <div className="text-xs md:text-base font-medium mx-2 lg:mx-4 mt-2 lg:mt-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sequi ea laborum non
                    </div>
                  </div>
                  <div>
                    <div className=" mx-2 lg:mx-4 mt-2 md:mt-3">
                      <img
                        className="w-[3rem] md:w-[4rem]"
                        src="/icons/demo-logo.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2 md:mt-3 lg:mt-5 relative">
                      <img
                        className="w-full"
                        src="/images/laptop-women.png"
                        alt=""
                      />
                      <div className="absolute bottom-2 lg:bottom-4 right-2 lg:right-4">
                        <button className="bg-[#ff603d] text-xs md:text-sm font-medium text-white px-1 md:px-3 lg:px-5 py-1 lg:py-2 rounded active:scale-[0.95]">
                          Explore Case Study
                        </button>
                      </div>
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
              Load More
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

export default FeaturedUserStoriesSection;
