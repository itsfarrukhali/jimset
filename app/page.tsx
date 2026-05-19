import Hero from "@/components/home/Hero";
import WelcomeBar from "@/components/home/WelcomeBar";
import ComingSoonStrip from "@/components/home/ComingSoonStrip";
import ProgramCards from "@/components/home/ProgramCards";
import WhyJIMSET from "@/components/home/WhyJIMSET";
import EligibilitySection from "@/components/home/EligibilitySection";
import FeeHighlight from "@/components/home/FeeHighlight";
import SalientFeatures from "@/components/home/SalientFeatures";
import CTABanner from "@/components/home/CTABanner";
import Contact from "@/components/home/Contact";
import NewsTicker from "@/components/home/NewsTicker";

export default function Home() {
  return (
    <>
      <NewsTicker />
      <Hero />
      <WelcomeBar />
      <ComingSoonStrip />
      <ProgramCards />
      <WhyJIMSET />
      <EligibilitySection />
      <SalientFeatures />
      <FeeHighlight />
      <CTABanner />
      <Contact />
    </>
  );
}
