"use client";

import { useState } from "react";
import { VideoCard } from "./VideoCard";

const videos = [
  { src: "/videos/reel-1.mp4", poster: "/videos/posters/reel-1.png" },
  { src: "/videos/reel-2.mp4", poster: "/videos/posters/reel-2.png" },
];

export default function VideoCarousel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-br from-[#fbe5ee] via-white to-[#d3f0f4]">
      <div className="w-full py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl md:text-5xl font-extrabold leading-tight">
            Healing&nbsp;<span className="text-pink-500">In Motion</span>
          </h2>

          <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scrollbar-hide pb-4">
            {videos.map(({ src, poster }, index) => (
              <VideoCard
                key={index}
                src={src}
                poster={poster}
                index={index}
                activeIndex={activeIndex ?? -1}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
