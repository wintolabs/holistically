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
  { src: "/promo/11.jpeg", alt: "Special Discount Children" },
  { src: "/promo/12.jpeg", alt: "Central Retinal Vein Occlusion" },
  { src: "/promo/13.jpeg", alt: "Struggling with Lichen Planus" },
  { src: "/promo/14.jpeg", alt: "Bad body odour" },
  { src: "/promo/15.jpeg", alt: "Child sleep" },
  { src: "/promo/16.jpeg", alt: "PCOS Treatment" },
  { src: "/promo/17.jpeg", alt: "Asthama Treatment" },
  { src: "/promo/18.jpeg", alt: "Vericose Vein Treatment" },
  { src: "/promo/19.jpeg", alt: "Myasthenia Gravis" },
  { src: "/promo/20.jpeg", alt: "Eczema" },
  { src: "/promo/21.jpeg", alt: "Asthma" },
  { src: "/promo/22.jpeg", alt: "Myasthenia Gravis" },
];

export default function PromoGallery() {
  return (
    <section className="bg-gradient-to-br from-[#d3f0f4] via-white to-[#fbe5ee]">
      <div className="w-full py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl md:text-5xl font-extrabold leading-tight">
            Homeopathy&nbsp;
            <span className="text-pink-500">That Works</span>
          </h2>

          <ImageCarousel slides={slides} />
        </div>
      </div>
    </section>
  );
}
