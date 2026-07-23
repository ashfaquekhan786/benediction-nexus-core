import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { OfferingsSection } from "@/components/sections/OfferingsSection";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { AIPlatformSection } from "@/components/sections/AIPlatformSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions | Benediction Cybersecurity Platform" },
      {
        name: "description",
        content:
          "Threat intelligence, agentic AI security operations, vulnerability management, cloud security, and managed security services — one AI-powered platform.",
      },
      { property: "og:title", content: "Solutions | Benediction Cybersecurity Platform" },
      { property: "og:description", content: "Threat intelligence, agentic AI SecOps, vulnerability management, cloud security, and managed services." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Solutions"
          title="The Benediction Platform"
          description="A holistic, platformized cybersecurity solution — comprehensive protection across devices, applications, networks, cloud, data, and identity."
        />
        <OfferingsSection />
        <SolutionsSection full />
        <BrandsMarquee />
        <AIPlatformSection />
        <StatsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
