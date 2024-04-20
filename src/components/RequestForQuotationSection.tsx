import React from "react";
import TheSection from "./TheSection";

const RequestForQuotationSection = () => {
  return (
    <TheSection>
      <div className="md:flex md:justify-between">
        <div className="md:w-[60%]">
          <div>
            <div className=" text-[#1d5ec9]  md:py-2 lg:py-3 mb-5 md:mb-7 lg:mb-10  font-bold text-lg md:text-2xl lg:text-3xl">
              Request for Quotations- RFQ
            </div>
          </div>
          <div>
            <div className="     font-bold text-base md:text-xl lg:text-2xl">
              Basic Product Information
            </div>
          </div>
          <div>
            <div className="mt-5">
              <div>
                <div className="md:grid md:grid-cols-2 gap-3 lg:gap-7">
                  <div>
                    <div>
                      <div className="text-sm">
                        Product Name <span className="text-[red]">*</span>
                      </div>
                    </div>
                    <div>
                      <input
                        className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-6 md:mt-0">
                      <div>
                        <div className="text-sm">Product Category</div>
                      </div>
                      <div>
                        <input
                          className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">Sourcing Type</div>
                  </div>
                  <div>
                    <input
                      className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">Description</div>
                  </div>
                  <div>
                    <textarea className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]" />
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">Upload Photos</div>
                  </div>
                  <div>
                    <input
                      type="file"
                      className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">Import from URL</div>
                  </div>
                  <div>
                    <input
                      type="url"
                      placeholder="Add file URL"
                      className=" bg-[#f1f4f9] mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                    />
                  </div>
                  <div>
                    <div className="mt-2">
                      <button className="text-sm rounded px-2 py-1 mr-2 border-[1px] border-[#d6d6d6]">
                        Cancel
                      </button>
                      <button className="bg-[#1d5ec9] text-[white] text-sm rounded px-2 py-1 mr-2 border-[1px] border-[#1d5ec9]">
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="md:grid md:grid-cols-2 gap-3 lg:gap-7">
                  <div>
                    <div className="mt-6">
                      <div>
                        <div className="text-sm">Enter Quantity</div>
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Unit(s)"
                          className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-6">
                      <div>
                        <div className="text-sm">Max Budget</div>
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="$"
                          className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-6 font-bold text-base md:text-xl lg:text-2xl">
              SHIPPING AND PAYMENT
            </div>
          </div>
          <div>
            <div className="mt-5">
              <div>
                <div>
                  <div className="text-sm">
                    Shipping Method <span className="text-[red]">*</span>
                  </div>
                </div>
                <div>
                  <input
                    className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                    type="text"
                    placeholder="Select Shipping Method"
                  />
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">Destination</div>
                  </div>
                  <div>
                    <input
                      className="mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                      type="text"
                      placeholder="Select Country"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">Destination</div>
                  </div>
                  <div>
                    <div className="text-sm">
                      <span>Lead time</span>{" "}
                      <span className="font-bold text-[#424242]">Ship in</span>
                      <input
                        className="mt-2 mx-2 rounded-xl py-2 px-2 w-[3rem] border-[#1c1c1c] border-[1px]"
                        type="text"
                      />
                      <span>
                        Days after suppliers receives the initial payment.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">Destination</div>
                  </div>
                  <div>
                    <input
                      className="mt-2 text-sm rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                      type="text"
                      placeholder="Select Country"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-6 font-bold text-base md:text-xl lg:text-2xl">
              PERSONAL/COMPANY DETAILS
            </div>
          </div>
          <div>
            <div className="mt-5">
              <div>
                <div>
                  <div className="text-sm">
                    Full Name <span className="text-[red]">*</span>
                  </div>
                </div>
                <div>
                  <input
                    className=" text-sm mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                    type="text"
                    placeholder="Select Shipping Method"
                  />
                </div>
              </div>

              <div>
                <div className="md:grid md:grid-cols-2 gap-3 lg:gap-7">
                  <div>
                    <div className="mt-6">
                      <div>
                        <div className="text-sm">Mobile Number</div>
                      </div>
                      <div>
                        <input
                          className=" text-sm mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                          type="tel"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-6">
                      <div>
                        <div className="text-sm">Company Name</div>
                      </div>
                      <div>
                        <input
                          className=" text-sm mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                          type="text"
                          placeholder="Company Name(if any)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">Email</div>
                  </div>
                  <div>
                    <input
                      className=" text-sm mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                      type="email"
                      placeholder="Company Name(if any)"
                    />
                  </div>
                  <div>
                    <div className="mt-3 ">
                      <button className="bg-[#1d5ec9] text-[white] text-sm rounded-lg px-3 py-2 mr-2 border-[1px] border-[#1d5ec9]">
                        Please Verify Your Email
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm mt-2 font-medium opacity-[0.8]">
                      Manufacturers, Brands and Suppliers want to work with
                      Verified Buyers.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <div>
                    <div className="text-sm">Website</div>
                  </div>
                  <div>
                    <input
                      className=" text-sm mt-2 rounded-xl py-2 px-2 w-full border-[#1c1c1c] border-[1px]"
                      type="url"
                      placeholder="Website(if any)"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-3">
                  <div>
                    <span className="text-sm font-medium opacity-[0.8]">
                      Were you referred by our Affiliate Partner?
                    </span>
                  </div>
                  <div>
                    <div className="mt-2">
                      <button className="text-sm rounded px-2 py-1 mr-2 border-[1px] border-[#d6d6d6]">
                        No
                      </button>
                      <button className="bg-[#1d5ec9] text-[white] text-sm rounded px-2 py-1 mr-2 border-[1px] border-[#1d5ec9]">
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-7 text-sm">
              By registering, you agree to our{" "}
              <span className="text-[#4cb5f1] font-bold underline">
                Terms and Conditions
              </span>{" "}
              &{" "}
              <span className="text-[#4cb5f1] font-bold underline">
                Privacy Policy
              </span>{" "}
              And you agree to share your Business Card with our Trusted,
              Reliable and certified Suppliers.
            </div>
          </div>
          <div>
            <div className="mt-10">
              <button className="bg-[#1d5ec9] rounded-2xl text-[white] text-lg rounded px-5 py-2 mr-2 border-[1px] border-[#1d5ec9]">
                Post Buy Requirements
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-[35%]">
          <div className="bg-[#1d5dc7] rounded-xl mt-5 py-5 lg:py-10 px-3 lg:px-7 text-[white]">
            <div>
              <div className="text-xl md:text-2xl lg:text-3xl font-medium">
                RFQ Score
              </div>
            </div>
            <div>
              <div className="text-sm mt-2 lg:mt-4">
                Provide as much details as possible about your request to ensure
                faster response from the right suppliers. The higher the score,
                the better responses you will get.
              </div>
            </div>
            <div>
              <div className="text-center text-[3rem] lg:text-[4rem] font-bold my-5 md:my-7 lg:my-10">
                0%
              </div>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                {Array.from({ length: 16 }).map(() => {
                  return (
                    <li key={Math.random().toString()}>
                      <div>
                        <span>
                          <img
                            className="w-[1.3rem] inline mr-1 md:mr-2"
                            src="/icons/checked-white.svg"
                            alt=""
                          />
                        </span>
                        <span className="text-sm md:text-base font-medium">
                          Product Name
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default RequestForQuotationSection;
