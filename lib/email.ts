import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export function getEmailConfig() {
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO;

  if (!process.env.RESEND_API_KEY || !from || !to) {
    throw new Error(
      "Email service is not configured. RESEND_API_KEY, EMAIL_FROM, and EMAIL_TO are required.",
    );
  }

  return { from, to };
}

export function logEmailError(context: string, error: unknown) {
  console.error(`[email:${context}]`, error);
}
