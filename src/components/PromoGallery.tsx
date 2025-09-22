"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Marquee } from "./magicui/marquee";

const slides = [
  { src: "/promo/1.jpeg", alt: "Allergies relief" },
  { src: "/promo/2.jpeg", alt: "Asthma relief" },
  { src: "/promo/3.jpeg", alt: "Skin care" },
  { src: "/promo/4.jpeg", alt: "Hair health" },
  { src: "/promo/5.jpeg", alt: "Immunity boost" },
  { src: "/promo/6.jpeg", alt: "Women's health" },
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
  { src: "/promo/19.jpeg", alt: "Myasthenia Gravis1" },
  { src: "/promo/20.jpeg", alt: "Eczema1" },
  { src: "/promo/21.jpeg", alt: "Asthma" },
  { src: "/promo/22.jpeg", alt: "Myasthenia Gravis2" },
  { src: "/promo/23.jpeg", alt: "Throid Disorder" },
  { src: "/promo/24.jpeg", alt: "Healed1" },
  { src: "/promo/25.jpeg", alt: "Parkinsons Disease" },
  { src: "/promo/26.jpeg", alt: "Pancreatitis" },
  { src: "/promo/27.jpeg", alt: "Laryngitis" },
  { src: "/promo/28.jpeg", alt: "Carpal Tunnel Syndrome" },
  { src: "/promo/29.jpeg", alt: "Pancreatitis2" },
  { src: "/promo/30.jpeg", alt: "Hepatitis" },
  { src: "/promo/31.jpeg", alt: "Molluscum" },
  { src: "/promo/32.jpeg", alt: "Nail Infections" },
  { src: "/promo/33.jpeg", alt: "Rheumatoid Arthritis" },
  { src: "/promo/34.jpeg", alt: "Gatritis" },
  { src: "/promo/35.jpeg", alt: "Breast Cancer" },
  { src: "/promo/36.jpeg", alt: "Joint Pains" },
  { src: "/promo/37.jpeg", alt: "Ear Infection" },
  { src: "/promo/38.jpeg", alt: "Vitiligo" },
  { src: "/promo/39.jpeg", alt: "Myasthenia Gravis3" },
  { src: "/promo/40.jpeg", alt: "Eczema2" },
  { src: "/promo/41.jpeg", alt: "High BP" },
  { src: "/promo/42.jpeg", alt: "Varicose Veins" },
];

const firstColumn = slides.slice(0, slides.length / 2);
const secondColumn = slides.slice(slides.length / 2);

function PromoCard({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group block w-40 sm:w-44 overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-400 mx-auto"
    >
      <div className="relative aspect-[3/4]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="176px"
          className="object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACw="
        />
      </div>
    </button>
  );
}

export default function PromoMarqueeVertical() {
  const [selected, setSelected] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!selected) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onEsc);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = prev;
    };
  }, [selected]);

  const handleImageClick = (src: string) => {
    setSelected(src);
    setImageLoading(true); // Start loading state
  };

  const handleImageLoad = () => {
    setImageLoading(false); // End loading state
  };

  const closeModal = () => {
    setSelected(null);
    setImageLoading(false);
  };

  const isModalOpen = !!selected;

  return (
    <section className="bg-gradient-to-br from-[#d3f0f4] via-white to-[#fbe5ee]">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="mb-12 text-3xl md:text-5xl font-extrabold leading-tight text-center">
          Homeopathy&nbsp;<span className="text-pink-500">That Works</span>
        </h2>

        <div className="flex justify-center gap-6">
          {/* Left column */}
          <div className="relative h-[600px] w-48 overflow-hidden rounded-2xl bg-white/30 backdrop-blur-sm">
            <Marquee
              vertical={true}
              pauseOnHover={true}
              className={`h-full [--duration:200s] ${
                isModalOpen ? "paused" : ""
              }`}
            >
              {firstColumn.map((s, i) => (
                <div key={`L-${i}`} className="py-3">
                  <PromoCard
                    src={s.src}
                    alt={s.alt}
                    onClick={() => handleImageClick(s.src)}
                  />
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-5 bg-gradient-to-b from-[#d3f0f4] via-[#d3f0f4]/80 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-[#fbe5ee] via-[#fbe5ee]/80 to-transparent" />
          </div>

          {/* Right column */}
          <div className="relative h-[600px] w-48 overflow-hidden rounded-2xl bg-white/30 backdrop-blur-sm">
            <Marquee
              vertical={true}
              reverse={true}
              pauseOnHover={true}
              className={`h-full [--duration:200s] ${
                isModalOpen ? "paused" : ""
              }`}
            >
              {secondColumn.map((s, i) => (
                <div key={`R-${i}`} className="py-3">
                  <PromoCard
                    src={s.src}
                    alt={s.alt}
                    onClick={() => handleImageClick(s.src)}
                  />
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-5 bg-gradient-to-b from-[#d3f0f4] via-[#d3f0f4]/80 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-[#fbe5ee] via-[#fbe5ee]/80 to-transparent" />
          </div>
        </div>

        <style jsx global>{`
          .paused,
          .paused * {
            animation-play-state: paused !important;
          }

          @media (prefers-reduced-motion: reduce) {
            .marquee,
            [class*="Marquee"],
            [class*="marquee"] {
              animation-play-state: paused !important;
            }
          }
        `}</style>
      </div>

      {/* Enhanced Modal with Loading States */}
      {mounted &&
        selected &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm p-4 flex items-center justify-center"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label="Full size promo image"
          >
            <div
              className="relative max-w-3xl max-h-[90vh] bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Loading Skeleton */}
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white">
                  <div className="w-full h-full max-w-2xl max-h-[80vh] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-xl flex flex-col items-center justify-center">
                    {/* Skeleton with loading spinner */}
                    <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-500 text-lg font-medium">
                      Loading image...
                    </p>
                  </div>
                </div>
              )}

              {/* Actual Image */}
              <Image
                src={selected}
                alt="Promo"
                width={800}
                height={1067}
                className={`h-auto w-full object-contain transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={handleImageLoad}
                priority={true}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />

              {/* Close Button - Always Visible */}
              <button
                onClick={closeModal}
                className="absolute right-3 top-3 rounded-full bg-white/90 p-3 shadow-lg hover:bg-white transition-colors z-10"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
