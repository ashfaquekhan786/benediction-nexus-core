import { createFileRoute } from "@tanstack/react-router";
import { IndustryLayout } from "@/components/IndustryLayout";
import a1 from "@/assets/healthcare-ai/page_1_image_2_v2.jpg.asset.json";
import a2 from "@/assets/healthcare-ai/page_16_image_1_v2.jpg.asset.json";
import a3 from "@/assets/healthcare-ai/page_8_table_1_v2.jpg.asset.json";
import a4 from "@/assets/healthcare-ai/page_13_table_1_v2.jpg.asset.json";
import a5 from "@/assets/healthcare-ai/page_18_chart_1_v2.jpg.asset.json";
import a6 from "@/assets/healthcare-ai/page_18_chart_2_v2.jpg.asset.json";
import a7 from "@/assets/healthcare-ai/page_12_image_1_v2.jpg.asset.json";
import a8 from "@/assets/healthcare-ai/page_12_image_2_v2.jpg.asset.json";
import a9 from "@/assets/healthcare-ai/page_12_image_3_v2.jpg.asset.json";
import a10 from "@/assets/healthcare-ai/page_20_image_1_v2.jpg.asset.json";
import a11 from "@/assets/healthcare-ai/page_22_image_1_v2.jpg.asset.json";
import a12 from "@/assets/healthcare-ai/page_2_image_1_v2.jpg.asset.json";

export const Route = createFileRoute("/healthcare")({
  head: () => ({
    meta: [
      { title: "AI-Powered Healthcare | Benediction" },
      {
        name: "description",
        content:
          "Benediction's AI healthcare practice: market intelligence, robotic surgery, medical imaging, drug discovery, clinical workflow AI and live Australian reference case studies.",
      },
      { property: "og:title", content: "AI-Powered Healthcare | Benediction" },
      {
        property: "og:description",
        content:
          "Market intelligence, robotic surgery, imaging diagnostics, drug discovery and clinical workflow AI for healthcare enterprises.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HealthcarePage,
});

function HealthcarePage() {
  return (
    <IndustryLayout
      eyebrow="Industries — Healthcare"
      title="AI-Powered Healthcare Company"
      description="Market research, business strategy and reference case studies for AI deployed across payers, health systems and health-services organisations — consolidated into one operating view."
      stats={[
        { value: "$194B", label: "AI Healthcare by 2031", note: "From USD 36.67B in 2026 at 39.7% CAGR." },
        { value: "$3.20", label: "ROI per $1 Invested", note: "Average return with a ~14-month capital payback." },
        { value: "54%", label: "North America Share", note: "Largest regional market for healthcare AI." },
        { value: "40%", label: "Asia-Pacific CAGR", note: "Fastest-growing region, dominant by 2035." },
      ]}
      blocks={[
        {
          eyebrow: "Executive Summary",
          title: "One Consolidated View of the AI Healthcare Opportunity",
          body: "This practice brings together survey data on generative AI adoption across payers, health systems and health-services/technology organisations; sizing and growth projections for the broader AI-in-healthcare market and key sub-verticals; preferred business models and competitive positioning; a full risk register with mitigation themes; and two detailed reference case studies of AI deployed in live clinical settings in Australia.",
          points: [
            "Market intelligence across remote/robotic surgery, imaging, drug discovery, workflow tools and diagnostics.",
            "Business strategy — subscription, SaaS and e-commerce models with SWOT and differentiation.",
            "Risk register spanning data/infrastructure, financial/operational, ethical/adoption and strategic risks.",
            "Two Australian reference cases: ML-embedded neurosurgery and robotic AI-assisted surgery.",
          ],
          image: a1.url,
          alt: "AI-powered healthcare cover visual",
        },
        {
          eyebrow: "Section 2",
          title: "Global AI-in-Healthcare Market Overview",
          body: "Two independent estimates are preserved so methodologies can be compared directly. Estimate A values the market at USD 36.67–39.34 billion in 2025, reaching USD 110.61 billion by 2030 and potentially exceeding USD 500 billion by 2033–2035 (CAGR 34.5%–43.96%). Estimate B values it at USD 36.67 billion in 2026, expanding to USD 194.79 billion by 2031 at ~39.7% CAGR.",
          points: [
            "Both estimates agree on explosive, multi-year compounding growth.",
            "Administrative AI attracted 60% of all healthcare AI investment.",
            "AI medical diagnostics: ~USD 2.4B in 2026 to ~USD 9.7B by 2033 at 21.7% CAGR.",
          ],
          image: a3.url,
          alt: "AI-in-healthcare market data",
        },
        {
          eyebrow: "Section 2.1",
          title: "Generative AI Adoption & ROI",
          body: "A Q4 2024 survey of 150 organisations — 60 payers, 60 health systems and 30 health-services/technology groups — found most respondents actively pursuing gen AI initiatives or already live in production.",
          points: [
            "Administrative efficiencies — streamlining back-office and billing workflows.",
            "Clinical productivity — reducing documentation burden on clinicians.",
            "Patient/member engagement — personalised communication and care navigation.",
            "Among implementers, a majority report positive ROI, spanning >4x, 2–4x and <2x returns.",
          ],
          image: a12.url,
          alt: "Generative AI adoption profile",
        },
        {
          eyebrow: "Section 3.1 — 3.2",
          title: "Remote Robotic Surgery & Robotics-as-a-Service",
          body: "The remote surgery market stands at USD 8.4 billion in 2026, projected to reach USD 14.63 billion by 2030 at 14.9% CAGR, with a reported 25% reduction in operative time. The global surgical robots market is valued at USD 10.6 billion, reaching USD 18.5 billion by 2033 at 13.5% CAGR.",
          points: [
            "Procedure mix — Urology 47.5%, Thoracic 44.4%, Colorectal 38.6%, General Surgery/Gynaecology 33.3%.",
            "RaaS models decentralise advanced surgical care and reduce the urban–rural healthcare divide.",
          ],
          image: a5.url,
          alt: "Robotic surgery procedure mix",
        },
        {
          eyebrow: "Section 3.3 — 3.6",
          title: "Imaging, Drug Discovery, Workflow & Critical Diagnostics",
          body: "AI in medical imaging remains dominated by on-premises deployment (63.2% of installations) due to data-privacy rules, with only a minority of algorithms carrying direct reimbursement codes. AI in drug discovery is valued at USD 5.09 billion, reaching USD 17.56 billion by 2031 at 28.1% CAGR, with software contributing over 60% of revenue.",
          points: [
            "Interoperability challenges integrating 'dry' computation with 'wet' lab robotics.",
            "Microsoft (Nuance) retains 77% of hospital ambient-documentation deployments.",
            "AI-native startups have captured 70% of newly signed ambient-scribe contracts.",
            "Reimbursement coding, SaMD pathways and liability allocation gate market entry jurisdiction by jurisdiction.",
          ],
          image: a6.url,
          alt: "Diagnostics and workflow AI market data",
        },
        {
          eyebrow: "Section 4",
          title: "Business Development Strategy & Differentiation",
          body: "Preferred business models span subscription, SaaS and e-commerce, each tracked against its own metric set — conversion rate, cart abandonment, AOV and CLV for commerce; retention and expansion for recurring revenue. Six differentiation pillars work in concert to create a defensible competitive moat.",
          points: [
            "Innovative, patent-pending AI technology as the core strength.",
            "Awareness of weaknesses: competitor feature parity and rapidly changing data-privacy rules.",
            "Winning brand identity and first-mover advantage — 'first, and best' in target verticals.",
            "Speed and agility to iterate faster than larger incumbents.",
          ],
          image: a4.url,
          alt: "SWOT analysis",
        },
        {
          eyebrow: "Section 5",
          title: "Risk & Risk Mitigation Strategies",
          body: "A structured risk register covering data and infrastructure, financial and operational, ethical and adoption, and strategic and market exposure — each paired with a mitigation theme.",
          points: [
            "Fragmented data and EHR interoperability constraints.",
            "Data integrity and cybersecurity under EU AI Act and HIPAA.",
            "Continuous compliance investment across jurisdictions.",
            "Talent-poaching and economic downturn effects on delivery capacity.",
          ],
          image: a7.url,
          alt: "Risk and business model reference",
        },
        {
          eyebrow: "Section 6.1",
          title: "Case Study 1 — ML-Embedded AI in Neurosurgery (Australia)",
          body: "A leading neurosurgery superspecialty centre projected to implement next-generation technology embedding AI directly into the neurosurgical theatre.",
          points: [
            "Prognostic modeling — outcome prediction and closed-loop stimulation systems.",
            "Simulation engines — VR training platforms and virtual operative assistants.",
          ],
          image: a2.url,
          alt: "Neurosurgery operating theatre",
        },
        {
          eyebrow: "Section 6.2",
          title: "Case Study 2 — Robotic AI-Assisted Surgery (Australia)",
          body: "A leading regional public hospital deploying robotic AI-assisted surgery across multiple specialties, with the programme objective of decentralising advanced surgical care.",
          points: [
            "Urology 47.5% · Thoracic 44.4% · Colorectal 38.6% · General Surgery / Gynaecology 33.3%.",
            "Measured reduction in operative time and improved post-operative recovery profiles.",
          ],
          image: a10.url,
          alt: "Robotic AI-assisted surgery reference",
        },
        {
          eyebrow: "Section 7",
          title: "Strategic Takeaways & Next Steps",
          body: "The opportunity is explosive and compounding. Benediction leverages its agility advantage — patent-pending technology, lower overhead and a deeply skilled team — to outmanoeuvre incumbents in targeted niches before they can respond. Being first, and being the best, is the defining strategic imperative.",
          image: a11.url,
          alt: "Strategic roadmap",
        },
      ]}
      gallery={[
        { src: a8.url, alt: "Healthcare AI business model reference" },
        { src: a9.url, alt: "Healthcare AI commerce reference" },
        { src: a2.url, alt: "Neurosurgery theatre" },
        { src: a10.url, alt: "Key market figures" },
      ]}
      galleryTitle="Reference Visuals"
    />
  );
}
