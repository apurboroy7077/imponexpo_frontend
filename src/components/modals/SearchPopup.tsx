import React from "react";
import ProductsCard2 from "../products/ProductCard2";
import { dummyProductData, dummyProductsData2 } from "@/data/Other";
import { MESSI_IMAGE_SRC } from "@/data/ImageSrc";
import Link from "next/link";

const SearchPopup = () => {
  return (
    <div className=" fixed  w-full bg-black bg-opacity-30 h-screen flex items-center justify-center z-[10] overflow-scroll ">
      <div className=" bg-[white] w-[90%] lg:w-[50%] px-3 lg:px-10 py-5 lg:py-16 rounded-lg h-[20rem] overflow-y-scroll">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {Array.from({ length: 10 }).map(() => {
            return (
              <div key={Math.random().toString()}>
                <Link href={"/"}>
                  <div className="bg-[#eceaea] rounded py-1 px-1">
                    <div className="h-[7rem] flex items-center justify-center">
                      <img
                        src={dummyProductData.mainImageUrl}
                        alt=""
                        className="w-[5rem]"
                      />
                    </div>
                    <div className="text-center font-medium">
                      {dummyProductData.productName}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
