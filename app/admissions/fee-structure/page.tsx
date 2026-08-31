import PageHero from "@/components/shared/PageHero";
import { Metadata } from "next";
import {
  feeStructureSummary2025_2026,
  secondSemesterSummary2024_2025,
  thirdSemesterSummary2ndYear,
  preAdmissionTestDetails,
} from "@/data/admissions";
import {
  CheckCircle2,
  Info,
  Percent,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fee Structure",
  description:
    "Official fee structure for B.E Technology session 2025-2026 (1st semester), 2024-2025 (2nd semester), and 3rd semester (2nd year) at JIMSET Karachi.",
  alternates: { canonical: "https://jimset.com/admissions/fee-structure" },
};

export default function FeeStructurePage() {
  return (
    <>
      <PageHero
        title="Fee Structure"
        subtitle="Transparent semester-based payment with exclusive discounts & installment options"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Fee Structure" },
        ]}
      />

      <section className="py-16 px-4 max-w-5xl mx-auto space-y-16">
        {/* Banner: Pre-Admission Test & Refund Policy */}
        <div className="bg-linear-to-r from-primary-dark via-slate-900 to-primary-dark text-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <Info size={14} /> Session 2025–2026 Admission Form & Test
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-heading">
                Pre-Admission Test &amp; Form Submission
              </h2>
              <p className="text-gray-300 text-sm max-w-2xl">
                {preAdmissionTestDetails.refundPolicy}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center shrink-0 min-w-48">
              <span className="text-xs text-gray-300 block uppercase font-medium">
                Test Fee (Bank Deposit)
              </span>
              <span className="text-2xl md:text-3xl font-extrabold text-gold">
                {preAdmissionTestDetails.testFeeFormatted}
              </span>
              <span className="text-[11px] text-gray-300 block mt-1">
                {preAdmissionTestDetails.testFeeText}
              </span>
            </div>
          </div>
        </div>

        {/* TABLE 1: 1st Semester Session 2025–2026 Summary Table */}
        <div className="space-y-6">
          <div className="border-b pb-4">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
              1ˢᵗ Semester
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-heading mt-2">
              Fee Structure for 1ˢᵗ Semester Session 2025–2026
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Summary of One-time Admission Fees, and special discount for Morning (MT) &amp; Evening (ET) Batches.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-dark text-white text-left">
                    <th className="px-6 py-4 font-semibold">Fee Component</th>
                    <th className="px-6 py-4 text-right font-semibold w-48">
                      Morning Batch (MT)
                    </th>
                    <th className="px-6 py-4 text-right font-semibold w-48">
                      Evening Batch (ET)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Pre Admission Test &amp; Form Submission Fee
                    </td>
                    <td className="px-6 py-4 text-right text-gray-700">
                      {
                        feeStructureSummary2025_2026.preAdmissionTestFeeFormatted
                      }
                    </td>
                    <td className="px-6 py-4 text-right text-gray-700">
                      {
                        feeStructureSummary2025_2026.preAdmissionTestFeeFormatted
                      }
                    </td>
                  </tr>

                  <tr className="bg-surface/50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Admission Fee (One Time)
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-gray-900">
                      {
                        feeStructureSummary2025_2026.admissionFeeOneTimeFormatted
                      }
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-gray-900">
                      {
                        feeStructureSummary2025_2026.admissionFeeOneTimeFormatted
                      }
                    </td>
                  </tr>

                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Semester Fee
                    </td>
                    <td className="px-6 py-4 text-right text-gray-700">
                      {feeStructureSummary2025_2026.semesterFeeMTFormatted}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-700">
                      {feeStructureSummary2025_2026.semesterFeeETFormatted}
                    </td>
                  </tr>

                  <tr className="bg-emerald-50/60">
                    <td className="px-6 py-4 font-medium text-emerald-900 flex items-center gap-2">
                      <Percent
                        size={16}
                        className="text-emerald-600 shrink-0"
                      />
                      <span>Less: Special Discount on Semester Fee</span>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-emerald-700">
                      - {feeStructureSummary2025_2026.discountMTAmountFormatted}
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-emerald-700">
                      - {feeStructureSummary2025_2026.discountETAmountFormatted}
                    </td>
                  </tr>

                  <tr className="bg-emerald-100/70 font-semibold text-emerald-950">
                    <td className="px-6 py-4">
                      Semester Fee after Discount
                    </td>
                    <td className="px-6 py-4 text-right text-emerald-900 font-bold">
                      {
                        feeStructureSummary2025_2026.discountedSemesterFeeMTFormatted
                      }
                    </td>
                    <td className="px-6 py-4 text-right text-emerald-900 font-bold">
                      {
                        feeStructureSummary2025_2026.discountedSemesterFeeETFormatted
                      }
                    </td>
                  </tr>

                  <tr className="bg-slate-900 text-white font-bold border-t-2 border-slate-700">
                    <td className="px-6 py-5 text-base">
                      Grand Total Payable at admission (Admission + Discounted Semester)
                    </td>
                    <td className="px-6 py-5 text-right text-lg text-gold font-extrabold">
                      {feeStructureSummary2025_2026.grandTotalMTFormatted}
                    </td>
                    <td className="px-6 py-5 text-right text-lg text-gold font-extrabold">
                      {feeStructureSummary2025_2026.grandTotalETFormatted}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* TABLE 2: 1st Batch 2nd Semester Session 2024–2025 */}
        <div className="space-y-6">
          <div className="border-b pb-4">
            <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
              2ⁿᵈ Semester
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-heading mt-2">
              Fee Structure for 1ˢᵗ Batch 2ⁿᵈ Semester Session 2024–2025
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Fees payable at the time of admission for 2ⁿᵈ semester session
              2024–2025 with <strong>30% Special Discount</strong>.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden max-w-3xl">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-dark text-white text-left">
                    <th className="px-6 py-4 font-semibold">Description</th>
                    <th className="px-6 py-4 text-right font-semibold w-56">
                      Amount (PKR)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Total Fee Payable (2ⁿᵈ Semester Base)
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-gray-800">
                      {secondSemesterSummary2024_2025.baseFeeFormatted}
                    </td>
                  </tr>

                  <tr className="bg-emerald-50/60">
                    <td className="px-6 py-4 font-medium text-emerald-900 flex items-center gap-2">
                      <Sparkles
                        size={16}
                        className="text-emerald-600 shrink-0"
                      />
                      <span>Less: 30% Special Discount</span>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-emerald-700">
                      - {secondSemesterSummary2024_2025.discountAmountFormatted}
                    </td>
                  </tr>

                  <tr className="bg-amber-50 font-bold text-primary-dark border-t-2 border-gold/40">
                    <td className="px-6 py-5 text-base">
                      Fee Payable After 30% Discount
                    </td>
                    <td className="px-6 py-5 text-right text-xl text-primary font-extrabold">
                      {secondSemesterSummary2024_2025.discountedFeeFormatted}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* TABLE 3: 3rd Semester (2nd Year) */}
        <div className="space-y-6">
          <div className="border-b pb-4">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
              3rd Semester (2nd Year)
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-heading mt-2">
              Fees Structure for 3rd Semester (2nd year)
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Fee details with <strong>30% Discount</strong> and{" "}
              <strong>10% annual tuition fee increment</strong> after one year.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden max-w-3xl">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-dark text-white text-left">
                    <th className="px-6 py-4 font-semibold">Description</th>
                    <th className="px-6 py-4 text-right font-semibold w-56">
                      Amount (PKR)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Total Fee Payable (3rd Semester Base)
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-gray-800">
                      {thirdSemesterSummary2ndYear.baseFeeFormatted}
                    </td>
                  </tr>

                  <tr className="bg-emerald-50/60">
                    <td className="px-6 py-4 font-medium text-emerald-900 flex items-center gap-2">
                      <Sparkles
                        size={16}
                        className="text-emerald-600 shrink-0"
                      />
                      <span>Less: 30% Special Discount</span>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-emerald-700">
                      - {thirdSemesterSummary2ndYear.discountAmountFormatted}
                    </td>
                  </tr>

                  <tr className="bg-emerald-100/70 font-semibold text-emerald-950">
                    <td className="px-6 py-4">
                      Fee Payable After 30% Discount
                    </td>
                    <td className="px-6 py-4 text-right text-emerald-900 font-bold">
                      {
                        thirdSemesterSummary2ndYear.discountedFeeAfter30PercentFormatted
                      }
                    </td>
                  </tr>

                  <tr className="bg-blue-50/60">
                    <td className="px-6 py-4 font-medium text-blue-900 flex items-center gap-2">
                      <TrendingUp
                        size={16}
                        className="text-blue-600 shrink-0"
                      />
                      <span>
                        Add: 10% Annual Tuition Fee Increment (After 1 Year)
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-blue-700">
                      +{" "}
                      {
                        thirdSemesterSummary2ndYear.tuitionIncrementAmountFormatted
                      }
                    </td>
                  </tr>

                  <tr className="bg-blue-100/70 font-bold text-primary-dark border-t-2 border-blue-300">
                    <td className="px-6 py-5 text-base">
                      Actual Net Fee Payable (3rd Semester 2nd Year)
                    </td>
                    <td className="px-6 py-5 text-right text-xl text-primary font-extrabold">
                      {thirdSemesterSummary2ndYear.actualFeePayableFormatted}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Important Policy Notes */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4">
          <h3 className="font-heading text-lg font-bold text-primary-dark flex items-center gap-2">
            <CheckCircle2 className="text-primary" size={20} />
            Important Guidelines &amp; Policies
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong>Pre-Admission Test Deposit Refund:</strong> The Rs.
                33,000/- deposited at form submission will be fully refunded if
                the candidate does not clear the pre-admission test.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong>Caution Money Deposit:</strong> Refundable only after
                completion of the degree course. In case of cancellation of
                admission at any stage, caution money will not be refundable.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong>Installment Facility:</strong> Easy monthly installment
                facilities are available for deserving students.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
