import PageHero from "@/components/shared/PageHero";
import { GraduationCap, BookOpen, Check, Zap, Wrench, Award } from "lucide-react";
import { programEligibilityDetails } from "@/data/admissions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eligibility Criteria",
  description:
    "Pre-requisite qualifications and eligible DAE/HSC disciplines for B.E. Technology (Electrical & Mechanical) programs with minimum 50% marks at JIMSET Karachi.",
  alternates: { canonical: "https://jimset.com/admissions/eligibility" },
};

export default function EligibilityPage() {
  return (
    <>
      <PageHero
        title="Eligibility Criteria"
        subtitle="Pre-requisite qualifications for admission in Bachelor of Engineering Technology Degree Programs"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Eligibility" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* General Requirement Banner */}
          <div className="bg-primary-dark text-white rounded-2xl p-6 md:p-8 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-l-8 border-gold">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full uppercase">
                <Award size={14} /> Minimum Requirement
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading">
                Minimum 50% Marks Mandatory
              </h2>
              <p className="text-gray-300 text-sm max-w-3xl">
                Candidates seeking admission in Bachelor of Engineering Technology (B.E. TECH) degree programs must have obtained at least <strong>50% marks</strong> in HSC or DAE from recognized boards/SBTE (excluding Hafiz-e-Quran & Sports marks).
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center shrink-0 min-w-44 border border-white/10">
              <span className="text-3xl font-extrabold text-gold">50%</span>
              <span className="text-xs text-gray-300 block font-medium mt-1">
                Minimum Marks
              </span>
            </div>
          </div>

          {/* Program Specific Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Electrical */}
            <div className="bg-white border-2 border-slate-200 hover:border-primary/40 rounded-2xl p-6 md:p-8 transition-all shadow-sm space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center">
                      <Zap size={26} />
                    </div>
                    <div>
                      <h2 className="font-heading text-xl md:text-2xl font-bold text-primary-dark">
                        B.E Tech (Electrical)
                      </h2>
                      <span className="text-xs text-gray-500 font-medium">
                        4-Year Degree Program
                      </span>
                    </div>
                  </div>
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                    Min 50% Marks
                  </span>
                </div>

                {/* HSC Stream */}
                <div className="mb-6 space-y-3">
                  <h3 className="text-sm font-bold text-primary-dark uppercase tracking-wider flex items-center gap-2">
                    <BookOpen size={16} className="text-primary" />
                    HSC / Intermediate Qualifications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-100 text-slate-800 text-sm font-medium px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5">
                      <Check className="text-green shrink-0" size={14} />
                      HSC (Pre-Engineering)
                    </span>
                    <span className="bg-slate-100 text-slate-800 text-sm font-medium px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5">
                      <Check className="text-green shrink-0" size={14} />
                      HSC (Pre-Medical)
                    </span>
                  </div>
                </div>

                {/* DAE Disciplines */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-primary-dark uppercase tracking-wider flex items-center gap-2">
                    <GraduationCap size={16} className="text-primary" />
                    Eligible DAE Disciplines
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                    {programEligibilityDetails[0].daeDisciplines.map((d, i) => (
                      <div
                        key={i}
                        className="bg-surface/80 p-2.5 rounded-lg border border-gray-200/80 flex items-center gap-2"
                      >
                        <Check className="text-green shrink-0" size={15} />
                        <span className="font-medium text-gray-800">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mechanical */}
            <div className="bg-white border-2 border-slate-200 hover:border-primary/40 rounded-2xl p-6 md:p-8 transition-all shadow-sm space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center">
                      <Wrench size={26} />
                    </div>
                    <div>
                      <h2 className="font-heading text-xl md:text-2xl font-bold text-primary-dark">
                        B.E Tech (Mechanical)
                      </h2>
                      <span className="text-xs text-gray-500 font-medium">
                        4-Year Degree Program
                      </span>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                    Min 50% Marks
                  </span>
                </div>

                {/* HSC Stream */}
                <div className="mb-6 space-y-3">
                  <h3 className="text-sm font-bold text-primary-dark uppercase tracking-wider flex items-center gap-2">
                    <BookOpen size={16} className="text-primary" />
                    HSC / Intermediate Qualifications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-100 text-slate-800 text-sm font-medium px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5">
                      <Check className="text-green shrink-0" size={14} />
                      HSC (Pre-Engineering)
                    </span>
                    <span className="bg-slate-100 text-slate-800 text-sm font-medium px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5">
                      <Check className="text-green shrink-0" size={14} />
                      HSC (Pre-Medical)
                    </span>
                  </div>
                </div>

                {/* DAE Disciplines */}
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-primary-dark uppercase tracking-wider flex items-center gap-2">
                    <GraduationCap size={16} className="text-primary" />
                    Eligible DAE Disciplines
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                    {programEligibilityDetails[1].daeDisciplines.map((d, i) => (
                      <div
                        key={i}
                        className="bg-surface/80 p-2.5 rounded-lg border border-gray-200/80 flex items-center gap-2"
                      >
                        <Check className="text-green shrink-0" size={15} />
                        <span className="font-medium text-gray-800">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm pt-4">
            If you have questions regarding your specific diploma or HSC marks verification, please contact the JIMSET Admission Office.
          </p>
        </div>
      </section>
    </>
  );
}
