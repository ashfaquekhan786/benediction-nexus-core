import { createFileRoute } from "@tanstack/react-router";
import { IndustryLayout } from "@/components/IndustryLayout";
import e1 from "@/assets/power-energy/page_1_image_1_v2.jpg.asset.json";
import e2 from "@/assets/power-energy/page_2_chart_1_v2.jpg.asset.json";
import e3 from "@/assets/power-energy/page_3_image_1_v2.jpg.asset.json";
import e4 from "@/assets/power-energy/page_4_chart_1_v2.jpg.asset.json";
import e5 from "@/assets/power-energy/page_5_chart_1_v2.jpg.asset.json";
import e6 from "@/assets/power-energy/page_6_image_1_v2.jpg.asset.json";
import e6b from "@/assets/power-energy/page_6_image_2_v2.jpg.asset.json";
import e7 from "@/assets/power-energy/page_7_chart_1_v2.jpg.asset.json";
import e8 from "@/assets/power-energy/page_8_image_1_v2.jpg.asset.json";
import e9 from "@/assets/power-energy/page_9_chart_1_v2.jpg.asset.json";
import e10 from "@/assets/power-energy/page_10_image_1_v2.jpg.asset.json";
import e10b from "@/assets/power-energy/page_10_image_2_v2.jpg.asset.json";
import e12 from "@/assets/power-energy/page_12_image_1_v2.jpg.asset.json";
import e13 from "@/assets/power-energy/page_13_table_1_v2.jpg.asset.json";
import e13b from "@/assets/power-energy/page_13_table_2_v2.jpg.asset.json";
import e14 from "@/assets/power-energy/page_14_image_1_v2.jpg.asset.json";
import e14b from "@/assets/power-energy/page_14_image_2_v2.jpg.asset.json";

export const Route = createFileRoute("/power-energy")({
  head: () => ({
    meta: [
      { title: "Power & Energy AI | Benediction" },
      {
        name: "description",
        content:
          "Advanced AI solutions in power and energy — agentic grid operations, physics-informed ML, hybrid energy storage optimisation, edge computer vision and subsurface supercomputing.",
      },
      { property: "og:title", content: "Power & Energy AI | Benediction" },
      {
        property: "og:description",
        content: "Agentic grid operations, PINNs, HESS optimisation, edge AI and NVIDIA-class subsurface compute.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PowerEnergyPage,
});

function PowerEnergyPage() {
  return (
    <IndustryLayout
      eyebrow="Industries — Power & Energy"
      title="Advanced AI Solutions in Power & Energy"
      description="Purpose-built AI frameworks spanning agentic grid operations, physics-informed optimisation, hybrid energy storage, edge computer vision and subsurface supercomputing."
      stats={[
        { value: "80×", label: "Faster Seismic Processing", note: "Versus standard compute stacks on NVIDIA Blackwell." },
        { value: "50%", label: "Lower Maintenance Cost", note: "Edge computer vision and automated leak detection." },
        { value: "24/7", label: "Continuous Inspection", note: "Autonomous drone corridors without shutdowns." },
        { value: "0", label: "Cloud Dependency", note: "Edge AI inference on switchgear and substations." },
      ]}
      blocks={[
        {
          eyebrow: "Industrial AI in Power & Energy",
          title: "The Grid Is Under Unprecedented Strain",
          body: "The modern power grid faces a convergence of structural stressors that legacy rule-based control systems were never engineered to handle. The energy sector is actively migrating to autonomous, physics-informed and agentic AI architectures to optimise performance, extend asset lifespans and manage complex energy markets.",
          points: [
            "Intermittent renewables — solar and wind volatility demanding sub-second corrective action.",
            "EV proliferation — unpredictable, high-magnitude load spikes stressing transformer hardware.",
            "AI data centre demand — sustained hyperscale power draws reshaping load forecasting entirely.",
            "Rule-based systems obsolete — deterministic logic cannot adapt to combinatorial grid complexity.",
          ],
          image: e1.url,
          alt: "AI powering smart energy systems",
        },
        {
          eyebrow: "Agentic AI",
          title: "From Passive ML to Autonomous Grid Agents",
          body: "Systems like GridMind and Grid-Agent leverage LLMs to bridge human operator input with deterministic power engineering tools. Operators converse with the grid in natural language while AI plans and initiates micro-step adjustments for complex AC Optimal Power Flow and dispatch problems.",
          points: [
            "Natural language UI — operators prompt the system directly.",
            "Planning agent (LLM router) generates coordinated action sequences.",
            "Validation agent runs deterministic solvers against AC-OPF and contingencies.",
            "Sandboxed execution rolls back any action that violates stability limits.",
          ],
          image: e4.url,
          alt: "Agentic AI grid management architecture",
        },
        {
          eyebrow: "Physics-Informed ML",
          title: "AI Grounded in Thermodynamic Reality",
          body: "Unlike generic ML models that optimise purely on historical data, Benediction's physics-informed approach bakes hard mathematical constraints directly into neural architectures — ensuring outputs are always physically realisable and grid-safe.",
          points: [
            "PINNs embed Kirchhoff's laws and fluid dynamics directly into neural loss functions.",
            "DERMS aggregate rooftop solar, water heaters and storage into unified VPP networks.",
            "V2G optimisation shifts EV charging to off-peak, shielding transformers from thermal spikes.",
            "Grid stability through thermal protection and peak shaving.",
          ],
          image: e6.url,
          alt: "Smart energy grid with AI overlays",
        },
        {
          eyebrow: "Energy Storage",
          title: "High-Fidelity Hybrid Energy Storage Optimization",
          body: "As renewable penetration grows, balancing intermittent generation requires sophisticated control of multi-tier battery chemistry. HESS optimisation combines forecasting, reinforcement learning and digital twin technology into a unified control stack.",
          points: [
            "BiLSTM + LightGBM forecasting layers map expected grid conditions.",
            "Continuous-action Soft Actor-Critic RL agents dictate charge/discharge profiles.",
            "Battery digital twins track real-time State of Health and degradation trends.",
            "Thermal runaway avoidance detaches problematic cells before safety risks emerge.",
          ],
          image: e7.url,
          alt: "Hybrid energy storage control stack",
        },
        {
          eyebrow: "Computer Vision & Edge AI",
          title: "Continuous, Localized Machine Vision",
          body: "Transmitting raw high-resolution video to the cloud is costly and vulnerable to connection timeouts in remote fields. Benediction deploys Edge AI hardware locally — handling real-time inference on-site, fully decoupled from cloud dependencies.",
          points: [
            "Edge AI on switchgear, pipelines and isolated substations eliminates latency.",
            "CV arrays spot pipeline micro-leaks, valve friction shifts and emissions deviations.",
            "AI-piloted drones assess rust, blade cracking and vegetative encroachment.",
            "Inspection frequency increases dramatically while operational risk decreases.",
          ],
          image: e10.url,
          alt: "Edge AI infrastructure in power systems",
        },
        {
          eyebrow: "Supercomputing",
          title: "Subsurface Supercomputing & Material Sciences",
          body: "Enterprise supercomputing clusters process subsurface data and seismic imagery up to 80× faster than standard stacks in partnerships involving NVIDIA Blackwell architectures — compressing exploration timelines from months to days.",
          points: [
            "Generative seismic acceleration at AI-factory scale.",
            "AI-driven molecular discovery for low-carbon fuel blends and carbon-capture solvents.",
            "Chemical compositions engineered to replace conventional lithium-ion setups.",
            "Enterprise-grade compute access most energy firms cannot build independently.",
          ],
          image: e12.url,
          alt: "AI at the frontier of energy exploration",
        },
        {
          eyebrow: "Why Benediction",
          title: "The AI-Native Energy Partner",
          body: "From upstream seismic exploration to grid-edge EV management, Benediction addresses the full energy value chain with purpose-built, production-validated AI — delivering increased efficiency, cost savings, grid stability, enhanced production, reduced downtime and better resource allocation.",
          image: e14.url,
          alt: "Advantages of adopting AI in the energy industry",
        },
      ]}
      gallery={[
        { src: e2.url, alt: "Industrial power infrastructure illustration" },
        { src: e3.url, alt: "Passive ML to agentic AI progression" },
        { src: e5.url, alt: "Core technology pillars" },
        { src: e6b.url, alt: "Wind farm and energy data" },
        { src: e8.url, alt: "Multi-tier battery system control" },
        { src: e9.url, alt: "Anomaly detection, local inference, drone inspection" },
        { src: e10b.url, alt: "AI in electric power protection and control" },
        { src: e13.url, alt: "Technology domain capability matrix" },
        { src: e13b.url, alt: "Capability and impact summary" },
        { src: e14b.url, alt: "Why Benediction summary" },
      ]}
      galleryTitle="Capability Reference Visuals"
    />
  );
}
