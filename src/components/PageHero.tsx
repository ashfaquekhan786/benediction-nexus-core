import { motion } from "framer-motion";
import { CyberBackground } from "@/components/CyberBackground";

/** Shared page hero banner for interior pages. */
export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-40 pb-20">
      <CyberBackground />
      <div className="glow-orb left-[10%] top-[-20%] h-[320px] w-[320px] bg-primary/20" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
