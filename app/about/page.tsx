import PageHero from "@/components/shared/PageHero";
import Link from "next/link";
import {
  BookOpen,
  Award,
  MessageSquare,
  Heart,
  ArrowRight,
} from "lucide-react";

const subPages = [
  {
    title: "Vision, Mission & History",
    description:
      "Our guiding philosophy, objectives, and the timeline of JIMSET’s growth.",
    href: "/about/vision-mission",
    icon: BookOpen,
  },
  {
    title: "Our Founder",
    description:
      "Al‑Haj Moulvi Rayazuddin Ahmed (T.I.) — the visionary behind Anjuman‑e‑Islamia Trust.",
    href: "/about/founder",
    icon: Award,
  },
  {
    title: "General Secretary's Message",
    description:
      "A message from Mr. Wajeeh Uddin Ahmed, carrying forward the noble mission.",
    href: "/about/general-secretary-message",
    icon: MessageSquare,
  },
  {
    title: "In Loving Memory",
    description:
      "Remembering the dedicated souls who built the foundation of our institute.",
    href: "/about/in-memory",
    icon: Heart,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About JIMSET"
        subtitle="A Project of Anjuman‑e‑Islamia Trust Pakistan — carrying Quaid‑e‑Azam's legacy"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              Discover Our Institution
            </h2>
            <p className="text-gray-700 leading-relaxed">
              JIMSET is the evening B.E. Technology wing under Jinnah
              Polytechnic Institute (JPI), established in 1961 by the
              Anjuman‑e‑Islamia Trust. Select a section below to explore our
              heritage, vision, leadership, and the people who made it possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group flex gap-5 bg-white border border-gray-200 rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <page.icon className="text-primary" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-primary-dark mb-2 group-hover:text-gold transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {page.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-gold transition-colors">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
