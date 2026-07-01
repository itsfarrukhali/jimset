export type CareerOpening = {
  id: string;
  title: string;
  department: string;
  employmentType: string;
  location: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const careerOpenings: CareerOpening[] = [
  {
    id: "lecturer-electrical-technology",
    title: "Lecturer - Electrical Technology",
    department: "Faculty of Engineering Technology",
    employmentType: "Full-time / Visiting",
    location: "Nazimabad, Karachi",
    summary:
      "Teach undergraduate technology courses, mentor students, and support practical learning in electrical laboratories.",
    responsibilities: [
      "Deliver lectures, tutorials, and lab sessions for B.E Electrical Technology students.",
      "Prepare assessments, course material, and practical demonstrations aligned with the academic plan.",
      "Guide students on projects, safety practices, and professional engineering technology standards.",
    ],
    requirements: [
      "B.E / B.S or M.E / M.S in Electrical, Electronics, or a closely related field.",
      "Strong communication skills and the ability to teach evening program students.",
      "Teaching, lab supervision, or relevant industry experience will be preferred.",
    ],
  },
  {
    id: "lecturer-mechanical-technology",
    title: "Lecturer - Mechanical Technology",
    department: "Faculty of Engineering Technology",
    employmentType: "Full-time / Visiting",
    location: "Nazimabad, Karachi",
    summary:
      "Support mechanical technology instruction through applied teaching, student mentoring, and workshop-based learning.",
    responsibilities: [
      "Teach core and applied mechanical technology subjects with clear practical examples.",
      "Supervise workshop activities, student assignments, and semester project work.",
      "Coordinate with academic leadership on course planning, records, and student progress.",
    ],
    requirements: [
      "B.E / B.S or M.E / M.S in Mechanical, Industrial, or Manufacturing Engineering.",
      "Comfortable with workshop, CAD, thermodynamics, materials, or production-related instruction.",
      "Prior teaching or professional engineering experience is an advantage.",
    ],
  },
  {
    id: "lab-engineer-instructor",
    title: "Lab Engineer / Instructor",
    department: "Laboratories & Practical Training",
    employmentType: "Full-time",
    location: "Nazimabad, Karachi",
    summary:
      "Maintain laboratory readiness, assist faculty during practical sessions, and help students build hands-on technical confidence.",
    responsibilities: [
      "Prepare equipment, instruments, lab manuals, and safety checks before practical classes.",
      "Assist students during experiments and maintain lab attendance, usage, and maintenance records.",
      "Coordinate repairs, consumables, and equipment availability with the administration team.",
    ],
    requirements: [
      "DAE, B.Tech, B.E, or relevant technical qualification in Electrical or Mechanical discipline.",
      "Hands-on experience with educational labs, instruments, or workshop equipment.",
      "Organized, safety-conscious, and comfortable supporting student learning.",
    ],
  },
  {
    id: "student-support-officer",
    title: "Admissions & Student Support Officer",
    department: "Administration",
    employmentType: "Full-time",
    location: "Nazimabad, Karachi",
    summary:
      "Assist applicants, enrolled students, and families with admissions guidance, records, and academic support coordination.",
    responsibilities: [
      "Respond to admissions inquiries through phone, email, and in-person visits.",
      "Maintain applicant records, follow-ups, document checklists, and student support logs.",
      "Coordinate with academic and accounts teams for accurate guidance and timely communication.",
    ],
    requirements: [
      "Bachelor's degree with strong written and spoken communication skills.",
      "Experience in admissions, student services, or educational administration is preferred.",
      "Professional, patient, and comfortable using email, spreadsheets, and basic office tools.",
    ],
  },
];
