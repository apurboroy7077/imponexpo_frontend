import React from "react";
import TheSection from "../TheSection";

const TotalBalanceAndCurrentCategoryInfoSection = () => {
  return (
    <TheSection>
      <div className="flex flex-col md:flex-row justify-between gap-5 border-b-[1px] border-[#e5e5e5] pb-5">
        <div className="text-sm md:text-base text-[#8b96a5]">
          Home {">"} Clothings {">"} Electronics {">"} Mobile Accessory
        </div>
        <div>
          <span className="md:text-lg font-medium">Total Balance </span>
          <span className="md:text-lg md:ml-3 text-[#038373] font-medium">
            $35,017.65
          </span>
          <span>
            <img
              className=" inline w-[1.2rem] ml-2 md:ml-3"
              src="/icons/chevron-down-solid-grey.svg"
              alt=""
            />
          </span>
          <span>
            <img
              className="inline w-[1.2rem] ml-2 md:ml-3"
              src="/icons/eye-slash-regular-grey.svg"
              alt=""
            />
          </span>
        </div>
      </div>
    </TheSection>
  );
};

export default TotalBalanceAndCurrentCategoryInfoSection;
