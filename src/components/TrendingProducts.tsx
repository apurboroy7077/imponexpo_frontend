"use client";
import React, { useEffect, useState } from "react";
import ProductsCard2 from "./products/ProductCard2";
import { dummyProductData } from "@/data/Other";
import axios from "axios";
import { serverURL } from "@/data/EnvironmentVariables";
import { SUB_ADDRESS_OF_GETTING_RANDOM_PRODUCTS_2_API } from "@/data/ApiAddresses";
import { receivedProductDataType } from "@/configs/types/receivedProductType";

const TrendingProducts = () => {
  const [currentSerial, setCurrentSerial] = useState(1);
  const [productsData, setProductsData] = useState(
    [] as receivedProductDataType[]
  );
  const handleGetRandomProducts = () => {
    const dataForServer = { serial: currentSerial };
    axios
      .post(
        `${serverURL}${SUB_ADDRESS_OF_GETTING_RANDOM_PRODUCTS_2_API}`,
        dataForServer
      )
      .then((response) => {
        const receivedProductsData = response.data.productsData;
        setProductsData(receivedProductsData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handleGetRandomProducts();
  }, [currentSerial]);
  return (
    <section>
      <div className=" px-2 py-10 lg:py-5   flex items-center justify-center">
        <div className="w-full max-w-[100rem] ">
          <div className="text-center font-bold md:text-3xl md:mb-3">
            Trending Products On Imponexpo Channels
          </div>
          <div className="text-center text-xs md:text-xl  text-[#454545] mb-5  font-medium md:mb-10">
            Explore great Products from great Suppliers
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {productsData.map((data) => {
              return (
                <ProductsCard2
                  key={Math.random().toString()}
                  receivedProductData={data}
                />
              );
            })}
          </div>

          <div className="my-5">
            <div className="flex items-center gap-1 justify-center">
              <div className="text-[#ff603d] text-center font-bold md:text-lg">
                See more Channels
              </div>
              <div>
                <img
                  className="w-[1.1rem]"
                  src="/icons/arrow-down-orange.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
