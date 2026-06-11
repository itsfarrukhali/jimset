import PageHero from "@/components/shared/PageHero";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Settings, Target, Award, GraduationCap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "B.E Mechanical Technology",
  description:
    "4-Year Evening Bachelor of Engineering Technology in Mechanical at JIMSET Karachi. Open for DAE Mechanical and HSC Pre-Engineering graduates.",
  alternates: { canonical: "https://jimset.com/programs/mechanical" },
};

/* ─────── Program Overview ─────── */
const overview = `The Department of Mechanical Engineering Technology offers a 4‑year Bachelor of Engineering Technology program in the field of Mechanical Engineering Technology. The program follows the Outcome‑Based Education (OBE) system to meet the criteria of the National Technology Council (NTC) as per the Sydney Accord. All tests, assignments, and semester examinations are assessed by specific Course Learning Outcomes (CLOs) related to each subject.

The aim of the department is to apply a practical approach by developing strong technical, analytical, and problem‑solving skills using engineering principles and technological developments for the creation of useful products and machines that improve the living standard of the community.

The Bachelor of Engineering Technology (Mechanical) program is accredited by the National Technology Council (NTC) and recognised by the Higher Education Commission of Pakistan.`;

/* ─────── Vision & Mission ─────── */
const vision = `To be recognised globally as a Centre of Excellence which offers high quality education, technological knowledge and outreach activities with innovation and creativity in the field of Mechanical Engineering Technology.`;
const mission = `To produce competent graduates, by imparting academic knowledge, technical skills, hands‑on experience, and industrial exposure, to make them employable and leading entrepreneurs, to achieve sustainable socio‑economic development.`;

/* ─────── PEOs ─────── */
const peos = [
  "Apply knowledge of Mechanical Engineering Technology for identifying, addressing and solving broadly defined technological problems for socio‑economic development.",
  "Produce by their analytical and technological skills through state‑of‑the‑art experimental work that empowers them for developing innovative ideas for technological and sustainable professional growth in mechanical and allied disciplines.",
  "Demonstrate intellectual curiosity and actively pursue the acquisition of new skills and entrepreneurial abilities to contribute with ethical norms and commit to handle professional situations in their lives and work.",
];

/* ─────── PLOs ─────── */
const plos = [
  {
    id: 1,
    title: "Engineering Technology Knowledge",
    desc: "Apply knowledge of mathematics, natural science, Engineering Technology fundamentals and Engineering Technology specialization to defined and applied Engineering Technology procedures, processes, systems or methodologies.",
  },
  {
    id: 2,
    title: "Problem Analysis",
    desc: "Identify, formulate, research literature and analyze broadly‑defined Engineering Technology problems reaching substantiated conclusions using analytical tools appropriate to the discipline or area of specialization.",
  },
  {
    id: 3,
    title: "Design/Development of Solutions",
    desc: "Design solutions for broadly‑defined Engineering Technology problems and contribute to the design of systems, components or processes to meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.",
  },
  {
    id: 4,
    title: "Investigation",
    desc: "Conduct investigations of broadly‑defined problems; locate, search and select relevant data from codes, databases and literature, design and conduct experiments to provide valid conclusions.",
  },
  {
    id: 5,
    title: "Modern Tool Usage",
    desc: "Select and apply appropriate techniques, resources, and modern technology and IT tools, including prediction and modelling, to broadly‑defined Engineering Technology problems, with an understanding of the limitations.",
  },
  {
    id: 6,
    title: "The Engineering Technologist and Society",
    desc: "Demonstrate understanding of the societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to Engineering Technology practice and solutions to broadly defined Engineering Technology problems.",
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
    desc: "Communicate effectively on broadly defined Engineering Technology activities with the Engineering Technologist community and with society at large, by being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
  },
  {
    id: 11,
    title: "Project Management",
    desc: "Demonstrate knowledge and understanding of Engineering Technology management principles and apply these to one’s own work, as a member or leader in a team and to manage projects in multidisciplinary environments.",
  },
  {
    id: 12,
    title: "Lifelong Learning",
    desc: "Recognize the need for, and have the ability to engage in independent and life‑long learning in specialist Engineering Technologies.",
  },
];

/* ─────── Labs & Workshops ─────── */
const labs = [
  "Technical Drawing Lab",
  "CAD/CAM Lab",
  "Engineering Mechanics Lab",
  "Mechanics of Machines Lab",
  "Hydraulic & Fluid Mechanics Lab",
  "Thermodynamics Lab",
  "Material Testing Lab",
  "Heating, Ventilation & Air Conditioning Lab",
  "Automobile Lab",
  "Fuel Testing Lab",
];
const workshops = [
  "Machine Shop",
  "Fitting Shop",
  "Welding Shop",
  "Woodwork Shop",
  "Foundry Shop",
  "Forging Shop",
];

type Course = {
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

type Semester = {
  totalCH: number;
  theoryCH: number;
  practicalCH: number;
  contactHrs: number;
  theoryMarks: number;
  practicalMarks: number;
  totalMarks: number;
  courses: Course[];
  note?: string;
};

/* ─────── Scheme of Study ─────── */
const semesterData: Record<string, Semester> = {
  "1st Semester": {
    totalCH: 18,
    theoryCH: 10,
    practicalCH: 8,
    contactHrs: 37,
    theoryMarks: 400,
    practicalMarks: 400,
    totalMarks: 800,
    courses: [
      {
        code: "HUM-111/112",
        name: "Islamic Studies / Ethics",
        nature: "Humanities",
        CHTh: 2,
        CHPr: 0,
        WTh: 2,
        WPr: 0,
        MTh: 50,
        MPr: 0,
      },
      {
        code: "EET-121",
        name: "Basic Electrical and Electronics",
        nature: "Engineering Foundation",
        CHTh: 2,
        CHPr: 2,
        WTh: 2,
        WPr: 6,
        MTh: 50,
        MPr: 100,
      },
      {
        code: "NSC-112",
        name: "Applied Physics",
        nature: "Natural Science",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "NSC-113",
        name: "Applied Chemistry",
        nature: "Natural Science",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "CSC-111",
        name: "Introduction to Computer and IT",
        nature: "Computer Science",
        CHTh: 1,
        CHPr: 2,
        WTh: 1,
        WPr: 6,
        MTh: 50,
        MPr: 100,
      },
      {
        code: "MET-111",
        name: "Workshop Technology",
        nature: "Engineering Foundation",
        CHTh: 1,
        CHPr: 2,
        WTh: 1,
        WPr: 6,
        MTh: 50,
        MPr: 100,
      },
      {
        code: "GE-115 *",
        name: "Basic Mathematics",
        nature: "Deficiency Course (Non‑Credit)",
        CHTh: 3,
        CHPr: 0,
        WTh: 3,
        WPr: 0,
        MTh: 100,
        MPr: 0,
      },
    ],
    note: "* For FSc Pre‑Medical students only; non‑credit.",
  },
  "2nd Semester": {
    totalCH: 15,
    theoryCH: 11,
    practicalCH: 4,
    contactHrs: 23,
    theoryMarks: 350,
    practicalMarks: 200,
    totalMarks: 550,
    courses: [
      {
        code: "HUM-122",
        name: "Pakistan Studies",
        nature: "Humanities",
        CHTh: 2,
        CHPr: 0,
        WTh: 2,
        WPr: 0,
        MTh: 50,
        MPr: 0,
      },
      {
        code: "NSC-114",
        name: "Applied Calculus & Analytical Geometry",
        nature: "Natural Science",
        CHTh: 3,
        CHPr: 0,
        WTh: 3,
        WPr: 0,
        MTh: 100,
        MPr: 0,
      },
      {
        code: "HUM-211",
        name: "Communication Skills",
        nature: "Humanities",
        CHTh: 3,
        CHPr: 0,
        WTh: 3,
        WPr: 0,
        MTh: 100,
        MPr: 0,
      },
      {
        code: "MET-121",
        name: "Technical Drawing & Graphics",
        nature: "Engineering Foundation",
        CHTh: 1,
        CHPr: 2,
        WTh: 1,
        WPr: 6,
        MTh: 50,
        MPr: 100,
      },
      {
        code: "MET-122",
        name: "Engineering Mechanics",
        nature: "Engineering Foundation",
        CHTh: 2,
        CHPr: 2,
        WTh: 2,
        WPr: 6,
        MTh: 50,
        MPr: 100,
      },
    ],
  },
  "3rd Semester": {
    totalCH: 17,
    theoryCH: 13,
    practicalCH: 4,
    contactHrs: 25,
    theoryMarks: 350,
    practicalMarks: 200,
    totalMarks: 550,
    courses: [
      {
        code: "NSC-121",
        name: "Linear Algebra & Differential Equations",
        nature: "Natural Science",
        CHTh: 3,
        CHPr: 0,
        WTh: 3,
        WPr: 0,
        MTh: 100,
        MPr: 0,
      },
      {
        code: "MET-216",
        name: "Fluid Mechanics & Hydraulic Machines",
        nature: "Major based Breadth",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MET-212",
        name: "Basic Thermodynamics",
        nature: "Engineering Foundation",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MET-213",
        name: "Mechanics of Materials",
        nature: "Engineering Foundation",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MET-214",
        name: "Industrial Materials",
        nature: "Engineering Foundation",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MET-215",
        name: "Total Quality Management",
        nature: "Major based Breadth",
        CHTh: 2,
        CHPr: 0,
        WTh: 2,
        WPr: 0,
        MTh: 50,
        MPr: 0,
      },
    ],
  },
  "4th Semester": {
    totalCH: 15,
    theoryCH: 10,
    practicalCH: 5,
    contactHrs: 25,
    theoryMarks: 300,
    practicalMarks: 250,
    totalMarks: 550,
    courses: [
      {
        code: "HUM-221",
        name: "Technical Writing",
        nature: "Humanities",
        CHTh: 3,
        CHPr: 0,
        WTh: 3,
        WPr: 0,
        MTh: 100,
        MPr: 0,
      },
      {
        code: "NSC-221",
        name: "Probability & Statistics",
        nature: "Natural Science",
        CHTh: 3,
        CHPr: 0,
        WTh: 3,
        WPr: 0,
        MTh: 100,
        MPr: 0,
      },
      {
        code: "MET-221",
        name: "Mechanics of Machines",
        nature: "Major based Breadth",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MET-222",
        name: "Applied Thermodynamics",
        nature: "Major based Breadth",
        CHTh: 2,
        CHPr: 2,
        WTh: 2,
        WPr: 6,
        MTh: 50,
        MPr: 100,
      },
      {
        code: "MET-223",
        name: "CAD/CAM",
        nature: "Major based Breadth",
        CHTh: 0,
        CHPr: 2,
        WTh: 0,
        WPr: 6,
        MTh: 0,
        MPr: 100,
      },
    ],
  },
  "5th Semester": {
    totalCH: 18,
    theoryCH: 11,
    practicalCH: 7,
    contactHrs: 32,
    theoryMarks: 300,
    practicalMarks: 350,
    totalMarks: 650,
    courses: [
      {
        code: "MET-311",
        name: "Heat & Mass Transfer",
        nature: "Major based Depth",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MET-312",
        name: "Instrumentation & Control",
        nature: "Major based Depth",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MET-313",
        name: "Machine Design",
        nature: "Major based Depth",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MET-314",
        name: "Manufacturing Processes",
        nature: "Major based Depth",
        CHTh: 1,
        CHPr: 2,
        WTh: 1,
        WPr: 6,
        MTh: 50,
        MPr: 100,
      },
      {
        code: "MET-315",
        name: "Mechanical Vibrations",
        nature: "Major based Depth",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MET-316",
        name: "Health, Safety & Environment",
        nature: "Major based Breadth",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
    ],
  },
  "6th Semester": {
    totalCH: 18,
    theoryCH: 10,
    practicalCH: 8,
    contactHrs: 34,
    theoryMarks: 250,
    practicalMarks: 350,
    totalMarks: 600,
    courses: [
      {
        code: "MGM-321",
        name: "Project Management",
        nature: "Management Science",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MGM-322",
        name: "Professional Ethics",
        nature: "Management Science",
        CHTh: 2,
        CHPr: 0,
        WTh: 2,
        WPr: 0,
        MTh: 50,
        MPr: 0,
      },
      {
        code: "MET-322",
        name: "Automobile Technology",
        nature: "Major based Depth",
        CHTh: 2,
        CHPr: 2,
        WTh: 2,
        WPr: 6,
        MTh: 50,
        MPr: 100,
      },
      {
        code: "MET-323",
        name: "Heating, Ventilation & Air Conditioning (HVAC)",
        nature: "Major based Depth",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MET-324",
        name: "Energy Systems Technology",
        nature: "Major based Depth",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MET-325",
        name: "Project Part‑I",
        nature: "Major based Depth",
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
    totalCH: 15,
    theoryCH: 9,
    practicalCH: 6,
    contactHrs: 27,
    theoryMarks: 250,
    practicalMarks: 250,
    totalMarks: 500,
    courses: [
      {
        code: "MGM-411",
        name: "Entrepreneurship",
        nature: "Management Science",
        CHTh: 3,
        CHPr: 0,
        WTh: 3,
        WPr: 0,
        MTh: 100,
        MPr: 0,
      },
      {
        code: "MET-411",
        name: "Mechatronics",
        nature: "Major based Depth",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MET-412",
        name: "Maintenance Technology",
        nature: "Major based Depth",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MET-413",
        name: "Advanced Manufacturing Technology",
        nature: "Major based Depth",
        CHTh: 2,
        CHPr: 1,
        WTh: 2,
        WPr: 3,
        MTh: 50,
        MPr: 50,
      },
      {
        code: "MET-325",
        name: "Project Part‑II",
        nature: "Major based Depth",
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
    contactHrs: 640,
    theoryMarks: 0,
    practicalMarks: 800,
    totalMarks: 800,
    courses: [
      {
        code: "MET-421",
        name: "16 Weeks Supervised Industrial / Field Training",
        nature: "Major based Depth",
        CHTh: 0,
        CHPr: 16,
        WTh: 0,
        WPr: 640,
        MTh: 0,
        MPr: 800,
      },
    ],
  },
};

/* ─────── Semester Table Component ─────── */
function SemesterTable({ title, data }: { title: string; data: Semester }) {
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
            {data.courses.map((c: Course, idx: number) => (
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
export default function MechanicalProgramPage() {
  return (
    <>
      <PageHero
        title="B.E. Mechanical Engineering Technology"
        subtitle="4‑Year Evening Programme — Department of Mechanical Engineering"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: "B.E Mechanical" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4 flex items-center gap-2">
                <Settings className="text-gold" size={24} /> Programme Overview
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {overview}
              </p>
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
                  <strong>Accreditation:</strong> National Technology Council
                  (NTC) & HEC Recognised
                </li>
                <li>
                  <strong>Total Credit Hours:</strong> 132
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
                    <span className="text-gold font-bold">PEO‑{idx + 1}:</span>{" "}
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

            {/* Laboratories & Workshops */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">
                State‑of‑the‑Art Facilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-primary-dark mb-3">
                    Laboratories
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {labs.map((lab, idx) => (
                      <div
                        key={idx}
                        className="bg-surface border border-gray-200 rounded-lg p-3 text-sm text-gray-700 flex items-center gap-2"
                      >
                        <GraduationCap size={16} className="text-primary" />{" "}
                        {lab}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark mb-3">
                    Workshops
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {workshops.map((shop, idx) => (
                      <div
                        key={idx}
                        className="bg-surface border border-gray-200 rounded-lg p-3 text-sm text-gray-700 flex items-center gap-2"
                      >
                        <Settings size={16} className="text-primary" /> {shop}
                      </div>
                    ))}
                  </div>
                </div>
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
              <SemesterTable
                title="3rd Semester"
                data={semesterData["3rd Semester"]}
              />
              <SemesterTable
                title="4th Semester"
                data={semesterData["4th Semester"]}
              />
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

              {/* 8th Semester Marks Breakdown */}
              <div className="mt-6 bg-surface border border-gray-200 rounded-xl p-5">
                <h4 className="font-semibold text-primary-dark mb-3">
                  8th Semester Marks Distribution
                </h4>
                <div className="overflow-x-auto text-sm">
                  <table className="min-w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-2 pr-4">Training Performance</td>
                        <td className="py-2 font-medium">600</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">Viva Voce</td>
                        <td className="py-2 font-medium">200</td>
                      </tr>
                      <tr className="font-semibold">
                        <td className="py-2 pr-4">Total</td>
                        <td className="py-2">800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Further breakdown of Training Performance: Student Report
                  (200), Industrial Trainer (350), Industrial Visit by Academic
                  Supervisor (200), Viva Voce (50).
                </p>
              </div>
            </div>

            {/* Career Prospects */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">
                Career Prospects
              </h2>
              <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
                <li>
                  Mechanical Technologist in manufacturing, automotive, energy
                  sectors
                </li>
                <li>CAD/CAM Designer</li>
                <li>Production Supervisor</li>
                <li>Maintenance Engineer</li>
                <li>Quality Assurance Engineer</li>
                <li>HVAC Technologist</li>
                <li>Industrial Automation Specialist</li>
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
