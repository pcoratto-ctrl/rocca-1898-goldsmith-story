import { ColophonScene } from "@/components/home/ColophonScene";
import { photos } from "@/components/home/images";
import { EditorialImage, Reveal } from "@/components/site/primitives";

/**
 * /laboratorio-su-misura — documentary, technical, workshop-driven.
 * Only confirmed facts; every photograph is capped at its native width.
 */
export function LaboratorioPage() {
  return (
    <>
      <Opening />
      <AlBanco />
      <SuMisura />
      <Finitura />
      <Pausa />
      <ColophonScene />
    </>
  );
}

type Img = { src: string; alt: string; width: number; height: number };

/** Native-size image: never wider than its source. */
function Native({ image, className }: { image: Img; className?: string }) {
  return (
    <div className={className} style={{ maxWidth: image.width }}>
      <EditorialImage image={image} ratio={`${image.width} / ${image.height}`} sizes={`${image.width}px`} />
    </div>
  );
}

/* 1 — Opening: title field + B&W bench photo, flame placed beside it on the spread. */
function Opening() {
  return (
    <section aria-labelledby="lab-title" className="pt-[var(--header-h-solid)]">
      <div className="wrap pb-[var(--section-y-sm)] pt-12 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:pt-16">
        <div className="flex flex-col justify-end lg:col-span-4 lg:pb-4">
          <p className="type-label flex items-center gap-4 text-muted-foreground">
            <span aria-hidden className="inline-block h-px w-8 bg-primary" />
            ROCCA 1898
          </p>
          <h1 id="lab-title" className="type-display-l mt-8">
            Laboratorio
            <br />
            &amp; Su misura
          </h1>
        </div>
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end lg:col-span-8 lg:mt-0">
          <Reveal effect="unveil-up" className="w-full sm:w-[72%]" >
            <div className="max-w-[1200px]">
              <EditorialImage image={photos.labBn} ratio="1 / 1" priority sizes="(min-width: 1024px) 45vw, (min-width: 640px) 72vw, 100vw" />
            </div>
          </Reveal>
          <Reveal effect="crossfade" delay={300} className="w-[48%] max-w-[275px] self-end sm:w-[28%] sm:translate-y-10">
            <EditorialImage image={photos.fiamma} ratio="551 / 688" sizes="275px" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 2 — Al banco: the bench photograph as a documentary print. */
function AlBanco() {
  return (
    <section aria-labelledby="banco-title" className="wrap py-[var(--section-y)]">
      <div className="border-t border-border pt-6 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <h2 id="banco-title" className="type-nav lg:col-span-3">Al banco</h2>
        <div className="mt-8 lg:col-span-9 lg:mt-0 lg:flex lg:items-end lg:gap-10">
          <Reveal effect="settle" className="w-full lg:w-auto lg:shrink-0">
            <Native image={photos.banco} className="w-full lg:w-[min(600px,44vw)]" />
          </Reveal>
          <div className="mt-8 max-w-[22rem] lg:mt-0">
            <p>Eugenio e Giulio Rocca lavorano insieme nello stesso laboratorio di famiglia.</p>
            <p className="type-caption mt-6 border-t border-border pt-4 text-muted-foreground">
              Laboratorio di Lamezia Terme
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3 — Su misura: a ruled workshop sheet; specimens support the facts. */
function SuMisura() {
  const rows: { code: string; name: string; note: string; specimens: Img[] }[] = [
    { code: "01", name: "Incastonatura", note: "Pietre interne o esterne", specimens: [photos.diamanti] },
    { code: "02", name: "Incisioni", note: "Nomi scritti a mano · Impronte · Simboli · Micro-testi", specimens: [photos.impronta, photos.microtesto] },
    { code: "03", name: "Texture", note: "Superfici lavorate a mano", specimens: [] },
    { code: "04", name: "Materiali", note: "Oro 18Kt · Platino · Titanio", specimens: [] },
  ];
  return (
    <section aria-labelledby="sumisura-title" className="wrap py-[var(--section-y)]">
      <h2 id="sumisura-title" className="type-nav">Su misura</h2>
      <ol className="mt-10 border-t border-foreground/80">
        {rows.map((r) => (
          <li
            key={r.code}
            className="grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4 border-b border-border py-8 md:grid-cols-[4rem_minmax(0,14rem)_minmax(0,1fr)_auto] md:gap-x-8"
          >
            <span className="type-label tabular-nums text-primary">{r.code}</span>
            <h3 className="type-nav">{r.name}</h3>
            <p className="type-caption col-start-2 mt-2 text-[0.9375rem] text-muted-foreground md:col-start-3 md:mt-0">{r.note}</p>
            {(r.specimens.length > 0 || r.name === "Texture") && (
              <div className="col-start-2 mt-6 flex flex-wrap items-start gap-4 md:col-start-4 md:row-start-1 md:mt-0 md:justify-end">
                {r.specimens.map((s) => (
                  <figure key={s.src} className="w-[min(40vw,var(--w))] border border-border p-1" style={{ "--w": `${s.width / 1.6}px` } as React.CSSProperties}>
                    <EditorialImage image={s} ratio="1 / 1" sizes={`${s.width}px`} />
                  </figure>
                ))}
                {r.name === "Texture" && (
                  <figure className="w-[min(40vw,160px)] border border-border p-1">
                    <EditorialImage image={photos.texture} ratio="4 / 5" sizes="240px" />
                  </figure>
                )}
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

/* 4 — Finitura: photograph, label, hairline. Nothing else. */
function Finitura() {
  return (
    <section aria-labelledby="finitura-title" className="wrap py-[var(--section-y)]">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-12">
        <Reveal effect="settle" className="w-full sm:w-[min(480px,50vw)]">
          <Native image={photos.lucidatura} />
        </Reveal>
        <div className="flex items-center gap-4 sm:flex-col sm:items-start">
          <span aria-hidden className="inline-block h-px w-10 bg-champagne sm:h-16 sm:w-px" />
          <h2 id="finitura-title" className="type-label">Lucidatura</h2>
        </div>
      </div>
    </section>
  );
}

/* 5 — Pause: the finished result, centred at native width. */
function Pausa() {
  return (
    <section aria-label="Fotografia" className="wrap py-[var(--section-y)]">
      <Reveal effect="crossfade" className="mx-auto w-[min(86vw,516px)]">
        <EditorialImage image={photos.maniVerticale} ratio="516 / 916" sizes="(min-width: 640px) 516px, 86vw" />
      </Reveal>
    </section>
  );
}
