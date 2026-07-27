import { createFileRoute } from "@tanstack/react-router";
import { IndustryLayout } from "@/components/IndustryLayout";
import p1 from "@/assets/petroleum/page_1_image_1_v2.jpg.asset.json";
import p2 from "@/assets/petroleum/page_2_chart_1_v2.jpg.asset.json";
import p3 from "@/assets/petroleum/page_3_image_1_v2.jpg.asset.json";
import p4 from "@/assets/petroleum/page_4_image_1_v2.jpg.asset.json";
import p5 from "@/assets/petroleum/page_5_image_1_v2.jpg.asset.json";
import p6 from "@/assets/petroleum/page_6_image_1_v2.jpg.asset.json";
import p7 from "@/assets/petroleum/page_7_image_1_v2.jpg.asset.json";
import p8 from "@/assets/petroleum/page_8_image_1_v2.jpg.asset.json";
import p9 from "@/assets/petroleum/page_9_image_1_v2.jpg.asset.json";
import p10 from "@/assets/petroleum/page_10_image_1_v2.jpg.asset.json";
import p11 from "@/assets/petroleum/page_11_image_1_v2.jpg.asset.json";
import p12 from "@/assets/petroleum/page_12_image_1_v2.jpg.asset.json";
import p13 from "@/assets/petroleum/page_13_image_1_v2.jpg.asset.json";
import p14 from "@/assets/petroleum/page_14_image_1_v2.jpg.asset.json";
import p15 from "@/assets/petroleum/page_15_chart_1_v2.jpg.asset.json";
import p16 from "@/assets/petroleum/page_16_image_1_v2.jpg.asset.json";
import p16c from "@/assets/petroleum/page_16_chart_1_v2.jpg.asset.json";
import p17 from "@/assets/petroleum/page_17_chart_1_v2.jpg.asset.json";
import p18 from "@/assets/petroleum/page_18_image_1_v2.jpg.asset.json";

export const Route = createFileRoute("/petroleum-natural-gas")({
  head: () => ({
    meta: [
      { title: "Petroleum & Natural Gas AI | Benediction" },
      {
        name: "description",
        content:
          "AI-powered solutions for petroleum and natural gas — subsurface geoscience, autonomous drilling, pipeline integrity, methane detection, refinery maintenance and demand forecasting.",
      },
      { property: "og:title", content: "Petroleum & Natural Gas AI | Benediction" },
      {
        property: "og:description",
        content: "Revolutionising upstream, midstream and downstream operations through advanced artificial intelligence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PetroleumPage,
});

function PetroleumPage() {
  return (
    <IndustryLayout
      eyebrow="Industries — Petroleum & Natural Gas"
      title="AI-Powered Solutions for Petroleum & Natural Gas"
      description="Revolutionising upstream, midstream and downstream operations through advanced artificial intelligence — boosting production efficiency, ensuring safety and accelerating carbon reduction targets."
      blocks={[
        {
          eyebrow: "Why AI in Oil & Gas",
          title: "Four Ways AI Benefits Oil & Gas Enterprises",
          body: "Advanced AI-powered technology solutions are revolutionising the petroleum and natural gas sectors by optimising operations across upstream, midstream and downstream. Global energy giants are actively deploying these solutions today.",
          points: [
            "Operational efficiency across the full value chain.",
            "Better and faster decision-making from live operational data.",
            "Cost reductions through condition-based intervention.",
            "Competitive edge from safety and carbon-reduction performance.",
          ],
          image: p1.url,
          alt: "Industrial refinery with digital data overlays",
        },
        {
          eyebrow: "Upstream",
          title: "AI-Driven Subsurface Geoscience",
          body: "Deep learning algorithms process vast 3D/4D seismic surveys and well logs to reveal subsurface structures with unprecedented clarity.",
          points: [
            "Earth science analytics platforms accelerate hydrocarbon exploration and reduce time-to-discovery.",
            "Accurate mapping of complex subsurface reservoirs reduces exploration risk.",
            "Improved drilling success rates from higher-confidence targeting.",
          ],
          image: p4.url,
          alt: "AI-driven exploration site",
        },
        {
          eyebrow: "Upstream",
          title: "Autonomous Drilling Optimization",
          body: "Physics-informed AI agents dynamically adjust drilling parameters such as Weight-On-Bit (WOB) and Revolutions-Per-Minute (RPM) in real time.",
          points: [
            "Mitigates risks like stuck pipes and prevents drill bit degradation.",
            "Reduces costly non-productive time on the rig.",
            "Continuously maximises Rate of Penetration for faster well completions.",
          ],
          image: p5.url,
          alt: "Offshore rig with autonomous drilling AI",
        },
        {
          eyebrow: "Upstream",
          title: "AI-Enabled Reservoir Modeling",
          body: "High-performance systems powered by NVIDIA AI simulate multi-phase fluid flows within reservoirs, enabling engineers to model complex subsurface behaviour at scale.",
          points: [
            "Precise estimations of reserve longevity and resource allocation.",
            "Optimal well placement to maximise recovery factors.",
            "Reduces simulation time from weeks to hours.",
          ],
          image: p6.url,
          alt: "AI-powered reservoir simulation",
        },
        {
          eyebrow: "Midstream",
          title: "Predictive Pipeline Integrity",
          body: "IoT edge sensors integrated with cognitive AI platforms track temperature, flow rates and vibrational physics across thousands of kilometres of pipeline infrastructure.",
          points: [
            "Predictive models detect structural corrosion anomalies before they become critical failures.",
            "Mitigates catastrophic leaks, protecting communities and the environment.",
            "Early anomaly detection reduces incident costs by orders of magnitude versus reactive repair.",
          ],
          image: p8.url,
          alt: "Pipeline integrity monitoring interface",
        },
        {
          eyebrow: "Midstream",
          title: "Smart Methane Leak Detection",
          body: "Machine learning networks fuse three independent detection layers to close monitoring gaps across pipeline networks and processing facilities.",
          points: [
            "IoT field sensors deployed across pipelines and processing facilities.",
            "Drone infrared imagery for high-resolution aerial detection of methane plumes.",
            "Hyperspectral satellite data for regional and global-scale monitoring.",
          ],
          image: p9.url,
          alt: "Real-time emissions analytics dashboard",
        },
        {
          eyebrow: "Midstream",
          title: "Downstream Storage Optimization",
          body: "Autonomous agents monitor volatile regional fuel inventories and pipeline flows around the clock, responding dynamically to shifting market conditions.",
          points: [
            "Continuously balances supply–demand metrics across distribution networks.",
            "Minimises product degradation and storage overhead.",
            "Reduces working capital tied up in excess inventory.",
          ],
          image: p10.url,
          alt: "Autonomous inventory and logistics management",
        },
        {
          eyebrow: "Downstream",
          title: "Refinery Predictive Maintenance",
          body: "Industrial AI suites continuously evaluate the health of rotating equipment, distillation columns and heat exchangers — the critical assets at the heart of every refinery.",
          points: [
            "Prevents unplanned shutdowns and costly downstream outages.",
            "Extends asset lifespan through condition-based maintenance scheduling.",
            "Reduces maintenance costs while improving operational reliability.",
          ],
          image: p12.url,
          alt: "Refinery predictive maintenance",
        },
        {
          eyebrow: "Downstream",
          title: "Intelligent Crude Blending Agents",
          body: "Agentic AI systems digest chemical assays from varying crude feedstocks, building a real-time compositional picture and computing perfect blending ratios.",
          points: [
            "Ingest chemical assays from varying crude oil feedstocks.",
            "Dynamically compute blending ratios for consistent refined product quality.",
            "Deliver on-specification output every time, reducing off-spec waste and maximising yield.",
          ],
          image: p13.url,
          alt: "Refinery at night",
        },
        {
          eyebrow: "Downstream",
          title: "Dynamic Fuel Demand Forecasting",
          body: "Downstream pricing engines cross-analyse historical sales, local weather changes and geopolitical economic indicators to generate highly accurate demand forecasts.",
          points: [
            "Maximises retail fuel station margins through precision pricing.",
            "Prevents supply stockouts during demand surges.",
            "Responds dynamically to competitor pricing and regional events.",
          ],
          image: p14.url,
          alt: "Fuel demand forecasting analytics",
        },
        {
          eyebrow: "Benediction AI",
          title: "Unified Operating Dashboards",
          body: "Benediction AI applications combine reliability, production tracking and inventory management into unified operating dashboards — giving operators a single pane of glass across the entire value chain, from data gathering to strategising to execution.",
          image: p16.url,
          alt: "Unified operating dashboard illustration",
        },
        {
          eyebrow: "Generative AI",
          title: "Virtual Experts & Edge GenAI",
          body: "Large Language Models act as domain-specific conversational assistants for field engineers, while lightweight generative models run directly on offshore platforms and desert pump stations with no cloud connectivity required.",
          points: [
            "Query engineering manuals instantly — no more manual searching.",
            "Auto-generate asset performance reports on demand.",
            "Contextual guidance during complex maintenance scenarios.",
            "Zero-latency offline decision-making and safety auditing at remote assets.",
          ],
          image: p18.url,
          alt: "Edge GenAI at remote assets",
        },
      ]}
      gallery={[
        { src: p2.url, alt: "Top four ways AI benefits oil and gas" },
        { src: p3.url, alt: "Upstream AI solutions" },
        { src: p7.url, alt: "Midstream AI solutions" },
        { src: p11.url, alt: "Downstream AI solutions" },
        { src: p15.url, alt: "The impact of AI on oil and gas operations" },
        { src: p16c.url, alt: "Data gathering, strategising, executing" },
        { src: p17.url, alt: "Cross-cutting next-gen AI applications" },
      ]}
      galleryTitle="Sector Reference Visuals"
    />
  );
}
