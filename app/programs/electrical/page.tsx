import PageHero from "@/components/shared/PageHero";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lightbulb, Target, Award, GraduationCap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "B.E Electrical Technology",
  description:
    "4-Year Evening Bachelor of Engineering Technology in Electrical at JIMSET Karachi. Open for DAE Electrical/Electronics and HSC Pre-Engineering graduates.",
  alternates: { canonical: "https://jimset.com/programs/electrical" },
};

/* ─────── Program Overview ─────── */
const overview = `Electrical Engineering Technology (EET) is a field that applies the principles of electrical engineering to the design, implementation, installation, manufacture, operation and maintenance of electrical systems. Unlike electrical engineering which focuses primarily on theory, EET is a professional discipline that balances application, theory, design and implementation. Students study power line analysis, power grid analysis, electrical measurement, digital logic design, power transmission and distribution, power electronics, microprocessor theory and interfacing, electrical protection, power system control, high voltage technology, industrial drives & PLC, motor design and many other disciplines. Graduates find suitable placements in K‑Electric, NTDC, PAEC, Civil Aviation Authority, Military Engineering Services (MES) and numerous private companies. The programme is accredited by the National Technologist Council (NTC) and recognised by the Higher Education Commission (HEC) of Pakistan.`;

/* ─────── Vision & Mission ─────── */
const vision = `To become one of the leading places to study electrical engineering and relevant disciplines.`;
const mission = `To educate and develop the next generation of workers through quality education and competitive research.`;

/* ─────── PEOs ─────── */
const peos = [
  "Utilising their professional approach to solve the electrical technology issues of society.",
  "Engraved with state‑of‑the‑art technical & managerial skills to serve the community.",
  "Having strong commitment to ethical & moral practices as a team leader or as an individual.",
];

/* ─────── PLOs ─────── */
const plos = [
  {
    id: 1,
    title: "Engineering Technology Knowledge",
    desc: "Apply knowledge of mathematics, natural science, Engineering Technology fundamentals and specialization to defined and applied Engineering Technology procedures, processes, systems or methodologies.",
  },
  {
    id: 2,
    title: "Problem Analysis",
    desc: "Identify, formulate, research literature and analyse broadly‑defined Engineering Technology problems reaching substantiated conclusions using analytical tools appropriate to the discipline.",
  },
  {
    id: 3,
    title: "Design/Development of Solutions",
    desc: "Design solutions for broadly‑defined Engineering Technology problems and contribute to the design of systems, components or processes to meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.",
  },
  {
    id: 4,
    title: "Investigation",
    desc: "Conduct investigations of broadly‑defined problems; locate, search and select relevant data from codes, databases, and literature, design and conduct experiments to provide valid conclusions.",
  },
  {
    id: 5,
    title: "Modern Tool Usage",
    desc: "Select and apply appropriate techniques, resources, and modern technology and IT tools, including prediction and modeling, to broadly‑defined Engineering Technology problems, with an understanding of the limitations.",
  },
  {
    id: 6,
    title: "The Engineering Technologist and Society",
    desc: "Demonstrate understanding of the societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to Engineering Technology practice.",
  },
  {
    id: 7,
    title: "Environment and Sustainability",
    desc: "Understand and evaluate the sustainability and impact of Engineering Technology work in the solution of broadly defined Engineering Technology problems in societal and environmental contexts.",
  },
  {
    id: 8,
    title: "Ethics",
    desc: "Understand and commit to professional ethics and responsibilities and norms of Engineering Technology practice.",
  },
  {
    id: 9,
    title: "Individual and Team Work",
    desc: "Function effectively as an individual, and as a member or leader in diverse teams.",
  },
  {
    id: 10,
    title: "Communication",
    desc: "Communicate effectively on broadly defined Engineering Technology activities with the technologist community and with society at large, by being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
  },
  {
    id: 11,
    title: "Project Management",
    desc: "Demonstrate knowledge and understanding of Engineering Technology management principles and apply these to one’s own work, as a member or leader in a team and to manage projects in multidisciplinary environments.",
  },
  {
    id: 12,
    title: "Lifelong Learning",
    desc: "Recognise the need for, and have the ability to engage in independent and life‑long learning in specialist Engineering Technologies.",
  },
];

/* ─────── Labs ─────── */
const labs = [
  "Electrical Power System Lab",
  "Electrical Machines Lab",
  "Electronics Lab‑I & II",
  "Electrical Workshop Lab",
  "Simulation Lab",
  "Computer Lab",
  "Physics Lab",
];

type SemesterCourse = {
  code: string;
  name: string;
  nature: string;
  CHTh: number;
  CHPr: number;
  WTh: number;
  WPr: number;
  MTh: number;
  MPr: number;
};

type SemesterInfo = {
  totalCH: number;
  theoryCH: number;
  practicalCH: number;
  contactHrs: number;
  theoryMarks: number;
  practicalMarks: number;
  totalMarks: number;
  courses: SemesterCourse[];
  note?: string;
};

/* ─────── Scheme of Study Tables ─────── */
const semesterData = {
  "1st Semester": {
    totalCH: 15,
    theoryCH: 10,
    practicalCH: 5,
    contactHrs: 28,
    theoryMarks: 400,
    practicalMarks: 250,
    totalMarks: 650,
    courses: [
      {
        code: "ELH-111/112",
        name: "Islamic Studies / Social Ethics",
        nature: "Art & Humanities‑I",
        CHTh: 2,
        CHPr: 0,
        WTh: 2,
        WPr: 0,
        MTh: 50,
        MPr: 0,
      },
      {
        code: "ELE-111",
        name: "Communication Skills",
        nature: "Expository Writing‑I",
        CHTh: 3,
        CHPr: 0,
        WTh: 3,
        WPr: 0,
        MTh: 100,
        MPr: 0,
      },
      {
        code: "ELN-111",
        name: "Applied Physics",
        nature: "Natural Sciences‑I",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELC-111",
        name: "Information & Communication Technology",
        nature: "Computing‑I",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELT-111",
        name: "Electrical Workshop",
        nature: "EET Foundation‑I",
        CHTh: 0,
        CHPr: 2,
        WTh: 0,
        WPr: 6,
        MTh: 0,
        MPr: 100,
      },
      {
        code: "ELI-111",
        name: "Mechanical Engg. Technology",
        nature: "Inter Disciplinary Tech Elective‑I",
        CHTh: 1,
        CHPr: 1,
        WTh: 1,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MTH-110",
        name: "Basic Mathematics *",
        nature: "Quantitative Reasoning",
        CHTh: 3,
        CHPr: 0,
        WTh: 3,
        WPr: 0,
        MTh: 100,
        MPr: 0,
      },
    ],
    note: "* Basic Mathematics course to be offered only to students admitted on the basis of pre‑medical intermediate background.",
  },
  "2nd Semester": {
    totalCH: 15,
    theoryCH: 12,
    practicalCH: 3,
    contactHrs: 21,
    theoryMarks: 350,
    practicalMarks: 150,
    totalMarks: 500,
    courses: [
      {
        code: "ELH-121",
        name: "Pakistan Studies",
        nature: "Art & Humanities‑II",
        CHTh: 2,
        CHPr: 0,
        WTh: 2,
        WPr: 0,
        MTh: 50,
        MPr: 0,
      },
      {
        code: "ELQ-121",
        name: "Calculus & Analytical Geometry",
        nature: "Quantitative Reasoning‑I",
        CHTh: 2,
        CHPr: 0,
        WTh: 2,
        WPr: 0,
        MTh: 50,
        MPr: 0,
      },
      {
        code: "ELM-121",
        name: "Leadership & Entrepreneurship",
        nature: "Management Sciences‑I",
        CHTh: 3,
        CHPr: 0,
        WTh: 3,
        WPr: 0,
        MTh: 100,
        MPr: 0,
      },
      {
        code: "ELC-121",
        name: "Computer Programming",
        nature: "Computing‑II",
        CHTh: 1,
        CHPr: 1,
        WTh: 1,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELT-121",
        name: "Linear Circuit Analysis",
        nature: "EET Foundation‑II",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELT-122",
        name: "Environment, Health & Safety",
        nature: "EET Foundation‑III",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
    ],
  },
  "5th Semester": {
    totalCH: 18,
    theoryCH: 12,
    practicalCH: 6,
    contactHrs: 33,
    theoryMarks: 400,
    practicalMarks: 300,
    totalMarks: 700,
    courses: [
      {
        code: "ELT-311",
        name: "Control Technology",
        nature: "EET Depth Core‑I",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELT-312",
        name: "Communication Systems",
        nature: "EET Depth Core‑II",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELT-313",
        name: "Electrical Power Distribution & Utilization",
        nature: "EET Breadth Elective‑II",
        CHTh: 2,
        CHPr: 1,
        WTh: 1,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELT-314",
        name: "Power Generation Technology",
        nature: "EET Depth Elective‑I",
        CHTh: 2,
        CHPr: 0,
        WTh: 2,
        WPr: 0,
        MTh: 50,
        MPr: 0,
      },
      {
        code: "ELT-315",
        name: "Electrical Appliances Repair",
        nature: "EET Depth Elective‑II",
        CHTh: 1,
        CHPr: 2,
        WTh: 1,
        WPr: 6,
        MTh: 50,
        MPr: 100,
      },
      {
        code: "ELT-316",
        name: "Mobile Phone Assembly & Repair",
        nature: "EET Depth Elective‑III",
        CHTh: 1,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELQ-311",
        name: "Differential Equations",
        nature: "Quantitative Reasoning‑III",
        CHTh: 2,
        CHPr: 0,
        WTh: 2,
        WPr: 0,
        MTh: 50,
        MPr: 0,
      },
    ],
  },
  "6th Semester": {
    totalCH: 17,
    theoryCH: 10,
    practicalCH: 7,
    contactHrs: 33,
    theoryMarks: 300,
    practicalMarks: 400,
    totalMarks: 700,
    courses: [
      {
        code: "ELM-321",
        name: "Project Management",
        nature: "Management Sciences‑II",
        CHTh: 2,
        CHPr: 0,
        WTh: 2,
        WPr: 0,
        MTh: 50,
        MPr: 0,
      },
      {
        code: "ELT-321",
        name: "Power System Protection",
        nature: "EET Depth Elective‑IV",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELT-322",
        name: "Power Electronics",
        nature: "EET Depth Elective‑V",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELT-323",
        name: "Industrial Drives & PLC",
        nature: "EET Depth Elective‑VI",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELI-321",
        name: "Heat Ventilation & Air Conditioning",
        nature: "Inter Disciplinary Tech Elective‑II",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELT-324",
        name: "Project Part‑I",
        nature: "EET Domain Project",
        CHTh: 0,
        CHPr: 3,
        WTh: 0,
        WPr: 9,
        MTh: 0,
        MPr: 100,
      },
    ],
  },
  "7th Semester": {
    totalCH: 17,
    theoryCH: 9,
    practicalCH: 8,
    contactHrs: 33,
    theoryMarks: 300,
    practicalMarks: 300,
    totalMarks: 600,
    courses: [
      {
        code: "ELN-411",
        name: "Numerical Analysis",
        nature: "Social Science‑II",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELT-411",
        name: "Renewable Energy Technologies",
        nature: "EET Depth Elective‑VII",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELT-412",
        name: "Electrification Technology",
        nature: "EET Depth Elective‑VIII",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELT-413",
        name: "Machine Repair & Maintenance",
        nature: "EET Depth Elective‑IX",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELC-411",
        name: "Artificial Intelligence",
        nature: "Computing‑III",
        CHTh: 1,
        CHPr: 1,
        WTh: 1,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "ELT-414",
        name: "Project Part‑II",
        nature: "EET Domain Project",
        CHTh: 0,
        CHPr: 3,
        WTh: 0,
        WPr: 9,
        MTh: 0,
        MPr: 100,
      },
    ],
  },
  "8th Semester": {
    totalCH: 16,
    theoryCH: 0,
    practicalCH: 16,
    contactHrs: 40,
    theoryMarks: 0,
    practicalMarks: 800,
    totalMarks: 800,
    courses: [
      {
        code: "ELT-421",
        name: "16 Weeks Supervised Industrial / Field Training",
        nature: "Major based Depth",
        CHTh: 0,
        CHPr: 16,
        WTh: 0,
        WPr: 40,
        MTh: 0,
        MPr: 800,
      },
    ],
  },
};

/* ─────── Semester Table Component ─────── */
function SemesterTable({ title, data }: { title: string; data: SemesterInfo }) {
  return (
    <div className="mb-10">
      <h3 className="font-heading text-xl font-bold text-primary-dark mb-4">
        {title}
      </h3>
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full text-xs md:text-sm">
          <thead className="bg-primary-dark text-white">
            <tr>
              <th className="px-3 py-2 text-left">Course Code</th>
              <th className="px-3 py-2 text-left">Subject</th>
              <th className="px-3 py-2 text-left">Nature</th>
              <th className="px-1 py-2 text-center">CH‑Th</th>
              <th className="px-1 py-2 text-center">CH‑Pr</th>
              <th className="px-1 py-2 text-center">W‑Th</th>
              <th className="px-1 py-2 text-center">W‑Pr</th>
              <th className="px-1 py-2 text-center">M‑Th</th>
              <th className="px-1 py-2 text-center">M‑Pr</th>
            </tr>
          </thead>
          <tbody>
            {data.courses.map((c: SemesterCourse, idx: number) => (
              <tr key={idx} className="border-b last:border-0 hover:bg-surface">
                <td className="px-3 py-2 font-medium">{c.code}</td>
                <td className="px-3 py-2">{c.name}</td>
                <td className="px-3 py-2 text-gray-600">{c.nature}</td>
                <td className="px-1 py-2 text-center">{c.CHTh}</td>
                <td className="px-1 py-2 text-center">{c.CHPr}</td>
                <td className="px-1 py-2 text-center">{c.WTh}</td>
                <td className="px-1 py-2 text-center">{c.WPr}</td>
                <td className="px-1 py-2 text-center">{c.MTh}</td>
                <td className="px-1 py-2 text-center">{c.MPr}</td>
              </tr>
            ))}
            <tr className="bg-gray-100 font-semibold">
              <td colSpan={2} className="px-3 py-2 text-right">
                Total
              </td>
              <td className="px-3 py-2"></td>
              <td className="px-1 py-2 text-center">{data.theoryCH}</td>
              <td className="px-1 py-2 text-center">{data.practicalCH}</td>
              <td className="px-1 py-2 text-center">-</td>
              <td className="px-1 py-2 text-center">-</td>
              <td className="px-1 py-2 text-center">{data.theoryMarks}</td>
              <td className="px-1 py-2 text-center">{data.practicalMarks}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {data.note && (
        <p className="text-xs text-gray-500 mt-2 italic">{data.note}</p>
      )}
    </div>
  );
}

/* ─────── Main Page ─────── */
export default function ElectricalProgramPage() {
  return (
    <>
      <PageHero
        title="B.E. Electrical Engineering Technology"
        subtitle="4‑Year Evening Programme — Department of Electrical Engineering"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: "B.E Electrical" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4 flex items-center gap-2">
                <Lightbulb className="text-gold" size={24} /> Programme Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">{overview}</p>
              <ul className="mt-4 space-y-1 text-gray-600 text-sm">
                <li>
                  <strong>Duration:</strong> 4 Years (8 Semesters) including
                  16‑week Supervised Industrial Training
                </li>
                <li>
                  <strong>Mode:</strong> Evening (Part‑Time)
                </li>
                <li>
                  <strong>Eligibility:</strong> HSC
                  (Pre‑Engineering/Pre‑Medical) or DAE in relevant technology
                  (50%+ marks)
                </li>
                <li>
                  <strong>Accreditation:</strong> National Technologist Council
                  (NTC) & HEC Recognised
                </li>
              </ul>
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="text-primary" size={20} />
                  <h3 className="font-heading font-bold text-primary-dark">
                    Vision
                  </h3>
                </div>
                <p className="text-sm text-gray-700">{vision}</p>
              </div>
              <div className="bg-surface border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="text-primary" size={20} />
                  <h3 className="font-heading font-bold text-primary-dark">
                    Mission
                  </h3>
                </div>
                <p className="text-sm text-gray-700">{mission}</p>
              </div>
            </div>

            {/* PEOs */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">
                Programme Educational Objectives (PEOs)
              </h2>
              <div className="bg-surface border border-gray-200 rounded-xl p-6 space-y-2">
                {peos.map((peo, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-gray-700 flex items-start gap-2"
                  >
                    <span className="text-gold font-bold">PEO-{idx + 1}</span>{" "}
                    {peo}
                  </p>
                ))}
              </div>
            </div>

            {/* PLOs */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">
                Programme Learning Outcomes (PLOs)
              </h2>
              <div className="space-y-4">
                {plos.map((plo) => (
                  <div
                    key={plo.id}
                    className="bg-surface border border-gray-200 rounded-xl p-4"
                  >
                    <p className="font-semibold text-primary-dark text-sm mb-1">
                      PLO {plo.id}: {plo.title}
                    </p>
                    <p className="text-gray-600 text-sm">{plo.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Laboratories */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">
                Dedicated Laboratories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {labs.map((lab, idx) => (
                  <div
                    key={idx}
                    className="bg-surface border border-gray-200 rounded-lg p-3 text-sm text-gray-700 flex items-center gap-2"
                  >
                    <GraduationCap size={16} className="text-primary" /> {lab}
                  </div>
                ))}
              </div>
            </div>

            {/* Scheme of Study */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary-dark mb-6">
                Scheme of Study
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Programme duration: 4 years (8 semesters). The 8th semester
                consists of 16‑week Supervised Industrial Training.
              </p>

              <SemesterTable
                title="1st Semester"
                data={semesterData["1st Semester"]}
              />
              <SemesterTable
                title="2nd Semester"
                data={semesterData["2nd Semester"]}
              />
              <div className="text-sm text-gray-500 italic mb-4">
                3rd & 4th Semester details to be published soon.
              </div>
              <SemesterTable
                title="5th Semester"
                data={semesterData["5th Semester"]}
              />
              <SemesterTable
                title="6th Semester"
                data={semesterData["6th Semester"]}
              />
              <SemesterTable
                title="7th Semester"
                data={semesterData["7th Semester"]}
              />
              <SemesterTable
                title="8th Semester"
                data={semesterData["8th Semester"]}
              />
            </div>

            {/* Career Prospects */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">
                Career Prospects
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
                <li>Electrical Technologist in K‑Electric, NTDC, PAEC, MES</li>
                <li>Automation & PLC Engineer</li>
                <li>Power System Analyst</li>
                <li>Maintenance & Reliability Engineer</li>
                <li>Project Supervisor</li>
                <li>Renewable Energy Technologist</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-surface border border-gray-200 rounded-xl p-6 sticky top-24">
              <h3 className="font-bold text-primary-dark mb-3">
                Ready to Apply?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Admissions are open for the 2025‑26 batch.
              </p>
              <Button
                asChild
                className="bg-gold text-primary-dark w-full h-12 font-semibold"
              >
                <Link href="/admissions/apply">Apply Now</Link>
              </Button>
            </div>
            <div className="bg-surface border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-primary-dark mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600">
                Call us at{" "}
                <a
                  href="tel:0330-0370660"
                  className="text-primary font-semibold"
                >
                  0330‑0370660
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:info@jimset.com"
                  className="text-primary font-semibold"
                >
                  info@jimset.com
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
