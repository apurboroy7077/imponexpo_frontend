import ExclusiveOfferSection from "@/components/ExclusiveOfferSection";
import Footer1 from "@/components/Footer1";
import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import LiveStreamFromAccountFollow from "@/components/live-stream/LiveStreamFromAccountFollow";
import LiveStreamFromCategorySection from "@/components/live-stream/LiveStreamFromCategorySection";
import LiveStreamFromHashtag from "@/components/live-stream/LiveStreamFromHashtag";
import LiveStreamFromYourInterectedSuppliers from "@/components/live-stream/LiveStreamFromYourInterectedSuppliers";
import OngoingLivestreamsection from "@/components/live-stream/OngoingLivestreamsection";
import TrendingLiveStreamSection from "@/components/live-stream/TrendingLiveStreamSection";
import TrendingSuppliersLiveStream from "@/components/live-stream/TrendingSuppliersLiveStream";
import UpcomingLiveStreamSection from "@/components/live-stream/UpcomingLiveStreamSection";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar2 />
      <TrendingLiveStreamSection />
      <OngoingLivestreamsection />
      <LiveStreamFromCategorySection />
      <UpcomingLiveStreamSection />
      <TrendingSuppliersLiveStream />
      <LiveStreamFromHashtag />
      <LiveStreamFromYourInterectedSuppliers />
      <LiveStreamFromAccountFollow />
      <ExclusiveOfferSection />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default page;
