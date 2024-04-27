import React from "react";
import TheSection from "../TheSection";

const TrustedOrganizationSection = () => {
  return (
    <TheSection>
      <div>
        <div className="font-bold md:text-xl lg:text-2xl">
          Trusted and backed by leading organizations
        </div>
      </div>
      <div>
        <div className=" mt-5 md:mt-10 lg:mt-16 grid grid-cols-3 md:grid-cols-5 gap-5  ">
          {Array.from({ length: 10 }).map(() => {
            return (
              <div key={Math.random().toString()}>
                <div className=" flex items-center justify-center">
                  <div className="flex items-center justify-center w-[5rem] md:w-[11rem] h-[5rem] md:h-[11rem]   border-[#e5e5e5] border-[1px] rounded-full">
                    <img
                      className=" max-w-[3.5rem] md:max-w-[9rem]"
                      src="/icons/demo-logo.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </TheSection>
  );
};

export default TrustedOrganizationSection;
