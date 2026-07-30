import { createFileRoute } from "@tanstack/react-router";
import { IndustryLayout } from "@/components/IndustryLayout";
import img1 from "@/assets/supply-chain/page_1_image_1_v2.jpg.asset.json";
import img2chart from "@/assets/supply-chain/page_2_chart_1_v2.jpg.asset.json";
import img2 from "@/assets/supply-chain/page_2_image_1_v2.jpg.asset.json";
import img3 from "@/assets/supply-chain/page_3_image_1_v2.jpg.asset.json";
import img4 from "@/assets/supply-chain/page_4_image_1_v2.jpg.asset.json";
import img5a from "@/assets/supply-chain/page_5_image_1_v2.jpg.asset.json";
import img5b from "@/assets/supply-chain/page_5_image_2_v2.jpg.asset.json";
import img6chart from "@/assets/supply-chain/page_6_chart_1_v2.jpg.asset.json";
import img6a from "@/assets/supply-chain/page_6_image_1_v2.jpg.asset.json";
import img6b from "@/assets/supply-chain/page_6_image_2_v2.jpg.asset.json";
import img6c from "@/assets/supply-chain/page_6_image_3_v2.jpg.asset.json";
import img6d from "@/assets/supply-chain/page_6_image_4_v2.jpg.asset.json";
import img7 from "@/assets/supply-chain/page_7_image_1_v2.jpg.asset.json";

export const Route = createFileRoute("/supply-chain-management")({
  head: () => ({
    meta: [
      { title: "AI Supply Chain Management Technology | Benediction" },
      {
        name: "description",
        content:
          "Benediction's AI supply chain stack — autonomous demand forecasting, multi-echelon inventory optimisation, generative AI agents, digital twins, warehouse automation and eco-routing logistics.",
      },
      { property: "og:title", content: "AI Supply Chain Management Technology | Benediction" },
      {
        property: "og:description",
        content:
          "Autonomous forecasting, cognitive control towers, computer-vision warehouses and dynamic eco-routing across multi-modal freight networks.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://benediction-nexus-core.lovable.app${img1.url}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `https://benediction-nexus-core.lovable.app${img1.url}` },
    ],
  }),
  component: SupplyChainPage,
});

function SupplyChainPage() {
  return (
    <IndustryLayout
      eyebrow="Industries — Supply Chain Management"
      title="Technology Contents on Supply Chain Management"
      description="Artificial Intelligence has shifted supply chain management from a reactive operational function to an autonomous, predictive strategy center. Modern global infrastructure relies heavily on machine learning, generative AI, and real-time internet-of-things (IoT) data networks. This details the core technical frameworks, software ecosystems, and physical orchestration systems driving state-of-the-art supply chain management."
      stats={[
        { value: "Demand Forecasting", label: "Multimodal AI", note: "Multimodal AI models predicting localized demand spikes." },
        { value: "Generative AI Agents", label: "Autonomous Workflows", note: "LLMs automating exception management and supplier workflows." },
        { value: "Digital Twins", label: "Resilience Testing", note: "Virtual replicas stress-testing supply chain resilience." },
        { value: "Warehouse Automation", label: "Physical Orchestration", note: "AMRs and computer vision orchestrating physical fulfillment." },
      ]}
      blocks={[
        {
          eyebrow: "Overview",
          title: "Logistics Optimization Across Multi-Modal Freight",
          body: "Real-time eco-routing across multi-modal freight networks, unifying planning, execution and assurance into a single continuously optimised operating system.",
          image: img1.url,
          alt: "AI supply chain management technology overview",
        },
        {
          eyebrow: "01 — Planning",
          title: "Autonomous Demand Forecasting & Multi-Echelon Inventory Optimization (MEIO)",
          body: "Traditional forecasting uses backward-looking historical sales. Modern AI architectures deploy continuous, non-linear machine learning models to capture complex variables. AI platforms ingest macro-economic indicators, localized weather forecasts, civic event data, and social media sentiment analysis, feeding Deep Learning models like Temporal Fusion Transformers (TFTs) to predict precise localized demand spikes.",
          points: [
            "Macro-economic indicators, localized weather forecasts, civic event data and social media sentiment analysis.",
            "Dynamic MEIO optimises safety stock across the entire network simultaneously, not warehouse by warehouse.",
            "Systems calculate the exact trade-off between inventory holding costs and stockout risks.",
            "Inventory is placed closer to anticipated demand hubs before an order is even submitted.",
          ],
          image: img2.url,
          alt: "AI optimizing supply chain operations",
        },
        {
          title: "From Multimodal Ingestion to Network-Wide Positioning",
          body: "Multimodal ingestion of weather, economic and social signals feeds a Temporal Fusion Transformer forecasting model, which drives dynamic MEIO safety-stock placement across echelons — shifting supply chain management from reactive replenishment to proactive demand anticipation.",
          image: img2chart.url,
          alt: "Pipeline from multimodal ingestion to dynamic MEIO optimization",
        },
        {
          eyebrow: "02 — Execution Layer",
          title: "Generative AI Agents & Conversational Decision Centers",
          body: "Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) have automated the execution layer of supply chain workflow. Rather than scanning endless spreadsheets, managers use natural language interfaces: \"Show me the blast radius of the port disruption in Rotterdam and suggest alternative suppliers for part X.\" The system instantly surfaces affected nodes, quantifies downstream risk, and presents ranked mitigation options.",
          points: [
            "LLM Core — interprets natural language queries and translates them into structured supply chain actions.",
            "RAG Layer — grounds AI responses in live enterprise data: contracts, supplier records and logistics feeds, preventing hallucination.",
            "IDP Engine — extracts, classifies and validates data from invoices, bills of lading and compliance certificates in any language or format.",
            "Autonomous agents negotiate contract parameters, process multi-lingual invoices, flag compliance errors and trigger supplier onboarding.",
          ],
          image: img3.url,
          alt: "AI agent controlling automated supply chain workflows",
        },
        {
          eyebrow: "03 — Visibility",
          title: "Supply Chain Digital Twins & Cognitive Control Towers",
          body: "A Digital Twin is a dynamic, virtual replica of the entire physical supply chain ecosystem. IoT, telematics and ERP data flow into the twin; a simulation engine returns prescriptive execution back to autonomous action. Digital twins process billions of real-time data streams to model thousands of \"what-if\" scenarios every minute — simulating geopolitical border closures, raw material shortages and catastrophic weather to stress-test resilience.",
          points: [
            "Traditional control towers visualize data, alert operators and require manual decision-making at every exception point.",
            "AI-native cognitive towers detect anomalies, run stochastic simulations and execute prescriptive actions autonomously.",
            "When a supplier misses a manufacturing milestone, the tower shifts manufacturing loads or reroutes logistics without human intervention.",
          ],
          image: img4.url,
          alt: "Holographic warehouse management interface with robotic arm",
        },
        {
          eyebrow: "04 — Fulfilment",
          title: "Intelligent Warehouse Automation & Computer Vision",
          body: "Physical fulfillment infrastructure has become a highly coordinated computational canvas. Powered by Simultaneous Localization and Mapping (SLAM) algorithms, Autonomous Mobile Robots (AMRs) navigate changing warehouse floors, prioritizing orders dynamically based on shipping urgency and carrier windows.",
          points: [
            "SLAM Navigation — AMRs build live floor maps, rerouting around obstacles and reprioritising pick sequences against real-time carrier deadlines.",
            "CNN Defect Detection — Convolutional Neural Networks analyse product imagery at line speed, flagging dimensional anomalies, surface defects and packaging failures before dispatch.",
            "Drone Inventory Audit — autonomous drones run continuous cycle counts across high-bay racking, eliminating manual scanning labour.",
            "Fixed camera arrays and edge devices monitor cargo loading configurations to maximise volumetric efficiency and flag safety violations.",
          ],
          image: img5a.url,
          alt: "Robot moving boxes in a warehouse aisle",
        },
        {
          title: "Robotics on the Fulfilment Floor",
          body: "Industrial robots working alongside computer-vision infrastructure to tabulate goods and evaluate storage space in real time.",
          image: img5b.url,
          alt: "Innovative industry robot working in a warehouse",
        },
        {
          eyebrow: "05 — Logistics",
          title: "Dynamic Logistics Optimization & Eco-Routing",
          body: "Logistics management uses continuous mathematical routing algorithms to solve complex fleet challenges. Advanced logistics APIs process streaming telemetry from GPS, telematics and port congestion trackers, calculating real-time trade-offs across speed, fuel efficiency and vehicle wear-and-tear.",
          points: [
            "Speed — GPS telemetry and dynamic rerouting.",
            "Cost — fuel efficiency and carrier rate optimisation.",
            "ESG — carbon emission baselines and modal shift.",
            "Algorithms choose multi-modal freight combinations — e.g. switching from air to rail — to optimise carbon emissions alongside cost and arrival times.",
          ],
          image: img6a.url,
          alt: "Future supply chain cyber security visualization",
        },
        {
          title: "ESG as a Hard Constraint",
          body: "Modern logistics AI does not optimize for a single variable — it simultaneously balances speed, cost and environmental impact across every routing decision, embedding ESG compliance as a hard constraint rather than an afterthought.",
          image: img6b.url,
          alt: "Robot overseeing global logistics network",
        },
        {
          eyebrow: "06 — Interfaces",
          title: "Key Visual Components of AI Supply Chain Interfaces",
          body: "These interface layers transform AI supply chain intelligence from a back-end computation into an actionable, human-readable command surface — bridging autonomous decision-making with operator oversight.",
          points: [
            "Control Tower Dashboards — live global asset tracking, inventory flows and exception flags with drill-down to shipment or SKU level.",
            "Predictive Analytics & Digital Twins — simulation canvases ranking scenario outputs by financial impact and recovery time.",
            "Geospatial Mapping UI — real-time vehicle telemetry, transit delays, risk zones, carrier heat maps and last-mile density clusters.",
            "Autonomous Agent Logs — audit trails of automated decisions that operators can review, override or ratify.",
          ],
          image: img7.url,
          alt: "Robotic arms in an automated manufacturing facility",
        },
      ]}
      galleryTitle="Technology Reference"
      gallery={[
        { src: img6chart.url, alt: "Speed, cost and ESG optimisation matrix" },
        { src: img6c.url, alt: "Multi-modal freight optimisation reference" },
        { src: img6d.url, alt: "Eco-routing decision reference" },
      ]}
    />
  );
}
