import React from "react";
import TheSection from "../TheSection";
import ProductsCard1 from "../ProductsCard1";

const BlogsByRegionSection = () => {
  return (
    <TheSection>
      <div>
        <div className="mt-10">
          <div>
            <div className="flex gap-3 flex-wrap">
              {["All", "Africa", "Americas", "Asia", "Europe", "Oceania"].map(
                (name) => {
                  return (
                    <div key={Math.random().toString()}>
                      <select
                        className="text-sm  text-[#1d5dc7] px-3 py-1 font-bold rounded border-[#cdcdcd] border-[1px]"
                        style={{ boxShadow: "1px 1px 3px black" }}
                      >
                        <option>{name}</option>
                      </select>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div>
            <div className=" mt-5 grid grid-cols-1 ">
              {Array.from({ length: 4 }).map(() => {
                return <ProductsCard1 key={Math.random().toString()} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </TheSection>
  );
};

export default BlogsByRegionSection;
