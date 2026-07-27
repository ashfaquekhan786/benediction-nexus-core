import { createFileRoute } from "@tanstack/react-router";
import { IndustryLayout } from "@/components/IndustryLayout";
import d1 from "@/assets/defence-ai/page_1_image_2_v2.jpg.asset.json";
import d2 from "@/assets/defence-ai/page_5_image_1_v2.jpg.asset.json";
import d3 from "@/assets/defence-ai/page_7_image_1_v2.jpg.asset.json";
import d4 from "@/assets/defence-ai/page_8_chart_1_v2.jpg.asset.json";
import d5 from "@/assets/defence-ai/page_9_image_1_v2.jpg.asset.json";
import d6 from "@/assets/defence-ai/page_9_image_2_v2.jpg.asset.json";
import d7 from "@/assets/defence-ai/page_9_image_3_v2.jpg.asset.json";
import d8 from "@/assets/defence-ai/page_11_image_1_v2.jpg.asset.json";
import d9 from "@/assets/defence-ai/page_12_image_1_v2.jpg.asset.json";
import d10 from "@/assets/defence-ai/page_13_image_1_v2.jpg.asset.json";
import d11 from "@/assets/defence-ai/page_14_image_1_v2.jpg.asset.json";
import d12 from "@/assets/defence-ai/page_15_chart_1_v2.jpg.asset.json";
import d13 from "@/assets/defence-ai/page_18_chart_1_v2.jpg.asset.json";
import d14 from "@/assets/defence-ai/page_19_image_1_v2.jpg.asset.json";
import d15 from "@/assets/defence-ai/page_19_image_2_v2.jpg.asset.json";
import d16 from "@/assets/defence-ai/page_19_image_3_v2.jpg.asset.json";
import d17 from "@/assets/defence-ai/page_20_chart_1_v2.jpg.asset.json";
import d18 from "@/assets/defence-ai/page_21_image_1_v2.jpg.asset.json";

export const Route = createFileRoute("/defence-homeland-security")({
  head: () => ({
    meta: [
      { title: "Defence & Homeland Security | Benediction" },
      {
        name: "description",
        content:
          "Intelligent defence for contested environments — patented AI/ML, explainable decision layers, threat intelligence and mission-critical deployments for defence and homeland security.",
      },
      { property: "og:title", content: "Defence & Homeland Security | Benediction" },
      {
        property: "og:description",
        content:
          "Production-grade AI/ML for contested environments: threat intelligence, defence autonomy and industrial operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DefencePage,
});

function DefencePage() {
  return (
    <IndustryLayout
      eyebrow="Industries — Defence & Homeland Security"
      title="Intelligent Defense for Contested Environments"
      description="Protecting service members, civilians and enterprises with production-grade AI/ML systems — spanning cybersecurity, defence autonomy and industrial operations."
      stats={[
        { value: "4", label: "Defence Branches", note: "Army, Air Force, Navy and NSG engagement." },
        { value: "3", label: "Flagship Customers", note: "CDAC, Indian Oil and the Indian Army." },
        { value: "1", label: "Unified Platform", note: "One intelligence foundation for enterprise and government." },
        { value: "₹1,000 Cr", label: "Target Order Book", note: "Roadmap across defence, cyber, BVLOS and petrochem." },
      ]}
      blocks={[
        {
          eyebrow: "Executive Summary",
          title: "Our Mission",
          body: "Benediction elevates state-of-the-art technology to production quality — built to be relied upon in the most complex and contested environments. Every product is built on the same foundation: patented AI/ML models, an explainable decision layer, and enterprise-grade privacy and compliance safeguards.",
          points: [
            "Customer data is never used to train models.",
            "Every AI decision includes an explainable justification.",
            "Automated actions fire only within pre-approved, logged policies.",
          ],
          image: d1.url,
          alt: "Soldiers monitoring tactical data",
        },
        {
          eyebrow: "Who We Are",
          title: "A Full-Stack Cybersecurity Company",
          body: "Benediction delivers cutting-edge cybersecurity solutions powered by a patented AI/ML technology stack — providing comprehensive protection across devices, applications, networks, cloud, data and identity.",
          points: [
            "Vision — a world where every enterprise is digitally safer and more secure than the last.",
            "Benediction Labs — targeted to become one of the world's largest and most effective malware analysis facilities.",
          ],
          image: d2.url,
          alt: "Cybersecurity operations centre",
        },
        {
          eyebrow: "Technology Foundation",
          title: "What Sets Benediction Apart",
          points: [
            "Patented AI/ML — proprietary models engineered for high-stakes deployment in contested environments.",
            "Explainable AI — every automated decision carries a clear, auditable justification. No black boxes.",
            "Data Sovereignty — customer data is never used to train models; privacy is architectural, not optional.",
            "Seamless Integration — deploys across existing devices, networks, cloud and identity systems.",
          ],
          image: d4.url,
          alt: "Technology foundation pillars",
        },
        {
          eyebrow: "Threat Intelligence",
          title: "Benediction Threat Intel",
          body: "A powerful, real-time threat intelligence platform designed to enhance cybersecurity readiness — ingesting telemetry from millions of endpoints and global sources to predict, prevent and protect.",
          points: [
            "Expanding attack surfaces across cloud, IoT and remote work.",
            "Supply chain risks introduced by interconnected ecosystems.",
            "Sophisticated attacks — zero-days, novel malware and social engineering.",
            "Slow incident response from tools that react after damage is done.",
            "Data protection and compliance pressure under GDPR and DPDP.",
            "Business continuity exposure from financial and reputational damage.",
          ],
          image: d3.url,
          alt: "Global network threat map",
        },
        {
          eyebrow: "Predict. Prevent. Protect.",
          title: "Turning Intelligence into Action",
          body: "Benediction Threat Intel delivers industry-specific contextualisation across critical verticals — eliminating false positives and prioritising potential threats for faster, more confident response across Army, Air Force, Navy and NSG deployments.",
          points: [
            "Global threat awareness across all operational theatres.",
            "Threat actor, malware family and campaign analytics for strategic, actionable insight.",
            "SIEM and SOAR integration for automated response at scale.",
            "Regulatory compliance aligned to GDPR, DPDP and global security standards.",
          ],
          image: d5.url,
          alt: "Threat intelligence dashboard",
        },
        {
          eyebrow: "Strategic Partnership",
          title: "LiveEO, Germany — AI-Powered Earth Observation",
          body: "Benediction is the authorised and most preferred partner in India for the sale, purchase and delivery of LiveEO GmbH's technology. Partnering with the global leader in AI-driven Earth Observation, Benediction empowers enterprises with real-time geospatial insight to reduce operational risk, lower cost and strengthen regulatory compliance.",
          image: d8.url,
          alt: "Critical infrastructure monitoring",
        },
        {
          eyebrow: "Our Team",
          title: "The People Behind the Platform",
          body: "Innovation-driven problem-solvers who spot inefficiency and engineer smarter solutions — supported by offshore and hybrid engagement models, including Build-Operate-Transfer, to grow with your mission.",
          image: d9.url,
          alt: "Benediction technology team",
        },
        {
          eyebrow: "Economics",
          title: "Financial Projections & Investment Economics",
          body: "Total indicative fund requirement for product rollout is ₹5.1 Crores, allocated across three primary cost categories, with process costs covering hardware, systems, software licences, training, knowledge transfer, integration, cloud enablement, POC and CoE.",
          points: [
            "Core team salaries — ₹2.1 Crores.",
            "Systems, tools, hardware & integration — ₹1.9 Crores.",
            "Office premises & operations — ₹1.1 Crores.",
          ],
          image: d10.url,
          alt: "Financial projections illustration",
        },
        {
          eyebrow: "Return on Investment",
          title: "Indicative RoI & Payback",
          points: [
            "Profitability ratio (excellent): 126%.",
            "Gross margin (excellent): 92%.",
            "Ratio (excellent): 4:1 — for every INR 1 spent, INR 4 are generated.",
            "Revenue per implementation: ₹18 Crores inclusive of long-term lease.",
            "Breakeven at 24 months; full payback within 36 months.",
          ],
          image: d12.url,
          alt: "Return on investment chart",
        },
        {
          eyebrow: "Investment Roadmap",
          title: "Stages of Investment & Product Delivery",
          points: [
            "01 Foundation — team assembly and architecture definition (0–6 months).",
            "02 Development — core product build, integration and POC validation (6–9 months).",
            "03 Deployment — pilot rollout, client onboarding and CoE establishment (9–15 months).",
            "04 Scale — full commercial launch and revenue realisation (15–24 months).",
          ],
          image: d13.url,
          alt: "Investment roadmap stages",
        },
        {
          eyebrow: "Track Record",
          title: "Journey So Far — CDAC, IOCL & Indian Army",
          body: "Research collaboration on complex domain-specific challenges with CDAC; energy-sector deployment with India's largest energy enterprise; and defence intelligence work strengthening national capability with the Indian Army.",
          image: d14.url,
          alt: "Research institution engagement",
        },
        {
          eyebrow: "Future Pipeline",
          title: "Future Order Book",
          points: [
            "₹200 Crores — critical defence procurement.",
            "₹150 Crores — escalating ransomware & breach response.",
            "₹150 Crores — BVLOS drone & aerospace operations.",
            "₹500 Crores — petrochemical critical pain-point resolution.",
          ],
          image: d17.url,
          alt: "Future order book chart",
        },
      ]}
      gallery={[
        { src: d6.url, alt: "Threat analytics view" },
        { src: d7.url, alt: "SIEM and SOAR integration" },
        { src: d11.url, alt: "Cost structure illustration" },
        { src: d15.url, alt: "Industrial refinery engagement" },
        { src: d16.url, alt: "Defence command centre engagement" },
        { src: d18.url, alt: "Partnership invitation" },
      ]}
      galleryTitle="Platform & Programme Visuals"
    />
  );
}
