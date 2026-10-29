import { Reveal } from "@/components/site/primitives";
import { photos } from "./images";

/** Scene 6 — turning the page. Photography only, at native width. */
export function PauseScene() {
  const p = photos.mani;
  return (
    <section aria-label="Fotografia" className="py-[var(--section-y-sm)] md:px-[var(--gutter)] md:py-[var(--section-y)]">
      <Reveal effect="crossfade" as="figure" className="mx-auto max-w-[1170px]">
        <div className="relative aspect-[4/5] overflow-hidden bg-surface md:aspect-[3/2]">
          <img
            src={p.src}
            alt={p.alt}
            width={p.width}
            height={p.height}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1170px) 1170px, 100vw"
            className="absolute inset-0 h-full w-full object-cover object-[40%_center]"
          />
        </div>
        <figcaption className="type-caption mt-4 px-[var(--gutter)] text-muted-foreground italic md:px-0">
          Doppia esposizione
        </figcaption>
      </Reveal>
    </section>
  );
}
