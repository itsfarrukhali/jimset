import PageHero from "@/components/shared/PageHero";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions open at JIMSET Karachi for B.E Technology evening and morning programs. DAE and HSC graduates with minimum 50% marks are eligible. Apply now.",
  alternates: { canonical: "https://jimset.com/admissions" },
};

const steps = [
  {
    step: 1,
    title: "Check Eligibility",
    desc: "Review criteria for DAE / HSC graduates (Min 50% marks).",
  },
  {
    step: 2,
    title: "Prepare Documents",
    desc: "Gather certificates, verification fees & CNIC/B-Form.",
  },
  {
    step: 3,
    title: "Submit Application",
    desc: "Fill the online form & deposit test fee into bank.",
  },
  {
    step: 4,
    title: "Pre-Admission Test & Start",
    desc: "Pass the aptitude test & complete fee submission.",
  },
];

const documents = [
  "Original + Copy of DAE / HSC Certificate",
  "Matric Certificate + Copy",
  "HSC / DAE Marks Certificate Verification Fee (Rs. 7,000)",
  "CNIC / B-Form Copy",
  "4 Passport Size Photos",
  "Character Certificate",
  "Migration Certificate (if applicable)",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="Your pathway to a B.E Technology degree begins here"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
      />
      <section className="py-16 px-4 max-w-6xl mx-auto space-y-16">
        {/* Process */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-8 text-center">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-surface p-6 rounded-xl border text-center"
              >
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {s.step}
                </div>
                <h3 className="font-semibold text-primary-dark">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Overview */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-8 text-center">
            Eligibility Criteria (Minimum 50% Marks)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border rounded-xl p-6 space-y-3">
              <h3 className="font-bold text-primary-dark text-lg border-b pb-2">
                B.E Tech (Electrical)
              </h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li className="flex items-start gap-2">
                  <Check className="text-green shrink-0 mt-0.5" size={16} />
                  <span>HSC (Pre-Engineering) & Pre-Medical</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green shrink-0 mt-0.5" size={16} />
                  <span>
                    10 DAE Specializations (Electrical, Electronics, Telecom, Avionics, IT, Automation, etc.)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green shrink-0 mt-0.5" size={16} />
                  <span>Minimum 50% aggregate marks</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border rounded-xl p-6 space-y-3">
              <h3 className="font-bold text-primary-dark text-lg border-b pb-2">
                B.E Tech (Mechanical)
              </h3>
              <ul className="text-sm text-gray-700 space-y-1.5">
                <li className="flex items-start gap-2">
                  <Check className="text-green shrink-0 mt-0.5" size={16} />
                  <span>HSC (Pre-Engineering) & Pre-Medical</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green shrink-0 mt-0.5" size={16} />
                  <span>
                    7 DAE Specializations (Mechanical, Auto-Farm/Diesel, Power, Biomedical, Dies & Molding, RAC, Automation)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green shrink-0 mt-0.5" size={16} />
                  <span>Minimum 50% aggregate marks</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button asChild variant="link" className="text-primary font-bold">
              <Link href="/admissions/eligibility">
                Full Eligibility Details &amp; Disciplines →
              </Link>
            </Button>
          </div>
        </div>

        {/* Fee Highlight Callout */}
        <div className="bg-gradient-to-r from-primary-dark to-slate-900 text-white rounded-2xl p-8 shadow-lg text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold font-heading">
            Fee Structure &amp; Installments
          </h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Session 2025–2026 Morning (MT) &amp; Evening (ET) fee breakdowns, plus 2ⁿᵈ semester session 2024–2025 schedules. Easy monthly installment options are available.
          </p>
          <div>
            <Button asChild className="bg-gold text-primary-dark font-bold hover:bg-gold/90">
              <Link href="/admissions/fee-structure">View Full Fee Structure</Link>
            </Button>
          </div>
        </div>

        {/* Documents */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-8 text-center">
            Required Documents
          </h2>
          <div className="max-w-2xl mx-auto bg-surface p-6 rounded-xl border">
            <ul className="space-y-2">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="text-green shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700 text-sm">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gold text-primary-dark font-bold h-12 px-8 hover:bg-gold/90 transition-colors shadow-md"
          >
            <Link href="/admissions/apply" className="flex items-center gap-2">
              Proceed to Application Form <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
