import { receivedProductDataType } from "@/configs/types/receivedProductType";
import React from "react";
type propsType = {
  productData: null | receivedProductDataType;
};
const CompanyDetailsSection = (props: propsType) => {
  const productData = props.productData;
  console.log(productData);
  return (
    <section>
      <div className=" px-2 py-5 lg:py-7   flex items-center justify-center">
        <div className="w-full max-w-[100rem] bg-[white] px-10 py-16 rounded-lg">
          <div className="md:flex md:items-center  md:gap-10">
            <div>
              <div className="flex items-center justify-center">
                <img className="" src="/icons/hydralga.png" alt="" />
              </div>
            </div>
            <div>
              <div className="md:flex md:items-center md:gap-5">
                <div>
                  <div>
                    <div className="text-[#0e1514] lg:text-2xl font-bold text-center md:text-start mt-5">
                      {productData?.sellerData.userFullName}
                    </div>
                  </div>
                  <div>
                    <div className="text-center md:text-start text-[#696969] font-medium text-sm lg:text-lg mt-2">
                      @{productData?.sellerData.userEmail}
                    </div>
                  </div>
                  <div>
                    <div className="text-center md:text-start text-[#696969] font-medium text-sm lg:text-lg mt-2">
                      <img
                        className="inline w-[1.1rem]"
                        src="/icons/user.svg"
                        alt=""
                      />{" "}
                      {productData?.totalFollowersOfTheSeller} followers
                    </div>
                  </div>
                  <div>
                    <div className="text-center md:text-start mt-2 lg:mt-4">
                      <button className="bg-[#1d5ec9] text-white text-xs lg:text-base px-3 py-1 rounded">
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="mt-5 text-sm lg:text-lg text-center md:text-start">
                      <span className="font-medium">Product Origin:</span>{" "}
                      <span className="text-[#666666] font-medium">
                        {" "}
                        {productData?.productData.productOrigin}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="mt-3 text-sm lg:text-lg  text-center md:text-start">
                      <span className="font-medium">Available for:</span>{" "}
                      <span className="text-[#666666] font-medium">
                        {" "}
                        OEM, ODM, Ready Made.
                      </span>
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

export default CompanyDetailsSection;
