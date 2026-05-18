import PageHero from "@/components/shared/PageHero";
import { programs } from "@/data/programs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MechanicalProgram() {
  const program = programs.find((p) => p.slug === "mechanical")!;
  return (
    <>
      <PageHero
        title={program.title}
        subtitle={program.overview}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: "B.E Mechanical" },
        ]}
      />
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-dark mb-4">
                Overview
              </h2>
              <p className="text-gray-700">{program.overview}</p>
              <ul className="mt-4 space-y-1 text-gray-600">
                <li>
                  <strong>Duration:</strong> {program.duration}
                </li>
                <li>
                  <strong>Mode:</strong> {program.mode}
                </li>
                <li>
                  <strong>Eligibility:</strong> {program.eligibility}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-primary-dark mb-4">
                Curriculum (Semester-wise)
              </h2>
              <div className="overflow-x-auto border rounded-xl">
                <table className="min-w-full text-sm">
                  <thead className="bg-primary-dark text-white">
                    <tr>
                      <th className="px-4 py-2 text-left">Semester</th>
                      <th className="px-4 py-2 text-left">Subjects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {program.curriculum.map((sem, idx) => (
                      <tr key={idx} className="border-b last:border-0">
                        <td className="px-4 py-3 font-medium text-primary-dark">
                          {sem.semester}
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          {sem.subjects.join(", ")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-primary-dark mb-4">
                Career Prospects
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                {program.careers.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-surface p-6 rounded-xl border">
              <h3 className="font-bold text-primary-dark mb-3">
                Ready to Apply?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Admissions are open for the 2025-26 batch.
              </p>
              <Button
                asChild
                className="bg-gold text-primary-dark w-full  h-12"
              >
                <Link href="/admissions/apply">Apply Now</Link>
              </Button>
            </div>
            <div className="bg-surface p-6 rounded-xl border">
              <h3 className="font-bold text-primary-dark mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600">
                Call us at{" "}
                <Link
                  href="tel:0330-0370660"
                  className="text-primary font-semibold"
                >
                  0330-0370660
                </Link>{" "}
                or email{" "}
                <Link href="mailto:info@jimset.edu.pk" className="text-primary">
                  info@jimset.edu.pk
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
