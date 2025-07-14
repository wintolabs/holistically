"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-800 to-gray-400 "
    >
      {/* Background Image */}
      <Image
        src="/hero.jpeg"
        alt="Hero Section"
        fill
        className="absolute object-cover object-center opacity-60 "
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content Grid */}

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT: Text Content */}
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Welcome to <span className="text-pink-500">Holistically</span>
          </h1>
          <p className="text-lg text-white max-w-xl mx-auto">
            Personalized care with <strong>Dr. Priyanka Sharma</strong> —
            blending modern medicine and holistic healing to support your mind,
            body, and soul.
          </p>
        </div>
      </div>
    </section>
  );
}
