import React from "react";

const ProductsDetailsSection2 = () => {
  return (
    <section>
      <div className=" px-2 py-5 lg:py-7   flex items-center justify-center">
        <div className="w-full max-w-[100rem] bg-[white] px-5  lg:px-10 py-16 rounded-lg">
          <div className="lg:hidden">
            <div className="lg:hidden">
              <div className="text-[#0d6efd] font-bold ">Product Details</div>
            </div>
            <hr className="mt-1 border-[1px] border-[#0d6efd]" />
          </div>
          <div>
            <div className="hidden lg:flex justify-around  gap-5">
              {[
                "Products Description",
                "Other Products form @technexglobalexports",
                "About @technexglobalexports",
                "Customers Interactions",
              ].map((data) => {
                if (data === "Products Description") {
                  return (
                    <div key={Math.random().toString()}>
                      <div className="text-lg w-full text-[#0d6efd] font-bold border-b-[3px] border-b-[#0d6efd] pb-2">
                        {data}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={Math.random().toString()}>
                      <div className="text-sm  w-full text-[#8b96a5] border-b-[2px] border-b-[#dee2e7] pb-2">
                        {data}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div>
            <div className="text-[#0e1514] text-xs lg:text-base mt-3 lg:mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda, nisi dolore distinctio, molestias expedita cumque
              eligendi aliquid deleniti incidunt eum iste animi quaerat
              accusantium consequuntur saepe a corrupti tempora delectus? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Dolor harum
              culpa odit cupiditate, nulla eaque dicta quisquam, ducimus totam
              a, nostrum labore nam neque quae blanditiis alias assumenda
              exercitationem suscipit!
            </div>
          </div>
          <div>
            <div className="text-sm lg:text-base font-medium mt-5 lg:mt-7">
              <span className="text-[#8b96a5]">Price: </span>
              <span className="text-[#505050] ml-1">Negotiable</span>
            </div>
          </div>
          <hr className="my-3 lg:my-5" />
          <div>
            <div className="text-sm lg:text-base font-medium mt-3 lg:mt-5">
              <span className="text-[#8b96a5]">Type: </span>
              <span className="text-[#505050] ml-1">Desktop</span>
            </div>
          </div>
          <div>
            <div className="text-sm lg:text-base font-medium mt-3 lg:mt-5">
              <span className="text-[#8b96a5]">Material: </span>
              <span className="text-[#505050] ml-1">Negotiable</span>
            </div>
          </div>
          <div>
            <div className="text-sm lg:text-base font-medium mt-3 lg:mt-5">
              <span className="text-[#8b96a5]">Price: </span>
              <span className="text-[#505050] ml-1">Negotiable</span>
            </div>
          </div>
          <hr className="my-3 lg:my-5" />
          <div>
            <div className="text-sm  lg:text-base font-medium mt-5 flex items-center">
              <div className="bg-[#1d5dc7] inline-block p-1 rounded-full">
                <img
                  className="min-w-[1rem]"
                  src="/icons/checked-white.svg"
                  alt=""
                />
              </div>
              <span className="text-[#505050] ml-2">
                Some Great Features Named Here
              </span>
            </div>
          </div>
          <div>
            <div className="text-sm  lg:text-base font-medium mt-3 lg:mt-4 flex items-center">
              <div className="bg-[#1d5dc7] inline-block p-1 rounded-full">
                <img
                  className="min-w-[1rem]"
                  src="/icons/checked-white.svg"
                  alt=""
                />
              </div>
              <span className="text-[#505050] ml-2">
                Some Great Features Named Here
              </span>
            </div>
          </div>
          <div>
            <div className="text-sm  lg:text-base font-medium mt-3 lg:mt-4 flex items-center">
              <div className="bg-[#1d5dc7] inline-block p-1 rounded-full">
                <img
                  className="min-w-[1rem]"
                  src="/icons/checked-white.svg"
                  alt=""
                />
              </div>
              <span className="text-[#505050] ml-2">
                Some Great Features Named Here
              </span>
            </div>
          </div>
          <div>
            <div className="text-sm  lg:text-base font-medium mt-3 lg:mt-4 flex items-center">
              <div className="bg-[#1d5dc7] inline-block p-1 rounded-full">
                <img
                  className="min-w-[1rem]"
                  src="/icons/checked-white.svg"
                  alt=""
                />
              </div>
              <span className="text-[#505050] ml-2">
                Some Great Features Named Here
              </span>
            </div>
          </div>
          <div>
            <div className="text-sm  lg:text-base font-medium mt-3 lg:mt-4 flex items-center">
              <div className="bg-[#1d5dc7] inline-block p-1 rounded-full">
                <img
                  className="min-w-[1rem]"
                  src="/icons/checked-white.svg"
                  alt=""
                />
              </div>
              <span className="text-[#505050] ml-2">
                Some Great Features Named Here
              </span>
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <div className="font-bold lg:text-xl mt-5">
              Cargo Details Exporter Must Provide
            </div>
          </div>
          <div>
            <div className="mt-5">
              <div>
                <span className="font-medium text-sm lg:text-base">
                  Location of the Products:{" "}
                </span>
                <span>
                  <input
                    className=" text-[#0e1514] border-b-[#b2b2b2] border-b-[2px] outline-none text-sm lg:text-base"
                    type="text"
                    placeholder="Provide the address the product is Shipping From"
                  />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-3">
              <div>
                <span className="font-medium text-sm lg:text-base">
                  Weight Per Unit:{" "}
                </span>
                <span>
                  <select className=" text-[#c2c2c2] bg-transparent border-b-[#b2b2b2] border-b-[2px] outline-none text-sm lg:text-base">
                    <option>Enter Weight of the Product Per Unit</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-3">
              <div>
                <span className="font-medium text-sm lg:text-base">
                  Dimensions Per Unit:{" "}
                </span>
                <span>
                  <select className=" text-[#c2c2c2] bg-transparent border-b-[#b2b2b2] border-b-[2px] outline-none text-sm lg:text-base">
                    <option>Enter Weight of the Product Per Unit</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold lg:text-xl text-[#0e1514] mt-7 lg:mt-10">
              Shipment Details
            </div>
          </div>
          <div>
            <div className="font-medium mt-3 lg:mt-5 text-[#0e1514]">
              Select the Date
            </div>
          </div>
          <div>
            <div className="text-xs lg:text-base font-medium text-[#696969] mt-2 lg:mt-5">
              Please Select the Commodity and Cargo ready Date
            </div>
          </div>
          <div>
            <div className="mt-2 lg:mt-5">
              <input className="text-[#696969]" type="date" />
            </div>
          </div>
          <div>
            <div className="font-medium mt-3 lg:mt-7 lg:text-xl text-[#0e1514]">
              Select the Commodity
            </div>
          </div>
          <div>
            <div className="text-xs lg:text-base font-medium text-[#696969] mt-2 lg:mt-3">
              This is needed to verify Compliance with Carriers. There are some
              commodities that we don&apos;t ship.
            </div>
          </div>
          <div>
            <div className="text-xs lg:text-base font-medium text-[#1d5ec9] mt-2 lg:mt-3">
              This is needed to verify Compliance with Carriers. There are some
              commodities that we don&apos;t ship.
            </div>
          </div>
          <div>
            <div className="mt-3 lg:mt-7">
              <select className="text-sm lg:text-base bg-[#fff7f5] border-[1px] rounded border-[black] outline-none px-3 py-1">
                <option>Dry or General Cargo</option>
                <option>Wet Cargo</option>
              </select>
            </div>
          </div>
          <div>
            <div className="mt-7 lg:mt-10 text-center">
              <button className="bg-[#1d5ec9] w-full text-white text-sm lg:text-lg px-5 py-2 lg:py-3 rounded">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDetailsSection2;
