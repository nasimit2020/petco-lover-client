import AdoptionGuidelines from "@/components/AdoptionGuidelines/AdoptionGuidlines";
import FooterPage from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import PetCard from "@/components/PetCard/PetCard";
import SearchSection from "@/components/SearchSection/SearchSection";
import SuccessStories from "@/components/SuccessStories/SuccessStories";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-12">
      <Navbar />
      <HeroSection />
      <SearchSection />
      <PetCard />
      <SuccessStories />
      <AdoptionGuidelines />
      <FooterPage />
    </div>
  );
}
