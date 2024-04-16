import HeroSection1 from "@/components/HeroSection1";
import Navbar1 from "@/components/Navbar1";
import Navbar2 from "@/components/Navbar2";
import PeopleAndBusinessTrending from "@/components/PeopleAndBusinessTrending";
import TrendingProducts from "@/components/TrendingProducts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar2 />
      <HeroSection1 />
      <TrendingProducts />
      <PeopleAndBusinessTrending />
    </>
  );
}
