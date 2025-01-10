import HeroSection from "@/components/core/HeroSection";
import React from "react";
import AboutUsPage from "../about-us/page";
import dynamic from "next/dynamic";
import Testimonials from "@/components/shared/testimonials";
import { ReelsSection } from "@/components/shared/reels-viewer";
import EventsPage from "../events/page";

// const EventsPage = dynamic(() => import("./../events/page"));
// const EventsPage = dynamic(() => import("./../events/page"), { ssr: false });

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsPage />
      <EventsPage />
      <ReelsSection />
      <Testimonials />
    </>
  );
}

export default HomePage;
