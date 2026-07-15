import LandingNavbar from "../components/landing/LandingNavbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import WhyChooseSection from "../components/landing/WhyChooseSection";
import CTASection from "../components/landing/CTASection";
import LandingFooter from "../components/landing/LandingFooter";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-50">

      <LandingNavbar />

      <HeroSection />

      <FeaturesSection />

      <HowItWorksSection />

      <WhyChooseSection />

      <CTASection />

      <LandingFooter />

    </div>
  );
}