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
        videoUrl="https://youtu.be/sfeehxJ-UXk?si=3HOgeR70twgX1h2Z"
        overlayText="RankBPO"
      />

      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sfeehxJ-UXk?si=3HOgeR70twgX1h2Z"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe> */}

      <EventsViewer />
    </>
  );
}

export default EventsPage;
