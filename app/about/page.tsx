import PageHero from "@/components/shared/PageHero";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Award,
  Users,
  Heart,
  ArrowRight,
  Building2,
  UserCheck,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

const subPages = [
  {
    title: "Vision, Mission & History",
    description:
      "Our guiding philosophy, objectives, and the timeline of JIMSET's growth since 1961.",
    href: "/about/vision-mission",
    icon: BookOpen,
  },
  {
    title: "Our Founder",
    description:
      "Al‑Haj Moulvi Rayazuddin Ahmed (T.I.) — the visionary blessed by Quaid‑e‑Azam himself.",
    href: "/about/founder",
    icon: Award,
  },
  {
    title: "Management",
    description:
      "Meet the dedicated leadership — Trustee / President, General Secretary, and Financial Secretary.",
    href: "/about/management",
    icon: Users,
  },
  {
    title: "Former Executive Director",
    description:
      "A message from the former Executive Director of JIMSET on our mission and values.",
    href: "/about/former-executive-director",
    icon: UserCheck,
  },
  {
    title: "Affiliation",
    description:
      "Recognised by BBSUTSD Khairpur Mirs, SBTE, STEVTA & NAVTTC — Government of Pakistan.",
    href: "/about/affiliation",
    icon: ShieldCheck,
  },
  {
    title: "Organogram",
    description:
      "The complete organisational structure from Chief Executive to department heads.",
    href: "/about/organogram",
    icon: Building2,
  },
  {
    title: "Programs Offered",
    description:
      "B.E. Tech in Electrical Engineering Technology & Mechanical Engineering Technology.",
    href: "/programs",
    icon: GraduationCap,
  },
  {
    title: "In Loving Memory",
    description:
      "Remembering Mr. Fasihuddin Ahmed, Mr. Muhammad Uzair Siddiqui & Mr. Zahid Hussain Usmani.",
    href: "/about/in-memory",
    icon: Heart,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About JIMSET"
        subtitle="Jinnah Institute of Management Sciences, Engineering & Technology — A Project of Anjuman‑e‑Islamia Trust Pakistan"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* ─── Heritage Section ─── */}
      <section className="py-16 md:py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left — text */}
            <div className="lg:col-span-3">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Our Heritage
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mt-2 mb-6">
                Blessed by the Quaid‑e‑Azam, Built for the Nation
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                A private social organisation was formed by the late{" "}
                <strong>Al‑Haj Moulvi Rayazuddin Ahmed Akbarabadi</strong>{" "}
                (Tamgha‑e‑Imtiaz). Driven by his unwavering spirit, this
                organisation — <strong>Anjuman‑e‑Islamia Trust Pakistan</strong>{" "}
                — has established over 15 educational institutions in Karachi
                since partition, including Jinnah College and Jinnah University
                for Women, Nazimabad.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                It is the <strong>only organisation of its kind</strong> in the
                subcontinent personally blessed by{" "}
                <strong>Quaid‑e‑Azam Mohammad Ali Jinnah</strong>, who granted
                permission to use his revered name for institutions that advance
                technical and scientific education for the Muslim Ummah.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Jinnah Polytechnic Institute (JPI)</strong> was founded
                in <strong>1961</strong>, initially offering diploma programmes
                in Electrical, Mechanical, and Civil technologies. Over the
                decades, new faculties were added to meet the growing demands of
                industry and society.
              </p>

              <p className="text-gray-700 leading-relaxed">
                In <strong>2024</strong>, the institute was upgraded to{" "}
                <strong>
                  Jinnah Institute of Management Sciences, Engineering &
                  Technology (JIMSET)
                </strong>
                , introducing four‑year Bachelor of Engineering Technology (B.E.
                Tech) evening programmes.
              </p>
            </div>

            {/* Right — decorative image */}
            <div className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/brand/quiad-letter.png"
                  alt="Jinnah Polytechnic Institute building"
                  width={600}
                  height={700}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Recognition & Accreditation ─── */}
      <section className="py-16 md:py-20 bg-surface px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Recognition
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mt-2">
              Accreditation & Affiliations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-primary-dark mb-3">
                Technical Boards
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>
                    <strong>Sindh Board of Technical Education (SBTE)</strong>,
                    Karachi
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>
                    <strong>
                      Sindh Technical Education & Vocational Training Authority
                      (STEVTA)
                    </strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>
                    <strong>
                      National Vocational and Technical Training Commission
                      (NAVTTC)
                    </strong>{" "}
                    — Government of Pakistan
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-primary-dark mb-3">
                Degree‑Awarding University
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Our B.E. Technology programmes are recognised by:
              </p>
              <p className="text-primary-dark font-semibold text-sm">
                The Benazir Bhutto Shaheed University of Technology and Skills
                Development (BBSUTSD), Khairpur Mirs
              </p>
              <Link
                href="/about/affiliation"
                className="inline-flex items-center gap-1 text-xs text-primary hover:text-gold mt-3 font-medium"
              >
                Learn more about affiliation <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Programmes Section ─── */}
      <section className="py-16 md:py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Academics
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mt-2">
              Undergraduate Programmes
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              JIMSET currently offers a four‑year Bachelor of Engineering
              Technology (B.E. Tech) in the following disciplines:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-surface border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <GraduationCap className="mx-auto text-primary mb-3" size={32} />
              <h3 className="font-heading font-bold text-primary-dark text-lg mb-2">
                Electrical Engineering Technology
              </h3>
              <p className="text-sm text-gray-600">
                B.E. Tech (4 Years · Evening)
              </p>
              <Link
                href="/programs/electrical"
                className="inline-flex items-center gap-1 text-xs text-primary hover:text-gold mt-3 font-medium"
              >
                View programme <ArrowRight size={12} />
              </Link>
            </div>

            <div className="bg-surface border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <GraduationCap className="mx-auto text-primary mb-3" size={32} />
              <h3 className="font-heading font-bold text-primary-dark text-lg mb-2">
                Mechanical Engineering Technology
              </h3>
              <p className="text-sm text-gray-600">
                B.E. Tech (4 Years · Evening)
              </p>
              <Link
                href="/programs/mechanical"
                className="inline-flex items-center gap-1 text-xs text-primary hover:text-gold mt-3 font-medium"
              >
                View programme <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Explore More Cards ─── */}
      <section className="py-16 md:py-20 bg-surface px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark">
              Explore Our Institution
            </h2>
            <p className="text-gray-600 mt-2">
              Select a section below to learn more about our heritage,
              leadership, and values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group flex gap-5 bg-white border border-gray-200 rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <page.icon className="text-primary" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-lg font-bold text-primary-dark mb-1 group-hover:text-gold transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {page.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-gold transition-colors">
                    Read More <ArrowRight size={12} />
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
