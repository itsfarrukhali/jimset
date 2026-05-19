import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsTicker() {
  const tickerText =
    "Admissions for session 2025–26 Phase III are extended in Bachelors and Diploma programs. Deadline: 31 January 2026.";

  return (
    <div className="bg-gold text-primary-dark py-2.5 px-4 overflow-hidden border-b border-gold/50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        {/* LEFT - Ticker */}
        <div className="flex-1 overflow-hidden">
          <div className="marquee">
            <span className="marquee-item">{tickerText}</span>

            {/* duplicate for smooth infinite loop */}
            <span className="marquee-item">{tickerText}</span>
          </div>
        </div>

        {/* RIGHT - Button */}
        <Link
          href="/admissions/apply"
          className="shrink-0 bg-primary-dark text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-primary-dark/90 transition flex items-center gap-1.5 shadow-sm"
        >
          Apply Now <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
