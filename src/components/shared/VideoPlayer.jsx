'use client'
import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeOff } from "lucide-react";

const VideoPlayer = ({
  url,
  overlayText = "",
  width = "64rem",
  height = "60.25%",
  poster = "/video-placeholder.jpg", // Add a placeholder image
}) => {
  const [muted, setMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Create intersection observer for lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && videoRef.current) {
          // Only load video when in viewport
          videoRef.current.src = url;
          observerRef.current.disconnect();
        }
      },
      { threshold: 0.0 }
    );

    if (videoRef.current) {
      observerRef.current.observe(videoRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [url]);

  const handleLoadStart = () => {
    setIsLoading(true);
    setHasError(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative w-full flex justify-center items-center bg-transparent">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-50 dark:bg-red-900">
          <p className="text-red-500 dark:text-red-200">Failed to load video</p>
        </div>
      )}

      <div
        className="relative rounded-lg overflow-hidden shadow-lg w-full"
        style={{ maxWidth: width }}
      >
        <div
          className="relative w-full h-0 bg-black"
          style={{ paddingBottom: height }}
        >
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            muted={muted}
            playsInline
            autoPlay
            loop
            poster={poster}
            preload="metadata"
            onLoadStart={handleLoadStart}
            onCanPlay={handleCanPlay}
            onError={handleError}
          >
            {/* Don't set src initially - it will be set by intersection observer */}
            <source type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Overlay Text */}
        {overlayText && (
          <div className="absolute bottom-8 left-4 text-white font-bold text-sm sm:text-lg md:text-xl">
            {overlayText}
          </div>
        )}

        {/* Mute Toggle Button */}
        <button
          className="absolute top-4 right-4 bg-white/50 p-2 rounded-full cursor-pointer hover:bg-white/70 transition-colors"
          onClick={() => setMuted(!muted)}
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? (
            <VolumeOff className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default React.memo(VideoPlayer);
