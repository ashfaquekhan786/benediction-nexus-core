import { createFileRoute } from "@tanstack/react-router";
import { IndustryLayout } from "@/components/IndustryLayout";

export const Route = createFileRoute("/supply-chain-management")({
  head: () => ({
    meta: [
      { title: "Supply Chain Management AI | Benediction" },
      {
        name: "description",
        content:
          "AI-driven supply chain intelligence from Benediction — demand forecasting, control-tower visibility, autonomous logistics, supplier risk and geospatial infrastructure monitoring.",
      },
      { property: "og:title", content: "Supply Chain Management AI | Benediction" },
      {
        property: "og:description",
        content: "Demand forecasting, control-tower visibility, autonomous logistics and supplier risk intelligence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SupplyChainPage,
});

function SupplyChainPage() {
  return (
    <IndustryLayout
      eyebrow="Industries — Supply Chain Management"
      title="Intelligent, Resilient Supply Chains"
      description="Benediction applies agentic AI, geospatial intelligence and predictive analytics across sourcing, logistics and distribution — turning fragmented supply networks into a single, responsive operating system."
      blocks={[
        {
          eyebrow: "Visibility",
          title: "AI Control Tower",
          body: "A unified control tower ingests ERP, WMS, TMS, IoT and carrier telemetry into a single operating picture — replacing spreadsheet reconciliation with live, exception-driven decision-making.",
          points: [
            "End-to-end shipment and inventory visibility across multi-tier networks.",
            "Exception detection with automated escalation and recommended recovery actions.",
            "Digital twin of the network for scenario planning before committing capital.",
          ],
        },
        {
          eyebrow: "Planning",
          title: "Demand Forecasting & Inventory Optimisation",
          body: "Machine learning models blend historical demand, promotions, weather and macroeconomic signals to generate SKU-level forecasts that outperform statistical baselines.",
          points: [
            "Reduced stockouts and excess inventory through probabilistic safety-stock modelling.",
            "Dynamic replenishment aligned to real consumption, not static reorder points.",
            "Working capital release from tighter inventory positioning.",
          ],
        },
        {
          eyebrow: "Execution",
          title: "Autonomous Logistics & Route Intelligence",
          body: "Reinforcement learning engines optimise fleet routing, load consolidation and dock scheduling in real time, adapting to traffic, weather and capacity disruption as it unfolds.",
          points: [
            "Lower freight cost per tonne-kilometre through dynamic consolidation.",
            "Predictive ETA and delay propagation modelling across the network.",
            "Warehouse robotics and AMR orchestration on the fulfilment floor.",
          ],
        },
        {
          eyebrow: "Resilience",
          title: "Supplier Risk & Geospatial Monitoring",
          body: "Through the LiveEO partnership, Benediction fuses satellite Earth Observation with supplier and infrastructure data — surfacing physical, climate and compliance risk before it disrupts supply.",
          points: [
            "Continuous monitoring of routes, pipelines, corridors and supplier sites.",
            "Climate and disaster exposure scoring across the supplier base.",
            "Regulatory and ESG compliance evidence generated from objective, auditable data.",
          ],
        },
        {
          eyebrow: "Assurance",
          title: "Secure by Design",
          body: "Supply chain platforms inherit Benediction's security posture — explainable AI decisions, policy-bound automation, and enterprise-grade data sovereignty, with customer data never used to train models.",
        },
      ]}
    />
  );
}
