import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import { Quote } from "lucide-react";

const leadership = [
  {
    name: "Mr. Raziuddin Ahmed",
    role: "Trustee / General Secretary",
    message:
      "On behalf of Anjuman‑e‑Islamia Trust Pakistan, I am committed to providing a safe, secure, and enriching educational environment. JIMSET stands as a beacon of quality technical education, and we strive to produce leaders equipped with knowledge, skills, and strong moral values.",
    image: "/management/raziuddin-ahmed.jpg", // placeholder — replace with real photo
  },
  {
    name: "Mr. Wajeehuddin Ahmed",
    role: "Trustee / President",
    message:
      "Education has been the cornerstone of our nation’s development. As President of the Trust, I carry forward my father’s vision of self‑reliance through quality technical education. May Allah grant us the strength to continue producing high‑calibre engineers who serve nationally and internationally.",
    image: "/management/wajeehuddin-ahmed.jpg",
  },
  {
    name: "Mr. Sani Ahmed",
    role: "Trustee / Financial Secretary / Treasurer",
    message:
      "Fiscal responsibility and transparency are the pillars on which JIMSET operates. We are proud to run this institution on a no‑profit, no‑loss basis, ensuring that financial constraints never stand between a deserving student and a world‑class education.",
    image: "/management/sani-ahmed.jpg",
  },
];

export default function ManagementPage() {
  return (
    <>
      <PageHero
        title="Management"
        subtitle="The dedicated leadership guiding JIMSET & Anjuman‑e‑Islamia Trust Pakistan"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Management" },
        ]}
      />

      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark">
              Our Leadership
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Three generations of dedication to education, guided by the
              principles of service, integrity, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person, idx) => (
              <div
                key={idx}
                className="bg-surface border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow flex flex-col items-center"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gold shadow-lg mb-5">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading font-bold text-primary-dark text-xl mb-1">
                  {person.name}
                </h3>
                <p className="text-gold font-medium text-sm mb-4">
                  {person.role}
                </p>

                <div className="flex items-start gap-2 mt-2 flex-1">
                  <Quote className="text-gold/70 shrink-0 mt-1" size={18} />
                  <p className="text-gray-600 text-sm leading-relaxed text-left">
                    {person.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
