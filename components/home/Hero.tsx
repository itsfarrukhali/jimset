"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    badge: "Department of Electrical Engineering",
    title: "B.E. Electrical Technology",
    subtitle: "Power Systems · Automation · PLC · SCADA · Renewable Energy",
    description:
      "Hands-on training with state-of-the-art labs, NTC-accredited, recognised by HEC.",
    image: "/hero/carosuel-1.png",
    ctaPrimary: { label: "Explore Program", href: "/programs/electrical" },
    ctaSecondary: { label: "Apply Now", href: "/admissions/apply" },
    stats: ["4 Years", "Evening", "NTC Accredited"],
    tagColor: "bg-primary text-white",
  },
  {
    id: 2,
    badge: "Department of Mechanical Engineering",
    title: "B.E. Mechanical Technology",
    subtitle: "Thermodynamics · Manufacturing · CAD/CAM · HVAC · Automotive",
    description:
      "OBE-based curriculum, 16-week industrial training, NTC-accredited, HEC recognised.",
    image: "/hero/carosuel-2.png",
    ctaPrimary: { label: "Explore Program", href: "/programs/mechanical" },
    ctaSecondary: { label: "Apply Now", href: "/admissions/apply" },
    stats: ["4 Years", "Evening", "NTC Accredited"],
    tagColor: "bg-primary text-white",
  },
  {
    id: 3,
    badge: "Affordable & Accessible",
    title: "Scholarships & Financial Assistance",
    subtitle:
      "Merit-based, need-based, Hafiz-e-Quran, sports & alumni scholarships",
    description:
      "We ensure that financial constraints never stop a deserving student from achieving their dreams.",
    image: "/hero/carosuel-3.png",
    ctaPrimary: {
      label: "View Scholarships",
      href: "/admissions/scholarships",
    },
    ctaSecondary: { label: "Apply Now", href: "/admissions/apply" },
    stats: ["Up to 50% Fee Waiver", "Easy Installments", "Merit Awards"],
    tagColor: "bg-gold text-primary-dark",
  },
];

const contentVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 40 : -40,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -40 : 40,
  }),
};

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full h-[90vh] min-h-150 overflow-hidden bg-primary-dark"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Image with overlay */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${slide.id}`}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary-dark/90 via-primary-dark/70 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${slide.id}`}
                variants={contentVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-2xl"
              >
                {/* Authority badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-2 mb-6"
                >
                  <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full">
                    <ShieldCheck size={14} className="text-gold" /> Under Jinnah
                    Polytechnic Institute (JPI)
                  </span>
                </motion.div>

                {/* Badge */}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`inline-block px-4 py-1.5 rounded-md text-sm font-semibold mb-6 uppercase tracking-wide ${slide.tagColor}`}
                >
                  {slide.badge}
                </motion.span>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
                >
                  {slide.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-white/70 mb-3 max-w-xl"
                >
                  {slide.subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-base text-white/60 mb-8 max-w-xl"
                >
                  {slide.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="h-12 px-7 text-base bg-gold text-primary-dark font-bold hover:bg-gold/90 shadow-lg rounded-md"
                  >
                    <Link href={slide.ctaPrimary.href}>
                      {slide.ctaPrimary.label}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 px-7 text-base border-white text-white hover:bg-white/10 hover:text-white rounded-md"
                  >
                    <Link href={slide.ctaSecondary.href}>
                      {slide.ctaSecondary.label}
                    </Link>
                  </Button>
                </motion.div>

                {/* Stats pills */}
                {slide.stats && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap gap-3 mt-8"
                  >
                    {slide.stats.map((stat) => (
                      <span
                        key={stat}
                        className="bg-white/10 px-4 py-2 rounded-full text-sm text-white/80 border border-white/10"
                      >
                        {stat}
                      </span>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Arrows — hidden on mobile */}
      <Button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur items-center justify-center text-white transition-colors pointer-events-auto"
      >
        <ChevronLeft size={20} />
      </Button>
      <Button
        onClick={next}
        aria-label="Next slide"
        className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur items-center justify-center text-white transition-colors pointer-events-auto"
      >
        <ChevronRight size={20} />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-7 h-2.5 bg-gold"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {!paused && (
        <motion.div
          key={`progress-${slide.id}`}
          className="absolute bottom-0 left-0 h-0.5 bg-gold z-20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      )}
    </section>
  );
}
