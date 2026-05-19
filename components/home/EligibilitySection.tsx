import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function EligibilitySection() {
  return (
    <section className="py-20 md:py-28 bg-surface px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Eligibility
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mt-2 mb-6">
            Who Can Apply?
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Both Diploma of Associate Engineer (DAE) and Higher Secondary School
            Certificate (HSC) graduates are eligible for the B.E. Technology
            Evening Programs at JIMSET.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary/30 transition-colors">
              <GraduationCap className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-primary-dark mb-2">
                DAE Graduates
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li>• Diploma in relevant technology</li>
                <li>• Minimum 50% marks</li>
                <li>• Recognized by SBTE</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary/30 transition-colors">
              <BookOpen className="text-primary mb-4" size={32} />
              <h3 className="font-bold text-primary-dark mb-2">
                HSC Graduates
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li>• Pre-Engineering / Pre-Medical</li>
                <li>• Minimum 50% marks</li>
                <li>• All educational boards accepted</li>
              </ul>
            </div>
          </div>

          <Button
            asChild
            variant="link"
            className="mt-6 text-primary hover:text-gold font-semibold p-0 group"
          >
            <Link
              href="/admissions/eligibility"
              className="flex items-center gap-1"
            >
              Full Eligibility Criteria{" "}
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>

        {/* Right side – subtle decorative image */}
        <div className="hidden lg:block">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/600/400?random=8"
              alt="Students at JIMSET"
              className="w-full h-auto object-cover"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary-dark/40 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
              Evening classes for working professionals
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
