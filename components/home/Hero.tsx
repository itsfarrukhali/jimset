"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative bg-primary-dark h-screen flex items-center overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCAyOCAwIDEgMCA1NiAwYTI4IDI4IDAgMSAwIC01NiAwem0wIDBtLTE4IDBhMTggMTggMCAxIDEgMzYgMGExOCAxOCAwIDEgMSAtMzYgMHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full relative z-10 pt-8 sm:pt-10 lg:pt-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-white"
        >
          {/* Authority badge */}
          <motion.div variants={item} className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full">
              <ShieldCheck size={14} className="text-gold" /> Under Jinnah
              Polytechnic Institute (JPI)
            </span>
          </motion.div>

          <motion.span
            variants={item}
            className="inline-block bg-gold text-primary-dark font-semibold px-4 py-1.5 rounded-sm text-sm mb-6 uppercase tracking-wide"
          >
            Admissions Open 2025-26
          </motion.span>

          <motion.h1
            variants={item}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          >
            Bachelor of Engineering Technology
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base sm:text-lg md:text-xl text-white/70 mb-3 max-w-xl"
          >
            4-Year Evening Programs in Electrical & Mechanical Technology
          </motion.p>

          <motion.p
            variants={item}
            className="text-sm sm:text-base text-white/60 mb-6 max-w-xl"
          >
            DAE and HSC (Pre-Engineering & Pre-Medical) graduates with 50% marks
            are eligible to apply.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 px-7 text-base bg-gold text-primary-dark font-bold hover:bg-gold/90 shadow-lg rounded-md"
            >
              <Link href="/admissions/apply">Apply Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base border-white text-white hover:bg-white/10 hover:text-white rounded-md"
            >
              <Link href="/programs">View Programs</Link>
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3 mt-6">
            {["Evening Classes", "4-Year Program", "50% Marks Eligible"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-white/10 px-4 py-2 rounded-full text-sm text-white/80 border border-white/10"
                >
                  {tag}
                </span>
              ),
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <Image
              src="https://picsum.photos/800/600?random=7"
              alt="JIMSET Campus"
              width={800}
              height={600}
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-primary-dark/80 to-transparent p-6">
              <p className="text-white font-heading text-xl font-semibold">
                A Project of Anjuman-e-Islamia Trust Pakistan
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
