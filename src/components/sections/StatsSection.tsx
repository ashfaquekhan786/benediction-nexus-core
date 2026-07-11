import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const stats = [
  { value: 4, suffix: "M+", label: "Threat Events Processed" },
  { value: 63, suffix: "%", label: "Faster to Identify Threats" },
  { value: 55, suffix: "%", label: "Faster Remediation" },
  { value: 338, suffix: "%", label: "Three-Year Return on Investment" },
  { value: 3000, suffix: "+", label: "Threat Intelligence Sources" },
];

export function StatsSection() {
  return (
    <section className="relative border-y border-border bg-surface/30 py-20">
      <div className="cyber-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-3xl font-bold text-gradient-glow sm:text-4xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
