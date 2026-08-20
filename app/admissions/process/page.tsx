import PageHero from "@/components/shared/PageHero";
import { Check, ArrowRight, AlertCircle } from "lucide-react";
import Link from "next/link";
import { preAdmissionTestDetails } from "@/data/admissions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admission Process & Test",
  description:
    "Selection procedure, entry test pattern, pre-admission test fee (Rs 3,000), and eligibility criteria at JIMSET Karachi.",
  alternates: { canonical: "https://jimset.com/admissions/process" },
};

export default function AdmissionProcessPage() {
  return (
    <>
      <PageHero
        title="Admission Process & Test"
        subtitle="Selection procedure, eligibility criteria and pre‑admission aptitude test"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Admission Process & Test" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Selection Procedure */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark mb-6">
              1. Selection Procedure
            </h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>
                  The admission forms received from candidates will be
                  scrutinised by the Admission Committee for initial selection
                  in accordance with the policy laid down. Candidates initially
                  selected will be interviewed by the Admission Committee for
                  final selection and allocation of suitable technology.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>
                  Admission of the selected candidates shall be subject to{" "}
                  <strong>Medical Fitness</strong>.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>
                  List of the candidates finally selected by the Institute for
                  admission to B.E. (TECH) shall be displayed on the notice
                  board.
                </span>
              </p>
            </div>
          </div>

          {/* Admission Criteria */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark mb-6">
              2. Admission Criteria
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <Check className="text-green shrink-0 mt-1" size={18} />
                <span>
                  Minimum <strong>50% marks</strong> in F.Sc. (Pre‑Engineering / Pre-Medical) or Equivalent DAE qualification — excluding Sports &amp; Hafiz‑e‑Quran marks.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green shrink-0 mt-1" size={18} />
                <span>Qualifying the Institute Pre-Admission Entry Test.</span>
              </li>
            </ul>
          </div>

          {/* Pre-Admission Test */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark mb-6">
              3. Pre‑Admission Test &amp; Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pre‑Admission test is mandatory for all candidates applying for
              admission in Bachelor of Engineering Technology (B.E. TECH)
              Programs.
            </p>

            {/* Fees Callout Box */}
            <div className="bg-amber-50 border-2 border-gold/40 rounded-2xl p-6 mb-8 space-y-3">
              <h3 className="font-heading font-bold text-primary-dark text-lg flex items-center gap-2">
                <AlertCircle className="text-amber-600" size={20} />
                Admission Form &amp; Pre-Admission Test Fees (Session 2025–2026)
              </h3>
              <p className="text-sm text-gray-800">
                ❖ <strong>Pre-Admission Test Fee:</strong> {preAdmissionTestDetails.testFeeFormatted} ({preAdmissionTestDetails.testFeeText}).
              </p>
              <p className="text-sm text-gray-800">
                ❖ <strong>Form Deposit Refund Policy:</strong> {preAdmissionTestDetails.formSubmissionDepositFormatted} to be deposited at the time of submission of Admission Form, and it will be fully refunded if the candidate does not clear the pre-admission test.
              </p>
            </div>

            <h3 className="font-heading text-xl font-bold text-primary-dark mt-8 mb-4">
              3.1 Aptitude Test Pattern
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface border border-gray-200 rounded-xl p-6">
                <p className="font-semibold text-primary-dark mb-2">
                  For Pre‑Engineering / Equivalent
                </p>
                <p className="text-sm text-gray-700">
                  60 MCQs from Intermediate level English, Mathematics, Physics
                  &amp; Chemistry.
                </p>
              </div>
              <div className="bg-surface border border-gray-200 rounded-xl p-6">
                <p className="font-semibold text-primary-dark mb-2">
                  For Pre‑Medical Students
                </p>
                <p className="text-sm text-gray-700">
                  60 MCQs from Intermediate level English, Biology, Physics
                  &amp; Chemistry.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/admissions/apply"
              className="inline-flex items-center gap-2 bg-gold text-primary-dark font-bold px-8 py-3.5 rounded-lg hover:bg-gold/90 transition-colors shadow-md text-base"
            >
              Proceed to Application Form <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
