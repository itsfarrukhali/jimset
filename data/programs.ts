export interface Program {
  slug: string;
  title: string;
  overview: string;
  duration: string;
  eligibility: string;
  mode: string;
  curriculum: { semester: string; subjects: string[] }[];
  careers: string[];
  image: string;
}

export const programs: Program[] = [
  {
    slug: "electrical",
    title: "B.E Electrical Technology",
    overview:
      "Hands-on training in power systems, control, automation, PLC, SCADA, and industrial electrical engineering.",
    duration: "4 Years (8 Semesters) – Evening",
    eligibility:
      "DAE (Electrical/Electronics) or HSC Pre-Engineering with minimum 50% marks.",
    mode: "Evening (Part-Time)",
    curriculum: [
      {
        semester: "1st Semester",
        subjects: [
          "Applied Mathematics",
          "Electrical Circuits",
          "Workshop Practice",
          "Communication Skills",
          "Islamic Studies",
        ],
      },
      {
        semester: "2nd Semester",
        subjects: [
          "Electronics",
          "Digital Logic Design",
          "Engineering Drawing",
          "Pakistan Studies",
          "Linear Algebra",
        ],
      },
      {
        semester: "3rd Semester",
        subjects: [
          "Electrical Machines",
          "Power Generation",
          "Control Systems",
          "Programming Fundamentals",
          "Technical Report Writing",
        ],
      },
      {
        semester: "4th Semester",
        subjects: [
          "Transmission & Distribution",
          "Instrumentation",
          "Microcontrollers",
          "Probability & Statistics",
          "Professional Ethics",
        ],
      },
      {
        semester: "5th Semester",
        subjects: [
          "Power Electronics",
          "Switchgear & Protection",
          "PLC & Automation",
          "Project Management",
          "Elective-I",
        ],
      },
      {
        semester: "6th Semester",
        subjects: [
          "SCADA Systems",
          "Renewable Energy",
          "Industrial Drives",
          "Engineering Economics",
          "Elective-II",
        ],
      },
      {
        semester: "7th Semester",
        subjects: [
          "Capstone Project (Phase-I)",
          "High Voltage Engineering",
          "Smart Grid Technology",
          "Elective-III",
        ],
      },
      {
        semester: "8th Semester",
        subjects: [
          "Capstone Project (Phase-II)",
          "Industrial Internship",
          "Entrepreneurship",
          "Elective-IV",
        ],
      },
    ],
    careers: [
      "Electrical Engineer (Technologist)",
      "Automation Engineer",
      "PLC/SCADA Programmer",
      "Power System Analyst",
      "Maintenance Engineer",
      "Project Supervisor",
    ],
    image: "https://picsum.photos/800/500?random=1",
  },
  {
    slug: "mechanical",
    title: "B.E Mechanical Technology",
    overview:
      "Advanced study in thermodynamics, manufacturing, CAD/CAM, industrial automation, and mechanical systems.",
    duration: "4 Years (8 Semesters) – Evening",
    eligibility:
      "DAE (Mechanical) or HSC Pre-Engineering with minimum 50% marks.",
    mode: "Evening (Part-Time)",
    curriculum: [
      {
        semester: "1st Semester",
        subjects: [
          "Applied Mathematics",
          "Engineering Mechanics",
          "Workshop Technology",
          "Communication Skills",
          "Islamic Studies",
        ],
      },
      {
        semester: "2nd Semester",
        subjects: [
          "Material Science",
          "Thermodynamics",
          "Engineering Drawing",
          "Pakistan Studies",
          "Linear Algebra",
        ],
      },
      {
        semester: "3rd Semester",
        subjects: [
          "Fluid Mechanics",
          "Manufacturing Processes",
          "Machine Design",
          "Programming Fundamentals",
          "Technical Report Writing",
        ],
      },
      {
        semester: "4th Semester",
        subjects: [
          "Heat Transfer",
          "CAD/CAM",
          "Metrology",
          "Probability & Statistics",
          "Professional Ethics",
        ],
      },
      {
        semester: "5th Semester",
        subjects: [
          "Refrigeration & Air Conditioning",
          "CNC Machines",
          "Industrial Automation",
          "Project Management",
          "Elective-I",
        ],
      },
      {
        semester: "6th Semester",
        subjects: [
          "Finite Element Analysis",
          "Robotics",
          "Quality Control",
          "Engineering Economics",
          "Elective-II",
        ],
      },
      {
        semester: "7th Semester",
        subjects: [
          "Capstone Project (Phase-I)",
          "Plant Maintenance",
          "Mechatronics",
          "Elective-III",
        ],
      },
      {
        semester: "8th Semester",
        subjects: [
          "Capstone Project (Phase-II)",
          "Industrial Internship",
          "Entrepreneurship",
          "Elective-IV",
        ],
      },
    ],
    careers: [
      "Mechanical Engineer (Technologist)",
      "CAD/CAM Designer",
      "Production Supervisor",
      "Maintenance Engineer",
      "Quality Assurance Engineer",
      "Industrial Automation Specialist",
    ],
    image: "https://picsum.photos/800/500?random=2",
  },
];
