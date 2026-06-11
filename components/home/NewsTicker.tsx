"use client";

import Link from "next/link";
import { Megaphone } from "lucide-react";

export default function NewsTicker() {
  const scrollingText =
    "Explore programs, review eligibility, request counselling, and apply online.";

  return (
    <Link
      href="/news-events"
      className="block overflow-hidden border-b border-gold/50 bg-gold px-4 py-2.5 text-primary-dark shadow-sm"
      aria-label="View admissions news and events"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4">
        <span className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-bold">
          <Megaphone className="size-4" /> Admissions & Campus Updates:
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
    </Link>
  );
}
