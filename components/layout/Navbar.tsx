"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "Overview", href: "/about" },
      { label: "Vision & History", href: "/about/vision-mission" },
      { label: "Founder", href: "/about/founder" },
      {
        label: "Gen. Secretary Message",
        href: "/about/general-secretary-message",
      },
      { label: "In Memory", href: "/about/in-memory" },
    ],
  },
  {
    label: "Programs",
    children: [
      { label: "B.E Electrical", href: "/programs/electrical" },
      { label: "B.E Mechanical", href: "/programs/mechanical" },
    ],
  },
  {
    label: "Admissions",
    children: [
      { label: "Overview", href: "/admissions" },
      { label: "Eligibility", href: "/admissions/eligibility" },
      { label: "Fee Structure", href: "/admissions/fee-structure" },
      { label: "Apply Now", href: "/admissions/apply" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo – academic crest style */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative h-11 w-11 bg-primary rounded-md flex items-center justify-center text-white shadow-sm">
            <Shield size={26} strokeWidth={1.5} />
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-gold rounded-full border border-white" />
          </div>
          <div className="leading-tight">
            <p className="font-heading text-primary font-bold text-lg md:text-xl tracking-tight">
              JIMSET
            </p>
            <p className="text-[10px] md:text-[11px] text-gray-500 -mt-0.5 leading-tight">
              Jinnah Institute of Management Sciences,
              <br />
              Engineering & Technology
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 hover:text-primary transition-colors py-2">
                  {item.label} <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-45 py-2 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm hover:bg-surface hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary transition-colors py-2"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex bg-gold text-primary-dark font-semibold hover:bg-gold/90 shadow-sm"
          >
            <Link href="/admissions/apply">Apply Now</Link>
          </Button>

          {/* Mobile Drawer */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary-dark">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-70 pt-12 px-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((item) =>
                  item.children ? (
                    <details key={item.label} className="group">
                      <summary className="flex items-center justify-between cursor-pointer text-base font-medium text-primary-dark hover:text-gold">
                        {item.label}
                        <ChevronDown size={16} />
                      </summary>
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-sm text-gray-600 hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-base font-medium text-primary-dark hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
                <Button
                  asChild
                  className="bg-gold text-primary-dark font-semibold mt-4"
                >
                  <Link href="/admissions/apply">Apply Now</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
