"use client";

import Footer3 from "@/components/Footer3";
import Navbar2 from "@/components/Navbar2";
import Navbar3 from "@/components/Navbar3";
import OrderingProcedure from "@/components/basics/OrderingProcedure";
import CompanyDetailsSection from "@/components/products/CompanyDetailsSection";
import ProductsDetailsSection from "@/components/products/ProductsDetailsSection";
import ProductsDetailsSection2 from "@/components/products/ProductsDetailsSection2";
import RelatedProductsSection from "@/components/products/RelatedProductsSection";
import { receivedProductDataType } from "@/configs/types/receivedProductType";
import { SUB_ADDRESS_OF_GETTING_PRODUCT_DETAILS_WITH_AR7ID_API } from "@/data/ApiAddresses";
import { serverURL } from "@/data/EnvironmentVariables";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductDetails = () => {
  const params = useParams();
  const ar7idOfProduct = params.ar7id as string;
  const [productData, setProductData] = useState(
    null as null | receivedProductDataType
  );

  const myFunctions = {
    getProductsData: (ar7id_: string) => {
      const dataForServer = { ar7idOfProduct: ar7id_ };
      axios
        .post(
          `${serverURL}${SUB_ADDRESS_OF_GETTING_PRODUCT_DETAILS_WITH_AR7ID_API}`,
          dataForServer
        )
        .then((response) => {
          const receivedData = response.data
            .productData as receivedProductDataType;
          setProductData(receivedData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
  useEffect(() => {
    myFunctions.getProductsData(ar7idOfProduct);
  }, []);

  return (
    <>
      <Navbar3 />
      <main className=" bg-[#e5e5e5]">
        <OrderingProcedure />
        <CompanyDetailsSection productData={productData} />
        <ProductsDetailsSection productData={productData} />
        <ProductsDetailsSection2 productData={productData} />
        <RelatedProductsSection />
      </main>
      <Footer3 />
    </>
  );
};

export default ProductDetails;
