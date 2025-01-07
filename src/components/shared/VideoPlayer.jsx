"use client";
import { Volume2, VolumeOff } from "lucide-react";
import React, { useState } from "react";

const VideoPlayer = ({
  url,
  overlayText = "",
  width = "64rem",
  height = "60.25%",
}) => {
  const [muted, setMuted] = useState(true); // Initially muted

  const toggleMute = () => {
    setMuted((prevMuted) => !prevMuted); // Toggle mute/unmute
  };

  return (
    <div className="flex justify-center items-center bg-transparent">
      <div
        className="relative rounded-lg overflow-hidden shadow-lg w-full"
        style={{ maxWidth: width }} // Allow width customization
      >
        <div
          className="relative w-full h-0 bg-black"
          style={{ paddingBottom: height }} // Allow height customization
        >
          {/* Video Element */}
          <video
            src={url}
            className="absolute top-0 left-0 w-full h-full object-cover"
            muted={muted}
            autoPlay
            loop
            controls={false} // Disable all native controls
          />
        </div>

        {/* Overlay Text */}
        {overlayText && (
          <div className="absolute bottom-8 left-4 text-white font-bold text-sm sm:text-lg md:text-xl">
            {overlayText}
          </div>
        )}

        {/* Mute/Unmute Button */}
        <div
          className="absolute top-4 right-4 bg-white/50 text-xs p-2 rounded-full cursor-pointer md:text-sm"
          onClick={toggleMute}
        >
          {muted ? (
            <span className="text-black">
              <VolumeOff />
            </span>
          ) : (
            <span className="text-black">
              <Volume2 />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
