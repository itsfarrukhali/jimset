import { ContactAcknowledgement, ContactNotification } from "@/emails/contact-email";
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

export async function POST(request: Request) {
  const payload = await readJson(request);
  if (!payload) {
    return jsonResponse({ success: false, message: "Invalid request." }, 400);
  }

  if (isSpam(payload)) {
    return jsonResponse({ success: true, message: "Message sent successfully." });
  }

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
  const message = readString(payload.message, { label: "Message", required: true, min: 10, max: 3000 }, errors);

  if (Object.keys(errors).length) {
    return jsonResponse({ success: false, message: "Please correct the highlighted fields.", errors }, 422);
  }

  try {
    const { from, to } = getEmailConfig();
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Contact inquiry from ${name}`,
      react: ContactNotification({ name, email, phone, message }),
    });
    if (error) throw error;

    const { error: acknowledgementError } = await resend.emails.send({
        from,
        to: email,
        subject: "We received your message | JIMSET",
        react: ContactAcknowledgement({ name }),
      });
    if (acknowledgementError) {
      logEmailError("contact-acknowledgement", acknowledgementError);
    }

    return jsonResponse({ success: true, message: "Thank you. Your message has been sent successfully." });
  } catch (error) {
    logEmailError("contact", error);
    return jsonResponse({ success: false, message: "We could not send your message right now. Please try again shortly." }, 500);
  }
}
