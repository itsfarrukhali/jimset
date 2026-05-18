import PageHero from "@/components/shared/PageHero";

export default function EligibilityPage() {
  return (
    <>
      <PageHero
        title="Eligibility Criteria"
        subtitle="Detailed requirements for DAE and HSC graduates"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Eligibility" },
        ]}
      />
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border rounded-xl p-6">
            <h2 className="font-display text-xl font-bold text-primary-dark mb-4">
              DAE Route
            </h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                • Diploma of Associate Engineer (DAE) in Electrical,
                Electronics, Mechanical, or related technology
              </li>
              <li>• Minimum 50% marks overall</li>
              <li>• Recognized by Sindh Board of Technical Education (SBTE)</li>
              <li>• Valid for all technology streams</li>
            </ul>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h2 className="font-display text-xl font-bold text-primary-dark mb-4">
              HSC Route
            </h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                • HSC (Pre-Engineering) with Mathematics, Physics, Chemistry
              </li>
              <li>• HSC (Pre-Medical) also accepted</li>
              <li>• Minimum 50% aggregate marks</li>
              <li>• All BISE / boards recognized</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-8 text-sm">
          If you have any questions, please contact admission office.
        </p>
      </section>
    </>
  );
}
