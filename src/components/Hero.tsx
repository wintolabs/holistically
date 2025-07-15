"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex items-center justify-center overflow-hidden min-h-[90vh]"
    >
      {/* Background photo */}
      <Image
        src="/hero.jpeg" // 1️⃣  your file
        alt="Holistic wellness background"
        fill // makes it cover the section
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 3️⃣  Fade-in container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-3xl px-6 py-24 text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          Wellness through&nbsp;
          <span className="text-pink-400">homeopathy</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="#services"
            className="inline-block rounded-md bg-cyan-600 px-6 py-3 text-white hover:text-cyan-600 font-medium shadow-md transition hover:bg-white"
          >
            Explore Services
          </Link>

          <Link
            href="#about"
            className="hidden sm:inline-block rounded-md bg-white/90 px-6 py-3 text-pink-500 hover:text-white font-medium shadow-md  backdrop-blur transition hover:bg-pink-500"
          >
            Why&nbsp;Holistically?
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
