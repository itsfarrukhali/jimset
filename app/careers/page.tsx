import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";
import CareerApplicationForm from "@/components/forms/CareerApplicationForm";
import PageHero from "@/components/shared/PageHero";
import { careerOpenings } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers | JIMSET",
  description:
    "Explore teaching, laboratory, and student support career opportunities at Jinnah Institute of Management Sciences, Engineering & Technology.",
  alternates: {
    canonical: "/careers",
  },
};

const hiringHighlights = [
  {
    title: "Academic Impact",
    description:
      "Help engineering technology students build practical knowledge for real workplaces.",
    icon: GraduationCap,
  },
  {
    title: "Evening Programs",
    description:
      "Work with motivated students balancing study, professional growth, and family commitments.",
    icon: Clock3,
  },
  {
    title: "Collaborative Faculty",
    description:
      "Contribute to a focused institute environment with teaching, labs, and student support working together.",
    icon: Users,
  },
];

export default function CareersPage() {
  return (
    <main>
      <PageHero
        title="Careers at JIMSET"
        subtitle="Join an institute focused on applied engineering technology education, student guidance, and professional development."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {hiringHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-surface p-6 shadow-sm"
                >
                  <span className="inline-flex rounded-xl bg-gold/20 p-3 text-primary-dark">
                    <Icon className="size-6" />
                  </span>
                  <h2 className="mt-5 font-display text-xl font-bold text-primary-dark">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Current Openings
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary-dark md:text-4xl">
              Opportunities for faculty, labs, and student support
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              These sample openings give applicants a clear direction while the
              institute finalizes official vacancy announcements. You can submit
              your CV for the role that best matches your background.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {careerOpenings.map((opening) => (
              <article
                key={opening.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      {opening.department}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-primary-dark">
                      {opening.title}
                    </h3>
                  </div>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-primary-dark">
                    {opening.employmentType}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {opening.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="size-4 text-gold" />
                    {opening.location}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <BriefcaseBusiness className="size-4 text-gold" />
                    {opening.employmentType}
                  </span>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-bold text-primary-dark">
                      Responsibilities
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-600">
                      {opening.responsibilities.map((item) => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-dark">
                      Requirements
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-600">
                      {opening.requirements.map((item) => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-2xl bg-primary-dark p-8 text-white shadow-xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Apply Online
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold">
              Send your CV directly to JIMSET
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              Complete the form with a valid email, Pakistani mobile number,
              selected position, and CV attachment. The recruitment email will
              include your application details and uploaded CV.
            </p>
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">Before submitting</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-white/70">
                <li>Use a current CV in PDF, DOC, or DOCX format.</li>
                <li>Keep the file size under 5MB.</li>
                <li>
                  Mention teaching, lab, administration, or industry experience
                  relevant to the selected role.
                </li>
              </ul>
            </div>
          </div>

          <CareerApplicationForm />
        </div>
      </section>
    </main>
  );
}
