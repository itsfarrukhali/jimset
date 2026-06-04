import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-primary-dark text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
        <span className="bg-gold text-primary-dark font-semibold px-3 py-0.5 rounded-full text-xs">
          Admissions Open 2025-26
        </span>
        <div className="flex items-center gap-4">
          <Link
            href="tel:0330-0370660"
            className="flex items-center gap-1 hover:text-gold transition-colors"
          >
            <Phone size={14} /> 0330-0370660
          </Link>
          <Link
            href="mailto:info@jimset.edu.pk"
            className="flex items-center gap-1 hover:text-gold transition-colors"
          >
            <Mail size={14} /> jimset@jpi.edu.pk
          </Link>
        </div>
      </div>
    </div>
  );
}
