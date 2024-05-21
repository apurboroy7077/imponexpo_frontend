import ExclusiveOfferSection from "@/components/ExclusiveOfferSection";
import Footer1 from "@/components/Footer1";
import Footer2 from "@/components/Footer2";
import HeroSection1 from "@/components/HeroSection1";
import ImporterCentricToolSection from "@/components/ImporterCentricToolSection";
import LiveTrends from "@/components/LiveTrends";
import MixedSection1 from "@/components/MixedSection1";
import Navbar1 from "@/components/Navbar1";
import Navbar2 from "@/components/Navbar2";
import Navbar3 from "@/components/Navbar3";
import PeopleAndBusinessTrending from "@/components/PeopleAndBusinessTrending";
import PeopleReviewSection from "@/components/PeopleReviewSection";
import PersonalizedSourcing from "@/components/PersonalizedSourcing";
import ProductsCategoryOnImponexpo from "@/components/ProductsCategoryOnImponexpo";
import SourceByRegionSection from "@/components/SourceByRegionSection";
import TrendingDeals from "@/components/TrendingDeals";
import TrendingHashtags from "@/components/TrendingHashtags";
import TrendingOnReadyMate from "@/components/TrendingOnReadyMate";
import TrendingProducts from "@/components/TrendingProducts";
import Navbar5 from "@/components/navbar/Navbar5";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar5 />
      <HeroSection1 />
      <TrendingProducts />
      <PeopleAndBusinessTrending />
      <LiveTrends />
      <TrendingHashtags />
      <TrendingOnReadyMate />
      <MixedSection1 />
      <TrendingDeals />
      <ProductsCategoryOnImponexpo />
      <ImporterCentricToolSection />
      <SourceByRegionSection />
      <PeopleReviewSection />
      <PersonalizedSourcing />
      <ExclusiveOfferSection />
      <Footer1 />
      <Footer2 />
    </>
  );
}
