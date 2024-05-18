"use client";
import { usePopup } from "@/configs/zustand/zustandPopup";
import {
  KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE,
  SUB_ADDRESS_OF_GETTING_COMMENTS_OF_SOMETHING_API,
  SUB_ADDRESS_OF_GIVING_COMMENT_API,
  serverURL,
} from "@/data/EnvironmentVariables";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import CommentCard from "./CommentCard";
import { commentDataType } from "@/configs/types/types";
type inputRefType = null | HTMLInputElement;
const ProductCommentPopupModal = () => {
  const inputRef = useRef(null as inputRefType);
  const [commentsData, setCommentsData] = useState([] as commentDataType[]);
  console.log(commentsData);
  const closePopup = usePopup((state) => state.closePopup);
  const ar7idOfTheCommentPopupSubject = usePopup(
    (state) => state.ar7idOfTheCommentPopupSubject
  );
  const getCommentsOfThisProductHandler = () => {
    const dataForServer = {
      ar7idOfTheSubject: ar7idOfTheCommentPopupSubject,
      paginationSerial: 1,
    };
    axios
      .post(
        `${serverURL}${SUB_ADDRESS_OF_GETTING_COMMENTS_OF_SOMETHING_API}`,
        dataForServer
      )
      .then((response) => {
        const commentsData = response.data.commentsData as commentDataType[];
        setCommentsData(commentsData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCommentsOfThisProductHandler();
  }, []);
  const updateAfterGivingComment = () => {
    const dataForServer = {
      ar7idOfTheSubject: ar7idOfTheCommentPopupSubject,
      paginationSerial: 1,
    };
    axios
      .post(
        `${serverURL}${SUB_ADDRESS_OF_GETTING_COMMENTS_OF_SOMETHING_API}`,
        dataForServer
      )
      .then((response) => {
        const newCommentsData = response.data.commentsData;

        if (commentsData.length >= 9) {
          let updatedCommentsData = [...commentsData];
          updatedCommentsData.splice(updatedCommentsData.length - 9, 9);
          updatedCommentsData = [...updatedCommentsData, ...newCommentsData];
          setCommentsData(updatedCommentsData);
        } else {
          setCommentsData(newCommentsData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const giveCommentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const givenComment = formData.get("givenComment");

    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    const dataForServer = {
      authenticationToken,
      ar7idOfTheCommentPopupSubject,
      givenComment,
    };
    axios
      .post(`${serverURL}${SUB_ADDRESS_OF_GIVING_COMMENT_API}`, dataForServer)
      .then((response) => {
        console.log(response);
        if (inputRef.current) {
          inputRef.current.value = "";
        }
        updateAfterGivingComment();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" fixed  w-full bg-black bg-opacity-30 h-screen flex items-center justify-center z-[10]">
      <div className=" bg-[white] w-[80%] lg:w-[50%] px-3 lg:px-10 py-5 lg:py-16 rounded-lg">
        <div>
          <div className="text-end py-1 lg:py-3">
            <button
              className="font-bold bg-[red] text-sm text-[white] px-3 py-1 rounded active:scale-[0.95]"
              onClick={() => {
                closePopup();
              }}
            >
              X
            </button>
          </div>
        </div>
        <hr />
        <div>
          <div className="mt-2 lg:mt-7 h-[15rem] lg:h-[25rem] overflow-y-scroll flex flex-col gap-3 lg:gap-9">
            {commentsData.map((commentData) => {
              return (
                <CommentCard
                  commentData={commentData}
                  key={Math.random().toString()}
                />
              );
            })}
          </div>
        </div>
        <div>
          <div className="mt-3  lg:mt-7 flex gap-2 lg:gap-5 items-center">
            <div>
              <img
                className="min-w-[2.5rem] lg:min-w-[6rem] max-w-[2.5rem] min-h-[2.5rem] lg:min-h-[6rem] max-h-[2.5rem] object-cover object-center rounded-full"
                src="/images/air-hostess.avif"
                alt=""
              />
            </div>
            <form onSubmit={giveCommentHandler} className=" w-full relative">
              <input
                required
                ref={inputRef}
                type="text"
                name="givenComment"
                placeholder="Reply"
                className="w-[80%] px-2 py-2 text-xs lg:text-xl border-none outline-none opacity-[0.7]"
              />
              <button
                type="submit"
                className="w-[1.2rem] lg:w-[2.5rem] absolute right-[10px] lg:right-[7rem] top-1/2 -translate-y-1/2 active:scale-[0.95]"
              >
                <img
                  className="w-full"
                  src="/icons/sector-2/plane-green.svg"
                  alt=""
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCommentPopupModal;
