import Link from "next/link";
import React, { useEffect, useRef } from "react";
type propsType = {
  data: {
    closeToolTipHandler: () => void;
  };
};
const ProfileTooltip = (props: propsType) => {
  const { closeToolTipHandler } = props.data;
  const profileTooltipRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileTooltipRef.current) {
        const myElement = profileTooltipRef.current as HTMLElement;
        const clickedElement = e.target as HTMLElement;
        if (myElement.contains(clickedElement) === false) {
          closeToolTipHandler();
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={profileTooltipRef}
      className="absolute z-20  top-[3.7rem]  right-[0rem] shadow-lg"
    >
      <div className=" bg-[white] border-[1px] px-5 py-5 w-[17rem] rounded">
        <ul className="flex flex-col gap-5">
          <Link onClick={closeToolTipHandler} href={"/admin/dashboard/profile"}>
            <li className="flex items-center">
              <div className="">
                <img
                  className="w-[1.2rem] opacity-[0.6]"
                  src="/icons/sector-3/user-regular-black.svg"
                  alt=""
                />
              </div>
              <div className=" inline ml-4 font-medium opacity-[0.6]">
                My Profile
              </div>
            </li>
          </Link>
          <Link
            onClick={closeToolTipHandler}
            href={"/admin/dashboard/settings"}
          >
            <li className="flex items-center">
              <div className="">
                <img
                  className="w-[1.2rem] opacity-[0.6]"
                  src="/icons/sector-3/gear-solid-black.svg"
                  alt=""
                />
              </div>
              <div className=" inline ml-4 font-medium opacity-[0.6]">
                Settings
              </div>
            </li>
          </Link>
          <hr />
          <Link onClick={closeToolTipHandler} href={"/logout"}>
            <li className="flex items-center">
              <div className="">
                <img
                  className="w-[1.2rem] opacity-[0.6]"
                  src="/icons/sector-3/logout-black.svg"
                  alt=""
                />
              </div>
              <div className=" inline ml-4 font-medium opacity-[0.6]">
                Logout
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ProfileTooltip;
