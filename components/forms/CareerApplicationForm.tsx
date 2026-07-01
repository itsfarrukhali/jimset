"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  BriefcaseBusiness,
  FileText,
  LoaderCircle,
  Mail,
  MessageSquareText,
  Phone,
  Send,
  User,
} from "lucide-react";
import { careerOpenings } from "@/data/careers";
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
import { FieldError, FormStatus, Honeypot } from "./form-helpers";

const MAX_CV_SIZE = 5 * 1024 * 1024;

export default function CareerApplicationForm() {
  const [state, setState] = useState<ApiResponse | null>(null);
  const [pending, setPending] = useState(false);
  const [position, setPosition] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const cv = formData.get("cv");

    if (cv instanceof File && cv.size > MAX_CV_SIZE) {
      setState({
        success: false,
        message: "Please correct the highlighted fields.",
        errors: { cv: "CV file size must be 5MB or less." },
      });
      return;
    }

    setPending(true);
    setState(null);

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as ApiResponse;
      setState(result);

      if (result.success) {
        form.reset();
        setPosition("");
      }
    } catch {
      setState({
        success: false,
        message:
          "A network error occurred. Check your connection and try again.",
      });
    } finally {
      setPending(false);
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
            <BriefcaseBusiness className="size-6" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold">
              Apply for a Position
            </h2>
            <p className="mt-1 text-sm leading-6 text-white/65">
              Share your details and upload your CV. Our team will review your
              profile against current openings.
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
              placeholder="0346-8224143 or 92348-8224143"
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
          id="position"
          label="Position"
          icon={<BriefcaseBusiness className="size-4" />}
          error={state?.errors?.position}
        >
          <Select value={position} onValueChange={setPosition} required>
            <SelectTrigger
              id="position"
              aria-invalid={state?.errors?.position ? "true" : undefined}
              aria-describedby={
                state?.errors?.position ? "position-error" : undefined
              }
              className="h-12 w-full rounded-lg border-gray-200 bg-white px-4 py-4 text-sm shadow-sm focus-visible:border-primary focus-visible:ring-primary/20"
            >
              <SelectValue placeholder="Select a career opening" />
            </SelectTrigger>
            <SelectContent className="min-w-72 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
              {careerOpenings.map((opening) => (
                <SelectItem key={opening.id} value={opening.id}>
                  {opening.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="position" value={position} required />
        </FormField>

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            id="experience"
            label="Experience"
            icon={<FileText className="size-4" />}
            error={state?.errors?.experience}
          >
            <Input
              id="experience"
              name="experience"
              required
              maxLength={80}
              aria-invalid={state?.errors?.experience ? "true" : undefined}
              aria-describedby={
                state?.errors?.experience ? "experience-error" : undefined
              }
              className={inputClass}
              placeholder="e.g. 3 years teaching experience"
            />
          </FormField>

          <FormField
            id="cv"
            label="Upload CV"
            icon={<FileText className="size-4" />}
            error={state?.errors?.cv}
          >
            <Input
              id="cv"
              name="cv"
              type="file"
              required
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              aria-invalid={state?.errors?.cv ? "true" : undefined}
              aria-describedby={state?.errors?.cv ? "cv-error" : undefined}
              className="h-12 cursor-pointer rounded-lg border-gray-200 bg-white px-4 py-3 text-sm shadow-sm file:mr-4 file:rounded-md file:border-0 file:bg-primary-dark file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-primary"
            />
            <p className="text-xs text-gray-500">
              PDF, DOC, or DOCX only. Maximum file size: 5MB.
            </p>
          </FormField>
        </div>

        <FormField
          id="message"
          label="Cover Message"
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
            placeholder="Briefly tell us why you are a good fit..."
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
            {pending ? "Submitting Application..." : "Submit Career Application"}
          </Button>
          <p className="mt-3 text-center text-xs leading-5 text-gray-500">
            Your CV and contact details are used only for recruitment review and
            follow-up by JIMSET.
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
  icon: ReactNode;
  optional?: boolean;
  error?: string;
  children: ReactNode;
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
