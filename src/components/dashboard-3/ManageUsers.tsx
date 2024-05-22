"use client";

import { MESSI_IMAGE_SRC, SEARCH_ICON_BLACK_SRC } from "@/data/ImageSrc";
import Link from "next/link";
import React, { useState } from "react";
const dummyData = [
  {
    name: "Jesus Weiss",
    address: "Fort Worth, TX",
    sellingTags: ["headset", "gadget", "speed", "winter"],
  },
  {
    name: "Linda Thompson",
    address: "New York, NY",
    sellingTags: ["fashion", "clothing", "summer", "accessories"],
  },
  {
    name: "Robert Johnson",
    address: "Los Angeles, CA",
    sellingTags: ["electronics", "gaming", "laptop", "high-tech"],
  },
  {
    name: "Emily Davis",
    address: "Chicago, IL",
    sellingTags: ["beauty", "skincare", "organic", "wellness"],
  },
  {
    name: "Michael Brown",
    address: "Houston, TX",
    sellingTags: ["automotive", "tools", "repair", "maintenance"],
  },
  {
    name: "Jessica Wilson",
    address: "Phoenix, AZ",
    sellingTags: ["home decor", "furniture", "modern", "lighting"],
  },
  {
    name: "David Martinez",
    address: "Miami, FL",
    sellingTags: ["sports", "fitness", "outdoor", "gear"],
  },
];

const ManageUsers = () => {
  const [test, setTest] = useState("test");
  return (
    <>
      <div className="bg-[#f1f5f9] p-4 lg:px-12 lg:py-10 flex justify-center min-h-full  max-h-fit">
        <div className="w-full max-w-[85rem] ">
          <div className="md:flex md:justify-between">
            <div className="text-xl font-bold opacity-[0.8]">Manage Users</div>
            <div className="text-sm font-medium mt-1">
              <span className="opacity-[0.6]">Dashboard </span>
              <span className="opacity-[0.6]">/ </span>
              <span className="opacity-[0.8]">manage-users </span>
            </div>
          </div>
          <div className="mt-3 px-3 lg:px-10 py-3 lg:py-10 bg-[white] rounded overflow-hidden ">
            <div className="lg:grid lg:grid-cols-2 lg:gap-7 lg:items-center">
              <div>
                <div className="h-[3rem] w-full relative">
                  <input
                    className="pl-11 h-full w-full rounded border-[1px] border-[black] outline-none"
                    type="text"
                    placeholder="Search users"
                  />
                  <div className=" absolute top-[11px] left-[10px] w-[1.5rem]">
                    <img
                      className="w-full"
                      src={SEARCH_ICON_BLACK_SRC}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5 lg:mt-0 flex flex-wrap gap-5">
                  {[
                    "Reputation",
                    "New Users",
                    "Voters",
                    "Editors",
                    "Moderators",
                  ].map((data) => {
                    return (
                      <div key={Math.random().toString()}>
                        {data === "New Users" && (
                          <button
                            className={` bg-[#86a1ff] text-[white] px-3 py-1 rounded `}
                          >
                            {data}
                          </button>
                        )}
                        {data !== "New Users" && (
                          <button className={``}>{data}</button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <div className="">
                <div className=" mt-5 lg:mt-10 grid grid-cols-2 lg:grid-cols-3 gap-5 justify-center ">
                  {dummyData.map((data) => {
                    return (
                      <div key={Math.random().toString()}>
                        <div className="border-[1px] shadow-md px-2 lg:px-3 py-1 lg:py-3 lg:py-5 rounded  ">
                          <div>
                            <div className="flex items-center justify-center">
                              <div className="w-[4rem] lg:w-[6rem] h-[4rem] lg:h-[6rem]">
                                <img
                                  className="w-full h-full object-cover object-center rounded-full"
                                  src={MESSI_IMAGE_SRC}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className=" mt-3 lg:mt-5 text-sm lg:text-lg font-medium text-center">
                              {data.name}
                            </div>
                          </div>
                          <div>
                            <div className=" mt-1 lg:mt-2 text-xs lg:text-base text-center font-medium  opacity-[0.6]">
                              {data.address}
                            </div>
                          </div>
                          <div>
                            <div className=" mt-1 lg:mt-4 flex flex-wrap justify-center items-center gap-1 lg:gap-3">
                              {data.sellingTags.map((data) => {
                                return (
                                  <div key={Math.random().toString()}>
                                    <button className="text-xs lg:text-sm border-[1px] border-[] px-1 lg:px-3 py-1 lg:py-2 rounded font-medium opacity-[0.7]">
                                      {data}
                                    </button>
                                  </div>
                                );
                              })}
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
    </>
  );
};

export default ManageUsers;
