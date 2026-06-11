export type NewsItem = {
  category: "Admissions" | "Academic" | "Campus";
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  label: string;
  details: string[];
  href?: string;
  featured?: boolean;
};

export type EventItem = {
  title: string;
  description: string;
  schedule: string;
  location: string;
  details: string[];
  href?: string;
};

export type AnnouncementItem = {
  title: string;
  text: string;
  label: string;
  details: string[];
  href?: string;
};

export const newsItems: NewsItem[] = [
  {
    category: "Admissions",
    title: "Online applications are available for B.E Technology programs",
    summary:
      "Prospective students can submit an initial application for Electrical or Mechanical Technology through the JIMSET website.",
    image: "/hero/carosuel-1.png",
    imageAlt: "JIMSET Electrical Technology learning environment",
    label: "Admissions update",
    details: [
      "Applicants interested in B.E Electrical Technology or B.E Mechanical Technology can begin by submitting the online application form.",
      "After submission, the admissions team reviews the provided information and contacts the applicant regarding eligibility, required documents, fees, and the next stage of the admission process.",
    ],
    href: "/admissions/apply",
    featured: true,
  },
  {
    category: "Academic",
    title: "Explore the B.E Electrical Technology program",
    summary:
      "Review the curriculum, eligibility requirements, learning outcomes, and career opportunities for the evening program.",
    image: "/cards/electrical-bg.png",
    imageAlt: "Electrical engineering equipment",
    label: "Program information",
    details: [
      "The B.E Electrical Technology evening program combines academic foundations with practical learning in power systems, automation, PLC, SCADA, and renewable energy.",
      "Prospective students should review the detailed curriculum and eligibility information before applying.",
    ],
    href: "/programs/electrical",
  },
  {
    category: "Academic",
    title: "Explore the B.E Mechanical Technology program",
    summary:
      "Learn about the program structure, practical training, eligibility requirements, and career pathways.",
    image: "/cards/mechanical-bg.png",
    imageAlt: "Mechanical engineering equipment",
    label: "Program information",
    details: [
      "The B.E Mechanical Technology evening program covers manufacturing, CAD/CAM, thermodynamics, HVAC, industrial systems, and applied engineering practice.",
      "The program page provides curriculum details, eligibility requirements, and potential career pathways.",
    ],
    href: "/programs/mechanical",
  },
];

export const announcements: AnnouncementItem[] = [
  {
    title: "Admissions information and counselling",
    text: "The admissions team is available to answer questions about eligibility, fees, scholarships, and the application process.",
    label: "Ongoing",
    details: [
      "Students and families may contact the admissions team before submitting an application to clarify program eligibility, documentation requirements, tuition fees, and scholarship options.",
      "Campus counselling and visits should be confirmed with the institute before arrival.",
    ],
    href: "/contact",
  },
  {
    title: "Academic calendar and regulations",
    text: "Students and applicants can review the published academic calendar and program regulations online.",
    label: "Academic notice",
    details: [
      "The academic calendar outlines the institute's published schedule, while the regulations page explains important academic requirements and student responsibilities.",
      "Students should consult the relevant official page and contact the institute when clarification is required.",
    ],
    href: "/admissions/academic-calendar",
  },
  {
    title: "Scholarship information",
    text: "Merit-based and need-based financial assistance information is available in the admissions section.",
    label: "Student support",
    details: [
      "JIMSET publishes information about merit-based, need-based, and other scholarship opportunities for eligible students.",
      "Scholarship availability and criteria may change, so applicants should review the current information and confirm details with admissions.",
    ],
    href: "/admissions/scholarships",
  },
];

export const events: EventItem[] = [
  {
    title: "Admissions counselling session",
    description:
      "Meet the admissions team to discuss eligibility, fees, scholarships, and the application process.",
    schedule: "Available by appointment",
    location: "JIMSET Admissions Office",
    details: [
      "This session is intended for prospective students and families who want to understand program eligibility, application requirements, fees, and scholarship opportunities.",
      "Contact the admissions office to request an appointment before visiting.",
    ],
    href: "/contact",
  },
  {
    title: "Campus and laboratory visit",
    description:
      "Prospective students and families can request a guided visit to better understand the learning environment.",
    schedule: "Schedule with admissions",
    location: "JIMSET Campus, Nazimabad",
    details: [
      "A campus visit helps prospective students understand the institute's environment and ask practical questions about their preferred program.",
      "Visits depend on institute availability and must be arranged with the admissions team in advance.",
    ],
    href: "/contact",
  },
  {
    title: "Entry test guidance",
    description:
      "A guidance session covering the admission test process and preparation expectations.",
    schedule: "Schedule to be announced",
    location: "JIMSET Campus",
    details: [
      "The guidance session will explain the admission test process, expected preparation areas, and important instructions for applicants.",
      "The official schedule will be communicated by the institute when available.",
    ],
    href: "/admissions/process",
  },
];

export const galleryImages = [
  {
    src: "/brand/jpi-building.jpeg",
    alt: "Jinnah Polytechnic Institute campus building",
    caption: "Campus",
  },
  {
    src: "/hero/carosuel-1.png",
    alt: "Electrical Technology program at JIMSET",
    caption: "Electrical Technology",
  },
  {
    src: "/hero/carosuel-2.png",
    alt: "Mechanical Technology program at JIMSET",
    caption: "Mechanical Technology",
  },
  {
    src: "/hero/carosuel-3.png",
    alt: "Student support and scholarship opportunities at JIMSET",
    caption: "Student Support",
  },
  {
    src: "/cards/electrical-bg.png",
    alt: "Electrical engineering practical equipment",
    caption: "Practical Learning",
  },
  {
    src: "/cards/mechanical-bg.png",
    alt: "Mechanical engineering practical equipment",
    caption: "Engineering Facilities",
  },
];
