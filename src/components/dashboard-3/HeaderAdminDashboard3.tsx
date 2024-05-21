"use client";

import { useDashboard } from "@/configs/zustand/zustandDashboard";
import React, { useState } from "react";
import NotificationTooltipAdminDashboard3 from "./tooltips/NotificationTooltipAdminDashboard3";
import Link from "next/link";
import ProfileTooltip from "./tooltips/ProfileTooltip";
type tooltipNameType = "NONE" | "NOTIFICATION" | "PROFILE" | "MESSAGE";
const HeaderAdminDashboard3 = () => {
  const [openedTooltip, setOpenedTooltip] = useState("NONE" as tooltipNameType);
  const menubarRef = useDashboard((state) => state.adminDashboardMenubarRef);
  const handleClickOnMenuIcon = () => {
    if (menubarRef && menubarRef.current) {
      try {
        const menubar = menubarRef.current;
        menubar.style.left = "0%";
      } catch (error) {
        console.log(error);
      }
    }
  };
  const openNotificationTooltipHandler = () => {
    setOpenedTooltip("NOTIFICATION");
  };
  const openProfileTooltipHandler = () => {
    setOpenedTooltip("PROFILE");
  };
  const openMessageTooltipHandler = () => {};
  const closeToolTipHandler = () => {
    setOpenedTooltip("NONE");
  };

  return (
    <div className="px-3 lg:px-6 py-3 flex items-center justify-between ">
      <div className="flex items-center justify-center lg:hidden">
        <div
          onClick={handleClickOnMenuIcon}
          className="w-[2.5rem] flex h-[2rem] border-[1px] px-2 py-1 rounded"
        >
          <img className="w-full" src="/icons/list.svg" alt="" />
        </div>
        <div className="w-[2.5rem] flex h-[2rem] ml-2 border-[1px] px-2 py-1 rounded-lg bg-[#1c2434]">
          <img className="w-full " src="/icons/demo-logo.svg" alt="" />
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center gap-5">
        <div className="w-[1.6rem]">
          <img className="w-full" src="/icons/search-icon-2.svg" alt="" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Type to search"
            className=" border-none outline-none"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="relative w-[2.5rem] p-[0.6rem] rounded-full bg-[#e2e8f0] ml-2">
          <img
            className="w-full"
            src="/icons/sector-2/bell-regular.svg"
            alt=""
            onClick={openNotificationTooltipHandler}
          />
          {openedTooltip === "NOTIFICATION" && (
            <NotificationTooltipAdminDashboard3
              data={{ closeToolTipHandler }}
            />
          )}
        </div>
        <div className="relative w-[2.5rem] p-[0.6rem] rounded-full bg-[#e2e8f0] ml-2">
          <img className="w-full" src="/icons/message.svg" alt="" />
        </div>
        <div className="hidden md:block">
          <div className="text-sm font-medium">Thomas Anree</div>
          <div className="text-xs text-end opacity-[0.7]">UX Designer</div>
        </div>
        <div className=" relative w-[3.3rem] h-[3.3rem] rounded-full  bg-[#e2e8f0] ml-2">
          <img
            onClick={openProfileTooltipHandler}
            className="w-full h-full rounded-full object-cover object-center"
            src="/images/messi.jpg"
            alt=""
          />
          {openedTooltip === "PROFILE" && (
            <ProfileTooltip data={{ closeToolTipHandler }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderAdminDashboard3;
