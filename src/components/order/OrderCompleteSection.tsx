import React from "react";
import TheSection2 from "../TheSection2";

const OrderCompleteSection = () => {
  return (
    <TheSection2>
      <div>
        <div className="flex items-center justify-center">
          <img
            className="max-w-[5rem] lg:max-w-[7rem]"
            src="/icons/sector2/circle-check-solid-green.svg"
            alt=""
          />
        </div>
      </div>
      <div>
        <div className=" mt-5 text-[#1c1c1c] font-bold text-center lg:text-2xl">
          <div>Congratulation</div>
          <div>
            <div className="mt-1 lg:mt-3">
              Your Order has been Successfully Placed
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-[#696969] text-sm lg:text-base mt-3 text-center font-medium">
          Sit back, relax and let us take care of the rest. You will receive a
          confirmation email shortly with all the details. Thank you for
          choosing <span className="text-[#1d5ec9]">Imponexpo</span>
        </div>
      </div>
      <div>
        <div className="mt-5 lg:mt-7 text-center flex gap-5 justify-center items-center">
          <button className=" w-[9rem] lg:w-[15rem] text-xs lg:text-lg font-medium text-[#1d5ec9] border-[#1d5ec9] border-[1px] px-2 py-2 rounded">
            Back to Dashboard
          </button>
          <button className=" w-[9rem] lg:w-[15rem] text-xs lg:text-lg font-medium text-white bg-[#1d5ec9] border-[#1d5ec9] border-[1px] px-2 py-2 rounded">
            View Order
          </button>
        </div>
      </div>
    </TheSection2>
  );
};

export default OrderCompleteSection;
