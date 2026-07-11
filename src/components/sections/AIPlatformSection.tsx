import { motion } from "framer-motion";
import { BadgeCheck, Eye, Lock, Scale, ServerCog, FileCheck2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import neuralNetwork from "@/assets/neural-network.jpg";

const points = [
  { icon: BadgeCheck, title: "Patented AI/ML", body: "Across all product lines, Benediction is built on the same foundation of patented AI/ML models, elevated to production quality." },
  { icon: Eye, title: "Explainable AI", body: "Every AI decision is accompanied by an explainable justification — a Verdict Justification your team can audit and trust." },
  { icon: Lock, title: "Customer Data Never Used for Training", body: "Privacy-first by design: your data stays yours, always. Deployment flexibility is built in for security-first environments." },
  { icon: ServerCog, title: "Enterprise AI", body: "Normalized data and enterprise-grade AI safeguards working as one platform — one foundation, complete context, enterprise-ready by design." },
  { icon: FileCheck2, title: "Compliance", body: "Automated actions fire only within pre-approved policies, with every action logged for compliance in regulated environments." },
  { icon: Scale, title: "Decision Justification", body: "An explainable decision layer sits above every model, so containment decisions are never stalled by black-box uncertainty." },
];

export function AIPlatformSection() {
  return (
    <section id="ai-platform" className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-orb left-[-10%] bottom-[0%] h-[420px] w-[420px] bg-glow/15" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="The AI Platform"
              title={
                <>
                  Enterprise AI. <span className="text-gradient-glow">Your Data Stays Yours.</span>
                </>
              }
              description="Benediction is built for security-first environments — a patented AI/ML foundation, an explainable decision layer, and enterprise-grade privacy and compliance safeguards."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: (i % 2) * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3.5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-accent">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold">{p.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-glow/15 blur-[110px]" />
            <img
              src={neuralNetwork}
              alt="Animated AI neural network of glowing interconnected nodes"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full rounded-2xl border border-border shadow-[var(--shadow-glow)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
