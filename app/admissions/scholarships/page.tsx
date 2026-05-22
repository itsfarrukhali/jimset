import PageHero from "@/components/shared/PageHero";
import {
  GraduationCap,
  Star,
  BookOpen,
  Medal,
  FileText,
  Users,
  Banknote,
} from "lucide-react";

export default function ScholarshipsPage() {
  return (
    <>
      <PageHero
        title="Scholarships"
        subtitle="Merit‑based, need‑based, and special scholarships for JIMSET students"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Scholarships" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* Merit Scholarship */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Star className="text-gold" size={28} />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark">
                Merit Scholarship for Toppers
              </h2>
            </div>
            <div className="bg-surface border border-gray-200 rounded-xl p-6 space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                • A student can avail only{" "}
                <strong>one scholarship at a time</strong>.
              </p>
              <p>
                • Achieving a <strong>GPA of 4.0</strong> in the semester →{" "}
                <strong>25% tuition fee waiver</strong> for the following
                semester.
              </p>
              <p>
                • If no student has a GPA of 4.0, the highest achiever with at
                least <strong>GPA 3.75</strong> →{" "}
                <strong>20% tuition fee waiver</strong>.
              </p>
              <p>
                • If no student has a GPA of 3.75, the top‑scoring student
                (minimum <strong>GPA 3.75</strong>) →{" "}
                <strong>15% tuition fee waiver</strong>.
              </p>
            </div>
          </div>

          {/* Financial Assistance */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Banknote className="text-gold" size={28} />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark">
                Financial Assistance Scholarship
              </h2>
            </div>
            <div className="bg-surface border border-gray-200 rounded-xl p-6 space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                • All program students are eligible if they face{" "}
                <strong>financial constraints</strong>.
              </p>
              <p>
                • <strong>Fresh intake:</strong> Intermediate / equivalent marks
                are considered.
              </p>
              <p>
                • From 2nd semester onward: minimum <strong>3.75 CGPA</strong>{" "}
                in previous semester required, and must maintain it thereafter.
              </p>
            </div>
          </div>

          {/* Hafiz-e-Quran */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-gold" size={28} />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark">
                Hafiz‑e‑Quran Scholarship
              </h2>
            </div>
            <div className="bg-surface border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Up to <strong>25% tuition fee waiver</strong> for Hafiz‑e‑Quran
                holding a certificate from a recognised Madrasa
                (Wafaq‑ul‑Madaris). Applicable for{" "}
                <strong>all semesters</strong>.
              </p>
            </div>
          </div>

          {/* Sports Scholarship */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Medal className="text-gold" size={28} />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark">
                Sports Scholarship
              </h2>
            </div>
            <div className="bg-surface border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Up to <strong>50% tuition fee waiver</strong> for athletes who
                have represented{" "}
                <strong>Pakistan at an international platform</strong>. The
                scholarship continues if the student maintains a{" "}
                <strong>CGPA of 3.75 or above</strong> in subsequent semesters.
              </p>
            </div>
          </div>

          {/* JPI Diploma Holders */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-gold" size={28} />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark">
                For JPI Diploma Holders
              </h2>
            </div>
            <div className="bg-surface border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                <strong>10% tuition fee scholarship</strong> for JPI pass‑out
                students, applicable for <strong>all semesters</strong>.
              </p>
            </div>
          </div>

          {/* Application Process */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-gold" size={28} />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark">
                Scholarship Application Process
              </h2>
            </div>
            <div className="bg-surface border border-gray-200 rounded-xl p-6 space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                1. Obtain and submit the duly filled{" "}
                <strong>scholarship form</strong> from the{" "}
                <strong>Admission Office</strong>.
              </p>
              <p>
                2. Forms are forwarded to the{" "}
                <strong>Scholarship Awarding Committee</strong>.
              </p>
              <p>
                3. Committee scrutinises forms and calls candidates for an
                interview.
              </p>
              <p>
                4. After interviews, the committee recommends deserving names to
                higher management for approval and award.
              </p>
            </div>
          </div>

          {/* Committee */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-gold" size={28} />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark">
                Scholarship Awarding Committee
              </h2>
            </div>
            <div className="bg-surface border border-gray-200 rounded-xl p-6 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                The committee is headed by the{" "}
                <strong>Executive Director</strong> and comprises designated
                members. After scrutiny and interviews, the committee recommends
                deserving candidates to higher management.
              </p>
            </div>
          </div>

          {/* Mode of Award */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Banknote className="text-gold" size={28} />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark">
                Mode of Award / Payment
              </h2>
            </div>
            <div className="bg-surface border border-gray-200 rounded-xl p-6 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                The award may be given as a <strong>fee concession</strong> at
                the time of fee submission, or the recommended amount may be
                paid via <strong>cheque</strong> to the student, depending on
                the institute’s policy.
              </p>
            </div>
          </div>

          {/* Policy Change Note */}
          <div className="bg-primary-dark text-white/90 rounded-xl p-6 text-center">
            <p className="text-sm md:text-base">
              <strong>Note:</strong> This scholarship policy is subject to
              change or amendment based on future requirements and availability
              of funds.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
