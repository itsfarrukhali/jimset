import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-primary-dark text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
        <span className="bg-gold text-primary-dark font-semibold px-3 py-0.5 rounded-full text-xs">
          Admissions Open 2025-26
        </span>
        <div className="flex items-center gap-4">
          <a
            href="tel:0330-0370660"
            className="flex items-center gap-1 hover:text-gold transition-colors"
          >
            <Phone size={14} /> 0330-0370660
          </a>
          <a
            href="mailto:info@jimset.edu.pk"
            className="flex items-center gap-1 hover:text-gold transition-colors"
          >
            <Mail size={14} /> info@jimset.edu.pk
          </a>
        </div>
      </div>
    </div>
  );
}
