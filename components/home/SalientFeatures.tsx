import { CheckCircle } from "lucide-react";

const features = [
  "Highly Qualified & Experienced Faculty",
  "Orientation for newly admitted Students",
  "Security Monitored by CCTV camera",
  "Standby Generator",
  "Industrial / Study Visits",
  "Well Established Library & E-Library",
  "Affordable Fee Structure",
  "Youth Employment / Apprenticeship / Entrepreneurship Programs",
  "Career Counselling / Service Guidance / Guest Lecture Series",
  "Opportunities for Student to Participate in Co-Curricular Activities",
  "Universal CV Designing Support",
  "Organizing Convocation / Prize Distribution for Pass-out Students",
];

export default function SalientFeatures() {
  return (
    <section className="py-20 md:py-28 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Student Life
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mt-2 mb-4">
            Salient Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every aspect of JIMSET is designed to support your learning and
            future career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {features.map((feat, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-md hover:bg-surface transition-colors"
            >
              <CheckCircle className="text-green shrink-0 mt-0.5" size={20} />
              <span className="text-gray-700 font-medium">{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
