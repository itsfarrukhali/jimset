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

// 1st Semester Session 2025-2026 Summary
export const feeStructureSummary2025_2026 = {
  preAdmissionTestFee: 3000,
  preAdmissionTestFeeFormatted: "Rs. 3,000/=",
  admissionFeeOneTime: 33000,
  admissionFeeOneTimeFormatted: "Rs. 33,000/=",

  // Morning Batch (MT)
  semesterFeeMT: 60500,
  semesterFeeMTFormatted: "Rs. 60,500/=",
  discountMTAmount: 4500,
  discountMTAmountFormatted: "Rs. 4,500/=",
  discountedSemesterFeeMT: 56000,
  discountedSemesterFeeMTFormatted: "Rs. 56,000/=",
  grandTotalMT: 89000,
  grandTotalMTFormatted: "Rs. 89,000/=",

  // Evening Batch (ET)
  semesterFeeET: 54500,
  semesterFeeETFormatted: "Rs. 54,500/=",
  discountETAmount: 3900,
  discountETAmountFormatted: "Rs. 3,900/=",
  discountedSemesterFeeET: 50600,
  discountedSemesterFeeETFormatted: "Rs. 50,600/=",
  grandTotalET: 83600,
  grandTotalETFormatted: "Rs. 83,600/=",
};

// 1st Batch 2nd Semester Session 2024-2025 Summary
export const secondSemesterSummary2024_2025 = {
  baseFee: 47500,
  baseFeeFormatted: "Rs. 47,500/=",
  discountPercent: 30,
  discountAmount: 14250,
  discountAmountFormatted: "Rs. 14,250/=",
  discountedFee: 33250,
  discountedFeeFormatted: "Rs. 33,250/=",
};

// 3rd Semester (2nd Year) Summary
export const thirdSemesterSummary2ndYear = {
  baseFee: 47500,
  baseFeeFormatted: "Rs. 47,500/=",
  discountPercent: 30,
  discountAmount: 14250,
  discountAmountFormatted: "Rs. 14,250/=",
  discountedFeeAfter30Percent: 33250,
  discountedFeeAfter30PercentFormatted: "Rs. 33,250/=",
  tuitionIncrementPercent: 10,
  tuitionIncrementAmount: 3325,
  tuitionIncrementAmountFormatted: "Rs. 3,325/=",
  actualFeePayable: 36575,
  actualFeePayableFormatted: "Rs. 36,575/=",
};

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
