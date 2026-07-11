import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Share2, Camera, MessageSquareText, Sparkles, Boxes, LineChart } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import opsManufacturing from "@/assets/ops-manufacturing.jpg";
import opsSupplyChain from "@/assets/ops-supply-chain.jpg";
import opsAssets from "@/assets/ops-asset-management.jpg";

const capabilities = [
  { icon: Share2, title: "Computational Knowledge Graph", body: "Connects assets, processes, people, and locations into a continuously updating model of operations — powering AI agents to reason across systems with full operational context." },
  { icon: Camera, title: "Machine Vision", body: "Interprets visual data from cameras, drones, and inspection equipment to detect defects, monitor environments, and verify compliance in real time." },
  { icon: LineChart, title: "Normal Behavior Modeling", body: "Models typical operational patterns to detect anomalies, forecast demand, and anticipate failures — continuously learning neural networks for proactive decision-making." },
  { icon: Sparkles, title: "Generative AI", body: "Simulates scenarios, generates diagnostic hypotheses, and proposes novel solutions — moving operations beyond reactive responses to dynamic problem-solving." },
  { icon: MessageSquareText, title: "Natural Language Processing", body: "Interprets unstructured text from maintenance logs, emails, and reports, translating complex data into actionable insights." },
  { icon: Boxes, title: "Knowledge Representation", body: "Structures industrial rules, dependencies, and relationships in machine-readable form, grounding autonomous decisions in operational reality and safety protocols." },
];

const domains = [
  {
    img: opsManufacturing,
    title: "Manufacturing",
    body: "The Autonomy Platform unifies planning, scheduling, quality, and supply into adaptive, AI-driven operations that run faster, leaner, and more resilient.",
    alt: "Robotic arms working on a car chassis in a factory",
  },
  {
    img: opsSupplyChain,
    title: "Supply Chain",
    body: "AI agents plan and orchestrate sourcing, trade, transport, and inventory in real time, transforming static supply chains into continuously optimized, cost-saving networks.",
    alt: "Aerial view of a cargo ship being loaded with shipping containers",
  },
  {
    img: opsAssets,
    title: "Asset Management",
    body: "Predictive and prescriptive intelligence extends asset life and increases utilization — coordinating parts, people, and schedules to keep fleets and infrastructure at peak performance.",
    alt: "City skyline at night with light trails from traffic",
  },
];

export function OperationsSection({ full = false }: { full?: boolean }) {
  return (
    <section id="operations" className="relative border-y border-border bg-surface/25 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Benediction Platform for Operations"
          title={
            <>
              Software for Physical AI — <span className="text-gradient">A Synthetic Workforce of Autonomous Agents</span>
            </>
          }
          description="Benediction brings intelligence and autonomy to the core of physical operations, equipping industrial, logistics, and government partners to optimally manage assets, fleets, people, and networks — delivering a new paradigm of growth, cost savings, and resilience across the industrial economy."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {domains.map((d, i) => (
            <motion.article
              key={d.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="glass-card glow-hover group overflow-hidden !p-0"
            >
              <div className="overflow-hidden">
                <img
                  src={d.img}
                  alt={d.alt}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {full && (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                className="glass-card glow-hover p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-accent">
                  <c.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </motion.article>
            ))}
          </div>
        )}

        {!full && (
          <div className="mt-10 text-center">
            <Link to="/operations" className="btn-ghost-glow">
              Explore Operations Platform <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
