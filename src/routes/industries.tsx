import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { DefenceAgencies } from "@/components/sections/DefenceAgencies";
import { HospitalsSection } from "@/components/sections/HospitalsSection";
import { TrustLogos } from "@/components/sections/TrustLogos";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | Benediction Cybersecurity" },
      {
        name: "description",
        content:
          "AI-powered cybersecurity for healthcare, energy, manufacturing, financial services, retail, transportation, government, and critical infrastructure.",
      },
      { property: "og:title", content: "Industries | Benediction Cybersecurity" },
      { property: "og:description", content: "Industry-specific cybersecurity across every critical sector." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Industries"
          title="Benediction for Industries"
          description="AI-powered cybersecurity built to secure what's next — Benediction is trusted by the world's best."
        />
        <IndustriesSection />
        <DefenceAgencies />
        <BrandsMarquee heading={false} />
        <HospitalsSection />
        <TrustLogos />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
