"use client";

import Image from "next/image";
import { ShineBorder } from "@/components/magicui/shine-border";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-white">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Portrait card */}
        <div className="relative max-w-xs md:max-w-sm lg:max-w-md mx-auto">
          <div className="rounded-xl bg-white shadow-xl ring-1 ring-gray-100 overflow-hidden">
            <ShineBorder
              shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              borderWidth={2}
            />

            <Image
              src="/dr-priyanka.jpeg"
              alt="Dr. Priyanka Sharma"
              width={448}
              height={560}
              className="object-cover h-full w-full"
              sizes="(min-width:1024px) 448px, (min-width:768px) 384px, 256px"
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-6">
          <header className="space-y-2">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Meet Dr.&nbsp;Priyanka&nbsp;Sharma
            </h2>
            <p className="text-lg font-semibold text-pink-500">
              BHMS (Gold Medalist) • PG&nbsp;Hom.&nbsp;(London)
              <br className="hidden sm:block" />
              Founder, The&nbsp;Holistic&nbsp;Clinic
            </p>
          </header>

          <h3 className="text-base font-semibold text-gray-900">
            Why patients trust her
          </h3>
          <ul className="text-md list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
            <li>
              <strong>15&nbsp;+ years</strong> of clinical experience delivering
              individualized homeopathic care that targets root causes—never
              just symptoms.
            </li>
            <li>
              Gold medalist from Nehru Homeopathic Medical&nbsp;College and
              postgraduate training at&nbsp;HCH London.
            </li>
            <li>
              Certified in <em>Psychology&nbsp;&amp;&nbsp;Counselling</em> to
              strengthen the mind-body connection within every treatment plan.
            </li>
            <li>
              Blends classical homeopathy with modern, evidence-based practice
              for compassionate, patient-centred healing.
            </li>
            <li>
              Guides individuals facing chronic illness, emotional imbalance, or
              proactive wellness goals toward gentle, personalised, and{" "}
              <strong>deeply holistic</strong> solutions.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
