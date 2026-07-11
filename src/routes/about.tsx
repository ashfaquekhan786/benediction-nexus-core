import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { LabsSection } from "@/components/sections/LabsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TrustLogos } from "@/components/sections/TrustLogos";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Benediction — AI-First Cybersecurity Company" },
      {
        name: "description",
        content:
          "Benediction is a full-stack cybersecurity company with patented AI/ML, explainable decisions, privacy by design, and 3 decades of expertise securing critical infrastructure.",
      },
      { property: "og:title", content: "About | Benediction" },
      { property: "og:description", content: "Vision, mission, innovation, explainable AI, and privacy by design." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          eyebrow="About Benediction"
          title="Protecting the Digital World, Intelligently"
          description="Benediction envisions a world where every business is digitally safer and more secure than the last."
        />
        <AboutSection full />
        <LabsSection />
        <ProcessSection />
        <TrustLogos />
      </main>
      <Footer />
    </div>
  );
}
