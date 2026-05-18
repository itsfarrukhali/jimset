"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
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
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            J
          </div>
          <div className="leading-tight">
            <p className="font-display text-primary font-bold text-lg md:text-xl">
              JIMSET
            </p>
            <p className="text-[10px] md:text-xs text-gray-600 -mt-0.5">
              Jinnah Institute of Management Sciences, Engineering & Technology
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-primary-dark">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 hover:text-gold transition-colors">
                  {item.label} <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-45 py-2">
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
                className="hover:text-gold transition-colors"
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
            className="hidden sm:inline-flex bg-gold text-primary-dark font-bold hover:bg-gold/90"
          >
            <Link href="/admissions/apply">Apply Now</Link>
          </Button>

          {/* Mobile Drawer */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-70 pt-12">
              <nav className="flex flex-col gap-4">
                {navLinks.map((item) =>
                  item.children ? (
                    <details key={item.label} className="group">
                      <summary className="flex items-center justify-between cursor-pointer text-lg font-medium text-primary-dark hover:text-gold">
                        {item.label}
                        <ChevronDown size={18} />
                      </summary>
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-sm text-gray-700 hover:text-primary"
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
                      className="text-lg font-medium text-primary-dark hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
                <Button asChild className="bg-gold text-primary-dark mt-6">
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
