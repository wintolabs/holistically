// src/components/PromoGallery.tsx

"use client";
import ImageCarousel from "@/components/ui/ImageCarousel";

const slides = [
  { src: "/promo/1.jpeg", alt: "Allergies relief" },
  { src: "/promo/2.jpeg", alt: "Asthma relief" },
  { src: "/promo/3.jpeg", alt: "Skin care" },
  { src: "/promo/4.jpeg", alt: "Hair health" },
  { src: "/promo/5.jpeg", alt: "Immunity boost" },
  { src: "/promo/6.jpeg", alt: "Women’s health" },
  { src: "/promo/7.jpeg", alt: "Mental wellness" },
  { src: "/promo/8.jpeg", alt: "Child care" },
  { src: "/promo/9.jpeg", alt: "Digestive care" },
  { src: "/promo/10.jpeg", alt: "PCOS support" },
  { src: "/promo/11.jpeg", alt: "Stress relief" },
];

export default function PromoGallery() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl md:text-5xl font-extrabold leading-tight">
          Homeopathy&nbsp;
          <span className="text-pink-500">That Works</span>
        </h2>

        <ImageCarousel slides={slides} />
      </div>
    </section>
  );
}
