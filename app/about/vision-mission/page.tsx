import PageHero from "@/components/shared/PageHero";
import { Star, Award } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision, Mission & History",
  description:
    "The vision, mission, aims and history of JIMSET — spreading quality technical education since 1961 under Anjuman-e-Islamia Trust Pakistan.",
};

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

      {/* Vision & Mission Cards */}
      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision */}
          <div className="bg-surface p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Star className="text-gold" size={32} />
              <h2 className="font-heading text-2xl font-bold text-primary-dark">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              TO SPREAD QUALITY EDUCATION TO DIVERSIFIED HUMANITY IN ECONOMICAL
              WAY AND PRODUCE VERSATILE PROFESSIONAL TO SERVE NATIONALLY AND
              INTERNATIONALLY...
            </p>
          </div>

          {/* Mission */}
          <div className="bg-surface p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-gold" size={32} />
              <h2 className="font-heading text-2xl font-bold text-primary-dark">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              TO MAINTAIN THE LEADING POSITION IN THE FIELD OF TECHNICAL
              EDUCATION BY IMPARTING QUALITY EDUCATION VIA LATEST TECHNICAL
              NORMS, UNDER THE MENTORSHIP OF HIGHLY QUALIFIED & SKILLED FACULTY
              IN CONDUCIVE ENVIRONMENT, SO THAT WELL EQUIPPED, TRAINED & HUMAN
              RESOURCE WITH RIGHT MIX MAY SERVE THE NATION AND FULFILL THE
              MARKET DEMAND.
            </p>
          </div>
        </div>
      </section>

      {/* Aims & Objectives (Full Statement) */}
      <section className="py-16 md:py-24 bg-surface px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-primary-dark text-center mb-8">
            Aims & Objectives
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-10 shadow-sm">
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4 text-base md:text-lg">
              <p>
                Our mission is to help, build an educated & Prosperous Pakistan
                in 21st Century and to provide a quality education system in
                Pakistan & become a leading academic institute having National &
                International reorganization with standard of teaching &
                learning.
              </p>
              <p>
                Our objective is to enhance higher education in Pakistan with
                quality product of students in the field of learning &
                professional knowledge. We are committed to becoming one of the
                leading centers of education in Pakistan, while serving the
                intellectual, cultural, social environment & economic needs of
                the country. The result is that, it will cause human development
                through educational programs & out rich efforts.
              </p>
              <p>
                The institute hopes to achieve exemplary education based on
                integrated core curriculum & technology aided teaching and
                learning processes. The institute will make every effort to
                develop the cultural climate for bringing about a change in the
                youth of Pakistan for healthy competition & betterment of the
                society, Emphasizing at the same time on the development of
                leadership and collegiality. The institute will develop
                technology, infrastructure & information resource necessary to
                support the institute programs/services.
              </p>
              <p>
                Our aim is to prepare technologists who have the character &
                skills that the country needs, who would be readily employable
                on graduation to serve the nation. The most pressing need of the
                country is self-reliance to which institution like us which can
                respond not only adopting technology from elsewhere but also
                developing its own.
              </p>
              <p>
                In that pursuit, we endeavor to train a community who is
                applications focused and capable of independent & analytical
                thinking having strong interpersonal, managing skills & rational
                human being.
              </p>
            </div>
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
                <span className="text-gold font-bold text-lg min-w-17.5">
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
