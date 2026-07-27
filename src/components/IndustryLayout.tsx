import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export type IndustryBlock = {
  eyebrow?: string;
  title: string;
  body?: string;
  points?: string[];
  image?: string;
  alt?: string;
};

export type IndustryStat = { value: string; label: string; note?: string };

export type IndustryGalleryItem = { src: string; alt: string };

export function IndustryLayout({
  eyebrow,
  title,
  description,
  stats,
  blocks,
  gallery,
  galleryTitle = "In the Field",
}: {
  eyebrow: string;
  title: string;
  description: string;
  stats?: IndustryStat[];
  blocks: IndustryBlock[];
  gallery?: IndustryGalleryItem[];
  galleryTitle?: string;
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero eyebrow={eyebrow} title={title} description={description} />

        {stats && stats.length > 0 && (
          <section className="relative border-y border-border/70 py-14">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-md"
                >
                  <div className="font-display text-3xl font-bold text-accent sm:text-4xl">{s.value}</div>
                  <div className="mt-2 font-display text-sm font-semibold">{s.label}</div>
                  {s.note && <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.note}</p>}
                </motion.div>
              ))}
            </div>
          </section>
        )}

        <section className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
            {blocks.map((b, i) => (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid items-center gap-10 ${b.image ? "lg:grid-cols-2 lg:gap-16" : ""} ${
                  b.image && i % 2 === 1 ? "lg:[&>figure]:order-first" : ""
                }`}
              >
                <div>
                  {b.eyebrow && <p className="eyebrow">{b.eyebrow}</p>}
                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">{b.title}</h2>
                  {b.body && (
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{b.body}</p>
                  )}
                  {b.points && b.points.length > 0 && (
                    <ul className="mt-6 space-y-2 text-sm leading-relaxed text-foreground/85">
                      {b.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {b.image && (
                  <figure className="overflow-hidden rounded-2xl border border-border bg-white/70 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] backdrop-blur-md">
                    <img
                      src={b.image}
                      alt={b.alt ?? b.title}
                      loading="lazy"
                      className="h-auto w-full object-contain"
                    />
                  </figure>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        {gallery && gallery.length > 0 && (
          <section className="relative border-t border-border/70 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="eyebrow">Visual Reference</p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{galleryTitle}</h2>
              <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
                {gallery.map((g) => (
                  <figure
                    key={g.src}
                    className="break-inside-avoid overflow-hidden rounded-2xl border border-border bg-white/70 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.22)] backdrop-blur-md"
                  >
                    <img src={g.src} alt={g.alt} loading="lazy" className="h-auto w-full object-contain" />
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
