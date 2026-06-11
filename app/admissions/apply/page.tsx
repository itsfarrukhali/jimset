import PageHero from "@/components/shared/PageHero";
import ApplicationForm from "@/components/forms/ApplicationForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply Now",
  description:
    "Apply online for JIMSET B.E Electrical Technology and B.E Mechanical Technology evening programs.",
  alternates: { canonical: "https://jimset.com/admissions/apply" },
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        title="Application Form"
        subtitle="Fill out the form to apply for B.E Technology Evening Programs"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Apply Now" },
        ]}
      />
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <ApplicationForm />
      </section>
    </>
  );
}
