"use client";

import { useState, type FormEvent } from "react";
import { LoaderCircle, Mail, MessageSquareText, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ApiResponse } from "@/lib/forms";
import { FieldError, FormStatus, Honeypot, submitForm } from "./form-helpers";

export default function ContactForm() {
  const [state, setState] = useState<ApiResponse | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setPending(true);
    setState(null);
    const result = await submitForm(event, "/api/contact");
    setState(result);
    setPending(false);
    if (result.success) form.reset();
  }

  const inputClass =
    "h-12 rounded-lg border-gray-200 bg-white px-4 text-sm shadow-sm focus-visible:border-primary focus-visible:ring-primary/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-primary-dark/5"
      noValidate
    >
      <Honeypot />
      <div className="border-b bg-surface px-6 py-5">
        <h3 className="font-display text-2xl font-bold text-primary-dark">
          Send a Message
        </h3>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Ask about admissions, programs, eligibility, or campus visits.
        </p>
      </div>

      <div className="space-y-5 p-6">
        <ContactField
          id="c-name"
          label="Full Name"
          icon={<User className="size-4" />}
          error={state?.errors?.name}
        >
          <Input
            id="c-name"
            name="name"
            autoComplete="name"
            required
            maxLength={80}
            aria-invalid={state?.errors?.name ? "true" : undefined}
            aria-describedby={state?.errors?.name ? "c-name-error" : undefined}
            className={inputClass}
            placeholder="Your full name"
          />
        </ContactField>

        <ContactField
          id="c-email"
          label="Email Address"
          icon={<Mail className="size-4" />}
          error={state?.errors?.email}
        >
          <Input
            id="c-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={160}
            aria-invalid={state?.errors?.email ? "true" : undefined}
            aria-describedby={state?.errors?.email ? "c-email-error" : undefined}
            className={inputClass}
            placeholder="you@example.com"
          />
        </ContactField>

        <ContactField
          id="c-message"
          label="How can we help?"
          icon={<MessageSquareText className="size-4" />}
          error={state?.errors?.message}
        >
          <Textarea
            id="c-message"
            name="message"
            required
            minLength={10}
            maxLength={3000}
            rows={6}
            aria-invalid={state?.errors?.message ? "true" : undefined}
            aria-describedby={
              state?.errors?.message ? "c-message-error" : undefined
            }
            className="min-h-40 rounded-lg border-gray-200 bg-white px-4 py-3 text-sm shadow-sm focus-visible:border-primary focus-visible:ring-primary/20"
            placeholder="Write your question or message..."
          />
        </ContactField>

        <FormStatus state={state} />
        <Button
          type="submit"
          disabled={pending}
          className="h-12 w-full bg-primary text-sm font-bold text-white shadow-md hover:bg-primary-dark"
        >
          {pending ? <LoaderCircle className="animate-spin" /> : <Send />}
          {pending ? "Sending Message..." : "Send Message"}
        </Button>
        <p className="text-center text-xs text-gray-500">
          We usually respond during institute office hours.
        </p>
      </div>
    </form>
  );
}

function ContactField({
  id,
  label,
  icon,
  error,
  children,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-semibold text-primary-dark">
        <span className="text-primary">{icon}</span> {label}
      </Label>
      {children}
      <div id={`${id}-error`}>
        <FieldError message={error} />
      </div>
    </div>
  );
}
