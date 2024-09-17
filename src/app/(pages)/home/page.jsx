import HeroSection from "@/components/core/HeroSection";
import React from "react";
import AboutUsPage from "../about-us/page";

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsPage showHeroSection={false} />
    </>
  );
}

export default HomePage;
