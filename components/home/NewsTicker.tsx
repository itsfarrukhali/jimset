"use client";

export default function NewsTicker() {
  const staticLabel = "Admissions for session 2025–26 Phase I:";
  const scrollingText =
    "Phase III are extended in Bachelors and Diploma programs. Deadline: 31 January 2026.";

  return (
    <div className="bg-gold text-primary-dark py-2.5 px-4 overflow-hidden border-b border-gold/50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <span className="shrink-0 font-bold text-sm whitespace-nowrap">
          📢 {staticLabel}
        </span>

        <div className="flex-1 overflow-hidden">
          <div className="marquee">
            <span className="marquee-item marquee-item--first">
              {scrollingText}
            </span>
            <span className="marquee-item">{scrollingText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
