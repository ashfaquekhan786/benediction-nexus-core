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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl"
            >
              This page is <span className="text-gradient">under development</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Our leadership profiles are being curated. Please check back shortly to meet the team
              guiding Benediction&rsquo;s mission across cybersecurity, healthcare, and frontier
              engineering.
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
