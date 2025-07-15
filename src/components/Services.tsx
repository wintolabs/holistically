"use client";

import {
  Stethoscope,
  Brain,
  Venus,
  Droplet,
  Baby,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Homeopathic Consultations",
    desc: "Individualised remedies for acute & chronic ailments across all ages.",
  },
  {
    icon: Brain,
    title: "Emotional & Mental Wellness",
    desc: "Gentle, non-suppressive care for anxiety, mood swings, and sleep issues.",
  },
  {
    icon: Venus,
    title: "Women’s & Hormonal Health",
    desc: "Support for PCOS, thyroid, fertility and menopause—naturally balanced.",
  },
  {
    icon: Droplet,
    title: "Skin & Hair Disorders",
    desc: "Long-lasting relief for acne, eczema, psoriasis, alopecia and more.",
  },
  {
    icon: Baby,
    title: "Child & Adolescent Care",
    desc: "Safe remedies for allergies, immunity, behaviour and growth milestones.",
  },
  {
    icon: ShieldCheck,
    title: "Gut & Immunity Support",
    desc: "Strengthen digestion and resilience with tailored homeopathic plans.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-br from-[#d3f0f4] via-white to-[#fbe5ee] py-24 px-4 md:px-8"
    >
      <div className="mx-auto max-w-6xl text-center space-y-12">
        {/* Heading */}
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Services Offered
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Root-cause healing through compassionate, personalised homeopathy.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="flex flex-col items-center text-center space-y-4 rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon wrapper */}
              <div className="grid h-16 w-16 place-content-center rounded-full bg-gradient-to-br from-sky-50 to-sky-100 ring-4 ring-sky-200/50">
                <Icon className="h-8 w-8 text-sky-600" strokeWidth={2} />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
