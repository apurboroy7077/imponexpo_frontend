import Link from "next/link";
import React from "react";

const Navbar3 = () => {
  return (
    <nav className="hidden md:block border-b-[2px]">
      <div className=" bg-[#333333]  py-2 lg:py-5  flex items-center justify-center text-nowrap">
        <div className="w-full px-5 lg:px-10 max-w-[100rem]">
          <div className="">
            <ul className="flex justify-between  items-center">
              <li className="">
                <span className="text-[0.7rem] lg:text-base text-[white] font-medium">
                  <Link href="/">Dropshipping</Link>
                </span>
              </li>
              <li className=" ">
                <span className=" text-[0.7rem] lg:text-base text-[white]  font-medium">
                  <Link href="/">Trade Shows</Link>
                </span>
              </li>
              <li className="">
                <span className="text-[0.7rem] lg:text-base text-[white]   font-medium">
                  <Link href="/">Help</Link>
                </span>
              </li>
              <li className="">
                <span className="text-[0.7rem] lg:text-base text-[white]  font-medium">
                  <Link href="/">Make Money On Impoexpo</Link>
                </span>
              </li>
              <li className="">
                <span className="text-[0.7rem] lg:text-base text-[white]  font-medium">
                  <Link href="/">Blog</Link>
                </span>
              </li>

              <li className="">
                <div className="flex gap-1 px-[1rem] lg:px-[1.5rem] py-[0.3rem]  items-center border-[1px]  rounded-xl border-[white]">
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
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="  py-2 lg:py-5   flex items-center justify-center">
        <div className="w-full max-w-[100rem] px-5 lg:px-10">
          <div>
            <ul className="flex justify-between items-center">
              <li>
                <img
                  className="w-[5rem] lg:w-[7rem]"
                  src="icons/demo-logo.svg"
                  alt=""
                />
              </li>
              <li>
                <ul className="flex items-center">
                  <li>
                    <div className="border-[#1d5dc7] border-[2px] rounded-tl-xl rounded-bl-xl ">
                      <div className="flex gap-1 lg:gap-3    justify-between items-center px-1 lg:px-3 w-fit h-[1.7rem] lg:h-[3rem]">
                        <span>
                          <img
                            className="w-[0.7rem] lg:w-[1.2rem]"
                            src="/icons/globe-2.svg"
                            alt=""
                          />
                        </span>
                        <span className="text-[0.7rem] lg:text-base font-bold text-[#46474a] ">
                          Global
                        </span>
                        <span>
                          <img
                            className=" w-[0.7rem] lg:w-[1.2rem]"
                            src="/icons/arrow-down-2.svg"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="border-[#1d5dc7] border-[2px] ">
                      <div className="flex gap-1  lg:gap-3  justify-between items-center px-1 lg:px-3 w-fit h-[1.7rem] lg:h-[3rem]">
                        <span>
                          <img
                            className="w-[0.7rem] lg:w-[1.2rem]"
                            src="/icons/bars-solid.svg"
                            alt=""
                          />
                        </span>
                        <span className="text-[0.7rem] lg:text-base font-bold text-[#46474a]">
                          Products
                        </span>
                        <span>
                          <img
                            className="w-[0.7rem] lg:w-[1.2rem]"
                            src="/icons/arrow-down-2.svg"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="border-[#1d5dc7] border-[2px] ">
                      <div className="flex gap-1 lg:gap-3  justify-between items-center px-1 lg:px-3 w-fit h-[1.7rem] lg:h-[3rem]">
                        <span>
                          <input
                            className="  mb-1 text-[0.7rem] lg:w-[15vw] lg:text-base  border-none outline-none"
                            type="text"
                            placeholder="Got a product to Source? Imponexpo it here!"
                          />
                        </span>

                        <span>
                          <img
                            className="w-[0.7rem] lg:w-[1.2rem]"
                            src="/icons/image-2.svg"
                            alt=""
                          />
                        </span>
                        <span>
                          <img
                            className=" w-[0.7rem] lg:w-[1.2rem]"
                            src="/icons/microphone.svg"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="border-[#1d5dc7] bg-[#1d5ec9] border-[2px] rounded-tr-xl rounded-br-xl">
                      <div className="flex gap-1 lg:gap-3 justify-between items-center px-2 lg:px-3 w-fit h-[1.7rem] lg:h-[3rem]">
                        <span>
                          <img
                            className="w-[0.7rem] lg:w-[1.2rem]"
                            src="/icons/search-icon.svg"
                            alt=""
                          />
                        </span>
                        <span className=" text-[white] text-[0.7rem] lg:text-base">
                          Search
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="flex  items-center gap-2">
                    <button className="flex gap-1 items-center transition-all hover:scale-105 active:scale-100">
                      <span>
                        <img
                          className="w-[1rem] lg:w-[1.2rem]"
                          src="/icons/user.svg"
                          alt=""
                        />
                      </span>
                      <span className="font-bold  text-[#1d5ec9] text-xs lg:text-base">
                        Login
                      </span>
                    </button>
                    <button className="flex items-center border-[#1d5ec9] border-[1px] px-2 lg:px-4 py-[1px]  rounded-xl transition-all hover:scale-105 active:scale-100">
                      <span className=" text-[#1d5ec9] text-xs lg:text-base">
                        Register
                      </span>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="mt-5" />
        </div>
      </div>

      <div className="  py-2 lg:py-5   flex items-center justify-center">
        <div className="w-full max-w-[100rem] px-5 lg:px-10">
          <div>
            <ul className="flex justify-between items-center">
              <li className="flex items-center gap-2 pr-2 ">
                <div>
                  <img className="w-[1.5rem]" src="/icons/list.svg" alt="" />
                </div>
                <div className="text-sm">Categories</div>
              </li>
              <li>
                <button className="text-sm text-[#ff603d] border-[#ff603d] rounded-lg border-[1px] px-3 py-1">
                  Request for quotation
                </button>
              </li>
            </ul>
          </div>
          {/* <hr className="mt-5" /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar3;
