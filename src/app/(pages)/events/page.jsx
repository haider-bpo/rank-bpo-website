"use client";
import React from "react";
import { EventsViewer } from "./EventsViewer";
import VideoPlayer from "@/components/shared/VideoPlayer";

function EventsPage() {
  return (
    <div className="bg-base-200 pt-24">
      <div className="px-4 md:px-0">
        <VideoPlayer url="https://www.dropbox.com/scl/fi/tu4axqylol49iiju27in5/office-visit.mp4?rlkey=h0h3vlf01kqrwz320jg0pg143&st=ckcjogbk&raw=1" />
      </div>
      <EventsViewer />
    </div>
  );
}

export default EventsPage;
