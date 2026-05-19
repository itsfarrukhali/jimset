import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import { Shield, Star } from "lucide-react";

export default function FounderPage() {
  return (
    <>
      <PageHero
        title="Our Founder"
        subtitle="Al‑Haj Moulvi Rayazuddin Ahmed (Tamgha‑e‑Imtiaz) — 1906 to …"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Founder" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Image
              src="/management/alhaj-sahab.jpeg"
              alt="Al‑Haj Moulvi Rayazuddin Ahmed"
              width={500}
              height={600}
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-primary-dark mb-4">
              A Visionary from Agra
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Born in 1906 in Agra, he was a direct descendant of Hazrat Sheikh
              Saleem Uddin Chishty. Despite the conventional thinking of his
              time, he understood that female education was essential for the
              progress of the Muslim Ummah.
            </p>
            <div className="bg-surface border border-gray-200 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-gold" size={24} />
                <h3 className="font-heading text-xl font-bold text-primary-dark">
                  Blessed by the Quaid‑e‑Azam
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Quaid‑e‑Azam Mohammad Ali Jinnah personally granted Moulvi Sahab
                permission to use his name “Jinnah” for educational
                institutions. This unique blessing became the foundation of
                Anjuman‑e‑Islamia Trust.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              After partition, he settled in Karachi and founded the first
              girls’ school at Pakistan Chowk, later establishing 17
              institutions including Jinnah College, Jinnah University for
              Women, and Jinnah Polytechnic Institute (1961).
            </p>
            <div className="flex items-center gap-2 bg-gold/10 p-4 rounded-lg mt-4">
              <Star className="text-gold" size={20} />
              <p className="text-sm text-primary-dark font-medium">
                In recognition of his meritorious services, the President of
                Pakistan conferred upon him the Tamgha‑e‑Imtiaz on 23rd March
                2015.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
