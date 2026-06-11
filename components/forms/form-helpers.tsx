"use client";

import type { ApiResponse } from "@/lib/forms";
import type { FormEvent } from "react";

export async function submitForm(
  event: FormEvent<HTMLFormElement>,
  endpoint: string,
): Promise<ApiResponse> {
  const form = event.currentTarget;
  const payload = Object.fromEntries(new FormData(form));

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return (await response.json()) as ApiResponse;
  } catch {
    return {
      success: false,
      message: "A network error occurred. Check your connection and try again.",
    };
  }
}

export function FieldError({ message }: { message?: string }) {
  return message ? (
    <p className="mt-1 text-xs text-red-700">{message}</p>
  ) : null;
}

export function FormStatus({ state }: { state: ApiResponse | null }) {
  if (!state) return null;

  if (state.success) {
    return (
      <div
        aria-live="polite"
        className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
        role="status"
      >
        {state.message}
      </div>
    );
  }

  return (
    <div
      className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
      role="alert"
    >
      {state.message}
    </div>
  );
}

export function Honeypot() {
  return (
    <div className="absolute -left-[9999px]" aria-hidden="true">
      <label htmlFor="website">Website</label>
      <input id="website" name="website" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
