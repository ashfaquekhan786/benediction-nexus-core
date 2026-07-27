import { createFileRoute } from "@tanstack/react-router";
import { IndustryLayout } from "@/components/IndustryLayout";
import m1 from "@/assets/manufacturing/page_1_image_1_v2.jpg.asset.json";
import m2 from "@/assets/manufacturing/page_2_image_1_v2.jpg.asset.json";
import m3 from "@/assets/manufacturing/page_3_image_1_v2.jpg.asset.json";
import m4 from "@/assets/manufacturing/page_4_image_1_v2.jpg.asset.json";
import m5 from "@/assets/manufacturing/page_5_image_1_v2.jpg.asset.json";
import m6 from "@/assets/manufacturing/page_6_image_1_v2.jpg.asset.json";
import m6b from "@/assets/manufacturing/page_6_image_2_v2.jpg.asset.json";
import m7 from "@/assets/manufacturing/page_7_image_1_v2.jpg.asset.json";
import m8 from "@/assets/manufacturing/page_8_table_1_v2.jpg.asset.json";
import m9 from "@/assets/manufacturing/page_9_image_1_v2.jpg.asset.json";
import m9b from "@/assets/manufacturing/page_9_image_2_v2.jpg.asset.json";
import m10 from "@/assets/manufacturing/page_10_image_1_v2.jpg.asset.json";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "AI-Powered Manufacturing | Benediction" },
      {
        name: "description",
        content:
          "AI-powered manufacturing solutions — Physical AI, real-time computer vision, cognitive cobots, industrial generative AI, digital twins, humanoid logistics and edge-native control.",
      },
      { property: "og:title", content: "AI-Powered Manufacturing | Benediction" },
      {
        property: "og:description",
        content: "Top use cases transforming smart factories: Physical AI, cognitive cobots, digital twins and edge control.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ManufacturingPage,
});

function ManufacturingPage() {
  return (
    <IndustryLayout
      eyebrow="Industries — Manufacturing"
      title="AI-Powered Robotics in Manufacturing"
      description="Top use cases transforming smart factories — from rigid, pre-programmed automation to intelligent, self-optimising ecosystems."
      blocks={[
        {
          eyebrow: "Overview",
          title: "From Rigid Automation to Intelligent Ecosystems",
          body: "The integration of advanced AI into manufacturing and robotics has shifted factories from rigid, pre-programmed automation to intelligent, self-optimising ecosystems. Driven by breakthroughs in Physical AI, edge computing, generative design and high-fidelity digital twins, modern industrial platforms now possess task-agnostic adaptability, real-time perception and autonomous decision-making.",
          image: m2.url,
          alt: "Robotic arms on an automated assembly line",
        },
        {
          eyebrow: "Pillar 1",
          title: "Physical AI & General-Purpose Foundations",
          points: [
            "Traditional robotics relied on deterministic, line-by-line coding — brittle in dynamic environments.",
            "Zero-shot learning and imitation adapt to new manipulation paths within hours from video or synthetic data.",
            "Multimodal Large Behavior Models process vision, force-torque vectors and spatial audio in real time.",
          ],
          image: m4.url,
          alt: "Robotic arms working on a car chassis",
        },
        {
          eyebrow: "Pillar 2",
          title: "Real-Time Computer Vision & Intelligent End-Effectors",
          points: [
            "Dynamic part processing — arms scan unoriented objects, generate CAD on-premise and self-execute grinding, deburring and finishing.",
            "Adaptive gripping — EOAT with embedded ML measures force, torque and material compliance.",
            "A single manipulator handles delicate microelectronics and heavy castings without hardware changes.",
          ],
          image: m5.url,
          alt: "Robotic arm performing precision work on a circuit board",
        },
        {
          eyebrow: "In Action",
          title: "Cognitive Cobots on the Line",
          body: "Cognitive cobots operate alongside human workers, leveraging real-time perception and adaptive behaviour models to perform complex assembly, inspection and logistics tasks safely and autonomously.",
          image: m6.url,
          alt: "Cognitive cobot with specialised gripper",
        },
        {
          eyebrow: "Pillar 3",
          title: "Industrial Generative AI & Digital Twins",
          points: [
            "Generative physical design runs high-volume physics simulations to produce non-intuitive, organic components.",
            "Autonomous digital twins built on Physically-Based Open USD frameworks simulate entire factory layouts.",
            "Reinforcement learning eliminates tool wear, surface defects and pipeline friction before physical deployment.",
          ],
          image: m7.url,
          alt: "Engineers interacting with a holographic digital twin",
        },
        {
          eyebrow: "Architecture",
          title: "Benediction Architecture Frameworks",
          points: [
            "Autonomous Mobile Robots — SLAM and vision transformers for infrastructure-free navigation.",
            "Cognitive cobots — force-limiting sensors and deep RL for cage-free shared workspaces.",
            "Predictive diagnostics — deep neural networks and acoustic/vibration transformers eliminate unplanned downtime.",
            "Industrial copilots — contextualised domain LLMs for voice-driven diagnostic assistance.",
          ],
          image: m8.url,
          alt: "Benediction architecture framework table",
        },
        {
          eyebrow: "Logistics",
          title: "Humanoid Robotics in Material Logistics",
          points: [
            "Edge-powered locomotion executes complex bi-pedal balance and fine-motor tasks onboard.",
            "Brownfield-ready deployment navigates facilities designed for humans without infrastructure overhauls.",
            "Picks logistics totes, loads conveyors and works safely alongside manual labourers.",
          ],
          image: m9.url,
          alt: "Humanoid robot on the production floor",
        },
        {
          eyebrow: "Control",
          title: "Edge-Native Closed-Loop Control",
          points: [
            "Zero-latency performance — edge AI gateways run millisecond loops directly on the machine layer.",
            "Smart steel plants and high-temperature gas turbines process hundreds of concurrent sensor metrics locally.",
            "Edge AI alters physical fuel valves and assembly pressure points in real time, boosting energy efficiency.",
          ],
          image: m10.url,
          alt: "Technician monitoring a robotic arm with digital overlays",
        },
      ]}
      gallery={[
        { src: m1.url, alt: "AI-powered robotics in manufacturing" },
        { src: m3.url, alt: "Core technology pillars" },
        { src: m6b.url, alt: "Cobot precision assembly" },
        { src: m9b.url, alt: "Humanoid robot close-up" },
      ]}
      galleryTitle="Smart Factory Visuals"
    />
  );
}
