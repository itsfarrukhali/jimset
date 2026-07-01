import {
  CareerApplicationAcknowledgement,
  CareerApplicationNotification,
} from "@/emails/career-email";
import { careerOpenings } from "@/data/careers";
import { getEmailConfig, logEmailError, resend } from "@/lib/email";
import {
  type FieldErrors,
  jsonResponse,
  PAKISTAN_MOBILE_MESSAGE,
  PAKISTAN_MOBILE_PATTERN_SOURCE,
  readString,
} from "@/lib/forms";

export const runtime = "nodejs";

const MAX_CV_SIZE = 5 * 1024 * 1024;
const allowedCvTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const allowedCvExtensions = new Set([".pdf", ".doc", ".docx"]);

const openingTitles = new Map(
  careerOpenings.map((opening) => [opening.id, opening.title]),
);

export async function POST(request: Request) {
  let payload: FormData;

  try {
    payload = await request.formData();
  } catch {
    return jsonResponse({ success: false, message: "Invalid request." }, 400);
  }

  if (readFormString(payload, "website")) {
    return jsonResponse({
      success: true,
      message: "Your career application has been submitted successfully.",
    });
  }

  const errors: FieldErrors = {};
  const name = readString(
    readFormString(payload, "name"),
    { label: "Name", required: true, min: 2, max: 80 },
    errors,
  );
  const email = readString(
    readFormString(payload, "email"),
    { label: "Email", required: true, email: true, max: 160 },
    errors,
  );
  const phone = readString(
    readFormString(payload, "phone"),
    {
      label: "Phone",
      required: true,
      max: 16,
      pattern: new RegExp(`^${PAKISTAN_MOBILE_PATTERN_SOURCE}$`),
      patternMessage: PAKISTAN_MOBILE_MESSAGE,
    },
    errors,
  );
  const experience = readString(
    readFormString(payload, "experience"),
    { label: "Experience", required: true, max: 80 },
    errors,
  );
  const message = readString(
    readFormString(payload, "message"),
    { label: "Message", max: 2000 },
    errors,
  );

  const positionId = readFormString(payload, "position");
  const position = openingTitles.get(positionId);
  if (!position) errors.position = "Select a career opening.";

  const cv = payload.get("cv");
  const cvError = validateCv(cv);
  if (cvError) errors.cv = cvError;

  if (Object.keys(errors).length) {
    return jsonResponse(
      {
        success: false,
        message: "Please correct the highlighted fields.",
        errors,
      },
      422,
    );
  }

  const cvFile = cv as File;
  const fileName = sanitizeFileName(cvFile.name);

  try {
    const { from, to } = getEmailConfig();
    const cvBuffer = Buffer.from(await cvFile.arrayBuffer());
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Career application: ${position} - ${name}`,
      react: CareerApplicationNotification({
        name,
        email,
        phone,
        position: position ?? "Career opening",
        experience,
        message,
        fileName,
      }),
      attachments: [
        {
          filename: fileName,
          content: cvBuffer,
          contentType: cvFile.type || undefined,
        },
      ],
    });
    if (error) throw error;

    const { error: acknowledgementError } = await resend.emails.send({
      from,
      to: email,
      subject: "Your JIMSET career application was received",
      react: CareerApplicationAcknowledgement({
        name,
        position: position ?? "the selected position",
      }),
    });
    if (acknowledgementError) {
      logEmailError("career-acknowledgement", acknowledgementError);
    }

    return jsonResponse({
      success: true,
      message:
        "Your career application has been submitted. Please check your email for confirmation.",
    });
  } catch (error) {
    logEmailError("career-application", error);
    return jsonResponse(
      {
        success: false,
        message:
          "We could not submit your career application right now. Please try again shortly.",
      },
      500,
    );
  }
}

function readFormString(payload: FormData, key: string) {
  const value = payload.get(key);
  return typeof value === "string" ? value : "";
}

function validateCv(value: FormDataEntryValue | null) {
  if (!(value instanceof File) || value.size === 0) {
    return "Upload your CV as a PDF, DOC, or DOCX file.";
  }

  if (value.size > MAX_CV_SIZE) {
    return "CV file size must be 5MB or less.";
  }

  const extension = getFileExtension(value.name);
  const hasAllowedType = value.type ? allowedCvTypes.has(value.type) : false;
  const hasAllowedExtension = allowedCvExtensions.has(extension);

  if (!hasAllowedType && !hasAllowedExtension) {
    return "Only PDF, DOC, and DOCX CV files are allowed.";
  }

  return null;
}

function getFileExtension(fileName: string) {
  const extensionStart = fileName.lastIndexOf(".");
  return extensionStart >= 0 ? fileName.slice(extensionStart).toLowerCase() : "";
}

function sanitizeFileName(fileName: string) {
  const cleaned = fileName
    .replace(/[/\\?%*:|"<>]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned || "candidate-cv";
}
