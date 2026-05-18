import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FeeHighlight() {
  return (
    <section className="bg-primary-dark py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Affordable Fee Structure
        </h2>
        <p className="text-white/70 mb-8">
          Monthly installment facility available
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            "Low Semester Fee",
            "Easy Installments",
            "Scholarship Available",
          ].map((pill) => (
            <span
              key={pill}
              className="bg-white/10 text-white px-5 py-2 rounded-full text-sm"
            >
              {pill}
            </span>
          ))}
        </div>
        <Button
          asChild
          className="bg-gold text-primary-dark font-bold h-12 w-50 hover:bg-accent/90"
        >
          <Link href="/admissions/fee-structure">View Fee Structure →</Link>
        </Button>
      </div>
    </section>
  );
}
