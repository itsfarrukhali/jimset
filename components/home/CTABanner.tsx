import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-gold py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-3">
          Admissions Open for 2025-26
        </h2>
        <p className="text-primary-dark/80 text-lg mb-8">
          4-Year B.E Technology Evening Programs – Secure Your Seat Today
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="h-12 px-7 text-base bg-primary-dark text-white hover:bg-primary-dark/90 shadow-lg rounded-md"
          >
            <Link href="/admissions/apply">Apply Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 px-7 text-base border-primary-dark text-primary-dark hover:bg-primary-dark/10 hover:text-primary-dark"
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
