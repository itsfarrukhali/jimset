import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-gold px-4 py-16 text-center">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-3 font-heading text-3xl font-bold text-primary-dark md:text-4xl">
          Begin Your JIMSET Application
        </h2>
        <p className="mb-8 text-lg text-primary-dark/80">
          Explore 4-year B.E Technology evening programs and speak with our
          admissions team.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-md bg-primary-dark px-7 text-base text-white shadow-lg hover:bg-primary-dark/90"
          >
            <Link href="/admissions/apply">Apply Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-md border-primary-dark px-7 text-base text-primary-dark hover:bg-primary-dark/10 hover:text-primary-dark"
          >
            <Link href="tel:0330-0370660" className="flex items-center gap-2">
              <Phone size={16} /> Call Us: 0330-0370660
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
