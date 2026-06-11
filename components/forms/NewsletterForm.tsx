"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, LoaderCircle, Mail } from "lucide-react";
import type { ApiResponse } from "@/lib/forms";
import { Honeypot, submitForm } from "./form-helpers";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function NewsletterForm() {
  const [state, setState] = useState<ApiResponse | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setPending(true);
    setState(null);
    const result = await submitForm(event, "/api/newsletter");
    setState(result);
    setPending(false);
    if (result.success) form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mt-6 rounded-xl border border-white/10 bg-white/5 p-4"
      noValidate
    >
      <Honeypot />
      <Label
        htmlFor="newsletter-email"
        className="mb-2 text-sm font-semibold text-white"
      >
        <Mail className="size-4 text-gold" /> Get JIMSET updates
      </Label>
      <p className="mb-3 text-xs leading-5 text-white/50">
        Admissions news, events, and official announcements.
      </p>

      <div className="flex overflow-hidden rounded-lg border border-white/15 bg-white shadow-sm focus-within:ring-2 focus-within:ring-gold/50">
        <Input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={160}
          aria-invalid={state?.errors?.email ? "true" : undefined}
          aria-describedby="newsletter-status"
          className="h-11 min-w-0 flex-1 rounded-none border-0 bg-white px-3 text-sm text-gray-900 shadow-none focus-visible:ring-0"
          placeholder="Your email address"
        />
        <Button
          type="submit"
          disabled={pending}
          aria-label="Subscribe to newsletter"
          className="h-11 w-12 rounded-none bg-gold p-0 text-primary-dark shadow-none hover:bg-gold/85"
        >
          {pending ? (
            <LoaderCircle className="size-4 animate-spin" />
          ) : (
            <ArrowRight className="size-4" />
          )}
        </Button>
      </div>

      <p
        id="newsletter-status"
        aria-live="polite"
        className={`mt-2 min-h-4 text-xs ${
          state
            ? state.success
              ? "text-green-300"
              : "text-red-300"
            : "text-white/40"
        }`}
      >
        {state?.message ?? "No spam. Unsubscribe whenever you like."}
      </p>
    </form>
  );
}
