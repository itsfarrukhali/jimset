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
    <section className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark text-center mb-12">
          Salient Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {features.map((feat, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="text-green shrink-0 mt-0.5" size={20} />
              <span className="text-gray-700">{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
