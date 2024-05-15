"use client";
import React from "react";

const ProductCommentPopupModal = () => {
  return (
    <div className=" fixed  w-full bg-black bg-opacity-30 h-screen flex items-center justify-center z-[10]">
      <div className=" bg-[white] w-[70%] lg:w-[60%] px-3 py-5 lg:py-16 rounded-lg">
        <div>
          <div className=" text-[#1D5EC9] lg:text-3xl text-center font-bold ">
            Are you Sure to Log Out?
          </div>
        </div>
        <div>
          <div className="text-center mt-3 lg:mt-7">
            <button
              onClick={() => {}}
              className="font-bold bg-[red] lg:text-xl px-5 py-1 rounded text-[white] active:scale-[0.95]"
            >
              Yes
            </button>
            <button
              className="font-bold bg-[#1D5EC9] lg:text-xl px-5 py-1 rounded text-[white] ml-3 active:scale-[0.95]"
              onClick={() => {}}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCommentPopupModal;
