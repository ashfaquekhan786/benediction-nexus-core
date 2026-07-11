import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { OperationsSection } from "@/components/sections/OperationsSection";
import { AIPlatformSection } from "@/components/sections/AIPlatformSection";

export const Route = createFileRoute("/operations")({
  head: () => ({
    meta: [
      { title: "Operations Platform | Benediction" },
      {
        name: "description",
        content:
          "Software for physical AI — a synthetic workforce of autonomous agents powered by a computational knowledge graph, machine vision, NLP, and generative AI.",
      },
      { property: "og:title", content: "Operations Platform | Benediction" },
      { property: "og:description", content: "Knowledge graph, machine vision, NLP, generative AI, asset intelligence, and supply chain intelligence." },
    ],
  }),
  component: OperationsPage,
});

function OperationsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Benediction Platform for Operations"
          title="Intelligence at the Core of Physical Operations"
          description="A synthetic workforce of autonomous agents, transforming how you plan, orchestrate, and manage your global operations."
        />
        <OperationsSection full />
        <AIPlatformSection />
      </main>
      <Footer />
    </div>
  );
}
