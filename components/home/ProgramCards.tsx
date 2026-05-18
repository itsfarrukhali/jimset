import Link from "next/link";
import { Zap, Settings, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Zap,
    title: "B.E Electrical Technology",
    desc: "Hands-on training in power systems, control, automation, PLC, SCADA, and industrial electrical engineering.",
    eligibility: "DAE (Electrical/Electronics) or HSC Pre-Engg",
    href: "/programs/electrical",
    active: true,
  },
  {
    icon: Settings,
    title: "B.E Mechanical Technology",
    desc: "Advanced study in thermodynamics, manufacturing, CAD/CAM, industrial automation, and mechanical systems.",
    eligibility: "DAE (Mechanical) or HSC Pre-Engg",
    href: "/programs/mechanical",
    active: true,
  },
  {
    icon: Monitor,
    title: "B.E Computer Science",
    desc: "Software engineering, AI, data science, and computer systems (subject to approval).",
    eligibility: "To be announced",
    href: "#",
    active: false,
  },
];

export default function ProgramCards() {
  return (
    <section className="py-16 md:py-24 bg-surface px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-dark text-center mb-12">
          Programs We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md group ${
                !prog.active ? "opacity-60 grayscale" : "hover:border-gold"
              }`}
            >
              {!prog.active && (
                <div className="absolute top-4 right-4 bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                  Coming Soon
                </div>
              )}
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <prog.icon className="text-primary" size={28} />
              </div>
              <span className="text-xs font-semibold text-gold bg-gold/10 px-2 py-1 rounded mb-3 inline-block">
                4 Years Evening
              </span>
              <h3 className="font-display text-xl font-bold text-primary-dark mb-2">
                {prog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{prog.desc}</p>
              <p className="text-xs text-gray-500 mb-5">
                Eligibility: {prog.eligibility}
              </p>
              {prog.active ? (
                <Button asChild variant="link" className="text-primary p-0">
                  <Link href={prog.href}>Learn More →</Link>
                </Button>
              ) : (
                <span className="text-sm text-gray-400 font-medium">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
