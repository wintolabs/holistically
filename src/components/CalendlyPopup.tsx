"use client";

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
        className="z-50 flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-full shadow-2xl font-semibold text-base md:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
      >
        Book a call
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
