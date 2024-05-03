import React from "react";
import TheSection2 from "../TheSection2";

const CartSection = () => {
  return (
    <TheSection2>
      <div>
        <div className="font-bold text-2xl lg:text-4xl text-[#1c1c1c]">
          Cart
        </div>
      </div>
      <div>
        <div className="hidden lg:flex mt-10 gap-10">
          <div className="w-[40%]">
            <div className="flex items-center justify-center mt-10 px-2 py-10 rounded-lg bg-[#e5e5e5]">
              <img className="w-[50%]" src="/images/tshirt.png" alt="" />
            </div>
          </div>
          <div className="w-[60%]">
            <div>
              <div className="mt-5 text-[#1c1c1c] text-base lg:text-2xl font-bold">
                Men&apos;s Half Sleeve T-shirt Cotton Base Layer Slim Muscle
              </div>
            </div>
            <div>
              <table className=" mt-10 hidden lg:table w-full table-auto">
                <thead>
                  <tr className="border-b-[2px] p-[1rem]">
                    <th className="text-center text-[#1c1c1c] py-3">Color</th>
                    <th className="text-center text-[#1c1c1c] py-3">Size</th>
                    <th className="text-center text-[#1c1c1c] py-3">
                      Unit Price
                    </th>
                    <th className="text-center text-[#1c1c1c] py-3">
                      Quantity
                    </th>
                    <th className="text-center text-[#1c1c1c] py-3">Total</th>
                    <th className="text-center text-[#1c1c1c] py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 5 }).map(() => {
                    return (
                      <tr
                        className="border-b-[2px] p-[5px]"
                        key={Math.random().toString()}
                      >
                        <td>
                          <div className="py-5 text-center font-medium flex items-center justify-center">
                            <img
                              className="w-[4rem]"
                              src="/images/tshirt.png"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <div className="py-5 text-center font-medium text-[#696969]">
                            S
                          </div>
                        </td>
                        <td>
                          {" "}
                          <div className="py-5 text-center font-medium text-[#696969]">
                            US $4.00
                          </div>
                        </td>
                        <td>
                          <div className="py-5 text-center font-medium text-[#696969]">
                            <button className="border-[2px] border-[#1d5ec9] px-3 rounded-tl-lg rounded-bl-lg">
                              -
                            </button>
                            <button className="text-sm px-3">100</button>
                            <button className="border-[2px] border-[#1d5ec9] px-3 rounded-tr-lg rounded-br-lg">
                              +
                            </button>
                          </div>
                        </td>

                        <td>
                          <div className="py-5 text-center font-medium text-[#1c1c1c]">
                            US $4.00
                          </div>
                        </td>
                        <td>
                          <div className="text-center">
                            <button className="text-[#f13232] text-sm font-medium border-[#f13232] border-b-[2px] ">
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  <tr
                    className="border-b-[2px] p-[5px]"
                    key={Math.random().toString()}
                  >
                    <td colSpan={7}>
                      <div className="py-5 text-center text-lg font-medium text-[#696969]">
                        Total <span className="text-[#1c1c1c]">$400</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:hidden">
          <div>
            <div className="flex items-center justify-center mt-10">
              <img className="w-[50%]" src="/images/tshirt.png" alt="" />
            </div>
          </div>
          <div>
            <div className="mt-5 text-[#1c1c1c] text-base font-bold">
              Men&apos;s Half Sleeve T-shirt Cotton Base Layer Slim Muscle
            </div>
          </div>
          <div>
            <div className="lg:hidden">
              <div>
                <div className="mt-5">
                  <div className="flex gap-5 items-center">
                    <div>
                      <div className="text-[#1c1c1c] font-medium">Color: </div>
                    </div>
                    {Array.from({ length: 1 }).map(() => {
                      return (
                        <div key={Math.random().toString()}>
                          <div>
                            <img
                              className="w-[1.7rem]"
                              src="/images/tshirt.png"
                              alt=""
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <div className="flex gap-1 items-center">
                    <div>
                      <div className="text-[#1c1c1c] font-medium">Size: </div>
                    </div>
                    {["S"].map((data) => {
                      return (
                        <div key={Math.random().toString()}>
                          <div className="text-[#1c1c1c] font-medium">
                            {data}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <div className="flex gap-1 items-center">
                    <div>
                      <div className="text-[#1c1c1c] font-medium">
                        Unit Price:{" "}
                      </div>
                    </div>
                    {["US $4.00"].map((data) => {
                      return (
                        <div key={Math.random().toString()}>
                          <div className="text-[#1c1c1c] text-xs font-medium">
                            {data}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <div className="flex gap-1 items-center">
                    <div>
                      <div className="text-[#1c1c1c] font-medium">
                        Quantity:{" "}
                      </div>
                    </div>
                    {["US $4.00"].map((data) => {
                      return (
                        <div key={Math.random().toString()}>
                          <div className="text-[#1c1c1c] text-xs font-medium">
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
          <hr className="my-10" />
          <div>
            {/* For Larger Screens */}
            {/* <div className="flex">
          <div>
            <div className="mt-5">
              <div className="flex flex-col gap-5 justify-center">
                <div>
                  <div className="text-[#1c1c1c] font-medium text-lg">
                    Color{" "}
                  </div>
                </div>
                {Array.from({ length: 4 }).map(() => {
                  return (
                    <div key={Math.random().toString()}>
                      <div>
                        <img
                          className="w-[2.5rem]"
                          src="/images/tshirt.png"
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <div className="mt-5">
              <div className="flex gap-1 items-center flex-col">
                <div>
                  <div className="text-[#1c1c1c] font-medium">Size: </div>
                </div>
                {["S", "M", "S", "L"].map((data) => {
                  return (
                    <div key={Math.random().toString()}>
                      <div className="text-[#1c1c1c] font-medium">{data}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div> */}
          </div>
        </div>
      </div>
      <div>
        <div className="text-center mt-5">
          <button className="bg-[#ff603d] rounded-lg font-medium text-lg px-20 py-3 text-white">
            Checkout
          </button>
        </div>
      </div>
    </TheSection2>
  );
};

export default CartSection;
