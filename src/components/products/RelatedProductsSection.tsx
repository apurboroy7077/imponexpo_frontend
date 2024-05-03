import React from "react";

const RelatedProductsSection = () => {
  return (
    <section>
      <div className=" px-2 py-5 lg:py-7   flex items-center justify-center">
        <div className="w-full max-w-[100rem] bg-[white] px-5  lg:px-10 py-16 rounded-lg">
          <div>
            <div className="font-bold lg:text-2xl text-[#1c1c1c]">
              Related Products
            </div>
          </div>
          <div>
            <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {Array.from({ length: 6 }).map(() => {
                return (
                  <div key={Math.random().toString()}>
                    <div className="">
                      <div>
                        <div className=" bg-[#eeeeee] p-2 rounded">
                          <img src="/images/watch.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="text-xs md:text-sm mt-2 md:mt-4 font-medium text-[#505050]">
                          Xiaomi Redmi 8 Original
                        </div>
                      </div>
                      <div>
                        <div className=" mt-1 md:mt-2 text-xs md:text-sm font-medium text-[#8b96a5]">
                          $32.00 - $40.00
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProductsSection;
