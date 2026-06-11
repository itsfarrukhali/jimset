import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bell, CalendarDays, Clock3, MapPin } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ImageGallery from "@/components/news/ImageGallery";
import DetailDialog from "@/components/news/DetailDialog";
import { announcements, events, newsItems } from "@/data/news-events";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "Read JIMSET admissions announcements, academic updates, upcoming events, and view the campus image gallery.",
  alternates: { canonical: "https://jimset.com/news-events" },
};

export default function NewsEventsPage() {
  const featured = newsItems.find((item) => item.featured) ?? newsItems[0];
  const otherNews = newsItems.filter((item) => item !== featured);

  return (
    <>
      <PageHero
        title="News & Events"
        subtitle="Official updates, important announcements, campus activities, and a closer look at JIMSET."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "News & Events" }]}
      />

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.5fr_0.8fr]">
          <div>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-gold">
                  Latest Updates
                </p>
                <h2 className="font-display text-3xl font-bold text-primary-dark">
                  News from JIMSET
                </h2>
              </div>
            </div>

            <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="relative aspect-16/8 overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary-dark/85 via-primary-dark/10 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white md:p-8">
                  <span className="mb-3 inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark">
                    {featured.label}
                  </span>
                  <h3 className="max-w-2xl text-2xl font-bold md:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
                    {featured.summary}
                  </p>
                  <DetailDialog
                    buttonLabel="View Full News"
                    title={featured.title}
                    summary={featured.summary}
                    details={featured.details}
                    label={featured.label}
                    image={featured.image}
                    imageAlt={featured.imageAlt}
                    href={featured.href}
                    dark
                  />
                </div>
              </div>
            </article>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {otherNews.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-xl border bg-white shadow-sm"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold">
                      {item.label}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-primary-dark">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {item.summary}
                    </p>
                    <DetailDialog
                      buttonLabel="View Full News"
                      title={item.title}
                      summary={item.summary}
                      details={item.details}
                      label={item.label}
                      image={item.image}
                      imageAlt={item.imageAlt}
                      href={item.href}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl bg-primary-dark p-6 text-white md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-full bg-gold p-2 text-primary-dark">
                <Bell className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gold">
                  Notice Board
                </p>
                <h2 className="text-2xl font-bold">Announcements</h2>
              </div>
            </div>
            <div className="divide-y divide-white/10">
              {announcements.map((announcement) => (
                <article key={announcement.title} className="py-5 first:pt-0">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gold">
                    {announcement.label}
                  </p>
                  <h3 className="font-bold text-white">{announcement.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {announcement.text}
                  </p>
                  <DetailDialog
                    buttonLabel="View Official Notice"
                    title={announcement.title}
                    summary={announcement.text}
                    details={announcement.details}
                    label={announcement.label}
                    href={announcement.href}
                    dark
                  />
                </article>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold hover:text-white"
            >
              Contact the admissions team <ArrowRight className="size-4" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-surface px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Visit & Participate
            </p>
            <h2 className="font-display text-3xl font-bold text-primary-dark md:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Connect with the institute before applying. Confirm schedules with
              the admissions office before visiting.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.title}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <CalendarDays className="size-8 text-gold" />
                <h3 className="mt-5 text-xl font-bold text-primary-dark">
                  {event.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {event.description}
                </p>
                <div className="mt-6 space-y-3 border-t pt-5 text-sm text-gray-600">
                  <p className="flex gap-2">
                    <Clock3 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {event.schedule}
                  </p>
                  <p className="flex gap-2">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    {event.location}
                  </p>
                </div>
                <DetailDialog
                  buttonLabel="View Event Details"
                  title={event.title}
                  summary={event.description}
                  details={event.details}
                  label="Upcoming event"
                  schedule={event.schedule}
                  location={event.location}
                  href={event.href}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Campus Gallery
            </p>
            <h2 className="font-display text-3xl font-bold text-primary-dark md:text-4xl">
              Life & Learning at JIMSET
            </h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Explore the campus, programs, and practical learning environment.
            </p>
          </div>
          <ImageGallery />
        </div>
      </section>
    </>
  );
}
