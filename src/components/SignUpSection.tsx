import TheSection from "./TheSection";

const SignUpSection = () => {
  return (
    <section>
      <div className=" bg-[#f3f3f3] px-2 py-7 lg:py-16   flex items-center justify-center">
        <div className="w-full max-w-[100rem] ">
          <div className="  flex flex-col md:flex-row md:justify-between gap-7 md:gap-0">
            <div className="md:w-[60%]">
              <div className="bg-[#1d5dc7] rounded-xl md:rounded-tr-none md:rounded-br-none h-full px-2 md:px-5 py-3 md:py-7 lg:py-10  text-[white]">
                <div>
                  <div className="text-center font-medium md:text-lg lg:text-3xl">
                    Your Importation and Exportation Success starts here!
                  </div>
                </div>
                <div>
                  <div className="flex justify-center">
                    <ul className="text-xs lg:text-base font-medium mt-5 lg:my-10 list-disc pl-5 flex flex-col gap-2">
                      <li>Streamlined Import/Export Processes</li>
                      <li>Comprehensive B2B Marketplace</li>
                      <li>Access to Diverse Range of Products</li>
                      <li>
                        Connections with Worldwide Network of Suppliers and
                        Importers.
                      </li>
                      <li>
                        Platform built to make you succeed in Cross-Border
                        Trade.
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="mt-5 flex justify-center">
                    <img
                      className="rounded w-full lg:w-[75%]"
                      src="/images/sea-port.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[40%] ">
              <div className="md:bg-[white] rounded-xl md:rounded-tl-none md:rounded-bl-none flex justify-center">
                <div className=" bg-[white] md:my-10  border-[#00baf2] rounded-lg  border-[1px] px-3 md:mx-5 py-3 lg:pb-7 ">
                  <div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-[#1d5dc7] font-bold">Sign Up</div>
                      </div>
                      <div>
                        <img
                          className="w-[3rem]"
                          src="/icons/demo-logo.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm mt-3 text-center font-medium">
                      Creating an Account on Imponexpo is{" "}
                      <span className="text-[#1d5dc7] font-bold">fast</span>,{" "}
                      <span className="text-[#00baf2] font-bold">Easy</span> and{" "}
                      <span className="text-[#f60e0e] font-bold">
                        for free!
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-5">
                      <input
                        type="text"
                        className=" w-full text-sm py-2 px-2 pl-8 border-[#00baf2] border-[2px] rounded"
                        placeholder="First Name"
                      />
                      <img
                        className="w-[1rem] absolute top-[9px] left-[8px]"
                        src="/icons/id-badge-regular.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-5">
                      <input
                        type="text"
                        className=" w-full text-sm py-2 px-2 pl-8 border-[#00baf2] border-[2px] rounded"
                        placeholder="Last Name"
                      />
                      <img
                        className="w-[1rem] absolute top-[9px] left-[8px]"
                        src="/icons/id-badge-regular.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-5">
                      <input
                        type="text"
                        className=" w-full text-sm py-2 px-2 pl-8 border-[#00baf2] border-[2px] rounded"
                        placeholder="Email Address"
                      />
                      <img
                        className="w-[1rem] absolute top-[12px] left-[8px]"
                        src="/icons/envelope-regular.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <div className="w-[35%]">
                        <div className="relative mt-5">
                          <input
                            type="text"
                            className=" w-full text-sm py-2 px-2 pl-8 border-[#00baf2] border-[2px] rounded"
                            placeholder="Country Code"
                          />
                          <img
                            className="w-[1rem] absolute top-[12px] left-[8px]"
                            src="/icons/earth-americas-solid.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="w-[65%]">
                        <div className="relative mt-5">
                          <input
                            type="text"
                            className=" w-full text-sm py-2 px-2 border-[#00baf2] border-[2px] rounded"
                            placeholder="Mobile Number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-5">
                      <input
                        type="password"
                        className=" w-full text-sm py-2 px-2  border-[#00baf2] border-[2px] rounded"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-5">
                      <input
                        type="password"
                        className=" w-full text-sm py-2 px-2  border-[#00baf2] border-[2px] rounded"
                        placeholder="Please Confirm Password"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mt-5">
                      Creating Account For{" "}
                      <span className="mx-3">
                        <input
                          type="radio"
                          className="mr-1"
                          name="accountOpeningReason"
                        />
                        Corporation
                      </span>
                      <span>
                        <input
                          type="radio"
                          className="mr-1"
                          name="accountOpeningReason"
                        />
                        Individual
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-5">
                      <input
                        type="text"
                        className=" w-full text-sm py-2 px-2  border-[#00baf2] border-[2px] rounded"
                        placeholder="Name of Company, if any"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-5">
                      <input
                        type="text"
                        className=" w-full text-sm py-2 px-2  border-[#00baf2] border-[2px] rounded"
                        placeholder="Country/Region"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-5">
                      <select className=" w-full text-sm py-2 px-2  border-[#00baf2] border-[2px] rounded">
                        <option>Reason for Signup</option>
                        <option>For Purchasing</option>
                        <option>For Selling</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-5">
                      <input
                        type="url"
                        className=" w-full text-sm py-2 px-2 pl-8 border-[#00baf2] border-[2px] rounded"
                        placeholder="Imponexpo.com/@......."
                      />
                      <img
                        className="w-[1rem] absolute top-[9px] left-[8px]"
                        src="/icons/id-badge-regular.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-5 text-sm font-medium">
                      <input type="radio" /> By Signing up, you agree to our{" "}
                      <span className="text-[#f74446] font-bold">
                        Terms Of Service
                      </span>{" "}
                      and{" "}
                      <span className="text-[#f74446] font-bold">
                        Privacy Policy.{" "}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-5 text-sm font-medium">
                      <button className="border-[#00baf2] border-[2px] w-full py-2 rounded-lg text-[#1d5dc7] hover:scale-[1.01] active:scale-[1]">
                        Continue to Sign Up{" "}
                        <img
                          className="w-[1rem] inline"
                          src="/icons/circle-right-regular-2.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
