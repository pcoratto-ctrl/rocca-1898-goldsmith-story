import { ColophonScene } from "@/components/home/ColophonScene";
import { photos } from "@/components/home/images";
import { EditorialImage, Reveal } from "@/components/site/primitives";
import { family, familyPortrait } from "@/lib/site";

/** /storia — documentary chapters from 1898 to today. Confirmed facts only. */
export function StoriaPage() {
  return (
    <>
      <Opening />
      <Eugenio />
      <Giulio />
      <ItaliaSvizzera />
      <Oggi />
      <ColophonScene />
    </>
  );
}

function Opening() {
  const img = photos.dettaglioMani;
  return (
    <section aria-labelledby="storia-title" className="pt-[var(--header-h-solid)]">
      <div className="wrap grid gap-y-10 pb-[var(--section-y-sm)] pt-12 lg:grid-cols-12 lg:gap-x-8 lg:pt-16">
        <div className="lg:col-span-4 lg:pt-2">
          <p className="type-label flex items-center gap-4 text-muted-foreground">
            <span aria-hidden className="inline-block h-px w-8 bg-primary" />
            ROCCA 1898
          </p>
          <h1 id="storia-title" className="type-display-xl mt-8">
            1898
          </h1>
          <p className="mt-8 max-w-[26ch] text-[clamp(1rem,1.3vw,1.1875rem)] leading-relaxed">
            La tradizione orafa della famiglia Rocca ha inizio nel 1898.
          </p>
        </div>
        <Reveal effect="unveil" className="ml-auto w-[92%] md:w-[85%] lg:col-span-8 lg:w-full" >
          <div style={{ maxWidth: img.width }} className="ml-auto">
            <EditorialImage image={img} ratio="3 / 2" priority position="35% 55%" sizes="(min-width:1024px) 60vw, 92vw" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Eugenio() {
  const e = family.eugenio;
  return (
    <section aria-labelledby="eugenio-title" className="wrap py-[clamp(2.5rem,5vw,4.5rem)]">
      <div className="flex flex-wrap items-baseline gap-x-[clamp(1.5rem,4vw,4rem)] gap-y-3 border-y border-border py-[clamp(1.75rem,3.5vw,3rem)]">
        <p aria-hidden className="type-h2 text-primary">{e.numeral}</p>
        <h2 id="eugenio-title" className="type-nav text-[clamp(0.95rem,1.25vw,1.125rem)] tracking-[0.18em]">{e.name.toUpperCase()}</h2>
        <p className="type-caption text-muted-foreground md:ml-auto">{e.generation}</p>
      </div>
    </section>
  );
}

function Giulio() {
  const g = family.giulio;
  const img = photos.macroMicroscopio;
  return (
    <section aria-labelledby="giulio-title" className="wrap py-[var(--section-y-sm)]">
      <div className="grid gap-y-12 md:grid-cols-12 md:gap-x-8">
        <div className="md:col-span-6 md:col-start-7 md:row-start-1 md:self-center">
          <div className="flex items-baseline gap-x-6">
            <p aria-hidden className="type-h2 text-primary">{g.numeral}</p>
            <div>
              <h2 id="giulio-title" className="type-nav text-[clamp(0.95rem,1.25vw,1.125rem)] tracking-[0.18em]">{g.name.toUpperCase()}</h2>
              <p className="type-caption mt-2 text-muted-foreground">{g.generation}</p>
            </div>
          </div>
          <dl className="mt-12 max-w-[30rem]">
            {g.facts.map((f, i) => (
              <div key={f.place} className={`grid grid-cols-[minmax(7rem,9rem)_1fr] gap-x-6 border-t border-border py-5 ${i === g.facts.length - 1 ? "border-b" : ""}`}>
                <dt className="type-label pt-1 text-muted-foreground">{f.place}</dt>
                <dd className="font-display text-[clamp(1.125rem,1.6vw,1.5rem)] leading-snug">{f.fact}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Reveal effect="unveil" className="ml-auto w-[80%] md:col-span-5 md:row-start-1 md:ml-0 md:w-full">
          <div style={{ maxWidth: 480 }}>
            <EditorialImage image={img} ratio="2 / 3" sizes="(min-width:768px) 40vw, 80vw" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ItaliaSvizzera() {
  return (
    <section aria-labelledby="italia-title" className="wrap py-[var(--section-y-sm)]">
      <h2 id="italia-title" className="sr-only">Italia e Svizzera</h2>
      <div aria-hidden className="grid grid-cols-[auto_1fr_auto] items-center gap-x-[clamp(1rem,3vw,2.5rem)]">
        <span className="type-label text-[clamp(0.85rem,1.4vw,1.25rem)]">Italia</span>
        <Reveal effect="unveil"><span className="block h-px w-full bg-champagne" /></Reveal>
        <span className="type-label text-[clamp(0.85rem,1.4vw,1.25rem)]">Svizzera</span>
      </div>
      <p className="mx-auto mt-10 max-w-[38ch] text-center text-[clamp(1rem,1.3vw,1.1875rem)] leading-relaxed">
        Il laboratorio unisce la tradizione artigianale italiana alle tecniche e agli standard conosciuti nei grandi distretti europei della gioielleria.
      </p>
    </section>
  );
}

function Oggi() {
  const confirmed = familyPortrait.confirmed;
  const img = confirmed
    ? { ...photos.ritrattoFamiglia, alt: "Eugenio e Giulio Rocca" }
    : photos.banco;
  return (
    <section aria-labelledby="oggi-title" className="bg-primary text-primary-foreground">
      <div className="wrap grid items-center gap-y-12 py-[var(--section-y)] md:grid-cols-12 md:gap-x-8">
        <div className="md:col-span-6 md:col-start-7 md:row-start-1">
          <p className="type-label text-champagne">Oggi · Lamezia Terme</p>
          <h2 id="oggi-title" className="type-h2 mt-8 max-w-[18ch]">
            Eugenio e Giulio Rocca lavorano insieme nello stesso laboratorio di famiglia.
          </h2>
        </div>
        <Reveal effect="settle" className="md:col-span-5 md:row-start-1">
          <div style={{ maxWidth: confirmed ? 520 : img.width }}>
            <EditorialImage image={img} ratio={`${img.width} / ${img.height}`} sizes="(min-width:768px) 40vw, 100vw" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
