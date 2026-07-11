import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Request Demo | Benediction" },
      {
        name: "description",
        content:
          "Request a demo of the Benediction platform. Contact Mr. Sumer Biswas, Business Director — businessdirector@benedictions.in, +91-9599459721.",
      },
      { property: "og:title", content: "Contact & Request Demo | Benediction" },
      { property: "og:description", content: "Book a demo of Benediction's AI-powered cybersecurity and defence platform." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Talk to Our Team"
          description="Enterprise, government, and defence organizations — see how Benediction protects the world's most critical missions."
        />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
