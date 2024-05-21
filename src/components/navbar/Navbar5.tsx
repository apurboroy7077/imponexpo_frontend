"use client";
import {
  BARS_BLACK_ICON_SRC,
  BARS_ICON_SRC,
  CROSS_ICON_SRC_BLUE,
  DEMO_LOGO_SRC,
  GLOBE_ICON_SRC,
  IMAGE_ICON_SRC,
  MICROPHONE_ICON_SRC,
  USER_ICON,
} from "@/data/ImageSrc";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
const linkData1 = [
  {
    name: "Dropshipping",
    address: "/dropshipping",
  },
  {
    name: "Trade Shows",
    address: "/trade-shows",
  },
  {
    name: "Help",
    address: "/help",
  },
  {
    name: "Make Money On Imponexpo",
    address: "/make-money-on-imponexpo",
  },
  {
    name: "Blogs",
    address: "/blogs",
  },
];
type isMenuOpenType = "OPENED" | "NOT_OPENED";
type isStickyType = "STICKY" | "NOT_STICKY";
const Navbar5 = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState("NOT_OPENED" as isMenuOpenType);
  const [isSticky, setIsSticky] = useState("NOT_STICKY" as isStickyType);
  const handleOpenMenuList = () => {
    setIsMenuOpen("OPENED");
  };
  const handleCloseMenuList = () => {
    setIsMenuOpen("NOT_OPENED");
  };
  const handleScroll = () => {
    if (window.scrollY > 350) {
      setIsSticky("STICKY");
    } else {
      setIsSticky("NOT_STICKY");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <nav
      className={` transition-all ${
        isSticky === "STICKY" ? "sticky" : ""
      } top-0`}
    >
      <div className="bg-[white] shadow-lg border-b-[1px]">
        <div>
          <div className="px-2 py-4  lg:hidden">
            <div className="flex items-center justify-between">
              <div>
                <Link href={"/"}>
                  <img
                    className=" active:scale-[0.95]"
                    src={DEMO_LOGO_SRC}
                    alt=""
                  />
                </Link>
              </div>
              <div>
                {isMenuOpen === "NOT_OPENED" && (
                  <img
                    onClick={handleOpenMenuList}
                    className="w-[2rem]"
                    src={BARS_ICON_SRC}
                    alt=""
                  />
                )}
                {isMenuOpen === "OPENED" && (
                  <img
                    onClick={handleCloseMenuList}
                    className="w-[2rem]"
                    src={CROSS_ICON_SRC_BLUE}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${
              isMenuOpen === "OPENED"
                ? "h-[15rem] overflow-y-auto"
                : "h-[0rem] overflow-hidden"
            } lg:h-fit  transition-all duration-1000`}
          >
            <div>
              <div className="flex items-center justify-center bg-[#333333]">
                <ul className="flex flex-col lg:flex-row lg:justify-between gap-4 px-2 py-3 lg:py-5  font-medium w-full max-w-[101rem]">
                  <div className="flex flex-col lg:flex-row gap-3 lg:gap-7">
                    {linkData1.map((data) => {
                      return (
                        <li key={Math.random().toString()}>
                          <div
                            className={` px-1 lg:px-3   py-2 rounded ${
                              pathName === data.address ? "bg-[#505050]" : ""
                            }`}
                          >
                            <Link className="text-white" href={data.address}>
                              {data.name}
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                  </div>
                  <div>
                    <div className="w-fit flex gap-1 px-[1rem] lg:px-[1.5rem] py-[0.3rem]  items-center border-[1px]  rounded-xl border-[white]">
                      <div>
                        <img
                          className="w-[1.5rem]"
                          src="/icons/nigeria-flag-2.png"
                          alt=""
                        />
                      </div>
                      <div className="text-[#666666] font-bold text-[0.7rem] lg:text-sm">
                        Nigeria | &nbsp;
                      </div>
                      <div className="text-[#666666] font-bold text-[0.7rem] lg:text-sm">
                        English | &nbsp;
                      </div>
                      <div className="text-[#666666] font-bold text-[0.7rem] lg:text-sm">
                        Naira
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <div className="mt-5 px-2 pb-5 lg:pb-9 w-full max-w-[99.5rem] lg:flex lg:justify-between lg:items-center">
                  <div className="hidden lg:block">
                    <div>
                      <Link href={"/"}>
                        <img src={DEMO_LOGO_SRC} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="lg:flex lg:gap-3 lg:items-center">
                      <div>
                        <div className=" relative h-[3rem] w-[10rem] mt-3">
                          <select className=" h-full w-full pl-12 border-[#1d5ec9] border-[2px] rounded-md bg-transparent font-medium outline-none ">
                            <option>Global</option>
                          </select>
                          <div className=" absolute top-[0.65rem] left-[1rem]">
                            <img
                              className="w-[1.5rem]"
                              src={GLOBE_ICON_SRC}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className=" relative h-[3rem] w-[10rem] mt-3">
                          <select className=" h-full w-full pl-12 border-[#1d5ec9] border-[2px] rounded-md bg-transparent font-medium outline-none ">
                            <option>Category</option>
                          </select>
                          <div className=" absolute top-[0.65rem] left-[1rem]">
                            <img
                              className="w-[1.5rem]"
                              src={BARS_BLACK_ICON_SRC}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className=" mt-3 h-[3rem] flex items-center w-fit border-[#1d5ec9] border-[2px] rounded-md  ">
                          <div>
                            <input
                              className="w-[7rem] lg:w-[13rem]  mx-2 outline-none border-none"
                              type="text"
                              placeholder="Got a product to Source? Imponexpo it Here."
                            />
                          </div>
                          <div>
                            <img
                              className="w-[1.5rem] ml-2"
                              src={IMAGE_ICON_SRC}
                              alt=""
                            />
                          </div>
                          <div>
                            <img
                              className="w-[1.2rem] ml-3"
                              src={MICROPHONE_ICON_SRC}
                              alt=""
                            />
                          </div>
                          <div>
                            <button className=" text-sm ml-3 h-[3rem] bg-[#1d5ec9] text-[white] rounded-tr-md rounded-br-md px-2">
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-6 flex flex-col lg:flex-row lg:items-center gap-5">
                      <div className="flex items-center gap-2">
                        <div>
                          <img className="w-[1.5rem] " src={USER_ICON} alt="" />
                        </div>
                        <div>
                          <div className="font-bold text-[#1d5ec9]">
                            Apurbo Roy
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className="text-[#1d5ec9] border-[#1d5ec9] border-[2px] px-3 py-1 rounded-md">
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <hr className=" w-full max-w-[100rem]" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <div className="mt-5 mb-5 px-2 flex flex-col lg:flex-row lg:justify-between gap-4 w-full max-w-[99.7rem]">
                  <div>
                    <button className="flex gap-2 items-center">
                      <div>
                        <img
                          className="w-[2rem]"
                          src={BARS_BLACK_ICON_SRC}
                          alt=""
                        />
                      </div>
                      <div>
                        <div className=" font-medium">Categories</div>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="text-[#ff603d] border-[#ff603d] border-[1px] px-3 py-1 rounded-md">
                      Request for Quotation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar5;
