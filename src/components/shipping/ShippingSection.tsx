import React from "react";
import TheSection2 from "../TheSection2";

const ShippingSection = () => {
  return (
    <TheSection2>
      <div>
        <div className="font-bold text-[#1c1c1c] lg:text-2xl text-center">
          Just a Step Away! Provide the Details for Better Experience.
        </div>
      </div>
      <div>
        <div>
          <div>
            <div className="mt-10 text-sm lg:text-xl font-medium text-[#1c1c1c]">
              Select the Shipping Method
            </div>
          </div>
          <div>
            <div className="mt-2 lg:mt-3 text-xs lg:text-base font-medium text-[#696969]">
              This is needed to Verify Compliance with Carriers.
            </div>
          </div>
          <div>
            <div className="mt-5 lg:mt-8 text-xs lg:text-base font-medium text-[#1d5ec9]">
              *Select the Shipping Method
            </div>
          </div>
          <div>
            <div className="mt-5 ">
              <select className="text-sm bg-[#fff7f5] lg:text-base text-[#1c1c1c] px-3 py-2 border-[2px] border-[#1c1c1c] rounded outline-none">
                {Array.from({ length: 7 }).map(() => {
                  return (
                    <option key={Math.random().toString()}>
                      Imponexpo Express
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-16">
          <div>
            <div className="mt-10 text-sm lg:text-xl font-medium text-[#1c1c1c]">
              Select the Shipping Terms Agreed
            </div>
          </div>
          <div>
            <div className="mt-2 lg:mt-3 text-xs lg:text-base font-medium text-[#696969]">
              This is needed to Verify Compliance with Carriers.
            </div>
          </div>
          <div>
            <div className="mt-5 lg:mt-8 text-xs lg:text-base font-medium text-[#1d5ec9]">
              *Select the Shipping Terms Agreed
            </div>
          </div>
          <div>
            <div className="mt-5 ">
              <select className="text-sm bg-[#fff7f5] lg:text-base text-[#1c1c1c] px-3 py-2 border-[2px] border-[#1c1c1c] rounded outline-none">
                {Array.from({ length: 20 }).map(() => {
                  return (
                    <option key={Math.random().toString()}>
                      FAS (Free Alongside Ship)
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="mt-10 text-sm lg:text-xl font-medium text-[#1c1c1c]">
            Shipping Calculations and Quotes
          </div>
        </div>
        <div>
          <div className="mt-2 lg:mt-3 text-xs lg:text-base font-medium text-[#696969]">
            This is needed to Verify Compliance with Carriers.
          </div>
        </div>
        <div>
          <div className="mt-5 flex flex-col lg:flex-row gap-5 lg:gap-0 ">
            {Array.from({ length: 3 }).map(() => {
              return (
                <button key={Math.random().toString()}>
                  <div className="flex items-center w-fit gap-3 px-3 lg:px-10 py-5 lg:py-7 border-[2px] rounded">
                    <div>
                      <img
                        className="w-[2rem] lg:w-[3rem] inline"
                        src="/icons/globe-2.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <div>
                        <div className="text-sm lg:text-base text-[#1c1c1c] text-center font-medium">
                          Product Exact Location
                        </div>
                      </div>
                      <div>
                        <div className="text-center text-xs lg:text-sm font-medium text-[#696969]">
                          Provided by the Supplier
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <div className=" lg:text-center mt-5 lg:mt-10">
            <button className="bg-[#ff603d] font-medium rounded text-white text-sm lg:text-lg py-2 lg:py-3  px-5 lg:px-10">
              Search Rates
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="mt-10 text-sm lg:text-xl font-medium text-[#1c1c1c]">
            Further Charges
          </div>
        </div>
        <div>
          <div className="mt-2 lg:mt-3 text-xs lg:text-base font-medium text-[#696969]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            reiciendis perspiciatis enim rem reprehenderit animi maxime,
            possimus error deserunt nobis.
          </div>
        </div>
        <div>
          <div className="mt-5 flex flex-col gap-3 lg:gap-7">
            {Array.from({ length: 4 }).map(() => {
              return (
                <div key={Math.random().toString()}>
                  <div className="border-[2px] px-2 lg:px-5 py-5 lg:py-7 rounded">
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-20 lg:items-center">
                      <div>
                        <div>
                          <div className="text-sm lg:text-lg text-[#1c1c1c] font-medium">
                            Quality Control and Factory Visitation
                          </div>
                        </div>
                        <div>
                          <div className="mt-2 text-xs lg:text-base text-[#696969] font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Saepe reiciendis deserunt sequi nostrum,
                            eligendi ipsum at, vitae ratione iure, unde non
                            molestias illum. Cumque itaque cum aspernatur nihil
                            fuga voluptatibus. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Itaque debitis sunt
                            autem aliquam iusto minus velit minima accusantium
                            alias vero.
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-[#ff603d] lg:text-lg">
                          $594.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="text-center mt-5 lg:mt-10">
          <button className="bg-[#1d5ec9] text-white font-medium text-sm lg:text-lg px-5 lg:px-10 py-2 lg:py-3 rounded">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </TheSection2>
  );
};

export default ShippingSection;
