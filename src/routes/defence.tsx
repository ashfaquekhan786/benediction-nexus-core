import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { DefenceSection } from "@/components/sections/DefenceSection";
import { StatsSection } from "@/components/sections/StatsSection";

export const Route = createFileRoute("/defence")({
  head: () => ({
    meta: [
      { title: "Defence Platform | Benediction" },
      {
        name: "description",
        content:
          "AI-enabled precision mass and autonomous systems across all domains — mission planning, swarm intelligence, command & control, edge AI, and GPS-denied operations.",
      },
      { property: "og:title", content: "Defence Platform | Benediction" },
      { property: "og:description", content: "AI mission planning, swarming autonomous systems, ISR integration, and resilient command & control." },
    ],
  }),
  component: DefencePage,
});

function DefencePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Benediction Defence Platform"
          title="Autonomy for the Modern Battlefield"
          description="AI-enabled precision mass and autonomous systems across all domains — developed and deployed thoughtfully, with the highest ethical standards."
        />
        <DefenceSection full />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
}
