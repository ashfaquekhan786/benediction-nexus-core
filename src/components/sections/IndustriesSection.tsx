import { motion } from "framer-motion";
import {
  HeartPulse, Zap, Factory, Landmark, ShoppingBag, Ship, Building, ServerCog, Headset,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const industries = [
  { icon: HeartPulse, title: "Healthcare", body: "Protect patient data and keep clinical systems online." },
  { icon: Zap, title: "Energy", body: "Secure OT systems and critical infrastructure." },
  { icon: Factory, title: "Manufacturing", body: "Defend OT, IT, IIoT, and supply chain at scale." },
  { icon: Landmark, title: "Financial Services", body: "Prevent fraud and ransomware while staying audit-ready." },
  { icon: ShoppingBag, title: "Retail & Hospitality", body: "Defend your brand, customer data, and bottom line." },
  { icon: Ship, title: "Transportation & Logistics", body: "Defend operations across fleet, port, and rail." },
  { icon: Building, title: "Government", body: "Advanced deployments across Army, Air Force, Navy, and NSG." },
  { icon: ServerCog, title: "Critical Infrastructure", body: "Expertise in securing critical infrastructure globally." },
  { icon: Headset, title: "Managed Services", body: "Threat hunting, MDR, and incident readiness & response." },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="relative border-y border-border bg-surface/25 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title={
            <>
              Built to Secure <span className="text-gradient">What&apos;s Next</span> — Across Every Sector
            </>
          }
          description="AI-powered cybersecurity trusted by the world's best, with industry-specific contextualization for every vertical."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <motion.article
              key={ind.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              className="glass-card glow-hover group flex items-start gap-4 p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-accent transition-transform duration-300 group-hover:scale-110">
                <ind.icon className="h-5.5 w-5.5" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold">{ind.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
