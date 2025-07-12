"use client";
import Script from "next/script";

export default function Booking() {
  return (
    <section id="booking" className="py-20 px-6 bg-white text-center relative">
      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <div className="max-w-xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to take a step towards better health?
        </h2>
        <p className="text-gray-700 text-lg">
          Book a consultation with Dr. Priyanka Sharma at your convenience.
        </p>
        <button
          className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-6 py-5 rounded-xl"
          onClick={() =>
            window.Calendly?.initPopupWidget({
              url: "https://calendly.com/sharma-drpriyanka",
            })
          }
        >
          Book Appointment
        </button>
      </div>
    </section>
  );
}
