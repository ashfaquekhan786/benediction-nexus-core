import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HardHat } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CyberBackground } from "@/components/CyberBackground";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership | Benediction" },
      { name: "description", content: "Meet the leadership team behind Benediction — page under development." },
      { property: "og:title", content: "Leadership | Benediction" },
      { property: "og:description", content: "Leadership team at Benediction. Page under development." },
    ],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32 pb-24">
          <CyberBackground />
          <div className="glow-orb left-[10%] top-[10%] h-[360px] w-[360px] bg-primary/20" />
          <div className="glow-orb right-[10%] bottom-[10%] h-[320px] w-[320px] bg-accent/20" />
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-surface/60 backdrop-blur-xl"
            >
              <HardHat className="h-9 w-9 text-accent" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="eyebrow mt-8"
            >
              Leadership
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Our leadership team drives growth and innovation through brilliant domain experts,
              highly experienced, successful professionals with very highly qualified backgrounds
              from globally recognized institutions across the world.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              The combined experience of our leadership team is around{" "}
              <span className="font-display font-semibold text-accent">500 plus years</span>.
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
