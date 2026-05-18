import PageHero from "@/components/shared/PageHero";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About JIMSET"
        subtitle="A Project of Anjuman-e-Islamia Trust Pakistan"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-dark mb-6">
              Our Institute
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              JIMSET (Jinnah Institute of Management Sciences, Engineering &
              Technology) is a sub-institution of Jinnah Polytechnic Institute
              (JPI), Karachi, operating under the prestigious Anjuman-e-Islamia
              Trust Pakistan.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer 4-year evening B.E Technology programs designed
              specifically for DAE and HSC graduates who want to earn a
              university-level engineering degree while managing daytime
              commitments.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our campus is located at ST-1, 5-C, Near Matric Board Office,
              Nazimabad, Karachi, equipped with modern labs, library, and
              e-learning facilities.
            </p>
          </div>
          <Image
            src="https://picsum.photos/600/400?random=4"
            alt="JIMSET Campus"
            className="rounded-xl shadow-lg"
            width={600}
            height={400}
          />
        </div>
      </section>
    </>
  );
}
