"use client";
import React, { useEffect, useState } from "react";
import ProductsCard1 from "../ProductsCard1";
import axios from "axios";
import {
  SUB_ADDRESS_OF_GETTING_RANDOM_PRODUCTS_API,
  serverURL,
} from "@/data/EnvironmentVariables";
import { productDataType } from "@/configs/types/types";
type dataType = productDataType[] | null;
const ProductsCardDiv1 = () => {
  const [productsData, setProductsData] = useState(null as dataType);
  useEffect(() => {
    const numberOfProducts = 10;
    axios
      .post(`${serverURL}${SUB_ADDRESS_OF_GETTING_RANDOM_PRODUCTS_API}`, {
        numberOfProducts,
      })
      .then((response) => {
        const receivedProductsDataFromServer = response.data.productsData;
        setProductsData(receivedProductsDataFromServer);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className=" mt-5 md:mt-10 lg:mt-[3rem] grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {productsData?.map((productData) => {
          return (
            <div key={Math.random().toString()}>
              <div>
                <ProductsCard1 productData={productData} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsCardDiv1;
