import { useEffect, useRef, useState } from "react";
import { ColophonScene } from "@/components/home/ColophonScene";
import { photos } from "@/components/home/images";
import { EditorialImage, Reveal, SectionLabel } from "@/components/site/primitives";
import { collections, hasDistinctDetail, type Collection } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * /collezioni — editorial catalogue. Layout is production-ready; photography
 * is temporary (low-res model renders at native size, placeholders elsewhere)
 * and swaps into the same slots later without redesign.
 */
export function CollezioniPage() {
  return (
    <>
      <Opening />
      <CollectionIndex />
      <div className="divide-y divide-border">
        {collections.map((c, i) => (
          <Chapter key={c.slug} c={c} index={i} />
        ))}
      </div>
      <ColophonScene />
    </>
  );
}

/* ---------- Opening ---------- */

function Opening() {
  return (
    <section aria-labelledby="collezioni-title" className="wrap pb-[var(--section-y-sm)] pt-[calc(var(--header-h)+var(--section-y-sm))]">
      <SectionLabel className="text-muted-foreground">Collezioni</SectionLabel>
      <h1 id="collezioni-title" className="type-display-l mt-8">
        Collezioni
      </h1>
      <p className="type-lead measure mt-6 text-muted-foreground">
        Sei modelli di fedi nuziali, lavorati a mano nel laboratorio di famiglia a Lamezia Terme.
      </p>
      <Reveal effect="settle" className="mt-14">
        <EditorialImage image={photos.panoramica} ratio="16 / 9" sizes="(min-width: 1440px) 1440px, 100vw" />
      </Reveal>
    </section>
  );
}

/* ---------- Sticky index beneath the main header ---------- */

function CollectionIndex() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset["chapter"] ?? 0));
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    document.querySelectorAll("[data-chapter]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Keep the active name visible in the horizontally scrollable row.
  useEffect(() => {
    listRef.current
      ?.querySelector("[aria-current]")
      ?.scrollIntoView({ inline: "nearest", block: "nearest" });
  }, [active]);

  return (
    <nav
      aria-label="Indice delle collezioni"
      className="sticky top-[var(--header-h-solid)] z-40 border-b border-border bg-background"
    >
      <ul ref={listRef} className="wrap no-scrollbar flex gap-8 overflow-x-auto lg:justify-between">
        {collections.map((c, i) => (
          <li key={c.slug} className="shrink-0">
            <a
              href={`#collezione-${c.slug}`}
              aria-current={i === active ? "true" : undefined}
              className={cn(
                "type-nav flex min-h-12 items-center gap-2.5 transition-colors duration-500 ease-atelier",
                i === active
                  ? "text-foreground shadow-[inset_0_-1px_0_var(--champagne)]"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span className="type-numeral text-[0.7rem] text-champagne">{c.numeral}</span>
              {c.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ---------- Chapters ---------- */

function Chapter({ c, index }: { c: Collection; index: number }) {
  return (
    <section
      id={`collezione-${c.slug}`}
      data-chapter={index}
      aria-labelledby={`titolo-${c.slug}`}
      className="wrap scroll-mt-[calc(var(--header-h-solid)+4rem)] py-[var(--section-y)]"
    >
      <ChapterBody c={c} />
    </section>
  );
}

function Num({ c }: { c: Collection }) {
  return <span className="type-numeral text-champagne">{c.numeral}</span>;
}

function Name({ c, className }: { c: Collection; className?: string }) {
  return (
    <h2 id={`titolo-${c.slug}`} className={cn("type-h2 uppercase", className)}>
      {c.name}
    </h2>
  );
}

/** Client-approved description only; nothing is shown until it exists. */
function Note({ c, className }: { c: Collection; className?: string }) {
  if (!c.description) return null;
  return <p className={cn("type-caption measure text-muted-foreground", className)}>{c.description}</p>;
}

/**
 * Primary 4:5 slot. Temporary renders sit in the final frame (object-contain,
 * white plate matching the source background); final photography (≈2400×3000)
 * swaps in via site.ts without layout changes.
 */
function Primary({ c, className, ratio = "4 / 5" }: { c: Collection; className?: string; ratio?: string }) {
  return (
    <Reveal effect="settle" className={cn(className)}>
      <EditorialImage
        image={c.primaryImage}
        ratio={ratio}
        fit="contain"
        className="bg-white"
        sizes="(min-width: 1024px) 50vw, 90vw"
      />
    </Reveal>
  );
}

/**
 * Detail 1:1 slot, same treatment at a smaller scale. Hidden while it holds
 * the same temporary render as the primary image; it reappears automatically
 * once separate detail/macro photography is assigned in site.ts.
 */
function Detail({ c, className }: { c: Collection; className?: string }) {
  if (!hasDistinctDetail(c)) return null;
  return (
    <div className={cn("w-full", className)}>
      <Reveal effect="crossfade" delay={150}>
        <EditorialImage
          image={c.detailImage}
          ratio="1 / 1"
          fit="contain"
          className="bg-white"
          sizes="(min-width: 1024px) 25vw, 45vw"
        />
      </Reveal>
    </div>
  );
}

function ChapterBody({ c }: { c: Collection }) {
  switch (c.layout) {
    // CLASSIC — balanced, timeless, precise: the strongest symmetry of the six.
    case "centered":
      return (
        <div className="flex flex-col items-center text-center">
          <Num c={c} />
          <Name c={c} className="mt-4" />
          <Note c={c} className="mt-4" />
          <Primary c={c} className="mt-14 w-full max-w-[26rem]" />
          <Detail c={c} className="mt-12 max-w-[20rem]" />
        </div>
      );

    // HOLLOW — lightness and negative space: image pushed aside, detail floating in the void.
    case "wide":
      return (
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="flex flex-col items-start lg:col-span-4">
            <Num c={c} />
            <Name c={c} className="mt-4" />
            <Note c={c} className="mt-4" />
          </div>
          <div className="relative mt-14 lg:col-span-8 lg:mt-0">
            <Primary c={c} className="ml-auto w-[78%] lg:w-[58%]" />
            <Detail c={c} className="mt-10 w-[45%] lg:absolute lg:bottom-20 lg:left-0 lg:mt-0 lg:w-[30%]" />
          </div>
        </div>
      );

    // PLATE — graphic, flat, architectural: strict geometry on one baseline.
    case "frontal":
      return (
        <div>
          <div className="flex flex-col items-start">
            <Num c={c} />
            <Name c={c} className="mt-4" />
            <Note c={c} className="mt-4" />
          </div>
          <div className="mt-14 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <Primary c={c} className="w-[85%] lg:col-span-5 lg:w-full" />
            <Detail c={c} className="mt-10 w-[40%] lg:col-span-3 lg:mt-0" />
          </div>
        </div>
      );

    // TWIST — movement: offset composition, controlled diagonal between image and detail.
    case "diagonal":
      return (
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="flex flex-col items-start lg:col-span-3 lg:col-start-2 lg:pt-28">
            <Num c={c} />
            <Name c={c} className="mt-4" />
            <Note c={c} className="mt-4" />
          </div>
          <div className="mt-14 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <Primary c={c} className="w-[80%] lg:w-[72%]" />
            <Detail c={c} className="ml-auto -mt-12 w-[45%] lg:-mt-28 lg:w-[38%]" />
          </div>
        </div>
      );

    // SQUARE — precision: the most architectural chapter, a strict rectangular grid.
    case "grid":
      return (
        <div>
          <div className="flex flex-col items-start lg:max-w-[33%]">
            <Num c={c} />
            <Name c={c} className="mt-4" />
            <Note c={c} className="mt-4" />
          </div>
          <div className="mt-14 grid grid-cols-2 items-start gap-4 lg:grid-cols-12 lg:gap-x-8">
            <Primary c={c} className="lg:col-span-4 lg:col-start-5" />
            <Detail c={c} className="lg:col-span-3 lg:col-start-9" />
          </div>
        </div>
      );

    // WAVES — fluidity: open placement, asymmetric breathing space, no rigid axis.
    case "drift":
      return (
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="flex flex-col items-start lg:col-span-3">
            <Num c={c} />
            <Name c={c} className="mt-4" />
            <Note c={c} className="mt-4" />
          </div>
          <div className="mt-14 lg:col-span-9 lg:mt-0">
            <Primary c={c} className="w-full lg:ml-auto lg:w-[52%]" />
            <Detail c={c} className="ml-[10%] mt-8 w-[50%] lg:-mt-36 lg:w-[26%]" />
          </div>
        </div>
      );
  }
}
