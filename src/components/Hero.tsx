"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleBooking = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/sharma-drpriyanka",
      });
    } else {
      alert("Calendly is still loading. Please try again in a moment.");
    }
  };

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-white to-[#fef6f0] px-6 py-20"
    >
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Welcome to <span className="text-rose-600">Holistically</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Personalized care with <strong>Dr. Priyanka Sharma</strong> — blending
          modern medicine and holistic healing to support your mind, body, and
          soul.
        </p>
        <Button
          className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-6 py-5 rounded-xl"
          onClick={handleBooking}
        >
          Book Appointment
        </Button>
      </div>
    </section>
  );
}
