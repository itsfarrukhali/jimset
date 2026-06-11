import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { newsItems } from "@/data/news-events";

export default function NewsEventsPreview() {
  return (
    <section className="bg-surface px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Campus Desk
            </p>
            <h2 className="font-display text-3xl font-bold text-primary-dark md:text-4xl">
              News & Events
            </h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Program updates, admissions notices, and opportunities to visit
              JIMSET.
            </p>
          </div>
          <Link
            href="/news-events"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:text-gold"
          >
            View all updates <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                  <CalendarDays className="size-4" /> {item.label}
                </p>
                <h3 className="text-xl font-bold text-primary-dark">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
