// src/components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[65vh] sm:min-h-[75vh] md:min-h-[85vh] items-center justify-start overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/hero.jpeg"
        alt="Holistically Homeopathic care"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center]"
      />

      {/* Adaptive vignette: keeps text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/0 md:from-black/60 md:via-black/20" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-3xl px-6 py-32 sm:px-8 md:px-16 text-left"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow">
          Wellness through <span className="text-pink-500">homeopathy</span>
        </h1>

        <p className="mt-4 max-w-xl text-base sm:text-lg md:text-xl text-white/90">
          Gentle, root-cause healing for allergies, skin issues, stress and more
          — guided by Dr.&nbsp;Priyanka Sharma
        </p>

        <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:gap-4 sm:justify-center lg:justify-start">
          <Link
            href="#services"
            className="block w-full sm:w-auto group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-8 py-4 text-center text-lg font-bold text-white shadow-xl transition-all duration-300 hover:from-pink-600 hover:to-pink-700 hover:shadow-2xl hover:scale-105"
            role="button"
            aria-label="Browse our comprehensive homeopathy services"
          >
            <span className="relative z-10 inline-flex items-center justify-center">
              Explore Services
            </span>
          </Link>

          <Link
            href="#about"
            className="block w-full sm:w-auto group relative rounded-full bg-white px-8 py-4 text-center text-lg font-semibold text-pink-600 transition-all duration-300 hover:bg-pink-50 hover:text-pink-700 hover:shadow-lg hover:scale-105"
            role="button"
            aria-label="Learn about our holistic treatment philosophy"
          >
            <span className="inline-flex items-center justify-center">
              Why Holistically?
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
