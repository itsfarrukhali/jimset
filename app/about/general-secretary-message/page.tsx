import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function GeneralSecretaryMessage() {
  return (
    <>
      <PageHero
        title="General Secretary's Message"
        subtitle="Mr. Wajeeh Uddin Ahmed — Carrying Forward a Noble Mission"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "General Secretary's Message" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gold shadow-lg">
              <Image
                src="/management/wajeehuddin-ahmed.jpg"
                alt="Mr. Wajeeh Uddin Ahmed"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="flex items-start gap-3 mb-6">
              <Quote className="text-gold shrink-0 mt-1" size={28} />
              <p className="text-gray-700 text-lg leading-relaxed italic">
                “Jinnah Polytechnic Institute, and by extension JIMSET, is the
                realisation of my father’s dream — to provide technical
                education on a no‑profit, no‑loss basis, producing skilled
                Associate Engineers and technologists who serve the nation. May
                Allah give us the strength to continue this noble mission.”
              </p>
            </div>
            <p className="font-semibold text-primary-dark text-lg">
              Mr. Wajeeh Uddin Ahmed
            </p>
            <p className="text-sm text-gray-500">
              General Secretary, Anjuman‑e‑Islamia Trust Pakistan
            </p>
            <div className="mt-6 p-4 bg-surface rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600">
                Since its inception, JPI has operated on a not‑for‑profit basis,
                dedicated to spreading quality technical education. The same
                spirit guides JIMSET’s evening B.E. Technology programs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
