import React from "react";

const HeroSection1 = () => {
  return (
    <section>
      <div className=" px-2 py-2 lg:py-5   flex items-center justify-center">
        <div className="w-full max-w-[90rem] px-2 py-2 rounded-lg bg-gradient-to-b from-[#1d5dc7] to-[#6f8af5]">
          <div className="flex flex-col md:flex-row md:justify-around md:items-center gap-3">
            <div className="flex flex-col gap-3 lg:gap-7">
              <div className="text-white text-sm md:text-lg lg:text-2xl font-bold ">
                Great Products available for Customization that suits your
                needs!
              </div>
              <div className="text-white text-xl md:text-2xl lg:text-5xl font-bold">
                Smart Wearable
              </div>
              <div className="bg-[#feeb47] transition-transform hover:scale-[1.02]  text-[#1d5ec9] w-fit px-3 text-sm md:text-base lg:text-lg font-bold py-1 cursor-pointer">
                UP to 80% OFF
              </div>
            </div>
            <div>
              <div className="flex w-full justify-center items-center">
                <img
                  src="/images/watch.png"
                  className="w-[10rem] md:w-[15rem] lg:w-[25rem]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
