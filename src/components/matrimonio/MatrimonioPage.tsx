import { Link } from "@tanstack/react-router";
import { ColophonScene } from "@/components/home/ColophonScene";
import { photos } from "@/components/home/images";
import { EditorialAction, EditorialImage, Reveal } from "@/components/site/primitives";
import { collections, weddingProcess } from "@/lib/site";

/**
 * /fedi-matrimonio — wedding rings as an editorial presentation.
 * Only confirmed facts; photography never shown above native size.
 */
export function MatrimonioPage() {
  return (
    <>
      <Opening />
      <Modelli />
      <Materiali />
      <Personalizzazioni />
      <Processo />
      <Realizzazione />
      <Pausa />
      <ColophonScene />
    </>
  );
}

/* 1 — Opening: ivory title field + hands photograph (capped at native width). */
function Opening() {
  const p = photos.hero;
  return (
    <section aria-labelledby="matrimonio-title" className="pt-[var(--header-h-solid)]">
      <div className="lg:grid lg:min-h-[85svh] lg:grid-cols-[minmax(0,5fr)_minmax(0,min(58vw,1000px))]">
        <div className="wrap relative z-10 flex flex-col justify-end pb-0 pt-12 lg:px-[var(--gutter)] lg:pb-[clamp(3rem,8vh,6rem)]">
          <p className="type-label flex items-center gap-4 text-muted-foreground">
            <span aria-hidden className="inline-block h-px w-8 bg-primary" />
            ROCCA 1898
          </p>
          <h1 id="matrimonio-title" className="type-display-l mt-8">
            Fedi &amp;
            <br />
            Matrimonio
          </h1>
        </div>
        <div className="relative -mt-4 aspect-[4/5] overflow-hidden bg-surface lg:mt-0 lg:aspect-auto">
          <img
            src={p.src}
            alt={p.alt}
            width={p.width}
            height={p.height}
            decoding="sync"
            // @ts-expect-error fetchpriority is valid HTML
            fetchpriority="high"
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover object-[55%_center]"
          />
        </div>
      </div>
    </section>
  );
}

/* 2 — Modelli: panorama + names line. */
function Modelli() {
  return (
    <section aria-labelledby="modelli-title" className="wrap py-[var(--section-y)]">
      <h2 id="modelli-title" className="type-nav">Modelli</h2>
      <Reveal effect="settle" className="mx-auto mt-10 max-w-[1600px]">
        <EditorialImage image={photos.panoramica2} ratio="16 / 9" fit="contain" className="bg-white" sizes="(min-width: 1600px) 1600px, 100vw" />
      </Reveal>
      <div className="mt-8 flex flex-col gap-8 border-t border-border pt-6 lg:flex-row lg:items-center lg:justify-between">
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {collections.map((c, i) => (
            <li key={c.slug} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden className="text-champagne">·</span>}
              <a href={`/collezioni#collezione-${c.slug}`} className="type-nav link-draw hover:text-primary">
                {c.name}
              </a>
            </li>
          ))}
        </ul>
        <Link to="/collezioni" className="self-start lg:self-auto">
          <EditorialAction>Le collezioni</EditorialAction>
        </Link>
      </div>
    </section>
  );
}

/* 3 — Materiali: editorial index on ivory, one green rule. */
function Materiali() {
  const items = ["Oro 18Kt", "Platino", "Titanio"];
  return (
    <section aria-labelledby="materiali-title" className="wrap py-[var(--section-y-sm)]">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
        <h2 id="materiali-title" className="type-nav lg:col-span-3">Materiali</h2>
        <ul className="mt-8 lg:col-span-8 lg:col-start-5 lg:mt-0">
          {items.map((m, i) => (
            <li key={m} className="material-row group relative py-6">
              <span className="type-nav text-[clamp(1.125rem,2vw,1.5rem)] tracking-[0.2em]">{m}</span>
              <span aria-hidden className={i === 0 ? "material-rule bg-primary" : "material-rule bg-champagne/60"} />
              <span aria-hidden className="material-rule-hover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 4 — Personalizzazioni: one photograph carrying a factual sheet. */
function Personalizzazioni() {
  const groups = [
    { n: "01", name: "Incastonatura", items: ["Pietre interne o esterne"] },
    { n: "02", name: "Incisioni", items: ["Nomi scritti a mano", "Impronte", "Simboli", "Micro-testi"] },
    { n: "03", name: "Texture", items: ["Superfici lavorate a mano"] },
  ];
  return (
    <section aria-labelledby="pers-m-title" className="wrap py-[var(--section-y)]">
      <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-8">
        <Reveal effect="settle" className="lg:col-span-5">
          <EditorialImage image={photos.sposa} ratio="4 / 5" sizes="(min-width: 1024px) 40vw, 100vw" />
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7 lg:self-end">
          <h2 id="pers-m-title" className="type-nav">Personalizzazioni</h2>
          <div className="mt-10 border-t border-border">
            {groups.map((g) => (
              <div key={g.name} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 border-b border-border py-6">
                <span className="type-numeral text-[0.8rem] text-primary">{g.n}</span>
                <div>
                  <h3 className="type-nav">{g.name}</h3>
                  <p className="type-caption mt-2 text-[0.9375rem] text-muted-foreground">{g.items.join(" · ")}</p>
                  {g.name === "Texture" && (
                    <div className="mt-6 w-[min(55%,240px)]">
                      <EditorialImage image={photos.texture} ratio="4 / 5" sizes="240px" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="type-caption mt-6 text-muted-foreground">Materiali: Oro 18Kt · Platino · Titanio</p>
        </div>
      </div>
    </section>
  );
}

/* 5 — The five-step process on one shared hairline. */
function Processo() {
  return (
    <section aria-labelledby="processo-title" className="wrap py-[var(--section-y)]">
      <h2 id="processo-title" className="type-nav">Il percorso</h2>
      <Reveal effect="unveil" className="mt-14">
        <ol className="process-line grid gap-y-0 md:grid-cols-3 md:gap-y-14 lg:grid-cols-5">
          {weddingProcess.map((step, i) => (
            <li key={step} className="process-step relative pb-10 pl-14 md:pb-0 md:pl-0 md:pt-10 md:pr-8">
              <span className="type-numeral block text-[clamp(1.125rem,1.6vw,1.5rem)] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="type-nav mt-3 block text-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

/* 6 — Realizzazione artigianale: the real laboratory. */
function Realizzazione() {
  return (
    <section aria-labelledby="realizzazione-title" className="py-[var(--section-y)]">
      <div className="wrap lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-3 lg:pt-16">
          <h2 id="realizzazione-title" className="type-nav">Realizzazione artigianale</h2>
          <p className="type-caption mt-4 text-muted-foreground">Eugenio e Giulio Rocca, laboratorio di Lamezia Terme</p>
        </div>
        <div className="relative mt-10 lg:col-span-8 lg:col-start-5 lg:mt-0">
          <Reveal effect="unveil-up" className="ml-auto w-full max-w-[1200px] lg:w-[78%]">
            <EditorialImage image={photos.labBn} ratio="1 / 1" sizes="(min-width: 1024px) 50vw, 100vw" />
          </Reveal>
          <Reveal effect="crossfade" delay={300} className="-mt-20 w-[48%] max-w-[275px] lg:absolute lg:-bottom-16 lg:left-0 lg:mt-0 lg:w-[30%]">
            <EditorialImage image={photos.fiamma} ratio="551 / 688" sizes="275px" />
          </Reveal>
        </div>
      </div>
      {/* "Il laboratorio" action is added when /laboratorio-su-misura becomes live. */}
    </section>
  );
}

/* 7 — Photographic pause: intimate, centred, below native width. */
function Pausa() {
  return (
    <section aria-label="Fotografia" className="wrap py-[var(--section-y)]">
      <Reveal effect="crossfade" className="mx-auto w-[min(86vw,500px)]">
        <EditorialImage image={photos.coppia} ratio="593 / 889" sizes="(min-width: 640px) 500px, 86vw" />
      </Reveal>
    </section>
  );
}
