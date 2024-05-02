import React from "react";

const OrderingProcedure = () => {
  return (
    <>
      <section>
        <div className=" px-2 py-5 lg:py-7   flex items-center justify-center">
          <div className="w-full max-w-[90rem] bg-[white] px-10 py-16 rounded-lg">
            {" "}
            <div>
              <div className="font-medium md:text-lg lg:text-xl  text-center mt-5 ">
                Not sure how to continue? Not a problem. Follow these 6 easy
                steps to make your sourcing, ordering and receiving easy.
              </div>
            </div>
            <div>
              <div className="mt-5 md:mt-10 lg:mt-16">
                <div className="  flex items-center">
                  <div className="min-w-[10%] max-w-[10%] flex items-center justify-center bg-[#ff603d] p-1 rounded-full w-fit">
                    <img
                      className="min-w-[full] max-w-[full]"
                      src="/icons/sector-1/check-badge.png"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <hr className="border-[#ff603d] h-[2px] border-[2px]" />
                  </div>
                  <div className="min-w-[10%] max-w-[10%] flex items-center justify-center relative bg-transparent border-[1px] border-black p-1 rounded-full w-fit">
                    <img
                      className=" min-w-[full] max-w-[full]"
                      src="/icons/sector-1/Bag 5.png"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <hr className="border-[#d6d6d6] h-[2px] border-[2px]" />
                  </div>
                  <div className=" min-w-[10%] max-w-[10%] flex items-center justify-center bg-transparent border-[1px] border-black p-2 bg-[#e6e6e6] rounded-full w-fit">
                    <img
                      className=" min-w-[full] max-w-[full]"
                      src="/icons/sector-1/Menu Cheesesburger.png"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <hr className="border-[#d6d6d6] h-[2px] border-[2px]" />
                  </div>
                  <div className=" min-w-[10%] max-w-[10%] flex items-center justify-center bg-transparent border-[1px] border-black p-2 bg-[#e6e6e6] rounded-full w-fit">
                    <img
                      className=" min-w-[full] max-w-[full]"
                      src="/icons/sector-1/Delivery.png"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <hr className="border-[#d6d6d6] h-[2px] border-[2px]" />
                  </div>
                  <div className="min-w-[10%] max-w-[10%] flex items-center justify-center bg-transparent border-[1px] border-black p-2 bg-[#e6e6e6] rounded-full w-fit">
                    <div className="min-w-[full] max-w-[full]  text-center text-[#c4c4c4]">
                      $
                    </div>
                  </div>
                  <div className="w-full">
                    <hr className="border-[#d6d6d6] h-[2px] border-[2px]" />
                  </div>
                  <div className="min-w-[10%] max-w-[10%] flex items-center justify-center bg-transparent border-[1px] border-black p-2 bg-[#e6e6e6] rounded-full w-fit">
                    <img
                      className=" min-w-[full] max-w-[full]"
                      src="/icons/sector-1/Like.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" mt-5 flex items-center justify-between">
                  {[
                    "Search the Product",
                    "View the Product and Communicate with the Explorer",
                    "View your Ordering List",
                    "Make your Importation Swift",
                    "Pay for your Product",
                    "Confirmation of Payment",
                  ].map((data) => {
                    return (
                      <div
                        className="max-w-[10%] min-w-[10%] "
                        key={Math.random().toString()}
                      >
                        <div className="text-[0.5rem] md:text-xs lg:text-sm md:font-medium text-center">
                          {data}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderingProcedure;
