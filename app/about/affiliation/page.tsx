import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import { GraduationCap, Shield, CheckCircle } from "lucide-react";

const benefits = [
  "HEC-recognised B.E. Technology degree upon graduation",
  "Curriculum aligned with industry and university standards",
  "Access to university resources, research, and skill development programmes",
  "Seamless pathway for higher education (M.E./M.S. programmes)",
  "National and international acceptance of awarded degree",
];

export default function AffiliationPage() {
  return (
    <>
      <PageHero
        title="Affiliation"
        subtitle="Benazir Bhutto Shaheed University of Technology and Skill Development, Khairpur Mirs"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Affiliation" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column – Logo and intro */}
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
            <div className="w-4xl h-44 relative mb-6">
              <Image
                src="/brand/bbsutsd_logo.png" // replace with actual logo
                alt="BBSU Logo"
                width={600}
                height={400}
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Jinnah Institute of Management Sciences, Engineering & Technology
              (JIMSET) is proudly affiliated with{" "}
              <strong>
                The Benazir Bhutto Shaheed University of Technology and Skill
                Development (BBSU), Khairpur Mirs
              </strong>{" "}
              — a public sector university chartered by the Government of Sindh
              and recognised by the Higher Education Commission (HEC) of
              Pakistan.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This affiliation guarantees that our 4‑year B.E. Technology
              evening programmes meet rigorous academic and quality benchmarks.
              Students who complete their studies at JIMSET are awarded degrees
              by BBSU, making them eligible for employment, higher education,
              and professional registration both locally and abroad.
            </p>
          </div>

          {/* Right column – Benefits */}
          <div className="bg-surface border border-gray-200 rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-gold" size={32} />
              <h3 className="font-heading text-xl font-bold text-primary-dark">
                Benefits of Affiliation
              </h3>
            </div>
            <ul className="space-y-4">
              {benefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-green shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
              <GraduationCap className="text-primary" size={24} />
              <p className="text-sm text-gray-600">
                Graduates of JIMSET receive a <strong>B.E. Technology</strong>{" "}
                degree from BBSU, fully recognised by the Higher Education
                Commission (HEC) Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
