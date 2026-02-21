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
    <main className="relative min-h-screen bg-black text-white selection:bg-brand-green selection:text-black overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/10 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] bg-brand-green/5 rounded-full blur-[100px] animate-float-delayed pointer-events-none" />
      <div className="absolute top-[30%] right-[10%] w-[25%] h-[25%] bg-white/5 rounded-full blur-[80px] animate-float pointer-events-none" />

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
