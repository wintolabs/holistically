"use client";

import { useEffect, useState } from "react";
import { CalendarIcon } from "lucide-react";

export default function FloatingBookingButton() {
  const [calendlyReady, setCalendlyReady] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => setCalendlyReady(true); // ✅ Wait for Calendly script to load
      document.body.appendChild(script);
    } else {
      setCalendlyReady(true); // Already loaded
    }
  }, []);

  const handleClick = () => {
    if (calendlyReady && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/sharma-drpriyanka",
      });
    } else {
      alert("Calendly is still loading. Please try again shortly.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-5 py-3 rounded-full shadow-lg transition-all"
    >
      <CalendarIcon className="w-5 h-5" />
      Book Appointment
    </button>
  );
}
