import Hero from "@/components/home/Hero";
import ComingSoonStrip from "@/components/home/ComingSoonStrip";
import ProgramCards from "@/components/home/ProgramCards";
import WhyJIMSET from "@/components/home/WhyJIMSET";
import EligibilitySection from "@/components/home/EligibilitySection";
import FeeHighlight from "@/components/home/FeeHighlight";
import SalientFeatures from "@/components/home/SalientFeatures";
import CTABanner from "@/components/home/CTABanner";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ComingSoonStrip />
      <ProgramCards />
      <WhyJIMSET />
      <EligibilitySection />
      <FeeHighlight />
      <SalientFeatures />
      <CTABanner />
      <Contact />
    </>
  );
}
