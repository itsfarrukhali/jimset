import BreadCrumb from "./BreadCrumb";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className="bg-primary-dark py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {breadcrumb && <BreadCrumb items={breadcrumb} />}
        <h1 className="font-display text-3xl md:text-5xl text-white font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/70 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
