"use client";
import React from "react";
import LogOutPopupModal from "./LogOutPopupModal";
import { usePopup } from "@/configs/zustand/zustandPopup";

const AllModals = () => {
  const currentlyOpenedPopup = usePopup((state) => state.currentlyOpenedPopup);
  return <>{currentlyOpenedPopup === "LOGOUT_POPUP" && <LogOutPopupModal />}</>;
};

export default AllModals;
