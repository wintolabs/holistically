import { HeartPulse, Leaf, Stethoscope, Syringe } from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="w-6 h-6 text-pink-500" />,
    title: "General Health Checkups",
    desc: "Routine exams and medical consultations for all age groups.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-pink-500" />,
    title: "Holistic Wellness Plans",
    desc: "Personalized lifestyle, diet, and mindfulness plans.",
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-pink-500" />,
    title: "Stress & Anxiety Relief",
    desc: "Integrated therapies to help manage mental health.",
  },
  {
    icon: <Syringe className="w-6 h-6 text-pink-500" />,
    title: "Immunization & Preventive Care",
    desc: "Vaccinations and preventive screenings.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#fef6f0] py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Services Offered</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mt-2">
            Comprehensive care tailored to your needs — blending science with
            holistic healing.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-left space-y-3 hover:shadow-md transition"
            >
              <div>{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
