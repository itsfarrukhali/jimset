import PageHero from "@/components/shared/PageHero";

const yearlySchedule = [
  ["Teaching duration of 1st Semester", "16 Weeks"],
  ["Mid Semester Examination", "01 Week"],
  ["Preparation & conduct of Final 1st Semester Exam", "05 Weeks"],
  ["Summer Break", "06 Weeks"],
  ["Teaching duration of 2nd Semester", "16 Weeks"],
  ["Mid Semester Examination", "01 Week"],
  ["Preparation & conduct of Final 2nd Semester Exam", "05 Weeks"],
  ["Winter Break", "02 Weeks"],
  ["Total", "52 Weeks"],
];

const theoryMarks = [
  ["Sessional (Assignments/Quiz/Presentation)", "20", "10"],
  ["Attendance", "10", "05"],
  ["Mid Semester Examinations", "20", "10"],
  ["Final Semester Examinations", "50", "25"],
  ["Total", "100", "50"],
];

const practicalMarks = [
  ["Sessional (Lab Performance / Practical / Skill Competition)", "20", "10"],
  ["Attendance", "10", "05"],
  ["Mid Semester Examinations", "20", "10"],
  ["Final Semester Examinations", "50", "25"],
  ["Total", "100", "50"],
];

const gradeTable = [
  ["A+", "4.00", "≥85", "≥42", "≥85", "≥42"],
  ["A", "3.75", "75‑84", "37‑41", "75‑84", "37‑41"],
  ["B+", "3.50", "66‑74", "35‑36", "66‑74", "35‑36"],
  ["B", "3.00", "60‑65", "30‑32", "60‑65", "30‑32"],
  ["C+", "2.50", "55‑59", "27‑29", "55‑59", "27‑29"],
  ["C", "2.00", "50‑54", "25‑26", "50‑54", "25‑26"],
  ["F (Fail)", "0", "0‑49", "0‑24", "0‑49", "0‑24"],
];

export default function AcademicRegulationsPage() {
  return (
    <>
      <PageHero
        title="Academic Regulations"
        subtitle="Academic schedule, marks distribution, grading policy, promotion rules, and attendance"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Academic Regulations" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* Yearly Academic Program */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark mb-8">
              1. Yearly Academic Program
            </h2>
            <div className="overflow-x-auto border border-gray-200 rounded-xl">
              <table className="min-w-full text-sm">
                <thead className="bg-primary-dark text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Activity</th>
                    <th className="px-4 py-3 text-right">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {yearlySchedule.map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="px-4 py-2">{row[0]}</td>
                      <td className="px-4 py-2 text-right font-medium">
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              <strong>Note:</strong> Minimum contact hours for a theory subject
              of 3 CH = 42; for a practical of 1 CH = 42. Each semester requires
              assignments, tests (min 2), Mid Semester Exam, and Final Semester
              Exam.
            </p>
          </div>

          {/* Exam Schedule */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark mb-4">
              2. Exam Schedule
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <div className="bg-surface p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-primary-dark">
                  Mid Semester Exam
                </p>
                <p className="text-gray-600 text-sm">After 08 Weeks</p>
              </div>
              <div className="bg-surface p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-primary-dark">
                  Final Semester Exam
                </p>
                <p className="text-gray-600 text-sm">After 16 Weeks</p>
              </div>
            </div>
          </div>

          {/* Distribution of Marks */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark mb-8">
              3. Distribution of Marks
            </h2>

            {/* Theory */}
            <h3 className="font-semibold text-lg text-primary-dark mb-4">
              Theory Courses
            </h3>
            <div className="overflow-x-auto border border-gray-200 rounded-xl mb-10">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Activity</th>
                    <th className="px-4 py-2 text-right">Max 100 Marks</th>
                    <th className="px-4 py-2 text-right">Max 50 Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {theoryMarks.map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="px-4 py-2">{row[0]}</td>
                      <td className="px-4 py-2 text-right">{row[1]}</td>
                      <td className="px-4 py-2 text-right">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Practical */}
            <h3 className="font-semibold text-lg text-primary-dark mb-4">
              Practical Courses
            </h3>
            <div className="overflow-x-auto border border-gray-200 rounded-xl">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Activity</th>
                    <th className="px-4 py-2 text-right">Max 100 Marks</th>
                    <th className="px-4 py-2 text-right">Max 50 Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {practicalMarks.map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="px-4 py-2">{row[0]}</td>
                      <td className="px-4 py-2 text-right">{row[1]}</td>
                      <td className="px-4 py-2 text-right">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 8th Semester Industrial Training */}
            <div className="mt-8 bg-surface border border-gray-200 rounded-xl p-6">
              <h4 className="font-semibold text-primary-dark mb-3">
                8th Semester — Supervised Industrial Training
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">Subject</th>
                      <th className="px-4 py-2 text-right">Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">Training Performance</td>
                      <td className="px-4 py-2 text-right">600</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Viva Voce</td>
                      <td className="px-4 py-2 text-right">200</td>
                    </tr>
                    <tr className="font-semibold">
                      <td className="px-4 py-2">Total</td>
                      <td className="px-4 py-2 text-right">800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Grading System */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark mb-8">
              4. Absolute Grading Method
            </h2>
            <div className="overflow-x-auto border border-gray-200 rounded-xl">
              <table className="min-w-full text-sm">
                <thead className="bg-primary-dark text-white">
                  <tr>
                    <th className="px-3 py-2 text-left">Grade</th>
                    <th className="px-3 py-2 text-center">GP</th>
                    <th className="px-3 py-2 text-right">Theory 100</th>
                    <th className="px-3 py-2 text-right">Theory 50</th>
                    <th className="px-3 py-2 text-right">Practical 100</th>
                    <th className="px-3 py-2 text-right">Practical 50</th>
                  </tr>
                </thead>
                <tbody>
                  {gradeTable.map((row, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="px-3 py-2 font-medium">{row[0]}</td>
                      <td className="px-3 py-2 text-center">{row[1]}</td>
                      <td className="px-3 py-2 text-right">{row[2]}</td>
                      <td className="px-3 py-2 text-right">{row[3]}</td>
                      <td className="px-3 py-2 text-right">{row[4]}</td>
                      <td className="px-3 py-2 text-right">{row[5]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Fraction marks are rounded to the nearest whole number. Subjects
              with more than 100 marks are graded accordingly. Results are based
              on GPA.
            </p>

            {/* GPA Calculation */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface p-5 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-primary-dark">
                  G.P.A (Semester)
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Sum of Quality Points ÷ Sum of Credit Hours (for that
                  semester).
                </p>
              </div>
              <div className="bg-surface p-5 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-primary-dark">
                  C.G.P.A (Degree)
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Total Quality Points across all semesters ÷ Total Credit
                  Hours. Minimum 2.00 required for graduation.
                </p>
              </div>
            </div>
          </div>

          {/* Promotion / Term-Back Policies */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark mb-8">
              5. Promotion & Term‑Back Policies
            </h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                <strong>1st → 2nd Semester:</strong> Must attend min required
                classes and appear in at least one head of final 1st semester
                exam.
              </p>
              <p>
                <strong>Promotion to 3rd Semester:</strong> Must have C‑grade in
                ≥50% heads of 1st semester, plus attendance &amp; exam
                appearance in 2nd semester.
              </p>
              <p>
                <strong>4th Semester:</strong> Attendance + exam appearance in
                3rd semester.
              </p>
              <p>
                <strong>5th Semester:</strong> Clear ≥50% heads of 1st year (min
                5 theory heads) + attendance &amp; exam appearance in 4th
                semester.
              </p>
              <p>
                <strong>6th Semester:</strong> Attendance + exam appearance in
                5th semester.
              </p>
              <p>
                <strong>7th Semester:</strong> For Batch‑20 onwards: clear all
                heads of 1st year + ≥50% heads of 2nd year (min 5 theory heads)
                + attendance &amp; exam appearance in 6th semester.
              </p>
              <p>
                <strong>8th Semester:</strong> Attendance + exam appearance in
                7th semester.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Students failing to meet criteria are placed on “term‑back” and
                must re‑enrol with a lower batch, paying applicable fees.
                Specific conditions for re‑admission fees are detailed in the
                official policy.
              </p>
            </div>
          </div>

          {/* Attendance Requirement */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark mb-6">
              6. Attendance Requirement
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>
                  Minimum 75% attendance to appear in Final Semester Exam.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>VC may condone up to 10% in genuine cases.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>
                  Late‑admitted students: attendance counted from admission
                  date.
                </span>
              </li>
            </ul>
          </div>

          {/* Conduct of Exams & Sessional Work */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark mb-6">
              7. Conduct of Sessional Work &amp; Examinations
            </h2>
            <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <p>
                • 10/5 marks for assignments (100/50 marks scale) based on 3/2
                class tests; best 2/1 counted.
              </p>
              <p>
                • Mid Semester Exam: 1 hour for 3 CH subjects (3 questions,
                attempt 2); 45 minutes for 2 CH (same pattern).
              </p>
              <p>
                • Sessional marks displayed on notice board before final exams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
