import { ApplicationAcknowledgement, ApplicationNotification } from "@/emails/application-email";
import { getEmailConfig, logEmailError, resend } from "@/lib/email";
import {
  type FieldErrors,
  isSpam,
  jsonResponse,
  PAKISTAN_MOBILE_MESSAGE,
  PAKISTAN_MOBILE_PATTERN_SOURCE,
  readJson,
  readString,
} from "@/lib/forms";

const programNames = {
  electrical: "B.E Electrical Technology",
  mechanical: "B.E Mechanical Technology",
} as const;

export async function POST(request: Request) {
  const payload = await readJson(request);
  if (!payload) return jsonResponse({ success: false, message: "Invalid request." }, 400);
  if (isSpam(payload)) return jsonResponse({ success: true, message: "Application submitted successfully." });

  const errors: FieldErrors = {};
  const name = readString(payload.name, { label: "Name", required: true, min: 2, max: 80 }, errors);
  const email = readString(payload.email, { label: "Email", required: true, email: true, max: 160 }, errors);
  const phone = readString(payload.phone, {
    label: "Phone",
    required: true,
    max: 16,
    pattern: new RegExp(`^${PAKISTAN_MOBILE_PATTERN_SOURCE}$`),
    patternMessage: PAKISTAN_MOBILE_MESSAGE,
  }, errors);
  const message = readString(payload.message, { label: "Message", max: 2000 }, errors);
  const programKey = typeof payload.program === "string" ? payload.program : "";
  const program = programNames[programKey as keyof typeof programNames];
  if (!program) errors.program = "Select a program.";

  if (Object.keys(errors).length) {
    return jsonResponse({ success: false, message: "Please correct the highlighted fields.", errors }, 422);
  }

  try {
    const { from, to } = getEmailConfig();
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Admission application: ${program} - ${name}`,
      react: ApplicationNotification({ name, email, phone, program, message }),
    });
    if (error) throw error;

    const { error: acknowledgementError } = await resend.emails.send({
        from,
        to: email,
        subject: "Your JIMSET application was received",
        react: ApplicationAcknowledgement({ name, program }),
      });
    if (acknowledgementError) {
      logEmailError("application-acknowledgement", acknowledgementError);
    }

    return jsonResponse({ success: true, message: "Your application has been submitted. Please check your email for confirmation." });
  } catch (error) {
    logEmailError("application", error);
    return jsonResponse({ success: false, message: "We could not submit your application right now. Please try again shortly." }, 500);
  }
}
