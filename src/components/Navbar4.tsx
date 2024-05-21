"use client";
import { usePopup } from "@/configs/zustand/zustandPopup";
import { useUser } from "@/configs/zustand/zustandUser";
import Link from "next/link";
import React from "react";

const Navbar4 = () => {
  const loginStatus = useUser((state) => state.loginStatus);
  const userData = useUser((state) => state.userData);
  const openPopup = usePopup((state) => state.openPopup);
  return (
    <nav className="border-b-2 shadow-lg">
      <div className="bg-[#333333] py-2 lg:py-5 flex items-center justify-center text-nowrap">
        <div className="w-full px-5 lg:px-5 max-w-[100rem]">
          <ul className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 lg:gap-20">
              <li className="text-[0.7rem] lg:text-base text-white font-medium">
                <Link href="/">Dropshipping</Link>
              </li>
              <li className="text-[0.7rem] lg:text-base text-white font-medium">
                <Link href="/">Trade Shows</Link>
              </li>
              <li className="text-[0.7rem] lg:text-base text-white font-medium">
                <Link href="/">Help</Link>
              </li>
              <li className="text-[0.7rem] lg:text-base text-white font-medium">
                <Link href="/">Make Money On Impoexpo</Link>
              </li>
              <li className="text-[0.7rem] lg:text-base text-white font-medium">
                <Link href="/blogs">Blog</Link>
              </li>
            </div>
            <li>
              <div className="flex gap-1 px-4 lg:px-6 py-1 items-center border-1 rounded-xl border-white">
                <img className="w-6" src="/icons/nigeria-flag-2.png" alt="" />
                <span className="text-[#666666] font-bold text-[0.7rem] lg:text-sm">
                  Nigeria |
                </span>
                <span className="text-[#666666] font-bold text-[0.7rem] lg:text-sm">
                  English |
                </span>
                <span className="text-[#666666] font-bold text-[0.7rem] lg:text-sm">
                  Naira
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-2 lg:py-5 flex items-center justify-center">
        <div className="w-full max-w-[100rem] px-5 lg:px-5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/">
              <img
                className="w-[5rem] lg:w-[7rem] active:scale-95"
                src="icons/demo-logo.svg"
                alt=""
              />
            </Link>
            <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-3">
              <li>
                <div className="border-[#1d5dc7] border-2 rounded-tl-xl rounded-bl-xl">
                  <div className="flex gap-1 lg:gap-3 justify-between items-center px-1 lg:px-3 h-[1.7rem] lg:h-[3rem]">
                    <img
                      className="w-3 lg:w-5"
                      src="/icons/globe-2.svg"
                      alt=""
                    />
                    <span className="text-[0.7rem] lg:text-base font-bold text-[#46474a]">
                      Global
                    </span>
                    <img
                      className="w-3 lg:w-5"
                      src="/icons/arrow-down-2.svg"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="border-[#1d5dc7] border-2">
                  <div className="flex gap-1 lg:gap-3 justify-between items-center px-1 lg:px-3 h-[1.7rem] lg:h-[3rem]">
                    <img
                      className="w-3 lg:w-5"
                      src="/icons/bars-solid.svg"
                      alt=""
                    />
                    <span className="text-[0.7rem] lg:text-base font-bold text-[#46474a]">
                      Products
                    </span>
                    <img
                      className="w-3 lg:w-5"
                      src="/icons/arrow-down-2.svg"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="border-[#1d5dc7] border-2">
                  <div className="flex gap-1 lg:gap-3 justify-between items-center px-1 lg:px-3 h-[1.7rem] lg:h-[3rem]">
                    <input
                      className="mb-1 text-[0.7rem] lg:w-[15vw] lg:text-base border-none outline-none"
                      type="text"
                      placeholder="Got a product to Source? Imponexpo it here!"
                    />
                    <img
                      className="w-3 lg:w-5"
                      src="/icons/image-2.svg"
                      alt=""
                    />
                    <img
                      className="w-3 lg:w-5"
                      src="/icons/microphone.svg"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="border-[#1d5dc7] bg-[#1d5ec9] border-2 rounded-tr-xl rounded-br-xl">
                  <div className="flex gap-1 lg:gap-3 justify-between items-center px-2 lg:px-3 h-[1.7rem] lg:h-[3rem]">
                    <img
                      className="w-3 lg:w-5"
                      src="/icons/search-icon.svg"
                      alt=""
                    />
                    <span className="text-white text-[0.7rem] lg:text-base">
                      Search
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              {loginStatus === "NOT_LOGGED_IN" && (
                <div className="flex gap-2">
                  <Link href="/sign-in">
                    <button className="flex gap-1 items-center transition-all hover:scale-105 active:scale-100">
                      <img
                        className="w-4 lg:w-5"
                        src="/icons/user.svg"
                        alt=""
                      />
                      <span className="font-bold text-[#1d5ec9] text-xs lg:text-base">
                        Login
                      </span>
                    </button>
                  </Link>
                  <Link href="/sign-up">
                    <button className="flex items-center border-[#1d5ec9] border-1 px-2 lg:px-4 py-1 rounded-xl transition-all hover:scale-105 active:scale-100">
                      <span className="text-[#1d5ec9] text-xs lg:text-base">
                        Register
                      </span>
                    </button>
                  </Link>
                </div>
              )}
              {loginStatus === "LOGGED_IN" && (
                <div className="flex gap-2">
                  <button className="flex gap-1 items-center transition-all hover:scale-105 active:scale-100">
                    <img className="w-4 lg:w-5" src="/icons/user.svg" alt="" />
                    <span className="font-bold text-[#1d5ec9] text-xs lg:text-base">
                      {userData?.userFullName}
                    </span>
                  </button>
                  <button
                    className="flex items-center border-[#1d5ec9] border-1 px-2 lg:px-4 py-1 rounded-xl transition-all hover:scale-105 active:scale-100"
                    onClick={() => {
                      openPopup("LOGOUT_POPUP");
                    }}
                  >
                    <span className="text-[#1d5ec9] text-xs lg:text-base">
                      Logout
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
          <hr className="mt-5" />
        </div>
      </div>

      <div className="py-2 lg:py-5 flex items-center justify-center">
        <div className="w-full max-w-[100rem] px-5 lg:px-5">
          <ul className="flex justify-between items-center">
            <li className="flex items-center gap-2 pr-2">
              <img className="w-6" src="/icons/list.svg" alt="" />
              <span className="text-sm">Categories</span>
            </li>
            <li>
              <button className="text-sm text-[#ff603d] border-[#ff603d] rounded-lg border-1 px-3 py-1">
                Request for quotation
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar4;
