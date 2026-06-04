import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Former Executive Director",
  description:
    "A Message from Former Executive Director of Jinnah Institute of Management Sciences, Engineering & Technology (JIMSET)",
  alternates: {
    canonical: "https://jimset.com/about/former-executive-director",
  },
};

export default function FormerExecutiveDirector() {
  return (
    <>
      <PageHero
        title="Former Executive Director"
        subtitle="Jinnah Institute of Management Sciences, Engineering & Technology (JIMSET)"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Former Executive Director" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Image */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gold shadow-lg">
              <Image
                src="/management/former-executive-director.jpg"
                alt="Former Executive Director JIMSET"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <div className="flex items-start gap-3 mb-6">
              <Quote className="text-gold shrink-0 mt-1" size={28} />
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  JIMSET is one of the prestigious projects of Anjum‑e‑Islamia
                  Trust Pakistan, founded by the Late Al‑Haj Moulvi Rayazuddin
                  Ahmed (Tamgha‑e‑Imtiaz). As a non‑profit Institution, JIMSET
                  is committed to providing quality education to students of
                  diversified backgrounds at an affordable cost. The Institute
                  strives for continuous improvement in teaching, learning,
                  research, and skill development to meet modern technological
                  challenges.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  I warmly welcome all new students of B.E Tech Degree Program.
                  I pray that their time here will be productive, enriching, and
                  transformative. I am confident that through their dedication
                  and hard work they will emerge as skilled professionals and
                  responsible citizens contributing positively towards the
                  progress and prosperity of Pakistan.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Finally, I extend my sincere gratitude to Mr. Wajeehuddin
                  Ahmed, General Secretary Anjuman‑e‑Islamia Trust Pakistan for
                  his continuous guidance, encouragement and unwavering support
                  in strengthening the mission of JIMSET in delivering quality
                  Education.
                </p>
              </div>
            </div>
            <p className="font-semibold text-primary-dark text-lg mt-4">
              — Former Executive Director
            </p>
            <p className="text-sm text-gray-500">JIMSET Karachi</p>
          </div>
        </div>
      </section>
    </>
  );
}
