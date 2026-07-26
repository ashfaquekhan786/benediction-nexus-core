import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Database,
  Bot,
  Cloud,
  Smartphone,
  Boxes,
  Wrench,
  Radar,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

const apps = [
  {
    icon: LayoutDashboard,
    title: "Enterprise Web Platforms",
    body: "Custom React, Next.js, and TanStack Start platforms — role-based, multi-tenant, and built to Fortune 500 standards of accessibility and performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Field Applications",
    body: "iOS, Android, and cross-platform apps for field operations, inspection, and workforce enablement across energy, transport, and healthcare.",
  },
  {
    icon: Database,
    title: "Data & Analytics Products",
    body: "Modern data platforms — Snowflake, Databricks, BigQuery — with governed pipelines, semantic models, and executive dashboards.",
  },
  {
    icon: Bot,
    title: "AI & Agentic Applications",
    body: "LLM-powered copilots, RAG-backed assistants, and agentic workflows integrated safely into enterprise systems of record.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native SaaS Products",
    body: "Multi-tenant SaaS built on AWS, Azure, and GCP — with SSO, audit logging, and enterprise-grade security baked in from day one.",
  },
  {
    icon: Boxes,
    title: "System Integration",
    body: "Deep integrations with SAP, Oracle, Microsoft Dynamics, ServiceNow, and Salesforce — connecting mission-critical estates end to end.",
  },
  {
    icon: Wrench,
    title: "Modernisation & Rebuild",
    body: "Legacy application re-platforming, monolith-to-microservices migration, and progressive UI rewrites without disrupting business continuity.",
  },
  {
    icon: Radar,
    title: "IoT & Edge Applications",
    body: "Applications for connected assets, industrial IoT, and edge AI — designed for pipelines, power grids, hospitals, and rail corridors.",
  },
];

const stack = [
  { group: "Frontend", items: ["React", "Next.js", "TanStack Start", "TypeScript", "Tailwind"] },
  { group: "Backend", items: ["Node.js", "Python", ".NET", "Java", "Go"] },
  { group: "Data & AI", items: ["Snowflake", "Databricks", "PyTorch", "TensorFlow", "LangChain"] },
  { group: "Cloud & Ops", items: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"] },
];

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Applications | Benediction" },
      {
        name: "description",
        content:
          "Benediction Applications: enterprise web and mobile platforms, AI copilots, cloud-native SaaS, system integration, and modernisation for regulated industries.",
      },
      { property: "og:title", content: "Applications | Benediction" },
      { property: "og:description", content: "Enterprise web, mobile, AI, and SaaS applications for regulated industries." },
    ],
  }),
  component: ApplicationsPage,
});

function ApplicationsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Applications"
          title="Enterprise Applications, Engineered End-to-End"
          description="From executive dashboards to agentic AI copilots — Benediction designs, builds, and operates the mission-critical applications your business runs on."
        />

        <section className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Capabilities"
              title={<>Eight application <span className="text-gradient">capabilities</span></>}
              description="Full-lifecycle engineering — discovery, product design, delivery, and 24×7 operations — across every layer of the modern enterprise stack."
            />

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {apps.map((a, i) => (
                <motion.article
                  key={a.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: (i % 4) * 0.06, duration: 0.5 }}
                  className="glass-card glow-hover group p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-y border-border bg-surface/40 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Technology Stack"
              title={<>Modern, opinionated, <span className="text-gradient">enterprise-ready</span></>}
              description="A curated stack chosen for performance, security, and long-term supportability — the same tooling that powers Fortune 500 digital estates."
            />

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stack.map((s, i) => (
                <motion.div
                  key={s.group}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="glass-card p-6"
                >
                  <p className="font-display text-xs font-semibold tracking-[0.22em] text-accent">
                    {s.group.toUpperCase()}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
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
