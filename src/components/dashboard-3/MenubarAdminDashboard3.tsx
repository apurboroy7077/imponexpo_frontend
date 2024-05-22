import { useDashboard } from "@/configs/zustand/zustandDashboard";
import {
  MULTIPLE_USERS_ICON_BLACK_SRC,
  MULTIPLE_USERS_ICON_WHITE_SRC,
} from "@/data/ImageSrc";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
type pathNameType =
  | "/admin/dashboard"
  | "/admin/dashboard/settings"
  | "/admin/dashboard/profile"
  | "/admin/dashboard/manage-users";
const MenubarAdminDashboard3 = () => {
  const pathName = usePathname() as pathNameType;
  const menubarRef = useRef(null);
  const setMenubarRef = useDashboard(
    (state) => state.setAdminDashboardMenubarRef
  );
  const handleClickOnCloseMenuIcon = () => {
    if (menubarRef.current) {
      try {
        const menubar = menubarRef.current as HTMLElement;
        menubar.style.left = "-150%";
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setMenubarRef(menubarRef);
  }, []);
  console.log(pathName);
  return (
    <div
      ref={menubarRef}
      className="absolute lg:static h-screen z-20 bg-[#1c2434] left-[-150%]  w-[15rem] md:w-[20rem] transition-all duration-1000"
    >
      <div className="w-full    px-3 py-7 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href={"/"}>
            <div className="w-[2rem]">
              <img
                className="w-full"
                src="/icons/sector-2/demo-logo-2.svg"
                alt=""
              />
            </div>
          </Link>
          <div className="text-white font-bold text-xl">Imponexpo</div>
        </div>
        <div
          onClick={handleClickOnCloseMenuIcon}
          className="text-white opacity-[0.7] lg:hidden"
        >
          X
        </div>
      </div>
      <div>
        <div className="px-3 py-7 text-white font medium flex flex-col gap-5">
          <div className="font-medium opacity-[0.6] px-3 py-2 rounded">
            Menu
          </div>
          <Link href={"/admin/dashboard"}>
            <div
              className={`flex items-center justify-between px-3 py-2 rounded  ${
                pathName === "/admin/dashboard" ? "bg-[#333a48]" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-[2rem]">
                  <img
                    className="w-full opacity-[0.7]"
                    src="/icons/sector-2/gauge-high-regular-white.svg"
                    alt=""
                  />
                </div>
                <div>Dashboard</div>
              </div>
              <div>
                <img
                  src="/icons/sector-2/chevron-down-solid-white.svg"
                  alt=""
                  className="w-[1.3rem] opacity-[0.7]"
                />
              </div>
            </div>
          </Link>
          <Link href={"/admin/dashboard/profile"}>
            <div
              className={`flex items-center justify-between px-3 py-2 rounded  ${
                pathName === "/admin/dashboard/profile" ? "bg-[#333a48]" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-[2rem]">
                  <img
                    className="w-full opacity-[0.7]"
                    src="/icons/sector-3/address-card-regular-white.svg"
                    alt=""
                  />
                </div>
                <div>Profile</div>
              </div>
            </div>
          </Link>
          <Link href={"/admin/dashboard/manage-users"}>
            <div
              className={`flex items-center justify-between px-3 py-2 rounded  ${
                pathName === "/admin/dashboard/manage-users"
                  ? "bg-[#333a48]"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-[2rem]">
                  <img
                    className="w-full opacity-[0.7]"
                    src={MULTIPLE_USERS_ICON_WHITE_SRC}
                    alt=""
                  />
                </div>
                <div>Manage Users</div>
              </div>
            </div>
          </Link>
          <Link href={"/admin/dashboard/settings"}>
            <div
              className={`flex items-center justify-between px-3 py-2 rounded  ${
                pathName === "/admin/dashboard/settings" ? "bg-[#333a48]" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-[2rem]">
                  <img
                    className="w-full opacity-[0.7]"
                    src="/icons/sector-3/gear-solid-white.svg"
                    alt=""
                  />
                </div>
                <div>Settings</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenubarAdminDashboard3;
