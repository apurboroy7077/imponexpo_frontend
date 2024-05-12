"use client";
import {
  productDataType,
  userDataForClientSideType,
} from "@/configs/types/types";
import {
  KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE,
  SUB_ADDRESS_OF_CHECKING_LIKE_API,
  SUB_ADDRESS_OF_DISLIKING_SOMETHING_API,
  SUB_ADDRESS_OF_GETTING_SELLER_DETAILS_FOR_CLIENT_SIDE_API,
  SUB_ADDRESS_OF_GETTING_TOTAL_NUMBER_OF_LIKES_API,
  SUB_ADDRESS_OF_LIKE_SOMETHING_API,
  serverURL,
} from "@/data/EnvironmentVariables";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
type propsType = {
  productData: productDataType;
};
type sellerDetailsType = null | userDataForClientSideType;
type productLikeStatusType = "LIKED" | "NOT_LIKED";
const ProductsCard1 = (props: propsType) => {
  const [sellerDetails, setSellerDetails] = useState(null as sellerDetailsType);
  const [totalNumberOfLikes, setTotalNumberOfLikes] = useState(0);
  const [productLikeStatus, setProductLikeStatus] = useState(
    "NOT_LIKED" as productLikeStatusType
  );
  const { productData } = props;
  const {
    productName,
    mainImageUrl,
    productHashtags,
    price,
    minimumQuantityToOrder,
    sellerEmail,
    productDescription,
    ar7id,
  } = productData;
  const checkLikedOrNot = () => {
    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    const dataForServer = {
      ar7idOfSubjectThatReceivedLike: ar7id,
      authenticationToken: authenticationToken,
    };
    axios
      .post(`${serverURL}${SUB_ADDRESS_OF_CHECKING_LIKE_API}`, dataForServer)
      .then((response) => {
        const likeStatus = response.data.likeStatus as productLikeStatusType;
        setProductLikeStatus(likeStatus);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getTotalNumberOfLikes = () => {
    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    const dataForServer = {
      ar7idOfSubjectThatReceivedLike: ar7id,
    };
    axios
      .post(
        `${serverURL}${SUB_ADDRESS_OF_GETTING_TOTAL_NUMBER_OF_LIKES_API}`,
        dataForServer
      )
      .then((response) => {
        const numberOfLikes: number = response.data.totalNumberOfLikes;
        setTotalNumberOfLikes(numberOfLikes);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    const dataForServer = {
      sellerEmail,
      authenticationToken,
    };
    axios
      .post(
        `${serverURL}${SUB_ADDRESS_OF_GETTING_SELLER_DETAILS_FOR_CLIENT_SIDE_API}`,
        dataForServer
      )
      .then((response) => {
        const sellerDetails = response.data
          .sellerDetails as userDataForClientSideType;
        setSellerDetails(sellerDetails);
      })
      .catch((error) => {
        console.log(error);
      });
    checkLikedOrNot();
    getTotalNumberOfLikes();
  }, []);
  const handleLikeProduct = () => {
    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    const dataForServer = {
      authenticationToken,
      ar7idOfSubjectThatReceivedLike: ar7id,
    };
    axios
      .post(`${serverURL}${SUB_ADDRESS_OF_LIKE_SOMETHING_API}`, dataForServer)
      .then((response) => {
        console.log(response);
        checkLikedOrNot();
        getTotalNumberOfLikes();
        toast("Liked");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDislikeProduct = () => {
    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    const dataForServer = {
      authenticationToken,
      ar7idOfSubjectThatReceivedLike: ar7id,
    };
    axios
      .post(
        `${serverURL}${SUB_ADDRESS_OF_DISLIKING_SOMETHING_API}`,
        dataForServer
      )
      .then((response) => {
        console.log(response);
        checkLikedOrNot();
        getTotalNumberOfLikes();
        toast("Disliked");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="m-auto w-[19rem] lg:w-[100%]  border-[#e5e5e5] border-[2px] rounded-lg"
      key={Math.random().toString()}
    >
      <div className=" px-2 py-1 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div>
            <img className="min-w-[3rem]" src="/icons/ellipse.png" alt="" />
          </div>
          <div>
            <div className="text-[0.6rem] font-bold">
              {sellerDetails?.userFullName}
            </div>
            <div className="text-[0.5rem] text-[#696969] font-bold">
              {sellerEmail}
            </div>
            <div className="text-[0.5rem]">{sellerDetails?.countryRegion}</div>
          </div>
        </div>

        <div>
          <div className="text-[0.5rem]">
            <button className="border-[black] border-[1px] rounded px-4 py-[0.15rem] hover:bg-[black] hover:text-[white] font-medium active:scale-[0.99]">
              Follow
            </button>
          </div>
          <div className="text-[0.5rem] font-bold mt-1 text-[#4e4e4e]">
            1.2k followers
          </div>
        </div>
      </div>
      <div>
        <div className="text-center">
          <button className=" text-[0.5rem] font-bold bg-black text-white px-3 py-1 rounded hover:scale-[1.05]">
            Contact Supplier
          </button>
        </div>
      </div>
      <hr className="my-2" />
      <div>
        <div className="flex items-center justify-center h-[20rem]">
          <div className="w-[70%]">
            <img className="w-full" src={mainImageUrl} alt="" />
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="px-2 py-1">
        <div className="flex justify-between items-end">
          <div className="flex flex-col items-center">
            <div>
              {productLikeStatus === "NOT_LIKED" && (
                <img
                  className="w-[1.5rem] hover:scale-[1.05]"
                  src="/icons/love.svg"
                  alt=""
                  onClick={handleLikeProduct}
                />
              )}
              {productLikeStatus === "LIKED" && (
                <img
                  className="w-[1.5rem] hover:scale-[1.05]"
                  src="/icons/sector-2/heart-circle-check-solid.svg"
                  alt=""
                  onClick={handleDislikeProduct}
                />
              )}
            </div>
            <div className="text-[#696969] text-[0.7rem] font-bold">
              {totalNumberOfLikes}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img
                className="w-[1.5rem] hover:scale-[1.05]"
                src="/icons/message.svg"
                alt=""
              />
            </div>
            <div className="text-[#696969] text-[0.7rem] font-bold">5,900</div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img
                className="w-[1.5rem] hover:scale-[1.05]"
                src="/icons/share.svg"
                alt=""
              />
            </div>
            <div className="text-[#696969] text-[0.7rem] font-bold">2,300</div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img
                className="w-[1.5rem] hover:scale-[1.05]"
                src="/icons/love.svg"
                alt=""
              />
            </div>
            <div className="text-[#696969] text-[0.7rem] font-bold">7,350</div>
          </div>
        </div>
        <div className="text-sm font-bold mt-2 ">{productName}</div>
        <div className="text-xs">{productHashtags}</div>
        <div className="text-[0.5rem] my-2">{productDescription}</div>
        <div className="flex justify-between items-center">
          <div className="font-medium">${price}</div>
          <div className="text-xs font-medium text-[#696969]">
            Min {minimumQuantityToOrder} Units
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 mb-2">
          <div>
            <button className=" font-sans text-sm bg-[#1d5dc7] border-[#1d5dc7] border-[1.5px] px-3 py-2 rounded text-white hover:scale-[1.02] active:scale-[0.97]">
              Make an Order
            </button>
          </div>
          <div>
            <button className=" font-sans text-sm border-[#1d5dc7] text-[#1d5dc7] border-[1.5px] px-3 py-2 rounded hover:scale-[1.02] active:scale-[0.97]">
              Group import
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard1;
