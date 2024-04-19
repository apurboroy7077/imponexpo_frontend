import React from "react";
import TheSection from "./TheSection";

const PeopleReviewSection = () => {
  return (
    <TheSection>
      <div>
        <div className=" text-center md:py-2 lg:py-3  font-bold text-lg md:text-2xl lg:text-3xl">
          What People Say About Us?
        </div>
      </div>
      <div>
        <div className="font-medium text-sm  md:text-base lg:text-xl text-center my-2 md:my-3 ">
          See why our users love us. Dive into real feedback to gauge our
          commitment to excellence.
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-7">
          {Array.from({ length: 4 }).map(() => {
            return (
              <div key={Math.random().toString()}>
                <div className="bg-[#f3f3f3] px-2 md:px-7  py-2 md:py-5 rounded-lg">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-[65%]">
                        <div>
                          <div className="font-bold text-[3rem] h-[2.5rem]">
                            &quot;
                          </div>
                        </div>
                        <div>
                          <div className="text-xs md:text-sm lg:text-lg font-medium text-[#0e1514]">
                            Effortles Sourcing, smooth deliveries and excellent
                            customer support. Highly recomended for streaming
                            global trade operations.
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-end text-[3rem] h-[2.5rem]">
                            &quot;
                          </div>
                        </div>
                      </div>
                      <div className="w-[35%]">
                        <img src="/images/old-person.png" alt="" />
                      </div>
                    </div>
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

export default PeopleReviewSection;
