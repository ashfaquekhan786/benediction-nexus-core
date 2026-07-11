import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import labsSoc from "@/assets/labs-soc.jpg";

const labStats = [
  { value: 3, suffix: "B", label: "Files Analysed Till Date" },
  { value: 675, suffix: "K", label: "New Files Analysed Daily" },
  { value: 400, suffix: "M", label: "Total Malicious URL Detections" },
  { value: 500, suffix: "K", label: "Daily Malicious URL Detections" },
];

export function LabsSection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/25 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <img
              src={labsSoc}
              alt="Benediction Labs security operations center with global threat-analysis dashboards"
              width={1536}
              height={1024}
              loading="lazy"
              className="w-full rounded-2xl border border-border shadow-[var(--shadow-glow-cyan)]"
            />
          </motion.div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Benediction Labs"
              title={
                <>
                  The Brain Behind <span className="text-gradient">Our Intelligence</span>
                </>
              }
              description="Benediction Labs, one of the largest malware analysis labs, is a key source of AI-powered threat intelligence and a cybersecurity pioneer with unmatched expertise. With decades of prolific experience, it detects, prevents, and neutralizes cyber threats to safeguard business data — powered by ML embedded in AI for intelligent, real-time insights."
            />
            <ul className="mt-8 grid gap-2.5 text-sm text-muted-foreground sm:grid-cols-2">
              {["Malware Analysis", "Threat Research", "AI Innovation", "Cybersecurity Intelligence", "Global Security Experts"].map((s) => (
                <li key={s} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {s}
                </li>
              ))}
            </ul>
            <div className="mt-10 grid grid-cols-2 gap-5">
              {labStats.map((s) => (
                <div key={s.label} className="glass-card p-5">
                  <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1.5 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
