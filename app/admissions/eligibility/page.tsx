import PageHero from "@/components/shared/PageHero";
import { GraduationCap, BookOpen, Check } from "lucide-react";

const daeDisciplines = [
  "Electrical",
  "Electronics",
  "Instrumentation & Process Control",
  "Telecommunication",
  "Avionics",
  "Instrumentation",
  "Information Technology",
  "Radar Technology",
  "Automation",
  "Radio Technology",
  "Mechanical",
  "Auto & Farm/Diesel",
  "Power",
  "Biomedical",
  "Dies & Molding",
  "Refrigeration & Air Conditioning",
];

export default function EligibilityPage() {
  return (
    <>
      <PageHero
        title="Eligibility Criteria"
        subtitle="Pre‑requisite qualifications for admission in Bachelor of Engineering Technology Degree Programmes"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Eligibility" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* DAE Route */}
            <div className="bg-surface border border-gray-200 rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-primary" size={28} />
                <h2 className="font-heading text-xl md:text-2xl font-bold text-primary-dark">
                  DAE Graduates
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Diploma of Associate Engineer in any of the following
                disciplines with minimum <strong>50% marks</strong>, recognised
                by Sindh Board of Technical Education (SBTE):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {daeDisciplines.map((d, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="text-green shrink-0 mt-0.5" size={14} />
                    <span className="text-sm text-gray-700">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* HSC Route */}
            <div className="bg-surface border border-gray-200 rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-primary" size={28} />
                <h2 className="font-heading text-xl md:text-2xl font-bold text-primary-dark">
                  HSC / Equivalent
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Higher Secondary Certificate (Pre‑Engineering) or equivalent
                with minimum <strong>50% marks</strong>.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="text-green shrink-0 mt-0.5" size={14} />
                  <span>
                    HSC (Pre‑Engineering) — Mathematics, Physics, Chemistry
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green shrink-0 mt-0.5" size={14} />
                  <span>HSC (Pre‑Medical) also eligible</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green shrink-0 mt-0.5" size={14} />
                  <span>A‑level / ICS with relevant science subjects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green shrink-0 mt-0.5" size={14} />
                  <span>All BISE / boards recognized</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm">
            If you have any questions, please contact the Admission Office.
          </p>
        </div>
      </section>
    </>
  );
}
