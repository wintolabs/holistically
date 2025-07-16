// src/components/ui/ImageCarousel.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Slide = { src: string; alt: string };

export default function ImageCarousel({
  slides,
  gap = 16,
  cardWidth = 384,
}: {
  slides: Slide[];
  gap?: number;
  cardWidth?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const check = () => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setCanLeft(scrollLeft > 0);
    setCanRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const by = (dir: "left" | "right") => {
    if (!ref.current) return;

    const isMobile = window.innerWidth < 768;
    const step = isMobile ? 240 : cardWidth + gap;

    ref.current.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  useEffect(check, []);

  return (
    <div className="relative">
      <div
        ref={ref}
        onScroll={check}
        className="flex overflow-x-scroll scroll-smooth gap-4 pl-4 md:pl-6 pr-[12%] py-10 [scrollbar-width:none]"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-2 bg-gradient-to-r from-white/80 via-white/40 to-transparent dark:from-neutral-900/80 dark:via-neutral-900/40" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-2 bg-gradient-to-l from-white/80 via-white/40 to-transparent dark:from-neutral-900/80 dark:via-neutral-900/40" />

        {slides.map(({ src, alt }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={cn(
              "relative shrink-0 rounded-3xl overflow-hidden shadow-xl aspect-[2/3]",
              "border-[1px]",
              "border-pink-400",
              "w-[72vw] max-w-[240px]", // phones
              "sm:w-[300px] sm:max-w-none", // ≥ 640 px
              "md:w-96 md:max-w-none" // ≥ 768 px → 384 px wide
            )}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 70vw, 384px"
              className="object-cover"
              priority={i === 0}
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute -bottom-4 right-8 flex gap-2">
        <button
          onClick={() => by("left")}
          disabled={!canLeft}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200",
            !canLeft && "opacity-40 cursor-default"
          )}
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button
          onClick={() => by("right")}
          disabled={!canRight}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200",
            !canRight && "opacity-40 cursor-default"
          )}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
