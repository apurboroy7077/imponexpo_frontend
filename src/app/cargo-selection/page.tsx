import Navbar3 from "@/components/Navbar3";
import OrderingProcedure from "@/components/basics/OrderingProcedure";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar3 />
      <main className="bg-[#e5e5e5]">
        <OrderingProcedure />
      </main>
    </>
  );
};

export default page;
