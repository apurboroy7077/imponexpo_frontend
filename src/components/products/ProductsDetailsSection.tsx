import React from "react";
import TheSection from "../TheSection";
import { receivedProductDataType } from "@/configs/types/receivedProductType";
import {
  BOOKMARK_ICON_BLUE_SRC,
  MESSAGE_ICON_BLUE_SRC,
  SHARE_ICON_BLUE_SRC,
} from "@/data/ImageSrc";
type propsType = {
  productData: null | receivedProductDataType;
};
const ProductsDetailsSection = (props: propsType) => {
  const receivedProductData = props.productData;

  return (
    <section>
      <div className=" px-2 py-5 lg:py-7   flex items-center justify-center">
        <div className="w-full max-w-[100rem] bg-[white] px-5  lg:px-10 py-16 rounded-lg">
          <div className="flex flex-col lg:flex-row gap-7">
            <div className="lg:min-w-[65%] lg:max-w-[65%]">
              <div className="flex justify-between">
                <div className="w-[25%]">
                  <div className=" border-[2px] py-5 px-2 lg:px-5 rounded-lg bg-[#fff7f5] flex flex-col gap-2">
                    {Array.from({ length: 4 }).map(() => {
                      return (
                        <div key={Math.random().toString()}>
                          <img
                            className=""
                            src={receivedProductData?.productData.mainImageUrl}
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-[70%]">
                  <div>
                    <div className="border-[2px] bg-[#fff7f5] rounded-lg p-2 pb-5">
                      <div>
                        <div className="flex justify-end">
                          <img
                            className="w-[1rem] my-2"
                            src="/icons/star-solid-gold.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <img
                            className="min-w-[1rem] max-w-[1rem]"
                            src="/icons/arrow-left.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            src={receivedProductData?.productData.mainImageUrl}
                            alt=""
                          />
                        </div>
                        <div>
                          <img
                            className="min-w-[1rem] max-w-[1rem]"
                            src="/icons/arrow-right.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex px-2 lg:px-10 justify-between mt-3">
                      <div>
                        <div className="flex flex-col gap-1 items-center justify-center">
                          <div>
                            <img
                              className="w-[1.1rem]"
                              src="/icons/love.svg"
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="text-xs text-[#676767]">
                              {receivedProductData?.totalLikes}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col gap-1 items-center justify-center">
                          <div>
                            <img
                              className="w-[1.1rem]"
                              src={MESSAGE_ICON_BLUE_SRC}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="text-xs text-[#676767]">
                              {receivedProductData?.totalComments}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col gap-1 items-center justify-center">
                          <div>
                            <img
                              className="w-[1.1rem]"
                              src={SHARE_ICON_BLUE_SRC}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="text-xs text-[#676767]"></div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col gap-1 items-center justify-center">
                          <div>
                            <img
                              className="w-[1.1rem]"
                              src={BOOKMARK_ICON_BLUE_SRC}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="text-xs text-[#676767]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mt-2 lg:mt-5 lg:px-10">
                      <div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map(() => {
                            return (
                              <img
                                className="w-[0.5rem]"
                                src="/icons/star-solid-gold.svg"
                                alt=""
                                key={Math.random().toString()}
                              />
                            );
                          })}{" "}
                          <span className="text-xs ml-1">7.5</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-[#676767]">176 Orders</div>
                      </div>
                      <div>
                        <div className="text-xs ">
                          <span className="text-[#1d5ec8] font-medium">
                            154
                          </span>{" "}
                          <span className="text-[#696969]">Sold</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:min-w-[30%] lg:max-w-[30%]">
              <div className="border-[2px] bg-[#fff7f5] px-2 lg:px-5 py-5 lg:py-7 rounded-lg">
                <div>
                  <div className="text-sm lg:text-xl font-bold">
                    {receivedProductData?.productData.productName}
                  </div>
                </div>
                <div>
                  <div className="text-xs lg:text-base mt-2 lg:mt-5 text-[#696969]">
                    {receivedProductData?.productData.productDescription}
                  </div>
                </div>
                <div>
                  <div className="text-[#4880ff] font-medium text-sm lg:text-base mt-3 lg:mt-5">
                    {receivedProductData?.productData.productHashtags}
                  </div>
                </div>
                <div>
                  <div className="mt-3 lg:mt-5">
                    {[
                      {
                        Type: `${receivedProductData?.productData.productCategory}`,
                      },
                      { Age: `${receivedProductData?.productData.usersAge}` },
                    ].map((data) => {
                      const typeName = Object.keys(
                        data
                      )[0] as keyof typeof data;
                      const name = data[typeName];
                      return (
                        <div key={Math.random().toString()}>
                          <div className=" ">
                            <span className="text-sm lg:text-base font-medium">
                              {typeName}:
                            </span>
                            <span className="text-sm lg:text-base lg:ml-2 text-[#696969]">
                              {name}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <div className="mt-3">
                    <span className="text-[#ff603d] text-lg font-bold">
                      ${receivedProductData?.productData.price}
                    </span>
                    <span className=" text-[#696969] text-base lg:ml-2">
                      (min orders:{" "}
                      {receivedProductData?.productData.minimumQuantityToOrder}{" "}
                      pcs)
                    </span>
                  </div>
                </div>
                <div>
                  <div className=" flex flex-wrap justify-center items-center gap-2 text-center mt-5">
                    {[
                      "Make an Order",
                      "Group Import",
                      "Chat with Supplier",
                    ].map((data) => {
                      return (
                        <React.Fragment key={Math.random().toString()}>
                          <button
                            className={`text-sm  border-[1px] rounded px-2 lg:px-4 py-1 lg:py-2 ${
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDetailsSection;
