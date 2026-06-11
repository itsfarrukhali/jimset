"use client";

import { useState, type FormEvent } from "react";
import {
  GraduationCap,
  LoaderCircle,
  Mail,
  MessageSquareText,
  Phone,
  Send,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  type ApiResponse,
  EMAIL_PATTERN_SOURCE,
  EMAIL_VALIDATION_MESSAGE,
  PAKISTAN_MOBILE_MESSAGE,
  PAKISTAN_MOBILE_PATTERN_SOURCE,
} from "@/lib/forms";
import { FieldError, FormStatus, Honeypot, submitForm } from "./form-helpers";

export default function ApplicationForm() {
  const [state, setState] = useState<ApiResponse | null>(null);
  const [pending, setPending] = useState(false);
  const [program, setProgram] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setPending(true);
    setState(null);
    const result = await submitForm(event, "/api/apply");
    setState(result);
    setPending(false);

    if (result.success) {
      form.reset();
      setProgram("");
    }
  }

  const inputClass =
    "h-12 rounded-lg border-gray-200 bg-white px-4 text-sm shadow-sm focus-visible:border-primary focus-visible:ring-primary/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-primary-dark/5"
    >
      <Honeypot />

      <div className="border-b bg-primary-dark px-6 py-6 text-white md:px-8">
        <div className="flex items-start gap-4">
          <span className="rounded-xl bg-gold p-3 text-primary-dark">
            <GraduationCap className="size-6" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold">
              Start Your Application
            </h2>
            <p className="mt-1 text-sm leading-6 text-white/65">
              Submit your initial details. The admissions team will contact you
              about eligibility, documents, and next steps.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-7 p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            id="name"
            label="Full Name"
            icon={<User className="size-4" />}
            error={state?.errors?.name}
          >
            <Input
              id="name"
              name="name"
              autoComplete="name"
              required
              maxLength={80}
              aria-invalid={state?.errors?.name ? "true" : undefined}
              aria-describedby={state?.errors?.name ? "name-error" : undefined}
              className={inputClass}
              placeholder="Your full name"
            />
          </FormField>

          <FormField
            id="phone"
            label="Phone Number"
            icon={<Phone className="size-4" />}
            error={state?.errors?.phone}
          >
            <Input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              maxLength={16}
              pattern={PAKISTAN_MOBILE_PATTERN_SOURCE}
              title={PAKISTAN_MOBILE_MESSAGE}
              aria-invalid={state?.errors?.phone ? "true" : undefined}
              aria-describedby={
                state?.errors?.phone ? "phone-error" : undefined
              }
              className={inputClass}
              placeholder="0321-12345678 or +92321-1234567"
            />
          </FormField>
        </div>

        <FormField
          id="email"
          label="Email Address"
          icon={<Mail className="size-4" />}
          error={state?.errors?.email}
        >
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={160}
            pattern={EMAIL_PATTERN_SOURCE}
            title={EMAIL_VALIDATION_MESSAGE}
            aria-invalid={state?.errors?.email ? "true" : undefined}
            aria-describedby={state?.errors?.email ? "email-error" : undefined}
            className={inputClass}
            placeholder="you@example.com"
          />
        </FormField>

        <FormField
          id="program"
          label="Program of Interest"
          icon={<GraduationCap className="size-4" />}
          error={state?.errors?.program}
        >
          <Select value={program} onValueChange={setProgram} required>
            <SelectTrigger
              id="program"
              aria-invalid={state?.errors?.program ? "true" : undefined}
              aria-describedby={
                state?.errors?.program ? "program-error" : undefined
              }
              className="h-12 w-full rounded-lg border-gray-200 bg-white px-4 py-4 text-sm shadow-sm focus-visible:border-primary focus-visible:ring-primary/20 "
            >
              <SelectValue placeholder="Select a B.E Technology program" />
            </SelectTrigger>
            <SelectContent className="min-w-60 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
              <SelectItem value="electrical">
                B.E Electrical Technology
              </SelectItem>
              <SelectItem value="mechanical">
                B.E Mechanical Technology
              </SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" name="program" value={program} />
        </FormField>

        <FormField
          id="message"
          label="Additional Information"
          optional
          icon={<MessageSquareText className="size-4" />}
          error={state?.errors?.message}
        >
          <Textarea
            id="message"
            name="message"
            maxLength={2000}
            rows={5}
            aria-invalid={state?.errors?.message ? "true" : undefined}
            aria-describedby={
              state?.errors?.message ? "message-error" : undefined
            }
            className="min-h-32 rounded-lg border-gray-200 bg-white px-4 py-3 text-sm shadow-sm focus-visible:border-primary focus-visible:ring-primary/20"
            placeholder="Tell us about your qualification or ask a question..."
          />
        </FormField>

        <FormStatus state={state} />

        <div className="rounded-xl border border-gold/25 bg-gold/5 p-4">
          <Button
            type="submit"
            disabled={pending}
            className="h-12 w-full bg-gold text-sm font-bold text-primary-dark shadow-md hover:bg-gold/85"
          >
            {pending ? <LoaderCircle className="animate-spin" /> : <Send />}
            {pending ? "Submitting Application..." : "Submit Application"}
          </Button>
          <p className="mt-3 text-center text-xs leading-5 text-gray-500">
            By submitting, you consent to JIMSET contacting you about your
            application. Your information is used only for admissions support.
          </p>
        </div>
      </div>
    </form>
  );
}

function FormField({
  id,
  label,
  icon,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-semibold text-primary-dark">
        <span className="text-primary">{icon}</span>
        {label}
        {optional ? (
          <span className="font-normal text-gray-400">(optional)</span>
        ) : null}
      </Label>
      {children}
      <div id={`${id}-error`}>
        <FieldError message={error} />
      </div>
    </div>
  );
}
