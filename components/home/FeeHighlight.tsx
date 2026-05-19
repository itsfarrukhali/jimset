import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FeeHighlight() {
  return (
    <section className="bg-primary-dark py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')] opacity-20" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-gold font-semibold text-sm uppercase tracking-wider">
          Fees & Scholarships
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
          Affordable Fee Structure
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
          Monthly installment facility available for all students
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["Low Semester Fee", "Easy Installments", "Merit Scholarships"].map(
            (pill) => (
              <span
                key={pill}
                className="bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm border border-white/10 font-medium"
              >
                {pill}
              </span>
            ),
          )}
        </div>

        <Button
          asChild
          size="lg"
          className="h-12 px-7 text-base bg-gold text-primary-dark font-bold hover:bg-gold/90 shadow-lg rounded-md"
        >
          <Link href="/admissions/fee-structure">View Fee Structure</Link>
        </Button>
      </div>
    </section>
  );
}
