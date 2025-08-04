"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import Image from "next/image";

interface YoutubeVideoCardProps {
  videoId: string;
  title: string;
  duration: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number | null) => void;
}

export function YoutubeVideoCard({
  videoId,
  title,
  duration,
  index,
  activeIndex,
  setActiveIndex,
}: YoutubeVideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);
  const isActive = index === activeIndex;

  // Multiple thumbnail fallback options
  const getThumbnailUrl = () => {
    if (thumbnailError) {
      // Fallback to medium quality thumbnail
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handlePlay = () => {
    setActiveIndex(index);
    setIsPlaying(true);
  };

  const handleClose = () => {
    setActiveIndex(null);
    setIsPlaying(false);
  };

  const handleThumbnailError = () => {
    setThumbnailError(true);
  };

  return (
    <>
      <div className="relative w-[280px] md:w-[320px] lg:w-[360px] bg-white rounded-xl overflow-hidden snap-start shrink-0 group cursor-pointer border hover:shadow-lg transition duration-300">
        <div className="relative w-full aspect-video bg-gray-100">
          <Image
            src={getThumbnailUrl()}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
            onError={handleThumbnailError}
          />

          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors shadow-lg opacity-90 hover:opacity-100">
              <Play className="text-white w-6 h-6 ml-1" fill="currentColor" />
            </div>
          </div>

          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {duration}
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/holistic-logo.png"
                alt="Healing Logo"
                width={40}
                height={40}
                className="w-auto h-auto max-w-10 max-h-10 object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isActive && isPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl aspect-video">
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
