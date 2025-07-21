"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import clsx from "clsx";

interface VideoCardProps {
  src: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export function VideoCard({
  src,
  index,
  activeIndex,
  setActiveIndex,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const isActive = index === activeIndex;

  // Handle playback effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive && !video.paused) {
      // already playing
      return;
    }

    if (isActive) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  // Update progress bar
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const percent = (video.currentTime / video.duration) * 100;
      setProgress(isNaN(percent) ? 0 : percent);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const handleToggle = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      // even if it's already active, re-play
      setActiveIndex(index);
      setTimeout(() => {
        videoRef.current?.play();
        setIsPlaying(true);
      }, 0);
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-[250px] md:w-[300px] lg:w-[340px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg snap-start shrink-0 group">
      <video
        ref={videoRef}
        src={src}
        playsInline
        muted={isMuted}
        preload="metadata"
        onEnded={() => {
          setIsPlaying(false);
        }}
        className="object-cover h-full w-full"
      />

      {/* Overlay with play/pause */}
      <div
        onClick={handleToggle}
        className={clsx(
          "absolute inset-0 flex items-center justify-center transition duration-300 cursor-pointer",
          "bg-black/20",
          {
            "opacity-100": !isPlaying,
            "opacity-0 group-hover:opacity-100": isPlaying,
          }
        )}
      >
        <div className="p-3 bg-white/30 rounded-full">
          {isPlaying ? (
            <Pause className="text-white w-6 h-6" />
          ) : (
            <Play className="text-white w-6 h-6" />
          )}
        </div>
      </div>

      {/* Mute toggle (top-right) */}
      <button
        onClick={handleMuteToggle}
        className="absolute top-2 right-2 p-2 bg-white/30 rounded-full backdrop-blur-md z-10 hover:bg-white/50"
      >
        {isMuted ? (
          <VolumeX className="text-white w-5 h-5" />
        ) : (
          <Volume2 className="text-white w-5 h-5" />
        )}
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-pink-200">
        <div
          className="h-full bg-pink-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
