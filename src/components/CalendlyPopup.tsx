"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

export default function CalendlyPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById("__next") || document.body);
  }, []);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  if (!rootElement) return null;

  return (
    <>
      <button
        onClick={handleOpen}
        className="group relative flex items-center justify-between gap-2 overflow-hidden rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-2 font-bold text-white shadow-xl transition-all duration-300 ease-in-out hover:from-rose-600 hover:to-rose-700"
      >
        <span className="z-10">Book a call</span>

        {/* Animated white circle with arrow */}
        <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-rose-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>

        {/* Ripple animation behind the white circle */}
        <span className="absolute right-4 h-10 w-10 animate-ping rounded-full bg-rose-400 opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
      </button>

      <PopupModal
        url="https://calendly.com/sharma-drpriyanka"
        open={isOpen}
        onModalClose={handleClose}
        rootElement={rootElement}
      />
    </>
  );
}
