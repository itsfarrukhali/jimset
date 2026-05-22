import PageHero from "@/components/shared/PageHero";
import Image from "next/image";

export default function OrganogramPage() {
  return (
    <>
      <PageHero
        title="Organogram"
        subtitle="Organisational Structure of JIMSET"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Organogram" },
        ]}
      />

      <section className="py-16 md:py-24 bg-surface px-4">
        <div className="max-w-6xl mx-auto">
          {/* Organogram Image */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 md:p-6">
            <Image
              src="/management/organogram.svg"
              alt="JIMSET Organisational Structure — Chief Executive to Department Heads"
              width={998}
              height={739}
              quality={100}
              priority
              className="w-full h-auto rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 998px"
            />
          </div>

          {/* Caption */}
          <p className="text-center text-xs sm:text-sm text-gray-400 mt-6">
            Organisational structure may be updated from time to time as per
            institute requirements.
          </p>
        </div>
      </section>
    </>
  );
}
