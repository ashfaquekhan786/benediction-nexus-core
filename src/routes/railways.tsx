import { createFileRoute } from "@tanstack/react-router";
import { IndustryLayout } from "@/components/IndustryLayout";
import r1 from "@/assets/railways/page_1_image_1_v2.jpg.asset.json";
import r4 from "@/assets/railways/page_4_image_1_v2.jpg.asset.json";
import r6 from "@/assets/railways/page_6_image_1_v2.jpg.asset.json";

export const Route = createFileRoute("/railways")({
  head: () => ({
    meta: [
      { title: "AI-Driven Rail Intelligence | Benediction" },
      {
        name: "description",
        content:
          "Benediction rail AI — predictive maintenance, machine-vision track auditing, autonomous train operations, network optimisation and passenger safety intelligence.",
      },
      { property: "og:title", content: "AI-Driven Rail Intelligence | Benediction" },
      {
        property: "og:description",
        content: "Predictive maintenance, ATO, machine-vision inspection and station safety AI for modern rail networks.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RailwaysPage,
});

function RailwaysPage() {
  return (
    <IndustryLayout
      eyebrow="Industries — Railways"
      title="AI-Driven Rail Intelligence"
      description="Transforming railway operations through advanced artificial intelligence — from predictive maintenance and autonomous train control to intelligent infrastructure auditing and passenger safety systems."
      stats={[
        { value: ">95%", label: "Detection Accuracy", note: "Deep neural network identification of track defects at speed." },
        { value: "100+", label: "km/h Inspection Speed", note: "High-resolution capture without service disruption." },
        { value: "3D", label: "Point Cloud Output", note: "Generated from standard 2D video via AI photogrammetry." },
        { value: "EN50155", label: "Certified Edge Hardware", note: "Plus IEC 62443-4-1 cybersecurity compliance." },
      ]}
      blocks={[
        {
          eyebrow: "Executive Brief",
          title: "The Imperative for AI in Modern Rail",
          body: "Global rail operators are navigating an inflection point — rising infrastructure costs, increasing climate volatility and digital-era passenger expectations converge to demand a fundamental shift in operational strategy. AI has crossed from experimental pilot to foundational operational technology.",
          points: [
            "Budget pressure — deferred maintenance compounds costs exponentially across thousands of track-kilometres.",
            "Climate risk — flooding, heat-induced rail buckling and vegetation encroachment demand real-time monitoring.",
            "Passenger expectations — punctuality, safety and digital experience are baseline demands.",
            "Technology shift — the question is no longer whether to adopt AI, but how quickly it can be scaled.",
          ],
          image: r1.url,
          alt: "Digital wireframe illustration of a train engine",
        },
        {
          eyebrow: "Capability 1 of 4",
          title: "Smart Asset Management & Predictive Maintenance",
          body: "Raw telemetry feeds an AI anomaly engine which drives EAM workflows — shifting the maintenance paradigm from reactive to predictive across rolling stock and infrastructure.",
          points: [
            "Wheel Impact Load Detectors — ML isolates impact spikes to detect flat spots and out-of-round wheels.",
            "Online Monitoring of Rolling Stock — acoustic and thermal sensors predict bearing Remaining Useful Life.",
            "Reduced unplanned downtime, lower emergency spend and materially extended asset lifecycle.",
          ],
        },
        {
          eyebrow: "Capability 2 of 4",
          title: "Intelligent Track & Infrastructure Auditing",
          body: "Inspection trains moving at 100+ km/h capture high-resolution imagery continuously along the corridor. Deep neural networks identify missing fasteners, ballast fouling, track misalignments and surface cracks with over 95% accuracy.",
          points: [
            "Photogrammetry and LiDAR mapping convert 2D video into 3D point clouds without dedicated hardware.",
            "Scans for vegetation encroachment, signal sightline obstruction and ballast erosion.",
            "Structural reduction in the cost-per-kilometre of infrastructure assurance.",
          ],
          image: r4.url,
          alt: "Machine vision track inspection",
        },
        {
          eyebrow: "Capability 3 of 4",
          title: "Autonomous Train Operations & Intelligent Signalling",
          body: "AI enables mainline and metro networks to progress through the Grades of Automation framework — from driver advisory systems to fully unattended operation — with each increment delivering measurable gains.",
          points: [
            "Multi-spectral perception combines visible, infrared and thermal imaging for long-range awareness.",
            "Recurrent Soft Actor-Critic frameworks retain state histories for context-aware train control.",
            "Adaptive throttle and electronic braking profiles minimise traction wear and optimise energy use.",
            "GoA 1 through GoA 4 progression delivers punctuality, energy optimisation and capacity uplift.",
          ],
        },
        {
          eyebrow: "Capability 4 of 4",
          title: "Real-Time Network Optimization & Logistics",
          body: "Deep reinforcement learning orchestrates multi-track routing and dynamic timetabling — balancing strict schedules against sudden delays across complex network topologies.",
          points: [
            "Traffic management resolves conflict scenarios that overwhelm rule-based dispatch.",
            "Logistics automation via NLP for freight documentation, cargo routing and last-mile coordination.",
            "Physics-informed neural networks validate scheduling changes before live deployment.",
          ],
          image: r6.url,
          alt: "Train moving through a tunnel",
        },
        {
          eyebrow: "Passenger Operations",
          title: "Passenger Safety, Security & Facility Operations",
          points: [
            "Edge-GPU video surveillance detects platform edge intrusion, unattended baggage and crowd surges in seconds.",
            "Machine vision tracks occupancy; predictive models optimise ventilation, escalators and HVAC loads.",
            "Demand-responsive facility management cuts off-peak energy waste without compromising service.",
            "Proactive safety alerts and optimised flow reduce congestion and improve dwell times.",
          ],
        },
        {
          eyebrow: "Technology Infrastructure",
          title: "The AI Infrastructure Backbone",
          points: [
            "Edge layer — rugged onboard GPUs certified under EN50155 for vibration, temperature and EMI extremes.",
            "Network layer — IP MPLS backbones and optical fibre for low-latency, high-bandwidth telemetry.",
            "Cybersecurity — architectures conforming to IEC 62443-4-1 across the full rail network perimeter.",
            "Digital twin platform — cloud model validation and training without disrupting live operations.",
          ],
        },
        {
          eyebrow: "Competitive Positioning",
          title: "Why Benediction Solutions",
          points: [
            "End-to-end rail AI expertise across asset health, infrastructure, autonomy, optimisation and passenger safety.",
            "Demonstrated operational ROI across every deployment domain.",
            "Proven, standards-compliant technology engineered for critical national infrastructure.",
            "Future-ready modular architecture that evolves with rail automation standards.",
          ],
        },
      ]}
    />
  );
}
