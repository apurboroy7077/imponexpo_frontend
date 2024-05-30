"use client";
import { productDataType } from "@/configs/types/types";
import { usePopup } from "@/configs/zustand/zustandPopup";
import { SUB_ADDRESS_OF_SEARCH_API_1 } from "@/data/ApiAddresses";
import { serverURL } from "@/data/EnvironmentVariables";
import { MESSI_IMAGE_SRC } from "@/data/ImageSrc";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const SearchResults = () => {
  const [searchResultsData, setSearchResultData] = useState(
    null as null | productDataType[]
  );
  const searchResultRef = useRef(null);
  const searchInputRef = usePopup((state) => state.searchInpurRef);
  const closePopup = usePopup((state) => state.closePopup);
  const typenWordsInSearchBox = usePopup(
    (state) => state.typenWordsInSearchBox
  );

  const myFunctions = {
    checkClickedOutsideOrNot: (e: MouseEvent) => {
      if (searchResultRef.current && searchInputRef?.current) {
        const searchResult = searchResultRef.current as HTMLElement;
        const searchInput = searchInputRef.current;
        if (
          !(
            searchResult.contains(e.target as Node) ||
            searchInput.contains(e.target as Node)
          )
        ) {
          closePopup();
        }
      }
    },
    handleSearchOnTyping: (typenWords: string) => {
      const dataForServer = { typenWords };
      axios
        .post(`${serverURL}${SUB_ADDRESS_OF_SEARCH_API_1}`, dataForServer)
        .then((response) => {
          const receivedProductsData = response.data.searchResult;
          setSearchResultData(receivedProductsData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
  useEffect(() => {
    document.addEventListener("click", myFunctions.checkClickedOutsideOrNot);
    return () => {
      document.removeEventListener(
        "click",
        myFunctions.checkClickedOutsideOrNot
      );
    };
  }, []);
  useEffect(() => {
    myFunctions.handleSearchOnTyping(typenWordsInSearchBox);
  }, [typenWordsInSearchBox]);
  return (
    <div>
      <div className="flex items-center justify-center lg:mt-5 ">
        <div
          ref={searchResultRef}
          className="bg-[#e6e1e1] w-[90%] lg:w-[80%] px-5 lg:px-10 py-5 lg:py-10 rounded"
        >
          <div>
            <div className="text-end pb-3">
              <button
                onClick={closePopup}
                className="bg-[red] text-white px-3 py-1 rounded active:scale-[0.95]"
              >
                X
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 h-[20vh]  md:h-[50vh]  bg-[#ddd4d4] px-1 py-2 overflow-y-auto">
            {searchResultsData?.map((data) => {
              return (
                <div key={Math.random().toString()}>
                  <Link href={`/products/details/${data.ar7id}`}>
                    <div className="border-[1px] border-[black] p-1 rounded shadow-md">
                      <div className="w-full flex h-[4rem] md:h-[10rem] lg:h-[15rem] items-center justify-center">
                        <img
                          className="w-[80%] h-[80%] object-cover object-center"
                          src={data.mainImageUrl}
                          alt=""
                        />
                      </div>
                      <div className="text-sm font-medium text-center mt-1 opacity-[0.7]">
                        {data.productName}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
