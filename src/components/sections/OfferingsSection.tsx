import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Satellite, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const offerings = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    body: "End-to-end enterprise cyber defence — threat intelligence, agentic AI SecOps, vulnerability management, cloud security, and 24×7 managed detection & response.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    body: "Purpose-built protection for hospitals, medical devices, and patient data — HIPAA / DPDP-aligned security for clinical systems, telemedicine, and health cloud workloads.",
  },
  {
    icon: Satellite,
    title: "Special Projects",
    body: "Frontier engagements such as LiveEO-class satellite & geospatial intelligence — fusing earth-observation data with security analytics for infrastructure, pipelines, and rail corridors.",
  },
  {
    icon: Sparkles,
    title: "On-Demand Business Solutions",
    body: "Bespoke engineering pods — solution architects, data scientists, and full-stack teams delivered on demand to build, integrate, and operate mission-critical business platforms.",
  },
];

export function OfferingsSection() {
  return (
    <section id="offerings" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Offerings"
          title={
            <>
              Four Pillars of the <span className="text-gradient">Benediction Practice</span>
            </>
          }
          description="From core cybersecurity to healthcare, special satellite programmes, and on-demand business engineering — one partner across your critical missions."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {offerings.map((o, i) => (
            <motion.article
              key={o.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.55 }}
              className="glass-card glow-hover group p-8"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                  <o.icon className="h-6 w-6" />
                </div>
                <span className="font-display text-xs font-semibold tracking-widest text-muted-foreground/60">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold sm:text-2xl">{o.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
