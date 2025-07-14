import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Doctor Image */}
        <div className="relative w-full h-[500px] rounded-xl overflow-auto shadow-lg">
          <Image
            src="/dr-priyanka.jpeg"
            alt="Dr. Priyanka Sharma"
            fill
            className="object-contain"
            sizes="(max-width: 700px)"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Meet Dr. Priyanka Sharma
          </h2>

          <h3 className="text-xl font-bold text-gray-800">
            BHMS (Gold Medalist), PG Hom. (London) Founder, The Holistic Clinic
          </h3>

          <p className="text-gray-700 text-lg font-medium">
            With over 15 years of clinical experience, I specialize in
            individualized homeopathic care that focuses on treating the root
            cause — not just the symptoms. A gold medalist from Nehru
            Homeopathic Medical College (NHMC), I further pursued my
            Postgraduate training in Homeopathy from HCH, London, and hold a
            certificate in Psychology & Counselling to better understand the
            mind-body connection. At The Holistic Clinic, my mission is simple:
            To offer compassionate, evidence-based healing — blending the wisdom
            of classical homeopathy with a modern, patient-centered approach.
            Whether you are dealing with chronic conditions, emotional
            imbalances, or simply seeking wellness, I’m here to guide you with
            care that’s gentle, personalized, and deeply holistic.
          </p>
          {/* <p className="text-gray-700 text-lg">
            With years of experience in both modern medicine and holistic
            healing, Dr. Priyanka Sharma takes a personalized, compassionate
            approach to health care.
          </p>
          <p className="text-gray-700">
            Her mission is to support every patient’s journey toward balance,
            vitality, and well-being — using a blend of medical science,
            nutrition, mindfulness, and lifestyle changes.
          </p> */}
        </div>
      </div>
    </section>
  );
}
