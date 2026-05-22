import PageHero from "@/components/shared/PageHero";
import { Calendar, Clock, BookOpen } from "lucide-react";

const semesterBreakdown = [
  { label: "Teaching + Mid Semester Exam", duration: "16 weeks" },
  { label: "Final Exam Preparation", duration: "02 weeks" },
  { label: "Final Exam Conduct", duration: "03 weeks" },
  { label: "Total per Semester", duration: "21 weeks" },
];

const yearBreakdown = [
  { label: "Two Semesters (21 × 2)", duration: "42 weeks" },
  { label: "Summer Vacation / Summer Course", duration: "08 weeks" },
  { label: "Winter Vacation", duration: "02 weeks" },
  { label: "Total Academic Year", duration: "52 weeks" },
];

export default function AcademicCalendarPage() {
  return (
    <>
      <PageHero
        title="Academic Calendar 2024‑25"
        subtitle="Academic & Examination Schedule for Batch 2024‑25 (Semester System)"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Academic Calendar" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* Semester Duration Overview */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-gold" size={28} />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark">
                Semester & Year Duration
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary-dark mb-3">
                  Semester Breakdown
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {semesterBreakdown.map((item) => (
                    <li key={item.label} className="flex justify-between">
                      <span>{item.label}</span>
                      <span className="font-medium">{item.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-primary-dark mb-3">
                  Annual Breakdown
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {yearBreakdown.map((item) => (
                    <li key={item.label} className="flex justify-between">
                      <span>{item.label}</span>
                      <span className="font-medium">{item.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Key Requirements */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-gold" size={28} />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark">
                Key Requirements
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface border border-gray-200 rounded-xl p-5 flex items-start gap-3">
                <Clock className="text-primary mt-1" size={22} />
                <div>
                  <p className="font-semibold text-primary-dark text-sm">
                    Minimum Attendance
                  </p>
                  <p className="text-gray-600 text-sm">
                    75% to appear in examination
                  </p>
                </div>
              </div>
              <div className="bg-surface border border-gray-200 rounded-xl p-5 flex items-start gap-3">
                <BookOpen className="text-primary mt-1" size={22} />
                <div>
                  <p className="font-semibold text-primary-dark text-sm">
                    Theory (3 CH)
                  </p>
                  <p className="text-gray-600 text-sm">
                    Minimum 42 lectures per semester
                  </p>
                </div>
              </div>
              <div className="bg-surface border border-gray-200 rounded-xl p-5 flex items-start gap-3">
                <BookOpen className="text-primary mt-1" size={22} />
                <div>
                  <p className="font-semibold text-primary-dark text-sm">
                    Practical (1 CH)
                  </p>
                  <p className="text-gray-600 text-sm">
                    Minimum 42 contact hours per semester
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tentative Academic Calendar */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-gold" size={28} />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark">
                Tentative Academic Calendar — Batch 2024‑25
              </h2>
            </div>
            <div className="overflow-x-auto border border-gray-200 rounded-xl">
              <table className="min-w-full text-sm">
                <thead className="bg-primary-dark text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Activity</th>
                    <th className="px-4 py-3 text-left">24‑Batch Semester</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Date of Start of Classes",
                    "Conduct of Mid‑Semester Examinations",
                    "Date of Suspension of Classes",
                    "Display of Sessional Marks",
                    "Conduct of Final Semester Examination",
                    "Announcement of Result (Expected)",
                  ].map((activity, idx) => (
                    <tr key={idx} className="border-b last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-700">
                        {activity}
                      </td>
                      <td className="px-4 py-3 text-gray-500 italic">
                        To be announced
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Dates are tentative and will be confirmed nearer the start of the
              semester.
            </p>
          </div>

          {/* Vacations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-gray-200 rounded-xl p-5 text-center">
              <p className="font-semibold text-primary-dark">
                Winter Vacations
              </p>
              <p className="text-gray-500 text-sm mt-1">To be announced</p>
            </div>
            <div className="bg-surface border border-gray-200 rounded-xl p-5 text-center">
              <p className="font-semibold text-primary-dark">
                Summer Vacations
              </p>
              <p className="text-gray-500 text-sm mt-1">To be announced</p>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400">
            The academic calendar is subject to change per institute directives.
          </p>
        </div>
      </section>
    </>
  );
}
