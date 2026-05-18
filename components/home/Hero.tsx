"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section className="bg-primary-dark min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(200,150,12,0.08)_0%,transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-white"
        >
          <motion.span
            variants={item}
            className="inline-block bg-gold text-primary-dark font-semibold px-4 py-1.5 rounded-md text-sm mb-6"
          >
            Evening Programs — Admissions Open 2025
          </motion.span>
          <motion.h1
            variants={item}
            className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Bachelor of Engineering Technology
          </motion.h1>
          <motion.p variants={item} className="text-xl text-white/70 mb-4">
            4-Year Evening Programs in Electrical & Mechanical Technology
          </motion.p>
          <motion.p variants={item} className="text-base text-white/60 mb-8">
            DAE and HSC (Pre-Engineering & Pre-Medical) graduates with 50%+
            marks are eligible to apply.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold text-primary-dark font-bold h-10 w-24 hover:bg-gold/90"
            >
              <Link href="/admissions/apply">Apply Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 hover:text-white h-10 w-30 "
            >
              <Link href="/programs">View Programs</Link>
            </Button>
          </motion.div>
          <motion.div variants={item} className="flex flex-wrap gap-4 mt-10">
            {["Evening Classes", "4-Year Program", "50% Marks Eligible"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-white/10 px-4 py-2 rounded-full text-sm text-white/80"
                >
                  {tag}
                </span>
              ),
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          <Image
            src="https://picsum.photos/800/600?random=3"
            alt="Engineering illustration"
            className="rounded-lg shadow-2xl"
            height={600}
            width={800}
          />
        </motion.div>
      </div>
    </section>
  );
}
