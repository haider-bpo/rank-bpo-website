"use client";
import React from "react";

const VideoSection = ({
  videoUrl,
  overlayText = "",
}) => {
  return (
    <div className="flex justify-center items-center bg-transparent p-4">
      <div className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-lg">
        <div className="relative w-full h-0 pb-[56.25%] bg-black">
          {/* Video Element */}
          <video
            src={videoUrl}
            className="absolute top-0 left-0 w-full h-full object-cover z-100"
            controls
            autoPlay
            muted
            loop
          />
        </div>
        
        {/* Overlay Text */}
        {overlayText && (
          <div className="absolute bottom-16 left-4 text-white font-bold text-xl">
            {overlayText}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
