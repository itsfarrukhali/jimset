import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import NewsletterForm from "@/components/forms/NewsletterForm";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Eligibility", href: "/admissions/eligibility" },
  { label: "Fee Structure", href: "/admissions/fee-structure" },
  { label: "News & Events", href: "/news-events" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="gold-border bg-primary-dark px-4 pb-6 pt-12 text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-4 font-display text-xl font-bold text-white">
            About JIMSET
          </h3>
          <p className="text-sm leading-relaxed">
            Jinnah Institute of Management Sciences, Engineering & Technology
            (JIMSET) offers 4-year evening B.E Technology programs under Jinnah
            Polytechnic Institute (JPI), Karachi - a project of
            Anjuman-e-Islamia Trust Pakistan.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl font-bold text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl font-bold text-white">
            Contact Info
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>
                ST-1, 5-C, Near Matric Board Office, Nazimabad, Karachi
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold" />
              <Link href="tel:0330-0370660" className="hover:text-gold">
                0330-0370660
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gold" />
              <Link href="mailto:info@jimset.com" className="hover:text-gold">
                info@jimset.com
              </Link>
            </li>
          </ul>
          <NewsletterForm />
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/50">
        <p className="mb-1">A Project of Anjuman-e-Islamia Trust Pakistan</p>
        <p>© {new Date().getFullYear()} JIMSET. All rights reserved.</p>
      </div>
    </footer>
  );
}
