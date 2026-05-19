"use client";

import { motion } from "framer-motion";
import { Cpu, Sparkles } from "lucide-react";

export default function ComingSoonStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-gold"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-white/10 opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 py-4 flex items-center justify-center gap-3 text-center">
        {/* Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark/10 backdrop-blur-sm">
          <Cpu className="h-5 w-5 text-primary-dark" />
        </div>

        {/* Text */}
        <p className="text-sm sm:text-base md:text-lg font-bold tracking-wide text-primary-dark">
          COMING SOON:
          <span className="ml-2 font-extrabold">
            Bachelor of Engineering Technology in Computer Science
          </span>
        </p>

        {/* Decorative icon */}
        <Sparkles className="hidden sm:block h-5 w-5 text-primary-dark/80" />
      </div>
    </motion.div>
  );
}
