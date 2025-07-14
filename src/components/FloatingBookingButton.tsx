"use client";

import { useEffect, useState } from "react";
import { CalendarIcon } from "lucide-react";
import { loadCalendly } from "@/utils/loadCalendly";

export default function FloatingBookingButton() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadCalendly().then(() => {
      setReady(true);
    });
  }, []);

  const handleClick = () => {
    if (ready && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/sharma-drpriyanka",
      });
    } else {
      alert("Loading Calendly... Please wait a second and try again.");
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
