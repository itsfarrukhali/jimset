import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-gold py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark mb-3">
          Admissions Open for 2025-26
        </h2>
        <p className="text-primary-dark/80 text-lg mb-6">
          4-Year B.E Technology Evening Programs
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="bg-primary-dark text-white h-12 w-40 hover:bg-primary-dark/90"
          >
            <Link href="/admissions/apply">Apply Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-primary-dark text-primary-dark h-12 w-50 hover:bg-primary-dark/10 hover:text-primary-dark"
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
