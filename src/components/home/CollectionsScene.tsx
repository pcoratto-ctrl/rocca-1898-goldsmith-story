import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { EditorialImage, Reveal } from "@/components/site/primitives";
import { useActiveIndex } from "@/hooks/use-reveal";
import { collections, type Collection } from "@/lib/site";
import { cn } from "@/lib/utils";
import { photos } from "./images";

/** Scene 3 — the signature interaction: sticky index of names, plates scrolling beside it. */
export function CollectionsScene() {
  return (
    <section aria-labelledby="collezioni-title" className="pb-[var(--section-y)]">
      <div className="wrap">
        <div className="flex items-baseline justify-between gap-6 border-t border-border-strong pt-5">
          <h2 id="collezioni-title" className="type-nav">Collezioni</h2>
          <span className="type-caption text-muted-foreground">Sei fedi, sei caratteri</span>
        </div>
        <Reveal effect="settle" className="mx-auto mt-10 max-w-[1600px]">
          <EditorialImage image={photos.panoramica} ratio="16 / 9" sizes="(min-width: 1600px) 1600px, 100vw" />
        </Reveal>
      </div>

      <DesktopIndex />
      <MobileSequence />

      <div className="wrap mt-16 flex justify-end lg:mt-8">
        <Link to="/collezioni" className="type-nav link-draw gap-4">
          <span aria-hidden className="inline-block h-px w-10 bg-current" />
          Tutte le collezioni
        </Link>
      </div>
    </section>
  );
}

function DesktopIndex() {
  const { ref, active } = useActiveIndex<HTMLDivElement>();
  const current = collections[active]!;
  const go = (i: number) =>
    document.getElementById(`plate-${collections[i]!.slug}`)?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div ref={ref} className="wrap hidden lg:grid lg:grid-cols-12 lg:gap-x-8">
      <div className="col-span-5">
        <div className="sticky top-0 flex h-[100svh] flex-col justify-center">
          <ol aria-label="Indice collezioni">
            {collections.map((c, i) => (
              <li key={c.slug}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-current={i === active ? "true" : undefined}
                  className={cn(
                    "type-index block py-1 text-left transition-colors duration-700 ease-atelier",
                    i === active ? "text-foreground" : "text-foreground/15 hover:text-foreground/40",
                  )}
                >
                  {c.name}
                </button>
              </li>
            ))}
          </ol>
          <div className="relative mt-10 h-16" aria-live="polite">
            <div key={current.slug} className="animate-in fade-in duration-500 absolute inset-0 flex items-baseline gap-6">
              <span className="type-numeral text-champagne">{current.numeral}</span>
              <span className="type-caption max-w-[30ch] text-muted-foreground">{current.character}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-7">
        {collections.map((c, i) => (
          <article
            key={c.slug}
            id={`plate-${c.slug}`}
            data-index={i}
            aria-label={c.name}
            className="flex min-h-[100svh] items-center py-[12vh]"
          >
            <Plate c={c} />
          </article>
        ))}
      </div>
    </div>
  );
}

const slot = (c: Collection, which: "primary" | "detail") =>
  which === "primary" ? c.image : c.detail;

function Plate({ c }: { c: Collection }) {
  const P = (cls: string, ratio = "4 / 5") => (
    <Reveal effect="settle" className={cls}>
      <EditorialImage image={slot(c, "primary")} ratio={ratio} placeholderLabel={`${c.name} — fotografia in arrivo`} sizes="45vw" />
    </Reveal>
  );
  const D = (cls: string) => (
    <Reveal effect="crossfade" delay={200} className={cls}>
      <EditorialImage image={slot(c, "detail")} ratio="1 / 1" placeholderLabel="Dettaglio" sizes="20vw" />
    </Reveal>
  );
  switch (c.layout) {
    case "centered":
      return (
        <div className="flex w-full flex-col items-center gap-10">
          {P("w-[62%]")}
          {D("w-[22%]")}
        </div>
      );
    case "wide":
      return (
        <div className="relative w-full pb-20">
          {P("ml-auto w-[88%]", "5 / 4")}
          {D("absolute bottom-0 left-0 w-[32%]")}
        </div>
      );
    case "frontal":
      return (
        <div className="flex w-full items-end gap-6">
          {P("w-[70%]", "1 / 1")}
          {D("w-[30%]")}
        </div>
      );
    case "diagonal":
      return (
        <div className="w-full">
          {P("ml-[8%] w-[52%]")}
          {D("-mt-28 ml-auto w-[34%]")}
        </div>
      );
    case "grid":
      return (
        <div className="grid w-full grid-cols-2 gap-4">
          {P("", "1 / 1")}
          {D("")}
        </div>
      );
    case "drift":
      return (
        <div className="w-full">
          {P("ml-[28%] w-[64%]")}
          {D("-mt-40 ml-[4%] w-[36%]")}
        </div>
      );
  }
}

function MobileSequence() {
  const track = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const w = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 1;
      setI(Math.min(collections.length - 1, Math.round(el.scrollLeft / w)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mt-16 lg:hidden">
      <div
        ref={track}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-[var(--gutter)] px-[var(--gutter)]"
        aria-label="Collezioni, scorri lateralmente"
      >
        {collections.map((c) => (
          <article key={c.slug} className="w-[82vw] max-w-[26rem] shrink-0 snap-start">
            <h3 className="type-index text-[clamp(2.75rem,13vw,4rem)]">{c.name}</h3>
            <div className="mt-5">
              <EditorialImage image={c.image} ratio="4 / 5" placeholderLabel={`${c.name} — fotografia in arrivo`} sizes="82vw" />
            </div>
            <p className="type-caption mt-4 text-muted-foreground">{c.character}</p>
          </article>
        ))}
      </div>
      <div className="wrap mt-8 flex items-center gap-4">
        <span className="type-numeral text-champagne">{String(i + 1).padStart(2, "0")}</span>
        <span className="relative h-px flex-1 bg-border">
          <span
            className="absolute inset-y-0 left-0 bg-foreground transition-[width] duration-500 ease-atelier"
            style={{ width: `${((i + 1) / collections.length) * 100}%` }}
          />
        </span>
        <span className="type-numeral text-muted-foreground">06</span>
      </div>
    </div>
  );
}
