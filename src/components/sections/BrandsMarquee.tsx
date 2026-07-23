import { SectionHeading } from "@/components/SectionHeading";

type Brand = { name: string; domain: string };

const brands: Brand[] = [
  { name: "IOCL", domain: "iocl.com" },
  { name: "BPCL", domain: "bharatpetroleum.in" },
  { name: "HPCL", domain: "hindustanpetroleum.com" },
  { name: "HMEL", domain: "hmel.in" },
  { name: "IHBL", domain: "ihbl.in" },
  { name: "Alfanar", domain: "alfanar.com" },
  { name: "Kalpataru", domain: "kalpatarupower.com" },
  { name: "IRCON", domain: "ircon.org" },
  { name: "NHSRCL", domain: "nhsrcl.in" },
  { name: "CPCL", domain: "cpcl.co.in" },
  { name: "GSPC", domain: "gspcgroup.com" },
  { name: "ONGC", domain: "ongcindia.com" },
  { name: "Essar Oil", domain: "essar.com" },
  { name: "OIL India", domain: "oil-india.com" },
  { name: "MNGL", domain: "mngl.in" },
  { name: "Tata Power", domain: "tatapower.com" },
  { name: "DVC", domain: "dvc.gov.in" },
  { name: "NCRTC", domain: "ncrtc.in" },
  { name: "GAIL", domain: "gailonline.com" },
  { name: "Indian Railways", domain: "indianrailways.gov.in" },
  { name: "Power Grid", domain: "powergrid.in" },
  { name: "REC", domain: "recindia.nic.in" },
  { name: "NHPC", domain: "nhpcindia.com" },
  { name: "Cairn Energy", domain: "cairnindia.com" },
  { name: "Jindal Power", domain: "jindalpower.com" },
  { name: "Adani Energy", domain: "adanienergysolutions.com" },
  { name: "Reliance Petroleum", domain: "ril.com" },
  { name: "Reliance Power", domain: "reliancepower.co.in" },
  { name: "IGGL", domain: "iggl.co.in" },
  { name: "Delhi Transco", domain: "delhitransco.gov.in" },
  { name: "UP Power Transmission", domain: "upptcl.org" },
  { name: "Nayara Energy", domain: "nayaraenergy.com" },
  { name: "IGL", domain: "iglonline.net" },
  { name: "MGL", domain: "mahanagargas.com" },
  { name: "Sterlite Power", domain: "sterlitepower.com" },
  { name: "L&T Power", domain: "larsentoubro.com" },
  { name: "NLC India", domain: "nlcindia.in" },
  { name: "MAHATRANSCO", domain: "mahatransco.in" },
  { name: "GVK Power", domain: "gvk.com" },
  { name: "GMR", domain: "gmrgroup.in" },
  { name: "India Power", domain: "indiapower.com" },
  { name: "SJVN", domain: "sjvn.nic.in" },
  { name: "Torrent Power", domain: "torrentpower.com" },
];

const LOGO_TOKEN = import.meta.env.VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY as string | undefined;

function BrandTile({ brand }: { brand: Brand }) {
  const src = LOGO_TOKEN
    ? `https://img.logo.dev/${brand.domain}?token=${LOGO_TOKEN}&size=200&format=png&retina=true`
    : `https://logo.clearbit.com/${brand.domain}?size=200`;
  return (
    <div className="mx-4 flex h-24 min-w-[200px] items-center justify-center rounded-xl border border-border/60 bg-white/80 px-8 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_30px_-20px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all hover:border-accent/60 hover:shadow-[0_0_0_1px_rgba(198,161,91,0.35),0_20px_40px_-24px_rgba(198,161,91,0.35)]">
      <img
        src={src}
        alt={`${brand.name} logo`}
        loading="lazy"
        decoding="async"
        className="max-h-14 max-w-[160px] object-contain"
        onError={(e) => {
          const img = e.currentTarget;
          const parent = img.parentElement;
          if (!parent) return;
          img.style.display = "none";
          if (!parent.querySelector("[data-fallback]")) {
            const span = document.createElement("span");
            span.setAttribute("data-fallback", "true");
            span.className =
              "font-display text-base font-semibold tracking-[0.18em] text-foreground/85 whitespace-nowrap uppercase";
            span.textContent = brand.name;
            parent.appendChild(span);
          }
        }}
      />
    </div>
  );
}

export function BrandsMarquee({
  heading = true,
}: {
  heading?: boolean;
}) {
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
            <BrandTile key={`r1-${i}`} brand={b} />
          ))}
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max animate-marquee-slow">
          {[...row2, ...row2].map((b, i) => (
            <BrandTile key={`r2-${i}`} brand={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
