export interface FeeItemA {
  description: string;
  amountMT: number;
  amountET: number;
  note?: string;
}

export interface FeeItemB {
  description: string;
  amountMT: number | null;
  amountET: number | null;
  note?: string;
}

export interface SecondSemFeeItem {
  description: string;
  amount: number;
}

export interface ProgramEligibility {
  programName: string;
  degreeCode: string;
  hscQualifications: string[];
  daeDisciplines: string[];
}

export const preAdmissionTestDetails = {
  testFee: 3000,
  testFeeFormatted: "Rs. 3,000/=",
  testFeeText: "Three Thousand Only (To be Deposited into Bank)",
  formSubmissionDeposit: 33000,
  formSubmissionDepositFormatted: "Rs. 33,000/-",
  refundPolicy:
    "Rs. 33,000/- to be deposited at the time of submission of Admission Form and it will be refunded if the pre-admission test is not cleared.",
};

export const feeStructureSectionA: FeeItemA[] = [
  {
    description: "Admission Fees",
    amountMT: 15000,
    amountET: 15000,
  },
  {
    description: "Smart Identity Card Fee",
    amountMT: 1000,
    amountET: 1000,
  },
  {
    description: "Enrollment Card Fee",
    amountMT: 5000,
    amountET: 5000,
  },
  {
    description: "HSC / DAE Marks Certificate Verification Fee",
    amountMT: 7000,
    amountET: 7000,
  },
  {
    description: "University Caution Money Deposit (Refundable)",
    amountMT: 5000,
    amountET: 5000,
    note: "Refundable only after completion of degree course. In case of cancellation of admission at any stage, caution money will not be refundable.",
  },
];

export const feeStructureSectionASubtotal = {
  amountMT: 33000,
  amountET: 33000,
};

export const feeStructureSectionB: FeeItemB[] = [
  {
    description: "Tuition Fee (per semester) — Electrical (13 × Rs. 3,000)",
    amountMT: null,
    amountET: 39000,
    note: "Applicable for Evening Batch (ET)",
  },
  {
    description: "Tuition Fee (per semester) — Mechanical (15 × Rs. 3,000)",
    amountMT: 45000,
    amountET: null,
    note: "Applicable for Morning Batch (MT)",
  },
  {
    description: "Sport Charges (per semester)",
    amountMT: 500,
    amountET: 500,
  },
  {
    description: "Development Charges (per semester)",
    amountMT: 1500,
    amountET: 1500,
  },
  {
    description: "Library Fee (per semester)",
    amountMT: 1500,
    amountET: 1500,
  },
  {
    description: "Medical Fee (per semester)",
    amountMT: 500,
    amountET: 500,
  },
  {
    description: "Lab Equipment Maintenance (per semester)",
    amountMT: 3000,
    amountET: 3000,
  },
  {
    description: "Semester Examination Fee",
    amountMT: 8500,
    amountET: 8500,
  },
];

export const feeStructureSectionBSubtotal = {
  amountMT: 60500,
  amountET: 54500,
};

export const feeStructureGrandTotal = {
  amountMT: 93500,
  amountET: 87500,
};

export const secondSemesterFeeStructure2024_2025: SecondSemFeeItem[] = [
  { description: "Tuition Fee (per semester)", amount: 32000 },
  { description: "Sport Charges (per semester)", amount: 500 },
  { description: "Development Charges (per semester)", amount: 1500 },
  { description: "Library Fee (per semester)", amount: 1500 },
  { description: "Medical Fee (per semester)", amount: 500 },
  { description: "Lab Equipment Maintenance (per semester)", amount: 3000 },
  { description: "Semester Examination Fee", amount: 8500 },
];

export const secondSemesterTotalFee2024_2025 = 47500;

export const programEligibilityDetails: ProgramEligibility[] = [
  {
    programName: "B.E Tech (Electrical)",
    degreeCode: "ELECTRICAL",
    hscQualifications: ["HSC (Pre-Engineering)", "HSC (Pre-Medical)"],
    daeDisciplines: [
      "DAE Electrical",
      "DAE Electronics",
      "DAE Instrumentation & Process Control",
      "DAE Telecommunication",
      "DAE Avionics",
      "DAE Instrumentation",
      "DAE IT",
      "DAE Radar Technology",
      "DAE Automation",
      "DAE Radio Technology",
    ],
  },
  {
    programName: "B.E Tech (Mechanical)",
    degreeCode: "MECHANICAL",
    hscQualifications: ["HSC (Pre-Engineering)", "HSC (Pre-Medical)"],
    daeDisciplines: [
      "DAE Mechanical",
      "DAE Auto-Farm / Diesel",
      "DAE Automation",
      "DAE Power",
      "DAE Biomedical",
      "DAE Dies & Molding",
      "DAE Refrigeration & Air Conditioning",
    ],
  },
];
