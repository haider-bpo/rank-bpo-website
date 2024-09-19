import HeroSection from "@/components/core/HeroSection";
import React from "react";
import AboutUsPage from "../(about-us)/about-us/page";
import EventsPage from "../(about-us)/events/page";

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsPage showHeroSection={false} />
      <EventsPage showHeroSection={false} />
    </>
  );
}

export default HomePage;
