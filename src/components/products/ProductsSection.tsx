import React from "react";
import TheSection from "../TheSection";
import ProductsCard1 from "../ProductsCard1";
import ProductsCardDiv1 from "./ProductsCardDiv1";

const ProductsSection = () => {
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
          <ProductsCardDiv1 />
        </div>
      </div>
    </TheSection>
  );
};

export default ProductsSection;
