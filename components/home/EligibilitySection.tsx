import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen } from "lucide-react";

export default function EligibilitySection() {
  return (
    <section className="py-16 md:py-24 bg-surface px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            Who Can Apply?
          </h2>
          <p className="text-gray-700 mb-6">
            Both DAE and HSC graduates are eligible for B.E Technology Evening
            Programs at JIMSET.
          </p>
          <Button
            asChild
            className="bg-gold text-primary-dark font-bold mt-4 h-12 w-60"
          >
            <Link href="/admissions/eligibility">
              Check Full Eligibility Criteria →
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <GraduationCap className="text-primary mb-4" size={32} />
            <h3 className="font-bold text-primary-dark mb-2">DAE Graduates</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Diploma of Associate Engineer in relevant technology</li>
              <li>Minimum 50% marks</li>
              <li>Any DAE technology recognized by SBTE</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <BookOpen className="text-primary mb-4" size={32} />
            <h3 className="font-bold text-primary-dark mb-2">HSC Graduates</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Higher Secondary Certificate (Pre-Engineering)</li>
              <li>HSC Pre-Medical also eligible</li>
              <li>Minimum 50% marks required</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
