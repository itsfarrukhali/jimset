import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import { Heart } from "lucide-react";

const tributes = [
  {
    name: "Mr. Fasihuddin Ahmed (Late)",
    role: "Former General Secretary",
    desc: "He followed the footsteps of his father, worked tirelessly to complete the mission, and served as a humble guide. His absence is deeply felt.",
    img: "/management/fasihuddin-ahmed.png",
  },
  {
    name: "Mr. Muhammad Uzair Siddiqui (Late)",
    role: "Former Treasurer",
    desc: "A banker with a heart for education; he planned and supervised the construction of the institute’s buildings — his physical legacy remains.",
    img: "/management/muhammad-uzair.png",
  },
  {
    name: "Mr. Zahid Hussain Usmani (Late)",
    role: "Former Principal JPI & Member Trust",
    desc: "He devoted his life to strengthening technical education, serving as Principal of JPI and Zubaida Polytechnic until his last breath.",
    img: "/management/zahid-hussain.png",
  },
];

export default function InMemoryPage() {
  return (
    <>
      <PageHero
        title="In Loving Memory"
        subtitle="Remembering those who served with devotion, humility, and an unwavering commitment to education."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "In Loving Memory" },
        ]}
      />

      <section className="py-16 md:py-24 bg-surface px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="mx-auto text-gold mb-4" size={36} />
            <h2 className="font-heading text-3xl font-bold text-primary-dark">
              They Built More Than Walls
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Their dedication, humility, and tireless efforts laid the
              foundation upon which Jinnah Polytechnic Institute — and now
              JIMSET — stands today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tributes.map((person, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-md transition-shadow"
              >
                <Image
                  src={person.img}
                  alt={person.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover w-28 h-28 border-2 border-gold"
                />
                <h3 className="font-heading font-bold text-primary-dark text-lg mb-1">
                  {person.name}
                </h3>
                <p className="text-gold text-sm font-medium mb-3">
                  {person.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {person.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
