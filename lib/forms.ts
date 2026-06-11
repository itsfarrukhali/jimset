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
  label: string;
};

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
  } else if (text && rules.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
    errors[rules.label.toLowerCase()] = "Enter a valid email address.";
  } else if (text && rules.pattern && !rules.pattern.test(text)) {
    errors[rules.label.toLowerCase()] = `Enter a valid ${rules.label.toLowerCase()}.`;
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
