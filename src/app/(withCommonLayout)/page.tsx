import AdoptionGuidelines from "@/components/AdoptionGuidelines/AdoptionGuidlines";
import FooterPage from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import PetCard from "@/components/PetCard/PetCard";
import SearchSection from "@/components/SearchSection/SearchSection";
import SuccessStories from "@/components/SuccessStories/SuccessStories";
import { getFromLocalStorage } from "@/utils/localStorage";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SearchSection />
      <PetCard />
      <SuccessStories />
      <AdoptionGuidelines />
    </div>
  );
}
