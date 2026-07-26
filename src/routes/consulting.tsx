import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Compass,
  ShieldCheck,
  Cpu,
  Cloud,
  Workflow,
  LineChart,
  Users,
  BookOpen,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

const practices = [
  {
    icon: Compass,
    title: "Digital Transformation Strategy",
    body: "Board-level roadmaps for cloud, data, and AI modernisation across petroleum, power, manufacturing, railways, healthcare, and telecom.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Risk & GRC Advisory",
    body: "ISO 27001, ISO 42001, NIST CSF, and DPDP alignment — translating regulatory pressure into board-ready programmes and measurable controls.",
  },
  {
    icon: Cpu,
    title: "AI & Data Advisory",
    body: "AI use-case discovery, feasibility scoring, target operating models, and responsible-AI governance for enterprise adoption at scale.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Consulting",
    body: "Multi-cloud architecture (AWS, Azure, GCP), landing-zone design, migration factories, and FinOps for sustainable unit economics.",
  },
  {
    icon: Workflow,
    title: "Process & Automation Design",
    body: "Value-chain mapping, intelligent automation, and agentic-AI workflow design that removes friction from mission-critical operations.",
  },
  {
    icon: LineChart,
    title: "Cyber Risk Quantification",
    body: "FAIR and Monte Carlo modelling to translate technical vulnerabilities into financial exposure the C-suite and board can act on.",
  },
  {
    icon: Users,
    title: "Organisation & Talent Design",
    body: "Building modern CISO offices, cloud CoEs, AI centres of excellence, and hybrid delivery pods aligned to business outcomes.",
  },
  {
    icon: BookOpen,
    title: "Executive Enablement",
    body: "Curated workshops, war-games, and briefings that raise fluency across boards, leadership teams, and technology councils.",
  },
];

const engagement = [
  { step: "01", title: "Discover", body: "Rapid diagnostic across strategy, risk, technology, and operations to surface where value is trapped." },
  { step: "02", title: "Design", body: "Target-state blueprints, business cases, and prioritised roadmaps aligned to measurable outcomes." },
  { step: "03", title: "Deliver", body: "Hands-on programme leadership with hybrid Benediction + client pods — from mobilisation to steady state." },
  { step: "04", title: "Sustain", body: "Managed advisory, board reporting, and continuous improvement to protect the value delivered." },
];

export const Route = createFileRoute("/consulting")({
  head: () => ({
    meta: [
      { title: "Consulting | Benediction" },
      {
        name: "description",
        content:
          "Benediction consulting: strategy, cyber & AI GRC, cloud, process automation, cyber risk quantification, and executive enablement for regulated enterprises.",
      },
      { property: "og:title", content: "Consulting | Benediction" },
      { property: "og:description", content: "Strategy, cyber & AI GRC, cloud, automation, and cyber risk quantification." },
    ],
  }),
  component: ConsultingPage,
});

function ConsultingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Consulting"
          title="Strategy, Risk, and Technology Advisory"
          description="Independent, senior-led consulting that pairs Fortune 500 delivery experience with deep engineering — helping regulated enterprises modernise, secure, and outperform."
        />

        <section className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Practices"
              title={
                <>
                  Eight advisory practices, one <span className="text-gradient">trusted partner</span>
                </>
              }
              description="From boardroom strategy to the technical foundations that carry it — Benediction consultants combine deep domain fluency with hands-on delivery."
            />

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {practices.map((p, i) => (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: (i % 4) * 0.06, duration: 0.5 }}
                  className="glass-card glow-hover group p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-y border-border bg-surface/40 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How We Engage"
              title={<>A disciplined path from <span className="text-gradient">insight to outcome</span></>}
              description="Every engagement follows a proven four-stage model — designed to compress time-to-value without compromising rigor."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {engagement.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="glass-card p-6"
                >
                  <p className="font-display text-xs font-semibold tracking-[0.22em] text-accent">
                    STEP {s.step}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
