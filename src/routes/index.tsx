import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-home-fedi-1600x900.webp.asset.json";
import panoramica from "@/assets/panoramica-modelli-fedi.webp.asset.json";
import labBn from "@/assets/laboratorio-lavorazione-bn.webp.asset.json";
import fiamma from "@/assets/laboratorio-fiamma.webp.asset.json";
import mani from "@/assets/mani-sposi-doppia-esposizione.webp.asset.json";
import texture from "@/assets/texture-fedi-oro.webp.asset.json";
import sposa from "@/assets/sposa-anelli-artistica.webp.asset.json";
import { EditorialImage, Reveal, SectionLabel } from "@/components/site/primitives";
import { ContactActions } from "@/components/site/ContactActions";
import { useParallax } from "@/hooks/use-reveal";
import { collections, contacts, personalisationAreas, type Collection } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROCCA 1898 — Fedi nuziali, laboratorio orafo di famiglia" },
      {
        name: "description",
        content:
          "Laboratorio orafo della famiglia Rocca dal 1898. Fedi nuziali lavorate a mano a Lamezia Terme: collezioni, personalizzazioni, cinque generazioni.",
      },
      { property: "og:title", content: "ROCCA 1898 — Fedi nuziali dal 1898" },
      {
        property: "og:description",
        content: "Laboratorio orafo di famiglia: collezioni di fedi e personalizzazioni lavorate a mano.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Collections />
      <Craft />
      <EmotionalBand />
      <Personalisation />
      <Heritage />
      <Contact />
    </>
  );
}

/* 1 — Hero */
function Hero() {
  const img = useParallax<HTMLImageElement>(0.08);
  return (
    <section aria-label="Introduzione" className="relative h-[100svh] min-h-[560px] overflow-hidden bg-ink text-primary-foreground">
      <img
        ref={img}
        src={hero.url}
        alt="Mani di due sposi intrecciate, con fedi e anello, accanto a un bouquet di rose"
        width={1600}
        height={900}
        // @ts-expect-error valid HTML attribute
        fetchpriority="high"
        decoding="sync"
        className="absolute inset-0 h-full w-full object-cover object-[52%_center] will-change-transform"
      />
      <div aria-hidden className="photo-veil absolute inset-0" />
      <div className="wrap relative flex h-full flex-col justify-end pb-[clamp(3rem,9vh,7rem)]">
        <p className="type-label text-primary-foreground/80">Laboratorio orafo · dal 1898</p>
        <h1 className="type-display-xl mt-6 max-w-[14ch]">
          Fedi nuziali, <em className="font-light">fatte a mano</em>
        </h1>
        <Link to="/collezioni" className="type-label link-draw mt-10 self-start">
          Scopri le collezioni
        </Link>
      </div>
    </section>
  );
}

/* 2 — Manifesto */
function Manifesto() {
  return (
    <section className="wrap-content pb-[var(--section-y-sm)] pt-[calc(var(--section-y)*1.15)]">
      <Reveal className="grid gap-10 md:grid-cols-12">
        <SectionLabel className="text-muted-foreground md:col-span-3 md:pt-3">Dal 1898</SectionLabel>
        <div className="md:col-span-9">
          <p className="type-display-l text-balance">
            Cinque generazioni della famiglia Rocca, <em>un solo laboratorio</em>, la stessa cura per
            ogni fede.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* 3 — Collections: the strongest moment */
function Collections() {
  const [featured, ...rest] = collections;
  return (
    <section aria-labelledby="collezioni-title" className="pb-[var(--section-y)] pt-[var(--section-y-sm)]">
      <div className="wrap">
        <Reveal className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 border-b border-border-strong pb-8">
          <div className="min-w-0">
            <SectionLabel className="text-muted-foreground">Le collezioni</SectionLabel>
            <h2 id="collezioni-title" className="type-display-l mt-6">
              Sei mondi, <em>una tradizione</em>
            </h2>
          </div>
          <Link to="/collezioni" className="type-label link-draw hidden shrink-0 sm:inline-flex">
            Tutte le collezioni
          </Link>
        </Reveal>

        {/* Featured */}
        <div className="mt-[clamp(3rem,6vw,6rem)] grid items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <CollectionFrame c={featured} ratio="4 / 5" />
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9 md:pb-12" delay={120}>
            <CollectionText c={featured} large />
          </Reveal>
        </div>

        {/* Staggered rhythm for the other five */}
        <div className="mt-[clamp(4rem,9vw,9rem)] grid gap-x-[clamp(1.25rem,3vw,3rem)] gap-y-16 sm:grid-cols-2 lg:grid-cols-12">
          {rest.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 90} className={cn(staggerClass[i])}>
              <CollectionFrame c={c} ratio={i === 1 || i === 3 ? "1 / 1" : "4 / 5"} />
              <div className="mt-6">
                <CollectionText c={c} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Overview band: all models together */}
      <figure className="wrap-content mt-[clamp(5rem,10vw,10rem)]">
        <Reveal>
          <EditorialImage
            image={{ src: panoramica.url, alt: "Sei modelli di fedi in oro giallo e rosa, affiancati", width: 1600, height: 900 }}
            ratio="16 / 9"
            sizes="(min-width: 1200px) 1152px, 100vw"
            className="bg-background"
          />
        </Reveal>
        <figcaption className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="type-numeral text-muted-foreground">Classic · Hollow · Plate · Twist · Square · Waves</span>
          <Link to="/collezioni" className="type-label link-draw self-start">Scopri le collezioni</Link>
        </figcaption>
      </figure>
    </section>
  );
}

const staggerClass = [
  "lg:col-span-4 lg:col-start-1",
  "lg:col-span-3 lg:col-start-6 lg:mt-32",
  "lg:col-span-3 lg:col-start-10 lg:mt-12",
  "lg:col-span-4 lg:col-start-2 lg:mt-8",
  "lg:col-span-5 lg:col-start-7 lg:-mt-24",
];

function CollectionFrame({ c, ratio }: { c: Collection; ratio: string }) {
  return (
    <Link to="/collezioni" hash={c.slug} className="block" aria-label={`Collezione ${c.name}`}>
      <EditorialImage image={c.image} ratio={ratio} zoom placeholderLabel={`${c.name} — fotografia in arrivo`} sizes="(min-width: 1024px) 40vw, 100vw" />
    </Link>
  );
}

function CollectionText({ c, large }: { c: Collection; large?: boolean }) {
  return (
    <div>
      <p className="type-numeral text-champagne">{c.numeral}</p>
      <h3 className={cn(large ? "type-display-l" : "type-h2", "mt-2")}>{c.name}</h3>
      <p className={cn("mt-3 text-muted-foreground", large && "type-lead")}>{c.character}</p>
    </div>
  );
}

/* 4 — Craft */
function Craft() {
  return (
    <section aria-labelledby="craft-title" className="bg-surface section-y">
      <div className="wrap grid items-center gap-[clamp(2.5rem,6vw,7rem)] md:grid-cols-12">
        <div className="relative md:col-span-6 lg:col-span-6">
          <Reveal>
            <EditorialImage
              image={{ src: labBn.url, alt: "Mani dell'orafo al banco durante la lavorazione di una fede, in bianco e nero", width: 1200, height: 1200 }}
              ratio="1 / 1"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="max-w-[600px]"
            />
          </Reveal>
          <Reveal delay={150} className="absolute -bottom-12 right-0 hidden w-[38%] max-w-[260px] lg:block">
            <EditorialImage
              image={{ src: fiamma.url, alt: "Fiamma del cannello che scalda l'oro in laboratorio", width: 551, height: 688 }}
              ratio="4 / 5"
              sizes="260px"
              className="ring-[clamp(0.5rem,1vw,0.875rem)] ring-surface"
            />
          </Reveal>
        </div>
        <Reveal className="md:col-span-6 lg:col-span-5 lg:col-start-8">
          <SectionLabel className="text-muted-foreground">Il laboratorio</SectionLabel>
          <h2 id="craft-title" className="type-h2 mt-6">
            Ogni fede nasce al banco, <em>a mano</em>.
          </h2>
          <p className="measure mt-8 text-muted-foreground">
            Nel laboratorio di famiglia la tradizione artigianale italiana incontra tecniche e standard
            maturati nei grandi distretti europei della gioielleria.
          </p>
          <Link to="/storia" className="type-label link-draw mt-10">Il nostro laboratorio</Link>
        </Reveal>
      </div>
    </section>
  );
}

/* 5 — Emotional photography */
function EmotionalBand() {
  return (
    <section aria-label="Un gesto per sempre" className="wrap section-y">
      <div className="grid items-end gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <EditorialImage
            image={{ src: mani.url, alt: "Mani di sposa con anello, in doppia esposizione con fiori", width: 1170, height: 780 }}
            ratio="3 / 2"
            sizes="(min-width: 1280px) 1170px, (min-width: 768px) 66vw, 100vw"
            className="max-w-[1170px]"
          />
        </Reveal>
        <Reveal className="md:col-span-4" delay={150}>
          <p className="type-display-l">
            Un gesto
            <br />
            <em>per sempre.</em>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* 6 — Personalisation */
function Personalisation() {
  return (
    <section aria-labelledby="pers-title" className="border-t border-border section-y">
      <div className="wrap grid gap-[clamp(2.5rem,6vw,7rem)] md:grid-cols-12">
        <Reveal className="md:col-span-5 md:order-2 lg:col-span-4 lg:col-start-9">
          <EditorialImage
            image={{ src: texture.url, alt: "Dettaglio della texture lavorata su fedi in oro", width: 992, height: 1404 }}
            ratio="3 / 4"
            sizes="(min-width: 768px) 33vw, 100vw"
            zoom
          />
        </Reveal>
        <div className="md:col-span-7 md:order-1">
          <Reveal>
            <SectionLabel className="text-muted-foreground">Personalizzazioni</SectionLabel>
            <h2 id="pers-title" className="type-h2 mt-6 max-w-[18ch]">
              Una fede che porta <em>il vostro segno</em>.
            </h2>
          </Reveal>
          <ol className="mt-12 border-t border-border-strong">
            {personalisationAreas.map((a, i) => (
              <Reveal as="li" key={a.name} delay={i * 80} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-border-strong py-6 sm:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.2fr)] sm:items-baseline">
                <span className="type-numeral text-champagne">{String(i + 1).padStart(2, "0")}</span>
                <span className="type-h3">{a.name}</span>
                <span className="col-start-2 text-muted-foreground sm:col-start-3">{a.note}</span>
              </Reveal>
            ))}
          </ol>
          <Link to="/personalizzazioni" className="type-label link-draw mt-10">Scopri le personalizzazioni</Link>
        </div>
      </div>
    </section>
  );
}

/* 7 — Heritage */
function Heritage() {
  const steps = [
    { year: "1898", title: "L'inizio", text: "Nasce la tradizione orafa della famiglia Rocca." },
    { year: "IV", title: "Eugenio Rocca", text: "La quarta generazione custodisce il mestiere al banco." },
    {
      year: "V",
      title: "Giulio Rocca",
      text: "Formazione tra Italia e Svizzera, l'esperienza con Bulgari e diversi anni a Zurigo.",
    },
  ];
  return (
    <section aria-labelledby="heritage-title" className="bg-primary text-primary-foreground section-y">
      <div className="wrap">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <SectionLabel className="text-primary-foreground/70">La famiglia</SectionLabel>
            <h2 id="heritage-title" className="type-display-l mt-6">
              Padre e figlio, <em>lo stesso laboratorio</em>.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-8 md:pt-4" delay={120}>
            <EditorialImage
              image={{ src: sposa.url, alt: "Sposa che mostra le fedi, ritratto artistico", width: 800, height: 1200 }}
              ratio="4 / 5"
              sizes="(min-width: 768px) 40vw, 100vw"
              position="center 30%"
              className="max-w-[460px] bg-primary-deep md:ml-auto"
            />
          </Reveal>
        </div>

        <ol className="mt-[clamp(4rem,8vw,8rem)] grid gap-12 border-t border-champagne/50 pt-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120}>
              <p className="type-display-l text-champagne">{s.year}</p>
              <h3 className="type-h3 mt-4">{s.title}</h3>
              <p className="measure mt-3 text-primary-foreground/75">{s.text}</p>
            </Reveal>
          ))}
        </ol>

        <Link to="/storia" className="type-label link-draw mt-14">La nostra storia</Link>
      </div>
    </section>
  );
}

/* 8 — Contact */
function Contact() {
  return (
    <section aria-labelledby="contact-title" className="section-y">
      <div className="wrap">
        <Reveal className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <SectionLabel className="text-muted-foreground">Contatti</SectionLabel>
            <h2 id="contact-title" className="type-display-l mt-6">Parliamone.</h2>
          </div>
          <address className="not-italic text-muted-foreground md:col-span-4 md:col-start-9 md:self-end">
            {contacts.address.street}
            <br />
            {contacts.address.city}, {contacts.address.country}
            <br />
            <a href={contacts.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="type-label link-draw text-foreground">
              Apri in Maps
            </a>
          </address>
        </Reveal>
        <Reveal delay={120}>
          <ContactActions className="mt-14" />
        </Reveal>
      </div>
    </section>
  );
}
