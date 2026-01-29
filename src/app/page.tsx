import Navbar from "@/components/sections/Navbar";
import HeroStudio from "@/components/sections/HeroStudio";
import ProblemAgitation from "@/components/sections/ProblemAgitation";
import PortfolioShowcase from "@/components/sections/PortfolioGrid";
import PricingTables from "@/components/sections/PricingTables";
import TechStack from "@/components/sections/TechStack";
import FAQ from "@/components/sections/FAQ";
import FooterStudio from "@/components/sections/FooterStudio";
import FloatingWA from "@/components/FloatingWA";
import { studioData } from "@/config/studio-data";

export default function Home() {
  const waNumbers = studioData.global.whatsappNumber ? [studioData.global.whatsappNumber] : [];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-green selection:text-black">
      <Navbar />
      <HeroStudio />
      <TechStack />
      <ProblemAgitation />
      <PortfolioShowcase />
      <PricingTables />
      <FAQ />
      <FooterStudio />

      {/* Reusing existing FloatingWA but mapping simple data */}
      <FloatingWA
        whatsappNumbers={waNumbers}
        message="Halo Hackbit Studio, saya ingin konsultasi website."
        features={{
          enableFloatingWA: true,
          waRotator: false,
        }}
      />
    </main>
  );
}
