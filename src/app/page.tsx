import HeroSection1 from "@/components/HeroSection1";
import LiveTrends from "@/components/LiveTrends";
import MixedSection1 from "@/components/MixedSection1";
import Navbar1 from "@/components/Navbar1";
import Navbar2 from "@/components/Navbar2";
import PeopleAndBusinessTrending from "@/components/PeopleAndBusinessTrending";
import TrendingDeals from "@/components/TrendingDeals";
import TrendingHashtags from "@/components/TrendingHashtags";
import TrendingOnReadyMate from "@/components/TrendingOnReadyMate";
import TrendingProducts from "@/components/TrendingProducts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar2 />
      <HeroSection1 />
      <TrendingProducts />
      <PeopleAndBusinessTrending />
      <LiveTrends />
      <TrendingHashtags />
      <TrendingOnReadyMate />
      <MixedSection1 />
      <TrendingDeals />
    </>
  );
}
