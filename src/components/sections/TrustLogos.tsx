import { motion } from "framer-motion";

const customers = ["CDAC", "INDIAN OIL", "INDIAN ARMY", "AIR FORCE", "NAVY", "NSG"];

export function TrustLogos() {
  return (
    <section className="relative border-y border-border bg-surface/30 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium tracking-widest text-muted-foreground uppercase"
        >
          Trusted by leading enterprises and government organizations
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {customers.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="font-display text-lg font-semibold tracking-[0.2em] text-muted-foreground/80 transition-colors hover:text-accent"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
