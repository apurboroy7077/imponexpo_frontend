"use client";

import {
  commentDataType,
  userDataForClientSideType,
} from "@/configs/types/types";
import {
  SUB_ADDRESS_OF_GETTING_USER_DETAILS_FOR_CLIENTS_API,
  serverURL,
} from "@/data/EnvironmentVariables";
import { elapsedTime } from "@/utils/elapsedTime";
import axios from "axios";
import React, { useEffect, useState } from "react";
type propsType = {
  commentData: commentDataType;
};
type commentGiverDataType = null | userDataForClientSideType;
const CommentCard = (props: propsType) => {
  const commentData = props.commentData;
  const [commentGiverData, setCommentGiverData] = useState(
    null as commentGiverDataType
  );
  const { comment, ar7idOfCommentGiver, timeStamp } = commentData;
  const timeElapsed = elapsedTime(timeStamp);
  const getCommentGiverDetails = () => {
    const dataForServer = { ar7idOfTheUser: ar7idOfCommentGiver };
    axios
      .post(
        `${serverURL}${SUB_ADDRESS_OF_GETTING_USER_DETAILS_FOR_CLIENTS_API}`,
        dataForServer
      )
      .then((response) => {
        const userData = response.data.userData as userDataForClientSideType;
        setCommentGiverData(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCommentGiverDetails();
  }, []);
  return (
    <div>
      <div className="flex items-center gap-3 lg:gap-5">
        <div>
          <img
            className="min-w-[2rem] lg:min-w-[5rem] max-w-[2rem] lg:max-w-[5rem] min-h-[2rem] lg:min-h-[5rem] max-h-[2rem] lg:max-h-[5rem] object-cover object-center rounded-full"
            src="/images/air-hostess.avif"
            alt=""
          />
        </div>
        <div>
          <div>
            <span className="text-xs lg:text-lg font-bold text-[#1c1c1c]">
              {commentGiverData?.userFullName}
            </span>
            <span className="text-[0.6rem] lg:text-base font-medium opacity-[0.6] ml-2">
              {timeElapsed} ago
            </span>
          </div>
          <div>
            <div className="text-xs lg:text-base  font-medium opacity-[0.7]">
              {comment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
