import Link from "next/link";
import { Zap, Settings, Monitor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const programs = [
  {
    icon: Zap,
    title: "B.E Electrical Technology",
    desc: "Hands-on training in power systems, control, automation, PLC, SCADA, and industrial electrical engineering.",
    eligibility: "DAE (Electrical/Electronics) or HSC Pre-Engg",
    href: "/programs/electrical",
    active: true,
    image: "/cards/electrical-bg.png",
  },
  {
    icon: Settings,
    title: "B.E Mechanical Technology",
    desc: "Advanced study in thermodynamics, manufacturing, CAD/CAM, industrial automation, and mechanical systems.",
    eligibility: "DAE (Mechanical) or HSC Pre-Engg",
    href: "/programs/mechanical",
    active: true,
    image: "/cards/mechanical-bg.png",
  },
  {
    icon: Monitor,
    title: "B.E Computer Science",
    desc: "Software engineering, AI, data science, and computer systems (subject to approval).",
    eligibility: "To be announced",
    href: "#",
    active: false,
    image: "/cards/computer-bg.png",
  },
];

export default function ProgramCards() {
  return (
    <section className="py-20 md:py-28 bg-surface px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Academic Offerings
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mt-2 mb-4">
            Programs We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            4-year evening programs designed for working professionals and
            diploma holders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden rounded-lg border transition-all duration-300 flex flex-col ${
                prog.active
                  ? "border-gray-200 hover:border-primary/30 hover:shadow-xl"
                  : "border-gray-200 opacity-80" // slightly faded but still visible
              }`}
            >
              {/* Background image for all cards (if image exists) */}
              {prog.image && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={prog.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Base overlay for active cards */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/30" />
                  {/* Extra overlay for inactive cards to dim them further */}
                  {!prog.active && (
                    <div className="absolute inset-0 bg-gray-800/50" />
                  )}
                </div>
              )}

              {/* Content on top */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                {!prog.active && (
                  <div className="absolute top-4 right-4 bg-gray-700 text-white text-xs px-3 py-1 rounded-full font-medium z-20">
                    Coming Soon
                  </div>
                )}

                <div
                  className={`w-14 h-14 rounded-md flex items-center justify-center mb-6 ${
                    prog.active ? "bg-white/20 backdrop-blur-sm" : "bg-white/10"
                  }`}
                >
                  <prog.icon className="text-white" size={28} />
                </div>

                <span className="text-xs font-semibold text-gold uppercase tracking-wide mb-2">
                  4 Years · Evening
                </span>

                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {prog.title}
                </h3>

                <p className="text-white/80 text-sm mb-4 flex-1">{prog.desc}</p>

                <div className="text-xs text-white/60 mb-5">
                  Eligibility: {prog.eligibility}
                </div>

                {prog.active ? (
                  <Button
                    asChild
                    variant="link"
                    className="text-gold hover:text-gold/80 p-0 self-start group font-semibold"
                  >
                    <Link href={prog.href} className="flex items-center gap-1">
                      Learn More{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </Button>
                ) : (
                  <span className="text-sm text-white/50 font-medium self-start">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
