import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    q: "Is customer data used to train Benediction's AI models?",
    a: "No. Customer data is never used to train models. Benediction is privacy-first by design, with deployment flexibility built in for security-first and regulated environments.",
  },
  {
    q: "How does Benediction explain its AI decisions?",
    a: "Every AI decision comes with an explainable Verdict Justification. An explainable decision layer sits above every model, so your team always understands why the platform acted — critical for audits and regulated environments.",
  },
  {
    q: "Can automated actions run without approval?",
    a: "Automated actions fire only within pre-approved policies, and every action is logged for compliance. Your analysts handle judgment, verification, and approval; autonomous agents run the lifecycle.",
  },
  {
    q: "Which clouds and environments does Benediction cover?",
    a: "Benediction secures AWS, Azure, Google Cloud, and Kubernetes — including VMs, containers, K8s clusters, and serverless functions — alongside on-premise deployments and hybrid architectures.",
  },
  {
    q: "Does Benediction integrate with our existing security stack?",
    a: "Yes. Benediction seamlessly integrates with leading SIEMs, SOARs, and EDRs, and its XDR platform can ingest existing third-party security stacks to normalize and automatically hunt for threats.",
  },
  {
    q: "How does Benediction support compliance requirements?",
    a: "The platform is aligned with data protection regulations such as DPDP and GDPR, helping organizations identify and mitigate threats to their data while reducing the risk of breaches and regulatory penalties.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently Asked <span className="text-gradient">Questions</span>
            </>
          }
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.05 }}
                className="glass-card overflow-hidden !rounded-xl"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm font-semibold sm:text-base">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
