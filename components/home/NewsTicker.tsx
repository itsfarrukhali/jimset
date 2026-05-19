import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsTicker() {
  const tickerText =
    "Admissions for session 2025–26 Phase III are extended in Bachelors and Diploma programs. Deadline: 31 January 2026.";

  return (
    <div className="bg-gold text-primary-dark py-2.5 px-4 overflow-hidden border-b border-gold/50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        {/* Left side – scrolling text */}
        <div className="flex-1 overflow-hidden relative">
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "marquee 35s linear infinite" }}
          >
            {/* First copy of the text */}
            <span className="inline-block px-4 font-semibold text-sm tracking-wide">
              {tickerText}
            </span>
            {/* Duplicate for seamless loop */}
            <span className="inline-block px-4 font-semibold text-sm tracking-wide">
              {tickerText}
            </span>
          </div>
        </div>

        {/* Right side – static Apply Now button */}
        <Link
          href="/admissions/apply"
          className="shrink-0 bg-primary-dark text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-primary-dark/90 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          Apply Now <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
