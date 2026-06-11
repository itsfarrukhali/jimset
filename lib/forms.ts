export type FieldErrors = Record<string, string>;

export type ApiResponse = {
  success: boolean;
  message: string;
  errors?: FieldErrors;
};

type Validator = {
  required?: boolean;
  email?: boolean;
  min?: number;
  max: number;
  pattern?: RegExp;
  patternMessage?: string;
  label: string;
};

export const PAKISTAN_MOBILE_PATTERN_SOURCE =
  "(?:\\+?92|0)3[0-9]{2}[- ]?[0-9]{7}";

export const PAKISTAN_MOBILE_MESSAGE =
  "Enter a mobile number like 0346-8224143 or 92348-8224143.";

export const EMAIL_PATTERN_SOURCE = "[^\\s@]+@[^\\s@]+\\.[^\\s@]+";

export const EMAIL_VALIDATION_MESSAGE =
  "Enter a complete email address like name@example.com.";

export function readString(
  value: unknown,
  rules: Validator,
  errors: FieldErrors,
) {
  const text = typeof value === "string" ? value.trim() : "";

  if (rules.required && !text) {
    errors[rules.label.toLowerCase()] = `${rules.label} is required.`;
    return "";
  }

  if (text && rules.min && text.length < rules.min) {
    errors[rules.label.toLowerCase()] =
      `${rules.label} must be at least ${rules.min} characters.`;
  } else if (text.length > rules.max) {
    errors[rules.label.toLowerCase()] =
      `${rules.label} must be ${rules.max} characters or fewer.`;
  } else if (
    text &&
    rules.email &&
    !new RegExp(`^${EMAIL_PATTERN_SOURCE}$`).test(text)
  ) {
    errors[rules.label.toLowerCase()] = EMAIL_VALIDATION_MESSAGE;
  } else if (text && rules.pattern && !rules.pattern.test(text)) {
    errors[rules.label.toLowerCase()] =
      rules.patternMessage ?? `Enter a valid ${rules.label.toLowerCase()}.`;
  }

  return text;
}

export async function readJson(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return null;
  }

  try {
    return (await request.json()) as Record<string, unknown>;
  } catch {
    return null;
  }
}

export function isSpam(payload: Record<string, unknown>) {
  return typeof payload.website === "string" && payload.website.length > 0;
}

export function jsonResponse(body: ApiResponse, status = 200) {
  return Response.json(body, { status });
}
