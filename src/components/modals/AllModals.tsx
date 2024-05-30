"use client";
import React from "react";
import LogOutPopupModal from "./LogOutPopupModal";
import { usePopup } from "@/configs/zustand/zustandPopup";
import ProductCommentPopupModal from "./ProductCommentPopupModal";
import SearchPopup from "./SearchPopup";

const AllModals = () => {
  const currentlyOpenedPopup = usePopup((state) => state.currentlyOpenedPopup);

  return (
    <>
      {currentlyOpenedPopup === "LOGOUT_POPUP" && <LogOutPopupModal />}{" "}
      {currentlyOpenedPopup === "PRODUCT_COMMENTS_POPUP" && (
        <ProductCommentPopupModal />
      )}
      {/* {<SearchPopup />} */}
    </>
  );
};

export default AllModals;
