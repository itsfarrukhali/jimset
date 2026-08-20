import PageHero from "@/components/shared/PageHero";
import { Metadata } from "next";
import {
  feeStructureSectionA,
  feeStructureSectionASubtotal,
  feeStructureSectionB,
  feeStructureSectionBSubtotal,
  feeStructureGrandTotal,
  preAdmissionTestDetails,
  secondSemesterFeeStructure2024_2025,
  secondSemesterTotalFee2024_2025,
} from "@/data/admissions";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Fee Structure",
  description:
    "Official fee structure for B.E Technology session 2025-2026 (1st semester) and 2024-2025 (1st Batch 2nd semester) at JIMSET Karachi.",
  alternates: { canonical: "https://jimset.com/admissions/fee-structure" },
};

export default function FeeStructurePage() {
  return (
    <>
      <PageHero
        title="Fee Structure"
        subtitle="Transparent semester & admission fee details with installment facilities"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Fee Structure" },
        ]}
      />

      <section className="py-16 px-4 max-w-6xl mx-auto space-y-16">
        {/* Pre-Admission & Form Fees Banner */}
        <div className="bg-linear-to-r from-primary-dark to-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <Info size={14} /> Session 2025–2026 Admission Form & Test
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-heading">
                Pre-Admission Test & Form Submission
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

        {/* 1st Semester Session 2025-2026 */}
        <div className="space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-heading">
              Fee Structure for 1ˢᵗ Semester Session 2025–2026
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Detailed breakdown of one-time admission charges (A) and semester
              fees (B) for Morning (MT) and Evening (ET) batches.
            </p>
          </div>

          {/* S NO A: Admission Fees */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 border-b px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div>
                <h3 className="text-lg font-bold text-primary-dark flex items-center gap-2">
                  <span className="bg-primary text-white text-xs px-2.5 py-1 rounded-md font-bold">
                    A
                  </span>
                  Fees Payable at the Time of Admission (One-Time)
                </h3>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-dark text-white text-left">
                    <th className="px-6 py-3.5 font-semibold">Description</th>
                    <th className="px-6 py-3.5 text-right font-semibold w-40">
                      Amount (MT)
                    </th>
                    <th className="px-6 py-3.5 text-right font-semibold w-40">
                      Amount (ET)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {feeStructureSectionA.map((item, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-surface/50"}
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">
                          {item.description}
                        </div>
                        {item.note && (
                          <div className="text-xs text-amber-700 mt-1 flex items-start gap-1">
                            <AlertCircle
                              size={13}
                              className="shrink-0 mt-0.5"
                            />
                            <span>{item.note}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right font-medium text-gray-800">
                        Rs. {item.amountMT.toLocaleString()}/=
                      </td>
                      <td className="px-6 py-4 text-right font-medium text-gray-800">
                        Rs. {item.amountET.toLocaleString()}/=
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-100 font-bold text-primary-dark border-t-2 border-slate-200">
                    <td className="px-6 py-4 text-base">
                      Total A (One-Time Fees)
                    </td>
                    <td className="px-6 py-4 text-right text-base text-primary font-extrabold">
                      Rs.{" "}
                      {feeStructureSectionASubtotal.amountMT.toLocaleString()}/=
                    </td>
                    <td className="px-6 py-4 text-right text-base text-primary font-extrabold">
                      Rs.{" "}
                      {feeStructureSectionASubtotal.amountET.toLocaleString()}/=
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* S NO B: Semester Fees */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 border-b px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div>
                <h3 className="text-lg font-bold text-primary-dark flex items-center gap-2">
                  <span className="bg-primary text-white text-xs px-2.5 py-1 rounded-md font-bold">
                    B
                  </span>
                  Semester Fees Payable at the Time of Admission
                </h3>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-dark text-white text-left">
                    <th className="px-6 py-3.5 font-semibold">Description</th>
                    <th className="px-6 py-3.5 text-right font-semibold w-40">
                      Amount (MT)
                    </th>
                    <th className="px-6 py-3.5 text-right font-semibold w-40">
                      Amount (ET)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {feeStructureSectionB.map((item, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-surface/50"}
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">
                          {item.description}
                        </div>
                        {item.note && (
                          <div className="text-xs text-gray-500 mt-0.5">
                            {item.note}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right font-medium text-gray-800">
                        {item.amountMT !== null
                          ? `Rs. ${item.amountMT.toLocaleString()}/=`
                          : "—"}
                      </td>
                      <td className="px-6 py-4 text-right font-medium text-gray-800">
                        {item.amountET !== null
                          ? `Rs. ${item.amountET.toLocaleString()}/=`
                          : "—"}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-100 font-bold text-primary-dark border-t-2 border-slate-200">
                    <td className="px-6 py-4 text-base">
                      Total Semester Fee Payable (B)
                    </td>
                    <td className="px-6 py-4 text-right text-base text-primary font-extrabold">
                      Rs.{" "}
                      {feeStructureSectionBSubtotal.amountMT.toLocaleString()}/=
                    </td>
                    <td className="px-6 py-4 text-right text-base text-primary font-extrabold">
                      Rs.{" "}
                      {feeStructureSectionBSubtotal.amountET.toLocaleString()}/=
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Grand Total Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-linear-to-br from-white to-amber-50/40 border-2 border-gold/40 rounded-2xl p-6 shadow-md flex justify-between items-center">
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  Morning Batch (MT - Mechanical)
                </span>
                <h4 className="text-xl font-bold text-primary-dark">
                  Grand Total (A + B)
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  Includes Admission Fees + 1ˢᵗ Semester Fee
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl md:text-3xl font-extrabold text-primary-dark">
                  Rs. {feeStructureGrandTotal.amountMT.toLocaleString()}/=
                </span>
              </div>
            </div>

            <div className="bg-linear-to-br from-white to-blue-50/40 border-2 border-primary/30 rounded-2xl p-6 shadow-md flex justify-between items-center">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                  Evening Batch (ET - Electrical)
                </span>
                <h4 className="text-xl font-bold text-primary-dark">
                  Grand Total (A + B)
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  Includes Admission Fees + 1ˢᵗ Semester Fee
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl md:text-3xl font-extrabold text-primary-dark">
                  Rs. {feeStructureGrandTotal.amountET.toLocaleString()}/=
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 1st Batch 2nd Semester Session 2024-2025 */}
        <div className="space-y-6 pt-6">
          <div className="border-b pb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark font-heading">
              Fee Structure for 1ˢᵗ Batch 2ⁿᵈ Semester Session 2024–2025
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Fees payable at the time of admission for 2ⁿᵈ semester session
              2024–2025.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden max-w-4xl">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-dark text-white text-left">
                    <th className="px-6 py-3.5 font-semibold">Description</th>
                    <th className="px-6 py-3.5 text-right font-semibold w-48">
                      Amount (PKR)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {secondSemesterFeeStructure2024_2025.map((item, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-surface/50"}
                    >
                      <td className="px-6 py-3.5 font-medium text-gray-900">
                        {item.description}
                      </td>
                      <td className="px-6 py-3.5 text-right font-medium text-gray-800">
                        Rs. {item.amount.toLocaleString()}/=
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-amber-50 font-bold text-primary-dark border-t-2 border-gold/40">
                    <td className="px-6 py-4 text-base">
                      Total Fee Payable (2ⁿᵈ Semester)
                    </td>
                    <td className="px-6 py-4 text-right text-lg text-primary font-extrabold">
                      Rs. {secondSemesterTotalFee2024_2025.toLocaleString()}/=
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Caution & Additional Policy Notes */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4">
          <h3 className="font-heading text-lg font-bold text-primary-dark flex items-center gap-2">
            <CheckCircle2 className="text-primary" size={20} />
            Important Fee & Refund Policies
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong>University Caution Money Deposit:</strong> Refundable
                only after completion of the degree course. In case of
                cancellation of admission at any stage, caution money is not
                refundable.
              </span>
            </li>
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
                <strong>Installments & Scholarships:</strong> Monthly
                installment facilities and merit scholarships are available for
                deserving students. Contact the finance desk for details.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
