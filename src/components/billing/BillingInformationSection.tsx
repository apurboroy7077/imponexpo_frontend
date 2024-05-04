import React from "react";
import TheSection2 from "../TheSection2";
import { countryData } from "@/data/CountryData";

const BillingInformationSection = () => {
  return (
    <TheSection2>
      <div className="lg:flex lg:justify-between">
        <div className="lg:w-[60%]">
          <div>
            <div className="text-[#1c1c1c] font-bold text-lg lg:text-2xl">
              Billing Information
            </div>
          </div>
          <div>
            <div className="text-xs lg:text-base font-medium text-[#475156] mt-3 lg:mt-5">
              <input className="inline" type="checkbox" /> Same as the Shipping
              Address
            </div>
          </div>
          <div>
            <div>
              <div className=" mt-5">
                <div>
                  <div className="">
                    <div className="text-[#1c1c1c] text-sm lg:text-base">
                      User Name
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-2 lg:mt-3 flex justify-between">
                    <div className="w-[48%]">
                      <input
                        className="border-[2px] w-full text-[#77878f] text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 outline-none rounded"
                        placeholder="First Name"
                        type="text"
                      />
                    </div>
                    <div className="w-[48%]">
                      <input
                        className="border-[2px] w-full text-[#77878f] text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 outline-none rounded"
                        placeholder="Last Name"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" mt-5">
                <div>
                  <div className="">
                    <div className="text-[#1c1c1c] text-sm lg:text-base">
                      Company Name{" "}
                      <span className="text-[#929fa5]">(Optional)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-2 lg:mt-3 flex justify-between">
                    <div className="w-full">
                      <input
                        className="border-[2px] w-full text-[#77878f] text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 outline-none rounded"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" mt-5">
                <div>
                  <div className="">
                    <div className="text-[#1c1c1c] text-sm lg:text-base">
                      Address
                      <span className="text-[#929fa5]">(Optional)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-2 lg:mt-3 flex justify-between">
                    <div className="w-full">
                      <input
                        className="border-[2px] w-full text-[#77878f] text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 outline-none rounded"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" mt-5">
                <div>
                  <div className="">
                    <div className="text-[#1c1c1c] text-sm lg:text-base">
                      Country
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-2 lg:mt-3 flex justify-between">
                    <div className="w-full">
                      <select className=" bg-transparent border-[2px] w-full text-[#77878f] text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 outline-none rounded">
                        <option>Select a Country</option>
                        {countryData.map((data) => {
                          return (
                            <option key={Math.random().toString()}>
                              {data.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" mt-5">
                <div>
                  <div className="">
                    <div className="text-[#1c1c1c] text-sm lg:text-base">
                      Region/State
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-2 lg:mt-3 flex justify-between">
                    <div className="w-full">
                      <select className=" bg-transparent border-[2px] w-full text-[#77878f] text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 outline-none rounded">
                        <option>Select a State</option>
                        {countryData.map((data) => {
                          return (
                            <option key={Math.random().toString()}>
                              {data.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" mt-5">
                <div>
                  <div className="">
                    <div className="text-[#1c1c1c] text-sm lg:text-base">
                      City
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-2 lg:mt-3 flex justify-between">
                    <div className="w-full">
                      <select className=" bg-transparent border-[2px] w-full text-[#77878f] text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 outline-none rounded">
                        <option>Select a City</option>
                        {countryData.map((data) => {
                          return (
                            <option key={Math.random().toString()}>
                              {data.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" mt-5">
                <div>
                  <div className="">
                    <div className="text-[#1c1c1c] text-sm lg:text-base">
                      Zip Code
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-2 lg:mt-3 flex justify-between">
                    <div className="w-full">
                      <input
                        className="border-[2px] w-full text-[#77878f] text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 outline-none rounded"
                        type="number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" mt-5">
                <div>
                  <div className="">
                    <div className="text-[#1c1c1c] text-sm lg:text-base">
                      Email
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-2 lg:mt-3 flex justify-between">
                    <div className="w-full">
                      <input
                        className="border-[2px] w-full text-[#77878f] text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 outline-none rounded"
                        type="email"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" mt-5">
                <div>
                  <div className="">
                    <div className="text-[#1c1c1c] text-sm lg:text-base">
                      Phone Number
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-2 lg:mt-3 flex justify-between">
                    <div className="w-full">
                      <input
                        className="border-[2px] w-full text-[#77878f] text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 outline-none rounded"
                        type="email"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" mt-5">
                <div>
                  <div className="">
                    <div className="text-[#1c1c1c] text-sm lg:text-base">
                      Payment Option
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" grid grid-cols-2 lg:grid-cols-5 gap-5 mt-5">
                    {Array.from({ length: 5 }).map(() => {
                      return (
                        <div key={Math.random().toString()}>
                          <div className="border-[2px] py-3 lg:py-7 px-1">
                            <div>
                              <div className="flex justify-center items-center">
                                <img
                                  className="w-[3rem] lg:w-[4rem]"
                                  src="/icons/cc-paypal.svg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div>
                              <div className="mt-2 text-center text-sm text-[#1c1c1c] font-medium">
                                Paypal Pay
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center justify-center mt-2">
                                <input type="radio" name="payment_method" />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <div className=" mt-5">
                    <div>
                      <div className="">
                        <div className="text-[#1c1c1c] text-sm lg:text-base">
                          Name On Card
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-2 lg:mt-3 flex justify-between">
                        <div className="w-full">
                          <input
                            className="border-[2px] w-full text-[#77878f] text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 outline-none rounded"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" mt-5">
                    <div>
                      <div className="">
                        <div className="text-[#1c1c1c] text-sm lg:text-base">
                          Card Number
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-2 lg:mt-3 flex justify-between">
                        <div className="w-full">
                          <input
                            className="border-[2px] w-full text-[#77878f] text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 outline-none rounded"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" mt-5">
                    <div>
                      <div className="">
                        <div className="text-[#1c1c1c] text-sm lg:text-base">
                          Expiry Date
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-2 lg:mt-3 flex justify-between">
                        <div className="w-full">
                          <input
                            className="border-[2px] w-full text-[#77878f] text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 outline-none rounded"
                            type="date"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" mt-5">
                    <div>
                      <div className="">
                        <div className="text-[#1c1c1c] text-sm lg:text-base">
                          CVC
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-2 lg:mt-3 flex justify-between">
                        <div className="w-full">
                          <input
                            className="border-[2px] w-full text-[#77878f] text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 outline-none rounded"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-5">
                <div>
                  <div className="">
                    <div className="text-[#1c1c1c] font-bold text-sm lg:text-base">
                      Additional Information
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" mt-5">
                    <div>
                      <div className="">
                        <div className="text-[#1c1c1c] text-sm lg:text-base">
                          Order Notes{" "}
                          <span className="text-[#929fa5]">(Optional)</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-2 lg:mt-3 flex justify-between">
                        <div className="w-full">
                          <input
                            className="border-[2px] w-full text-[#77878f] text-sm lg:text-base px-2 lg:px-3 py-1 lg:py-2 outline-none rounded"
                            type="text"
                            placeholder="Notes about your Order. e.g. special notes for delivery"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[35%]">
          <div className="mt-10 lg:mt-0 lg:border-[2px] lg:px-5 lg:py-7 lg:rounded-lg">
            <div>
              <div className="text-[#1c1c1c] font-bold text-lg lg:text-2xl">
                Order Summary
              </div>
            </div>
            <div>
              <div className="mt-5 flex flex-col gap-5">
                {Array.from({ length: 3 }).map(() => {
                  return (
                    <div key={Math.random().toString()}>
                      <div className="flex gap-5 items-center">
                        <div className="">
                          <img
                            className="max-w-[7rem]"
                            src="/images/tv.png"
                            alt=""
                          />
                        </div>
                        <div className="">
                          <div>
                            <div className="text-sm text-[#1c1c1c] font-medium">
                              Sony Bravia LED TV 30.00 Inch
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium">
                              <span className="text-[#5f6c72]">300 * </span>{" "}
                              <span className="text-[#2da5f3]">250</span>
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
              <div className="mt-10 flex flex-col gap-2">
                {[
                  { name: "Product Total", value: "$89,000" },
                  { name: "Shipping", value: "$1000" },
                  { name: "Discount", value: "$240" },
                  { name: "Tax", value: "$610.99" },
                  { name: "Quality Control", value: "$320" },
                  { name: "Customs Clearance", value: "$670" },
                ].map((data) => {
                  return (
                    <div key={Math.random().toString()}>
                      <div className="flex justify-between">
                        <div className="text-[#5f6c72] font-medium">
                          {data.name}
                        </div>
                        <div className="text-[#1c1c1c] font-medium text-sm">
                          {data.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <hr className="my-5" />
            <div>
              <div>
                <button className=" w-full py-2 rounded bg-[#1d5ec9] text-white font-medium">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TheSection2>
  );
};

export default BillingInformationSection;
