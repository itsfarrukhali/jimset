import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80 pt-12 pb-6 px-4 gold-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="font-display text-xl font-bold text-white mb-4">
            About JIMSET
          </h3>
          <p className="text-sm leading-relaxed">
            Jinnah Institute of Management Sciences, Engineering & Technology
            (JIMSET) offers 4-year evening B.E Technology programs under Jinnah
            Polytechnic Institute (JPI), Karachi — a project of
            Anjuman-e-Islamia Trust Pakistan.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display text-xl font-bold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-gold transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/programs"
                className="hover:text-gold transition-colors"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                href="/admissions"
                className="hover:text-gold transition-colors"
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                href="/admissions/eligibility"
                className="hover:text-gold transition-colors"
              >
                Eligibility
              </Link>
            </li>
            <li>
              <Link
                href="/admissions/fee-structure"
                className="hover:text-gold transition-colors"
              >
                Fee Structure
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gold transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-xl font-bold text-white mb-4">
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
              <Link
                href="mailto:info@jimset.edu.pk"
                className="hover:text-gold"
              >
                jimset@jpikhi.edu.pk
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">
        <p className="mb-1">A Project of Anjuman-e-Islamia Trust Pakistan</p>
        <p>© {new Date().getFullYear()} JIMSET. All rights reserved.</p>
      </div>
    </footer>
  );
}
