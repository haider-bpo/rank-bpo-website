"use client";
import React from "react";
import { EventsViewer } from "./EventsViewer";
import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import VideoSection from "./VideoSection";


function EventsPage({ showHeroSection = true }) {
  return (
    <>
      {showHeroSection && (
        <ImagesSliderShower title="Events" pageName="Events" />
      )}

      <VideoSection
        videoUrl="/videos/event.mp4"
        overlayText="RankBPO"
      />

      <EventsViewer />
    </>
  );
}

export default EventsPage;
