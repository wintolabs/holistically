"use client";

import { useState } from "react";
import { YoutubeVideoCard } from "./YoutubeVideoCard";

const videos = [
  {
    videoId: "-bOOdt3X3Gk",
    title: "How does Homeopathy work - a beginner's guide",
    duration: "1:27",
  },
  {
    videoId: "irA06BIfK3c",
    title: "Is Homeopathy scientific ?",
    duration: "3:19",
  },
  {
    videoId: "2bw7XPUqefc",
    title:
      "How are homeopathic medicines made ? (Inside the SCIENCE of Homeopathy)",
    duration: "1:36",
  },
  {
    videoId: "I9PDUO23XFQ",
    title:
      "What is Holistic Healing ? Holistic Health & Homeopathy: Dr. Hahnemann's Vision",
    duration: "2:17",
  },
];

export default function YoutubeVideoCarousel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-br from-[#fbe5ee] via-white to-[#d3f0f4]">
      <div className="w-full py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl md:text-5xl font-extrabold leading-tight text-center">
            Healing&nbsp;<span className="text-pink-500">In Motion</span>
          </h2>

          <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide pb-4">
            {videos.map(({ videoId, title, duration }, index) => (
              <YoutubeVideoCard
                key={index}
                videoId={videoId}
                title={title}
                duration={duration}
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
