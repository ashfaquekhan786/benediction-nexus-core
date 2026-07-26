import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import img1 from "@/assets/cybersecurity/page_3_chart_1_v2.jpg.asset.json";
import img2 from "@/assets/cybersecurity/page_4_chart_1_v2.jpg.asset.json";
import img3 from "@/assets/cybersecurity/page_5_chart_1_v2.jpg.asset.json";
import img4 from "@/assets/cybersecurity/page_6_chart_1_v2.jpg.asset.json";
import img5 from "@/assets/cybersecurity/page_7_chart_1_v2.jpg.asset.json";
import img6 from "@/assets/cybersecurity/page_8_chart_1_v2.jpg.asset.json";
import img7 from "@/assets/cybersecurity/page_9_chart_1_v2.jpg.asset.json";
import img8 from "@/assets/cybersecurity/page_10_chart_1_v2.jpg.asset.json";
import img9 from "@/assets/cybersecurity/page_11_chart_1_v2.jpg.asset.json";
import img10 from "@/assets/cybersecurity/page_12_chart_1_v2.jpg.asset.json";
import img11 from "@/assets/cybersecurity/page_13_image_1_v2.jpg.asset.json";
import img12 from "@/assets/cybersecurity/page_14_image_1_v2.jpg.asset.json";
import img13 from "@/assets/cybersecurity/page_15_image_1_v2.jpg.asset.json";

export const Route = createFileRoute("/cybersecurity")({
  head: () => ({
    meta: [
      { title: "Cybersecurity Offerings | Benediction" },
      {
        name: "description",
        content:
          "Benediction's cybersecurity practice: AI red teaming, adversarial ML, AI security architecture, GRC, next-gen detection engineering, GenAI/LLM red teaming, and cyber risk quantification.",
      },
      { property: "og:title", content: "Cybersecurity Offerings | Benediction" },
      { property: "og:description", content: "AI red teaming, adversarial ML, SecOps governance, LLM red teaming, and cyber risk quantification." },
    ],
  }),
  component: CybersecurityPage,
});

type Offering = {
  n: string;
  title: string;
  lede: string;
  what: string[];
  skills?: string[];
  why?: string;
  image: string;
  alt: string;
};

const offerings: Offering[] = [
  {
    n: "01",
    title: "AI Red Teaming & Adversarial ML",
    lede: "Benediction's technology experts simulate real-world attacks on AI systems, uncovering vulnerabilities before malicious actors can exploit them.",
    what: [
      "Proactively test for AI-specific threats — prompt injection, data poisoning, model inversion, and evasion attacks.",
    ],
    skills: [
      "Adversarial machine learning",
      "Python & LLM security testing",
      "Vulnerability research",
      "Custom AI agent manipulation",
    ],
    image: img1.url,
    alt: "AI red teaming workflow",
  },
  {
    n: "02",
    title: "AI Security Engineering & Architecture",
    lede: "As enterprises integrate AI frameworks into core infrastructure, Benediction delivers specialised security blueprints to handle massive datasets safely and reliably.",
    what: [
      "Design secure AI deployment pipelines.",
      "Protect enterprise RAG models and secure APIs.",
      "Implement zero-trust frameworks for AI systems.",
    ],
    skills: [
      "PyTorch / TensorFlow",
      "MLOps pipeline security",
      "Cloud infrastructure (AWS / Azure / GCP)",
      "API security & container protection",
    ],
    image: img2.url,
    alt: "AI and IAM architecture",
  },
  {
    n: "03",
    title: "AI Governance, Risk & Compliance (GRC)",
    lede: "Emerging global AI regulations have elevated compliance from a routine policy function to a strategic executive priority. Benediction helps organisations stay ahead of the curve.",
    what: [
      "Audit AI models for bias and data leakage.",
      "Align deployments with ISO 42001 and NIST frameworks.",
      "Manage data privacy compliance end-to-end.",
    ],
    skills: ["AI risk frameworks", "Data privacy law", "Security auditing & vendor risk assessment"],
    image: img3.url,
    alt: "GRC strategic pivot",
  },
  {
    n: "04",
    title: "Next-Gen Detection Engineering & Incident Response",
    lede: "Traditional Security Operations Centres are being replaced by AI-orchestrated defence systems. Benediction equips organisations to fine-tune and operate these intelligent platforms.",
    what: [
      "Configure and optimise AI-powered platforms such as CrowdStrike Falcon and Microsoft Sentinel.",
      "Reduce false positives and automate complex orchestration playbooks.",
    ],
    skills: [
      "SIEM / SOAR platforms",
      "Kusto Query Language (KQL)",
      "Threat intelligence automation",
      "Behavioral anomaly detection",
    ],
    image: img4.url,
    alt: "Modern SOC components",
  },
  {
    n: "05",
    title: "GenAI & LLM Red Teaming",
    lede: "The fastest-growing niche in offensive security — Benediction's specialists focus entirely on manipulating, stress-testing, and exploiting Large Language Models and Generative AI pipelines.",
    what: [
      "Direct and indirect prompt injection.",
      "Data poisoning and model inversion.",
      "Safety filter jailbreaking and RAG pipeline exploitation.",
    ],
    why: "AI models are inherently probabilistic — traditional deterministic scanners cannot surface these flaws. It takes deeply specialised human intuition to expose how a model can be tricked into leaking corporate data.",
    image: img5.url,
    alt: "LLM system architecture",
  },
  {
    n: "06",
    title: "Adversarial Machine Learning (AML) Engineering",
    lede: "Where Red Teamers target application and behavioural layers, Benediction's AML engineers operate at the mathematical and structural core of AI — a highly technical offensive discipline.",
    what: [
      "Develop exploits targeting the ML pipeline itself.",
      "Execute evasion attacks, membership inference, and model theft / cloning.",
    ],
    skills: [
      "Advanced mathematics and data science (PyTorch, TensorFlow)",
      "Low-level exploit development",
    ],
    image: img6.url,
    alt: "Types of security audits",
  },
  {
    n: "07",
    title: "Agentic AI & Autonomous Exploit Orchestration",
    lede: "As organisations deploy autonomous AI agents to manage business workflows, Benediction simulates how threat actors could hijack these agents — the bleeding edge of enterprise offensive security.",
    what: [
      "Execute agent hijacking.",
      "Manipulate automated orchestration loops.",
      "Bypass AI-controlled API gateways.",
      "Build autonomous offensive tools and automated fuzzers.",
    ],
    why: "Breaching an autonomous agent can hand an attacker full access to a company's internal network — making this one of the highest-stakes domains in modern security.",
    image: img7.url,
    alt: "Modern SecOps functions",
  },
  {
    n: "08",
    title: "AI-Powered Vulnerability Research & Advanced Exploitation",
    lede: "Benediction supercharges traditional vulnerability research by deploying custom LLMs and automated AI agents to discover zero-days at unprecedented speed.",
    what: [
      "Prompt and fine-tune custom AI models to scan proprietary source code, binaries, and firmware.",
      "Bridge deep code reverse engineering with AI-driven productivity.",
    ],
    why: "Discovering zero-day exploits before malicious actors has always commanded premium compensation. AI makes each researcher exponentially more effective.",
    image: img8.url,
    alt: "AI-powered vulnerability research",
  },
  {
    n: "09",
    title: "AI Model Auditing & Trustworthy AI",
    lede: "Securing AI demands auditing the algorithms themselves — preventing malicious exploitation, data leakage, and algorithmic manipulation before and after deployment.",
    what: [
      "Identify unintentional data bias.",
      "Conduct pre- and post-deployment audits to ensure LLMs do not leak IP or PII.",
    ],
    why: "This domain demands a rare combination of data science expertise and traditional cybersecurity auditing discipline.",
    image: img9.url,
    alt: "AI risk levels",
  },
  {
    n: "10",
    title: "AI-Powered SecOps Governance",
    lede: "Enterprises are rapidly adopting AI-driven Security Operations Centres. Benediction audits the autonomous tools making defensive decisions.",
    what: [
      "Oversee AI-driven automated threat hunting.",
      "Govern incident response and patching systems.",
      "Audit automated workflows to prevent automation bias.",
    ],
    why: "Enterprises need qualified experts to validate that autonomous defence systems remain reliable and safe — preventing AI-driven actions from causing self-inflicted network downtime.",
    image: img10.url,
    alt: "AI GRC flow chart",
  },
  {
    n: "11",
    title: "AI Security Auditing & Defensive Verification",
    lede: "Organisations require specialised auditors to verify that AI models are protected against manipulation, data poisoning, and unauthorised data leakage.",
    what: [
      "Audit model pipelines — training data lineage, pipeline integrity, and secure weights storage.",
      "Validate guardrails against prompt injection and data exfiltration.",
    ],
    skills: [
      "Lead AI Security Auditor",
      "AI Systems Compliance Assessor",
      "DevSecOps AI Auditor",
    ],
    image: img11.url,
    alt: "AI data security audit",
  },
  {
    n: "12",
    title: "Identity Visibility",
    lede: "A unified identity visibility solution that strengthens endpoint security through continuous monitoring and user behaviour insights — built to support Zero Trust and modern cybersecurity operations.",
    what: [
      "Reduced operational effort — automates identity monitoring.",
      "Comprehensive user profiles — correlates data from multiple sources.",
      "Stronger security posture — faster threat detection, improved compliance, Zero Trust readiness.",
    ],
    image: img12.url,
    alt: "Identity visibility flow",
  },
  {
    n: "13",
    title: "Quantifying Cyber Risk for Enterprise AI Systems",
    lede: "Boards of directors require technical policy experts who can translate complex AI vulnerabilities into clear financial risk metrics — bridging security engineering and executive decision-making.",
    what: [
      "Model the financial impact of AI model poisoning events or IP lawsuits.",
      "Apply Factor Analysis of Information Risk (FAIR) and Monte Carlo simulations.",
    ],
    skills: ["Principal AI Risk Quantifier", "Cyber Risk Strategy Director"],
    why: "Benediction bridges the language of security engineering and the language of the boardroom — turning technical risk into financial clarity.",
    image: img13.url,
    alt: "Cyber risk quantification",
  },
];

function CybersecurityPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Cybersecurity Offerings"
          title="Human Intelligence, Re-Engineered for the AI Era"
          description="Thirteen deeply specialised practices that secure, audit, and stress-test enterprise AI — from adversarial ML and LLM red teaming to boardroom-grade cyber risk quantification."
        />

        <section className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
            {offerings.map((o, i) => (
              <motion.article
                key={o.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-first" : ""
                }`}
              >
                <div>
                  <p className="eyebrow">Practice {o.n}</p>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
                    {o.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {o.lede}
                  </p>

                  <div className="mt-8 space-y-6">
                    <div>
                      <h3 className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                        What We Do
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/85">
                        {o.what.map((w) => (
                          <li key={w} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {o.skills && (
                      <div>
                        <h3 className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                          Core Skills
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {o.skills.map((s) => (
                            <span
                              key={s}
                              className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-foreground/85"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {o.why && (
                      <div>
                        <h3 className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                          Why Benediction
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.why}</p>
                      </div>
                    )}
                  </div>
                </div>

                <figure className="overflow-hidden rounded-2xl border border-border bg-white/70 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] backdrop-blur-md">
                  <img
                    src={o.image}
                    alt={o.alt}
                    loading="lazy"
                    className="h-auto w-full object-contain"
                  />
                </figure>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
