import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { OccasionsSection } from "@/components/landing/OccasionsSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { PortalsSection } from "@/components/landing/PortalsSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <OccasionsSection />
      <HowItWorks />
      <PortalsSection />
      <Footer />
    </main>
  );
}
