"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function CalendlyPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById("__next") || document.body);
  }, []);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  if (!rootElement) return null;

  const words = [
    {
      text: "Book",
      className: "text-white",
    },
    {
      text: "Your",
      className: "text-white",
    },
    {
      text: "First",
      className: "text-white",
    },
    {
      text: "Free",
      className: "text-white",
    },
    {
      text: "Call",
      className: "text-white",
    },
  ];

  return (
    <>
      <button
        onClick={handleOpen}
        className="group relative flex items-center justify-between gap-2 overflow-hidden rounded-full bg-pink-500 px-4 py-2 font-bold text-white shadow-xl transition-all duration-300 ease-in-out hover:from-pink-600 hover:to-pink-700"
      >
        <TypewriterEffectSmooth words={words} />
        {/* <span className="z-10">Book a call</span> */}

        {/* Animated white circle with arrow */}
        <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-pink-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>

        {/* Ripple animation behind the white circle */}
        <span className="absolute right-4 h-10 w-10 animate-ping rounded-full bg-pink-400 opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
      </button>

      <PopupModal
        url="https://calendly.com/dr-priyanka-sharma"
        open={isOpen}
        onModalClose={handleClose}
        rootElement={rootElement}
      />
    </>
  );
}
