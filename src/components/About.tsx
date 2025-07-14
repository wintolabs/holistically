import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Doctor Image */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/doc.jpg"
            alt="Dr. Priyanka Sharma"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Meet Dr. Priyanka Sharma
          </h2>
          <p className="text-gray-700 text-lg">
            With years of experience in both modern medicine and holistic
            healing, Dr. Priyanka Sharma takes a personalized, compassionate
            approach to health care.
          </p>
          <p className="text-gray-700">
            Her mission is to support every patient’s journey toward balance,
            vitality, and well-being — using a blend of medical science,
            nutrition, mindfulness, and lifestyle changes.
          </p>
        </div>
      </div>
    </section>
  );
}
