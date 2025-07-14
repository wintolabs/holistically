// "use client";

// import { useState, useEffect } from "react";
// import { PopupWidget } from "react-calendly";

// export default function CalendlyPopup() {
//   const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

//   useEffect(() => {
//     const el = document.getElementById("__next") || document.body;
//     setRootElement(el as HTMLElement);
//   }, []);

//   if (!rootElement) {
//     return null;
//   }

//   return (
//     <PopupWidget
//       url="https://calendly.com/sharma-drpriyanka"
//       rootElement={rootElement}
//       text="Book Appointment"
//       textColor="#ffffff"
//       color="#e11d48"
//     />
//   );
// }

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
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full shadow-xl font-semibold text-base md:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
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
