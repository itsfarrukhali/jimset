import PageHero from "@/components/shared/PageHero";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions 2025-26",
  description:
    "Admissions open at JIMSET Karachi for B.E Technology evening programs. DAE and HSC graduates with 50% marks are eligible. Apply now.",
  alternates: { canonical: "https://jimset.com/admissions" },
};

const steps = [
  {
    step: 1,
    title: "Check Eligibility",
    desc: "Review criteria for DAE / HSC graduates.",
  },
  {
    step: 2,
    title: "Prepare Documents",
    desc: "Gather all required certificates and photos.",
  },
  {
    step: 3,
    title: "Submit Application",
    desc: "Fill the online form or visit campus.",
  },
  {
    step: 4,
    title: "Enroll & Start",
    desc: "Complete fee submission and begin classes.",
  },
];

const documents = [
  "Original + Copy of DAE / HSC Certificate",
  "Matric Certificate + Copy",
  "CNIC / B-Form Copy",
  "4 Passport Size Photos",
  "Character Certificate",
  "Migration Certificate (if applicable)",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions 2025-26"
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

        {/* Eligibility */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-8 text-center">
            Eligibility Criteria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-bold text-primary-dark text-lg mb-2">
                DAE Graduates
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Diploma of Associate Engineer in relevant technology</li>
                <li>Minimum 50% marks</li>
                <li>Recognized by SBTE</li>
              </ul>
            </div>
            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-bold text-primary-dark text-lg mb-2">
                HSC Graduates
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>HSC Pre-Engineering (or Pre-Medical)</li>
                <li>Minimum 50% marks</li>
                <li>All boards accepted</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button asChild variant="link" className="text-primary">
              <Link href="/admissions/eligibility">
                Full Eligibility Details →
              </Link>
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
                  <span className="text-gray-700">{doc}</span>
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
            className="bg-gold text-primary-dark font-bold h-10 w-70 hover:text-white transition-colors"
          >
            <Link href="/admissions/apply">Proceed to Application Form</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
