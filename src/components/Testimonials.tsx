"use client";

import React, { useState } from "react";
import Stories from "react-insta-stories";
import Image from "next/image"; // Add this import
import { LoaderOne } from "./ui/loader";

// Custom header component that matches Instagram design
function CustomHeader({
  heading,
  profileImage,
}: {
  heading: string;
  profileImage: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "28px 16px 8px 16px",
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        backdropFilter: "blur(0px)",
      }}
    >
      {/* Wrapper div for circular image */}
      <div
        style={{
          width: 30,
          height: 30,
          position: "relative",
          borderRadius: "50%",
          overflow: "hidden",
          //   border: "1px solid #fff",
        }}
      >
        <Image
          src={profileImage}
          alt="Profile Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <span
        style={{
          color: "#fff",
          fontSize: "14px",
          fontWeight: "500",
          flexGrow: 1,
        }}
      >
        {heading}
      </span>
    </div>
  );
}

// Engaging splash screen that stays until user clicks
function SplashScreen({ onStart }: { onStart: () => void }) {
  return (
    <div
      className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cursor-pointer transition-all duration-500 hover:scale-[1.02]"
      onClick={onStart}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

      {/* Main Play Button */}
      <div className="relative mb-12 group">
        <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white">
          <svg
            className="w-7 h-7 text-gray-800 ml-0.5 transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M8 5v10l8-5-8-5z" />
          </svg>
        </div>

        {/* Single elegant ripple */}
        <div className="absolute inset-0 w-20 h-20 bg-white/20 rounded-full animate-ping"></div>
      </div>

      {/* Clean Content */}
      <div className="text-center space-y-6 max-w-sm px-6">
        <div className="space-y-3">
          <h3 className="text-3xl font-bold text-white tracking-tight">
            Patient Stories
          </h3>
          <p className="text-lg text-white/80 leading-relaxed">
            Real healing journeys from our patients
          </p>
        </div>

        <div className="pt-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-medium shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            Tap to Watch
          </div>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    url: "/testimonials/1.mp4",
    type: "video",
    duration: 8000,
  },
  {
    url: "/testimonials/2.mp4",
    type: "video",
    duration: 8000,
  },
  {
    url: "/testimonials/3.mp4",
    type: "video",
    duration: 8000,
  },
  {
    url: "/testimonials/4.mp4",
    type: "video",
    duration: 8000,
  },
];

export default function TestimonialsStories() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleStart = () => {
    setHasStarted(true);
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#d3f0f4] via-white to-[#fbe5ee]">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-8 px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 bg-clip-text text-transparent mb-4">
          What Our Patients Say
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Real stories of healing, hope, and holistic transformation.
        </p>
      </div>

      {/* Stories Container */}
      <div className="px-4">
        <div
          className="mx-auto relative"
          style={{
            maxWidth: "420px",
            width: "100%",
            height: "min(80vh, 700px)",
            minHeight: "500px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
            background: hasStarted
              ? "#000"
              : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          {!hasStarted ? (
            // Show splash screen until user clicks
            <SplashScreen onStart={handleStart} />
          ) : (
            <>
              {/* Custom Header - positioned absolutely */}
              <CustomHeader
                heading="holistically.thc"
                profileImage="/dr-priyanka.jpg"
              />

              {/* Stories Component */}
              <Stories
                stories={testimonials}
                currentIndex={currentIndex}
                onNext={(_story: unknown, index: number) =>
                  setCurrentIndex(index)
                }
                onPrevious={(_story: unknown, index: number) =>
                  setCurrentIndex(index)
                }
                defaultInterval={8000}
                loop={true}
                keyboardNavigation={true}
                width="100%"
                height="100%"
                loader={<LoaderOne />}
                header={() => null} // Disable default header
                storyContainerStyles={{
                  borderRadius: "20px",
                  background: "#000",
                }}
                progressContainerStyles={{
                  top: "4px",
                  margin: "0 16px", // Equal margin on both sides
                  height: 2,
                  borderRadius: 1,
                  zIndex: 30,
                }}
                progressStyles={{
                  backgroundColor: "#fff",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
                }}
                preloadCount={2}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
