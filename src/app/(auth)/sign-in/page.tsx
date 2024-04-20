import Footer1 from "@/components/Footer1";
import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import SignInSection from "@/components/SignInSection";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar2 />
      <SignInSection />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default page;
