import { SectionHeading } from "@/components/SectionHeading";

const brands = [
  "IOCL", "BPCL", "HPCL", "HMEL", "IHBL", "Alfanar", "Kalpataru", "IRCON",
  "NHSRCL", "CPCL", "GSPC", "ONGC", "Essar Oil", "OIL India", "MNGL",
  "Tata Power", "DVC", "NCRTC", "GAIL", "Indian Railways", "Power Grid",
  "REC", "NHPC", "Cairn Energy", "Jindal Power", "Adani Energy",
  "Reliance Petroleum", "Reliance Power", "IGGL", "Delhi Transco",
  "UP Power Transmission", "Nayara Energy", "IGL", "MGL", "Sterlite Power",
  "L&T Power", "NLC India", "MAHATRANSCO", "GVK Power", "GMR",
  "India Power", "SJVN", "Torrent Power",
];

function BrandTile({ name }: { name: string }) {
  return (
    <div className="mx-4 flex h-20 min-w-[180px] items-center justify-center rounded-xl border border-border/60 bg-white/70 px-6 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_30px_-20px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all hover:border-accent/60 hover:shadow-[0_0_0_1px_rgba(198,161,91,0.35),0_20px_40px_-24px_rgba(198,161,91,0.35)]">
      <span className="font-display text-base font-semibold tracking-[0.18em] text-foreground/85 whitespace-nowrap uppercase">
        {name}
      </span>
    </div>
  );
}

export function BrandsMarquee({
  heading = true,
}: {
  heading?: boolean;
}) {
  // Two duplicated tracks for seamless loop
  const row1 = brands.slice(0, Math.ceil(brands.length / 2));
  const row2 = brands.slice(Math.ceil(brands.length / 2));

  return (
    <section id="brands" className="relative border-y border-border bg-surface/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <SectionHeading
            eyebrow="Trusted Partners"
            title={
              <>
                Powering India&apos;s <span className="text-gradient">Critical Enterprises</span>
              </>
            }
            description="Benediction is trusted by leading names across petroleum, power, transport, and infrastructure."
          />
        )}
      </div>

      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max animate-marquee">
          {[...row1, ...row1].map((b, i) => (
            <BrandTile key={`r1-${i}`} name={b} />
          ))}
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max animate-marquee-slow">
          {[...row2, ...row2].map((b, i) => (
            <BrandTile key={`r2-${i}`} name={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
