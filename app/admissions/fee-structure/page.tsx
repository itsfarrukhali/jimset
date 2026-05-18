import PageHero from "@/components/shared/PageHero";

export default function FeeStructurePage() {
  return (
    <>
      <PageHero
        title="Fee Structure"
        subtitle="Affordable semester-based payment with monthly installments"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Fee Structure" },
        ]}
      />
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="overflow-x-auto border rounded-xl">
          <table className="min-w-full text-sm">
            <thead className="bg-primary-dark text-white">
              <tr>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-right">Amount (PKR)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">
                  Admission Fee (One-time)
                </td>
                <td className="px-4 py-3 text-right">10,000</td>
              </tr>
              <tr className="border-b bg-surface">
                <td className="px-4 py-3 font-medium">
                  Tuition Fee (per semester)
                </td>
                <td className="px-4 py-3 text-right">35,000</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium">
                  Examination Fee (per semester)
                </td>
                <td className="px-4 py-3 text-right">5,000</td>
              </tr>
              <tr className="border-b bg-surface">
                <td className="px-4 py-3 font-medium">
                  Library & Lab Charges (per semester)
                </td>
                <td className="px-4 py-3 text-right">5,000</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-primary-dark">
                  Total First Semester
                </td>
                <td className="px-4 py-3 text-right font-bold">55,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-gray-600 text-sm">
          * Monthly installment facility available. Scholarships for meritorious
          students.
        </p>
      </section>
    </>
  );
}
