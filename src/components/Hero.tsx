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
        src="/hero.png"
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
          Wellness through <span className="text-pink-400">homeopathy</span>
        </h1>

        <p className="mt-4 max-w-xl text-base sm:text-lg md:text-xl text-white/90">
          Gentle, root-cause healing for allergies, skin issues, stress and more
          — guided by Dr.&nbsp;Priyanka Sharma.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#services"
            className="inline-block rounded-md bg-cyan-600 px-8 py-3 text-center text-white font-medium shadow-md transition hover:bg-white hover:text-cyan-700"
          >
            Explore Services
          </Link>
          <Link
            href="#about"
            className="inline-block rounded-md bg-white/90 px-8 py-3 text-center text-pink-600 font-medium shadow-md backdrop-blur transition hover:bg-pink-600 hover:text-white"
          >
            Why Holistically?
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
