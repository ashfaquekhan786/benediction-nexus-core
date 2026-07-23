import { motion } from "framer-motion";
import { Fuel, Zap, Factory, TrainFront, HeartPulse, Radio } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const industries = [
  { icon: Fuel, title: "Petroleum & Natural Gas", body: "Securing upstream, midstream, and downstream operations — refineries, pipelines, and city gas distribution networks." },
  { icon: Zap, title: "Power & Energies", body: "Protecting generation, transmission, and distribution — thermal, hydro, renewables, and grid operators." },
  { icon: Factory, title: "Manufacturing", body: "Automotive, marine, aerospace and heavy engineering — IT, OT, IIoT, and supply-chain defence at scale." },
  { icon: TrainFront, title: "Railways", body: "Signalling, rolling stock, high-speed corridors, and station infrastructure — safety-critical rail cybersecurity." },
  { icon: HeartPulse, title: "Healthcare", body: "Hospitals, medical devices, and health-cloud workloads — patient data protection and clinical uptime." },
  { icon: Radio, title: "Telecom", body: "Core networks, 5G, data centres, and subscriber platforms — carrier-grade security operations." },
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
          {/* 6 sectors Benediction caters to */}
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
