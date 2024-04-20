import React from "react";
import TheSection from "./TheSection";

const SignInSection = () => {
  return (
    <TheSection>
      <div className="flex justify-center items-center">
        <div className=" bg-[#bcebfa] md:my-5  border-[#00baf2] rounded-lg  border-[1px] px-3 md:px-7 md:mx-5 py-3 md:py-7 pb-7 md:pb-10 lg:pb-7 md:w-[35rem]">
          <div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[#1d5ec9] font-bold md:text-2xl">
                  Sign In
                </div>
              </div>
              <div>
                <img
                  className="w-[3rem] md:w-[4rem]"
                  src="/icons/demo-logo.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm md:text-lg  text-[#2d3840] mt-3 md:mt-7 text-center font-medium">
              Sign In to get the{" "}
              <span className="text-[#1d5dc7] font-bold">Best Deals</span>, and{" "}
              <span className="text-[#00baf2] font-bold">Exclusive Offers</span>{" "}
              with ImpoNexpo!
            </div>
          </div>

          <div>
            <div className="relative mt-5">
              <div>
                <div className="text-[#2d3840] mb-1 md:mb-2 text-sm md:text-lg font-medium">
                  Email Address
                </div>
              </div>
              <div>
                <div className="relative">
                  <input
                    type="text"
                    className=" w-full text-sm md:text-lg py-2 md:py-3 px-2 pl-8 md:pl-[2.9rem] border-none outline-none rounded"
                    placeholder="Enter Your Email"
                  />
                  <img
                    className=" w-[1rem] md:w-[1.3rem] absolute top-[11px] md:top-[16px] left-[8px] md:left-[15px]"
                    src="/icons/envelope-regular.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative mt-5">
              <div>
                <div className="text-[#2d3840] mb-1 md:mb-2 text-sm md:text-lg font-medium">
                  Password
                </div>
              </div>
              <div>
                <div className="relative">
                  <input
                    type="password"
                    className=" w-full text-sm md:text-lg py-2 md:py-3 px-2 pl-8 md:pl-[2.9rem] border-none outline-none rounded"
                    placeholder="Email Your Password"
                  />
                  <img
                    className=" w-[1rem] md:w-[1.3rem] absolute top-[8px] md:top-[13px] left-[8px] md:left-[15px]"
                    src="/icons/lock-solid.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="  mt-5 flex justify-between items-center">
              <div>
                <div className="relative text-sm font-medium">
                  <input className="md:h-[1rem] md:w-[1rem]" type="radio" />{" "}
                  <span className="text-[#2d3840] md:text-lg md:ml-1">
                    Remember Me
                  </span>
                </div>
              </div>
              <div>
                <div className="text-sm md:text-lg font-bold text-[#ff5252]">
                  Forgot Password?
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative mt-5 md:mt-9 text-sm font-medium">
              <button className=" md:text-lg w-full py-2 rounded-lg bg-[#255c89] text-[white] hover:scale-[1.01] active:scale-[1]">
                Sign In{" "}
                <img
                  className="w-[1rem] inline"
                  src="/icons/circle-right-regular-2.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div>
            <div className="text-[#1d5ec9] text-sm md:text-lg text-center mt-5 md:mt-7 font-medium">
              Login With Phone Number Instead
            </div>
          </div>
          <div>
            <div className="text-[#1d5ec9] text-sm md:text-lg text-center mt-5 md:mt-7 font-medium">
              or Continue with{" "}
              <img
                className="w-[1.5rem] md:w-[1.5rem] ml-2 inline"
                src="/icons/google.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default SignInSection;
