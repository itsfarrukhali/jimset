import { NewsletterWelcome } from "@/emails/newsletter-email";
import { getEmailConfig, logEmailError, resend } from "@/lib/email";
import {
  type FieldErrors,
  isSpam,
  jsonResponse,
  readJson,
  readString,
} from "@/lib/forms";

export async function POST(request: Request) {
  const payload = await readJson(request);
  if (!payload) return jsonResponse({ success: false, message: "Invalid request." }, 400);
  if (isSpam(payload)) return jsonResponse({ success: true, message: "You are subscribed." });

  const errors: FieldErrors = {};
  const email = readString(payload.email, { label: "Email", required: true, email: true, max: 160 }, errors);
  if (Object.keys(errors).length) {
    return jsonResponse({ success: false, message: "Enter a valid email address.", errors }, 422);
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) {
    logEmailError("newsletter", "RESEND_AUDIENCE_ID is not configured.");
    return jsonResponse({ success: false, message: "Newsletter signup is temporarily unavailable." }, 500);
  }

  try {
    const { error } = await resend.contacts.create({
      audienceId,
      email,
      unsubscribed: false,
    });

    if (error && error.statusCode !== 409) throw error;

    if (!error) {
      const { from } = getEmailConfig();
      const { error: welcomeError } = await resend.emails.send({
          from,
          to: email,
          subject: "Welcome to JIMSET updates",
          react: NewsletterWelcome(),
        });
      if (welcomeError) {
        logEmailError("newsletter-welcome", welcomeError);
      }
    }

    return jsonResponse({
      success: true,
      message: error ? "You are already subscribed." : "You are subscribed. Welcome to JIMSET updates.",
    });
  } catch (error) {
    logEmailError("newsletter", error);
    return jsonResponse({ success: false, message: "We could not subscribe you right now. Please try again shortly." }, 500);
  }
}
