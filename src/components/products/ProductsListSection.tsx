import React from "react";
import ProductsCard1 from "../ProductsCard1";
import TheSection from "../TheSection";

const ProductsListSection = () => {
  return (
    <TheSection>
      <div className="  flex flex-col md:flex-row gap-5 ">
        <div className="md:w-[15%]">
          <div>
            <div className="font-bold">
              {" "}
              <img
                className="inline w-[1.5rem] mr-1"
                src="/icons/filter-solid.svg"
                alt=""
              />
              Filters
            </div>
            <div className="mt-3 flex md:flex-col flex-wrap gap-3">
              {["March Expo", "Trending", "New"].map((data) => {
                return (
                  <div key={Math.random().toString()}>
                    <div className="text-[#1c1c1c]">
                      <input
                        className="  rounded-none"
                        type="radio"
                        name="filter"
                        id=""
                      />{" "}
                      {data}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <hr className="my-3" />
          <div>
            <div className="mt-3">
              <div className="font-bold"> Categories</div>
              <div className="mt-1 flex md:flex-col flex-wrap gap-3">
                {[
                  "Mobile Accessory",
                  "Smartphone",
                  "Electronics",
                  "Modern Techs",
                ].map((data) => {
                  return (
                    <div key={Math.random().toString()}>
                      <div className="text-[#1c1c1c]">
                        <input
                          className="  rounded-none"
                          type="radio"
                          name="filter"
                          id=""
                        />{" "}
                        {data}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <div className="text-[#0d6efd] mt-2">See All</div>
              </div>
            </div>
          </div>
          <hr className="my-3" />
          <div>
            <div className="mt-3">
              <div className="font-bold">Brands</div>
              <div className="mt-1 flex md:flex-col flex-wrap gap-3">
                {["Samsung", "Huawei", "Apple", "Pocco", "Lenovo"].map(
                  (data) => {
                    return (
                      <div key={Math.random().toString()}>
                        <div className="text-[#1c1c1c]">
                          <input
                            className="  rounded-none"
                            type="radio"
                            name="filter"
                            id=""
                          />{" "}
                          {data}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
              <div>
                <div className="text-[#0d6efd] mt-2">See All</div>
              </div>
            </div>
          </div>
          <hr className="my-3" />
          <div>
            <div className="mt-3">
              <div className="font-bold">Price Range</div>
              <div className="text-[#1c1c1c] mt-3">
                <input
                  className="  rounded-none"
                  type="range"
                  name="filter"
                  id=""
                />
              </div>
              <div>
                <div className="flex max-w-[10rem] gap-2">
                  <div>
                    <div>Min</div>
                    <div>
                      <input
                        className=" w-full border-[1px] border-[#dee2e7] px-2 py-1 outline-none rounded"
                        placeholder="0"
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <div>Max</div>
                    <div>
                      <input
                        className=" w-full border-[1px] border-[#dee2e7] px-2 py-1 outline-none rounded"
                        placeholder="9999"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-3">
                  <div className="font-medium">Min Order</div>
                  <div>
                    <div className="mt-1">
                      <input
                        className=" max-w-[10rem] w-full border-[1px] border-[#dee2e7] px-2 py-1 outline-none rounded"
                        placeholder="0"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-3" />
          <div>
            <div className="mt-3">
              <div className="font-bold">Exporter Type</div>
              <div className="mt-2 flex md:flex-col flex-wrap gap-3">
                {[
                  "Manufacturer",
                  "Supplier",
                  "Distributor",
                  "Brands",
                  "Personel",
                ].map((data) => {
                  return (
                    <div key={Math.random().toString()}>
                      <div className="text-[#1c1c1c]">
                        <input
                          className="  rounded-none"
                          type="radio"
                          name="filter"
                          id=""
                        />{" "}
                        {data}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <div className="text-[#0d6efd] mt-2">See All</div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-3">
              <div className="font-bold">Management Certification</div>
              <div className="mt-2 flex md:flex-col flex-wrap gap-3">
                {["ISO 9001", "ISO 14001", "BCI", "ISO 9001", "Lenovo"].map(
                  (data) => {
                    return (
                      <div key={Math.random().toString()}>
                        <div className="text-[#1c1c1c]">
                          <input
                            className="  rounded-none"
                            type="radio"
                            name="filter"
                            id=""
                          />{" "}
                          {data}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
              <div>
                <div className="text-[#0d6efd] mt-2">See All</div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-3">
              <div className="font-bold">Ratings</div>
              <div className="mt-2 flex md:flex-col flex-wrap gap-3">
                {["ISO 9001", "ISO 14001", "BCI", "ISO 9001", "Lenovo"].map(
                  (data) => {
                    return (
                      <div key={Math.random().toString()}>
                        <div className="text-[#1c1c1c]">
                          <input
                            className="  rounded-none"
                            type="radio"
                            name="filter"
                            id=""
                          />
                          <span className="ml-2">
                            {Array.from({ length: 5 }).map(() => {
                              return (
                                <img
                                  key={Math.random().toString()}
                                  className="inline w-[1.5rem]"
                                  src="/icons/star-solid-gold.svg"
                                  alt=""
                                />
                              );
                            })}
                          </span>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
              <div>
                <div className="text-[#0d6efd] mt-3">See All</div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[85%] ">
          <div className=" w-full flex flex-col md:flex-row items-center justify-between  gap-5 border-[1px] border-[#dee2e7] px-3 lg:px-5 py-1 lg:py-3  rounded">
            <div className=" w-full md:w-[20%] flex items-center justify-between">
              <div>
                <select className=" text-sm lg:text-base border-none outline-none bg-transparent">
                  <option>Source Type</option>
                  <option>Availability</option>
                </select>
              </div>
              <div>
                <select className=" text-sm lg:text-base border-none outline-none bg-transparent">
                  <option>Availability</option>
                  <option>Source Type</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-fit ">
              <div className="flex justify-between items-center md:gap-5">
                <div>
                  <input type="checkbox" />
                  <span className="text-sm lg:text-base ml-2">
                    Verified Only
                  </span>
                </div>
                <div>
                  <select className=" px-2 py-1 rounded w-[7rem] text-sm lg:text-base border-[#dee2e7] border-[1px] outline-none bg-transparent">
                    <option>Featured</option>
                    <option>General</option>
                  </select>
                </div>
                <div>
                  <div className="flex gap-1 min-w-fit">
                    <div className=" px-2 py-1 w-fit border-[1px] border-[#dee2e7] rounded">
                      <img
                        className="w-[1.2rem]"
                        src="/icons/list.svg"
                        alt=""
                      />
                    </div>
                    <div className="px-2 py-1 w-fit border-[1px] border-[#dee2e7] rounded">
                      <img
                        className="w-[1.2rem]"
                        src="/icons/list.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-medium md:text-lg lg:text-xl  text-center mt-5 md:mt-10 lg:mt-16">
              Not sure how to continue? Not a problem. Follow these 6 easy steps
              to make your sourcing, ordering and receiving easy.
            </div>
          </div>
          <div>
            <div className="mt-5 md:mt-10 lg:mt-16">
              <div className="  flex items-center">
                <div className="min-w-[10%] max-w-[10%] flex items-center justify-center bg-[#ff603d] p-1 rounded-full w-fit">
                  <img
                    className="min-w-[full] max-w-[full]"
                    src="/icons/sector-1/check-badge.png"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <hr className="border-[#ff603d] h-[2px] border-[2px]" />
                </div>
                <div className="min-w-[10%] max-w-[10%] flex items-center justify-center relative bg-transparent border-[1px] border-black p-1 rounded-full w-fit">
                  <img
                    className=" min-w-[full] max-w-[full]"
                    src="/icons/sector-1/Bag 5.png"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <hr className="border-[#d6d6d6] h-[2px] border-[2px]" />
                </div>
                <div className=" min-w-[10%] max-w-[10%] flex items-center justify-center bg-transparent border-[1px] border-black p-2 bg-[#e6e6e6] rounded-full w-fit">
                  <img
                    className=" min-w-[full] max-w-[full]"
                    src="/icons/sector-1/Menu Cheesesburger.png"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <hr className="border-[#d6d6d6] h-[2px] border-[2px]" />
                </div>
                <div className=" min-w-[10%] max-w-[10%] flex items-center justify-center bg-transparent border-[1px] border-black p-2 bg-[#e6e6e6] rounded-full w-fit">
                  <img
                    className=" min-w-[full] max-w-[full]"
                    src="/icons/sector-1/Delivery.png"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <hr className="border-[#d6d6d6] h-[2px] border-[2px]" />
                </div>
                <div className="min-w-[10%] max-w-[10%] flex items-center justify-center bg-transparent border-[1px] border-black p-2 bg-[#e6e6e6] rounded-full w-fit">
                  <div className="min-w-[full] max-w-[full]  text-center text-[#c4c4c4]">
                    $
                  </div>
                </div>
                <div className="w-full">
                  <hr className="border-[#d6d6d6] h-[2px] border-[2px]" />
                </div>
                <div className="min-w-[10%] max-w-[10%] flex items-center justify-center bg-transparent border-[1px] border-black p-2 bg-[#e6e6e6] rounded-full w-fit">
                  <img
                    className=" min-w-[full] max-w-[full]"
                    src="/icons/sector-1/Like.png"
                    alt=""
                  />
                </div>
              </div>
              <div className=" mt-5 flex items-center justify-between">
                {[
                  "Search the Product",
                  "View the Product and Communicate with the Explorer",
                  "View your Ordering List",
                  "Make your Importation Swift",
                  "Pay for your Product",
                  "Confirmation of Payment",
                ].map((data) => {
                  return (
                    <div
                      className="max-w-[10%] min-w-[10%] "
                      key={Math.random().toString()}
                    >
                      <div className="text-[0.5rem] md:text-xs lg:text-sm md:font-medium text-center">
                        {data}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <div className=" mt-5 md:mt-10 lg:mt-[3rem] grid grid-cols-2 md:grid-cols-1 gap-5">
              {Array.from({ length: 14 }).map(() => {
                return (
                  <div key={Math.random().toString()}>
                    <div className="md:flex">
                      <div className="md:w-[30%]">
                        <div className="border-[1px] border-[#e5e5e5]  md:rounded-tl-lg md:rounded-bl-lg overflow-hidden md:h-full">
                          <div>
                            <div className=" flex items-center justify-center py-3 w-full">
                              <img
                                className="w-[70%]"
                                src="/images/tv.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div>
                            <div className=" py-2 px-2 grid grid-cols-4">
                              {Array.from({ length: 4 }).map(() => {
                                return (
                                  <div key={Math.random().toString()}>
                                    <div className="">
                                      <div>
                                        <div className="flex items-center justify-center">
                                          <img
                                            className="w-[60%] max-w-[2rem]"
                                            src="/icons/love.svg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div>
                                        <div className="text-[0.5rem] lg:text-xs text-center mt-1 font-medium text-[grey]">
                                          9200
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <hr />
                          <div>
                            <div className="flex  items-center flex-wrap gap-2 px-2 lg:px-4 py-2  lg:py-5">
                              <div className="  flex  ">
                                {Array.from({ length: 5 }).map(() => {
                                  return (
                                    <div key={Math.random().toString()}>
                                      <img
                                        src="/icons/star-solid-gold.svg"
                                        alt=""
                                        className="min-w-[0.8rem] lg:min-w-[1.2rem] max-w-[0.8rem] lg:max-w-[1.2rem]"
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                              <div>
                                <div>
                                  <span className="text-[0.5rem] lg:text-sm">
                                    7.5
                                  </span>
                                  <span className="text-[0.5rem] lg:text-sm text-[grey]">
                                    (176 orders)
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-[40%]">
                        <div className="border-[1px] border-[#e5e5e5] md:h-full">
                          <div>
                            <div className="mt-3 lg:mt-7 mx-2 lg:mx-5 text-sm lg:text-xl font-medium">
                              EchoBuds Wireless Earbuds
                            </div>
                          </div>
                          <div>
                            <div className=" text-[grey] mt-1 lg:mt-3 mx-2 lg:mx-5 text-[0.5rem] lg:text-xs">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Natus dolorum libero optio.
                            </div>
                          </div>
                          <div>
                            <div className=" mt-1 lg:mt-3 mx-2 lg:mx-5 text-[0.5rem] lg:text-base text-[#4880ff] font-medium">
                              #Telivision #WirellessTV #LEDtv #DigitalProduct
                            </div>
                          </div>
                          <div>
                            <div className="mt-1 lg:mt-3 mx-2 lg:mx-5">
                              {[
                                { Type: "Television" },
                                { Age: "All Ages" },
                                { Function: "Experience" },
                                { Style: "Wireless and With Wire" },
                              ].map((data) => {
                                const typeName = Object.keys(
                                  data
                                )[0] as keyof typeof data;
                                const name = data[typeName];
                                return (
                                  <div key={Math.random().toString()}>
                                    <div className=" leading-[1]">
                                      <span className="text-[0.5rem] lg:text-xs font-medium">
                                        {typeName}:
                                      </span>
                                      <span className="text-[0.5rem] lg:text-xs lg:ml-2 text-[#696969]">
                                        {name}
                                      </span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div>
                            <div className="mt-1 lg:mt-3 mx-2 lg:mx-5 leading-[1]">
                              <span className="text-[#ff603d] text-xs lg:text-xl font-bold">
                                $49.99 - 129.99
                              </span>
                              <span className=" text-[#696969] text-[0.5rem] lg:text-xs lg:ml-2">
                                (min orders: 20 pcs)
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="text-center mt-1 lg:px-5 lg:py-2 mb-3">
                              {[
                                "Make an Order",
                                "Group Import",
                                "Chat with Supplier",
                              ].map((data) => {
                                return (
                                  <React.Fragment
                                    key={Math.random().toString()}
                                  >
                                    <button
                                      className={`text-[0.5rem] lg:text-xs lg:mr-3 border-[1px] rounded px-2 lg:px-4 py-1 lg:py-2 ${
                                        data === "Make an Order"
                                          ? "bg-[#1d5dc7] text-white"
                                          : ""
                                      }   
                                    ${
                                      data === "Group Import"
                                        ? "border-[#1d5dc7] text-[#1d5dc7]"
                                        : ""
                                    }
                                    ${
                                      data === "Chat with Supplier"
                                        ? "text-[#696969] border-[#696969]"
                                        : ""
                                    }
                                    
                                    
                                     `}
                                    >
                                      {data}
                                    </button>
                                  </React.Fragment>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-[30%]">
                        <div className="border-[1px] border-[#e5e5e5] md:rounded-tr-lg md:rounded-br-lg md:h-full">
                          <div>
                            <div className="px-2 lg:px-5 py-2 lg:mt-5 flex gap-2">
                              <div className="min-w-[30%] max-w-[65%]">
                                <img
                                  className="w-full max-w-[4.5rem]"
                                  src="/icons/ellipse.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div className="text-[0.5rem] lg:text-sm font-bold">
                                  Skinelegance Exports
                                </div>
                                <div className="text-[0.5rem] lg:text-xs lg:mt-1 text-[#696969]">
                                  @Skinelegance784
                                </div>
                                <div className="text-[0.5rem] lg:text-xs lg:mt-1 text-[#696969] font-medium">
                                  12.1k followers
                                </div>
                                <div>
                                  <div className="lg:mt-1">
                                    <button className="text-[0.5rem] lg:text-xs bg-[#696969] text-[white] py-1 px-2 lg:px-3 rounded">
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-[0.50rem] lg:text-xs px-2 lg:px-5 py-1 lg:py-3">
                              <div>
                                <span>Product Origin</span>:{" "}
                                <span className="text-[#666666]">China</span>
                              </div>
                              <div>
                                <span>Available For</span>:{" "}
                                <span className="text-[#666666]">
                                  OEM, ODM, Readymade
                                </span>
                              </div>
                            </div>
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
      </div>
    </TheSection>
  );
};

export default ProductsListSection;
