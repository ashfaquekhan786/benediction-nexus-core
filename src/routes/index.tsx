import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustLogos } from "@/components/sections/TrustLogos";
import { AboutSection } from "@/components/sections/AboutSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { DefenceSection } from "@/components/sections/DefenceSection";
import { OperationsSection } from "@/components/sections/OperationsSection";
import { AIPlatformSection } from "@/components/sections/AIPlatformSection";
import { WhySection } from "@/components/sections/WhySection";
import { LabsSection } from "@/components/sections/LabsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustLogos />
        <AboutSection />
        <SolutionsSection />
        <IndustriesSection />
        <DefenceSection />
        <OperationsSection />
        <AIPlatformSection />
        <StatsSection />
        <WhySection />
        <LabsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
