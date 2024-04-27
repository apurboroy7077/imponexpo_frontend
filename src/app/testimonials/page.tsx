import ExclusiveOfferSection from "@/components/ExclusiveOfferSection";
import Footer1 from "@/components/Footer1";
import Footer2 from "@/components/Footer2";
import Navbar2 from "@/components/Navbar2";
import FeaturedUserStoriesSection from "@/components/testimonials/FeaturedUserStoriesSection";
import GlobalSuccessStorySection from "@/components/testimonials/GlobalSuccessStorySection";
import KeyPerformenceIndicatorSection from "@/components/testimonials/KeyPerformenceIndicatorSection";
import TestimonialsHeroSection from "@/components/testimonials/TestimonialsHeroSection";
import TrustedOrganizationSection from "@/components/testimonials/TrustedOrganizationSection";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar2 />
      <TestimonialsHeroSection />
      <TrustedOrganizationSection />
      <GlobalSuccessStorySection />
      <FeaturedUserStoriesSection />
      <KeyPerformenceIndicatorSection />
      <ExclusiveOfferSection />
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default page;
