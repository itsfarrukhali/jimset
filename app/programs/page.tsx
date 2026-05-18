import PageHero from "@/components/shared/PageHero";
import ProgramCards from "@/components/home/ProgramCards";

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Our Programs"
        subtitle="4-Year Evening B.E Technology Programs"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Programs" }]}
      />
      <ProgramCards />
    </>
  );
}
