import Link from "next/link";
import React from "react";

const Navbar1 = () => {
  return (
    <nav className="px-5 py-5 flex items-center justify-center">
      <div className="w-full max-w-[100rem]">
        <div>
          <ul className="flex justify-between items-center">
            <li className="border-[#00baf2] border-[2px] rounded-xl">
              <span className="text-[#7c7c7c] px-3">
                <Link href="/">Dropshipping</Link>
              </span>
            </li>
            <li className="border-[#00baf2] border-[2px] rounded-xl">
              <Link className="text-[#7c7c7c] px-3 " href="/">
                Trade Shows
              </Link>
            </li>
            <li className="border-[#00baf2] border-[2px] rounded-xl">
              <span className="text-[#7c7c7c] px-3 ">
                <Link href="/">Help</Link>
              </span>
            </li>
            <li className="border-[#00baf2] border-[2px] rounded-xl">
              <span className="text-[#7c7c7c] px-3 ">
                <Link href="/">Blog</Link>
              </span>
            </li>
            <li>
              <select className="border-[#00baf2] border-[2px] rounded-xl bg-white text-[#7c7c7c] px-3 py-1 ">
                <option>Make Money On Imponexpo</option>
                <option>Make Money On Imponexpo</option>
                <option>Make Money On Imponexpo</option>
              </select>
            </li>
            <li>
              <select className="border-[#00baf2] border-[2px] rounded-xl bg-white text-[#7c7c7c] px-3 py-1 ">
                <option>For Buyers</option>
                <option>For Buyers</option>
                <option>For Buyers</option>
              </select>
            </li>
            <li className="border-[#00baf2]  rounded-xl">
              <span className="text-[#1d5dc7] px-3 ">
                <Link href="/">SAVE MORE ON APP</Link>
              </span>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <div>
                  <img
                    className="w-[2rem]"
                    src="/icons/nigeria-flag.png"
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-[#666666] font-bold text-sm">
                    English
                  </div>
                  <div className="text-[#666666] font-bold text-sm">Naira</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <ul className="flex gap-2 items-center justify-between">
            <li>
              <img className="w-[7rem]" src="/icons/demo-logo.svg" alt="" />
            </li>
            <li className="flex gap-2">
              <li className="ml-10">
                <div>
                  <div className="bg-[#1d5dc7] rounded-tl-xl rounded-bl-xl flex gap-3 justify-between items-center px-3 py-2 w-[10rem]">
                    <span>
                      <img className="w-[2rem]" src="/icons/globe.svg" alt="" />
                    </span>
                    <span className="font-bold text-[white]">Global</span>
                    <span>
                      <img
                        className="w-[1.5rem]"
                        src="/icons/arrow-down.svg"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="bg-[#1d5dc7]   flex gap-3 justify-between items-center px-3 pl-9 py-3 w-[10rem]">
                    <span className=" text-[white]">Products</span>
                    <span>
                      <img
                        className="w-[1.5rem]"
                        src="/icons/arrow-down.svg"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="bg-[#1d5dc7] flex items-center rounded-tr-xl rounded-br-xl py-2 px-5 pl-10">
                    <span>
                      <input
                        className="w-[30rem] bg-transparent  text-white border-none outline-none"
                        type="text"
                        placeholder="Got a product to Source? Imponexpo it here!"
                      />
                    </span>
                    <span>
                      <img
                        className="w-[2rem]"
                        src="/icons/image-2.svg"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </li>
            </li>

            <li>
              <div className="flex gap-1 items-center">
                <div>
                  <img className="w-[2.3rem]" src="/icons/user.svg" alt="" />
                </div>
                <div>
                  <div className="font-bold text-[#1d5dc7]">Sign Up/</div>
                  <div className="font-bold text-[#1d5dc7]">Sign In</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
