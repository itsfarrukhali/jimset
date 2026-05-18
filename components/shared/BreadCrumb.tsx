import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function BreadCrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="flex items-center text-sm text-gray-500 mb-4">
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center">
          {item.href ? (
            <Link
              href={item.href}
              className="text-primary-foreground hover:text-muted-foreground transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-primary-foreground font-medium">
              {item.label}
            </span>
          )}
          {idx < items.length - 1 && (
            <ChevronRight size={14} className="mx-2" />
          )}
        </span>
      ))}
    </nav>
  );
}
