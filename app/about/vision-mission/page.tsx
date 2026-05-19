import PageHero from "@/components/shared/PageHero";
import { Star, Award, BookOpen, Target } from "lucide-react";

const timeline = [
  { year: "1961", event: "JPI established at ST‑1, Nazimabad‑5, Karachi." },
  {
    year: "1960s–70s",
    event: "Introduced D.A.E programs in Civil, Electrical, Mechanical.",
  },
  {
    year: "1980s–90s",
    event: "Added Electronics, strengthened SBTE affiliation.",
  },
  { year: "1997", event: "Adopted revised D.A.E syllabus by SBTE Karachi." },
  { year: "2000s", event: "Launched CIT & Software Technology programs." },
  {
    year: "2010s",
    event: "Added Refrigeration & A/C, evening programs, modernised labs.",
  },
  {
    year: "Recent Years",
    event: "Introduced JIMSET — B.E. Technology (Evening).",
  },
];

const objectives = [
  {
    icon: Star,
    title: "National & International Recognition",
    desc: "Become a leading academic institution with high standards of teaching and learning.",
  },
  {
    icon: Award,
    title: "Quality Human Resource",
    desc: "Produce well‑equipped, trained graduates with character to serve the nation.",
  },
  {
    icon: BookOpen,
    title: "Self‑Reliance Through Innovation",
    desc: "Train a community that is application‑focused, capable of independent thinking.",
  },
  {
    icon: Target,
    title: "Character & Collegiality",
    desc: "Develop cultural climate for healthy competition and leadership among youth.",
  },
];

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        title="Vision, Mission & History"
        subtitle="Guided by a noble purpose — spreading quality education since 1961"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Vision, Mission & History" },
        ]}
      />

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-surface p-8 rounded-xl border border-gray-200">
            <Star className="text-gold mb-4" size={32} />
            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To deliver quality education that is accessible and affordable for
              all, fostering versatile technologists who excel in serving
              society across national and international platforms.
            </p>
          </div>
          <div className="bg-surface p-8 rounded-xl border border-gray-200">
            <Award className="text-gold mb-4" size={32} />
            <h2 className="font-heading text-2xl font-bold text-primary-dark mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To maintain a leading position in technical education by imparting
              quality knowledge through modern pedagogical methods, under highly
              qualified faculty, so that our graduates may serve the nation and
              fulfil market demand.
            </p>
          </div>
        </div>
      </section>

      {/* Aims & Objectives */}
      <section className="py-16 md:py-24 bg-surface px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-primary-dark text-center mb-6">
            Aims & Objectives
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our ultimate aim is to prepare technologists who possess the
            character and skills the nation urgently needs — professionals who
            are readily employable and ready to contribute to Pakistan’s
            self‑reliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-dark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-primary-dark text-center mb-12">
            Our Journey
          </h2>
          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start border-l-2 border-gold pl-6 pb-6 last:pb-0"
              >
                <span className="text-gold font-bold text-lg min-w-15">
                  {item.year}
                </span>
                <p className="text-gray-700">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
