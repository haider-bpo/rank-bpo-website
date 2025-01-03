"use client";
import React from "react";
import { EventsViewer } from "./EventsViewer";
import { ImagesSliderShower } from "@/components/shared/ImagesSliderShower";
import VideoSection from "./VideoSection";

function EventsPage({ showHeroSection = true }) {
  return (
    <div className="bg-base-200 pt-24">
      {/* {showHeroSection && (
        <ImagesSliderShower title="Events" pageName="Events" />
      )} */}

      <VideoSection
        videoUrl="https://www.dropbox.com/scl/fi/tu4axqylol49iiju27in5/office-visit.mp4?rlkey=h0h3vlf01kqrwz320jg0pg143&st=ckcjogbk&raw=1"
        overlayText="RankBPO"
      />

      <EventsViewer />
    </div>
  );
}

export default EventsPage;
