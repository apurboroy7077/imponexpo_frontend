import Footer1 from "@/components/Footer1";
import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import ChatSection from "@/components/chat/ChatSection";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar2 />
      <ChatSection />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default page;
