import { Link } from "@tanstack/react-router";
import { useParallax } from "@/hooks/use-reveal";
import { photos } from "./images";

/** Scene 1 — the photograph is the headline. */
export function HeroScene() {
  const depth = useParallax<HTMLDivElement>(0.05);
  const p = photos.hero;
  return (
    <section id="hero" aria-label="Introduzione" className="relative h-[100svh] min-h-[560px] overflow-hidden bg-ink text-primary-foreground">
      <div ref={depth} className="absolute inset-0 will-change-transform">
        <img
          src={p.src}
          alt={p.alt}
          width={p.width}
          height={p.height}
          // @ts-expect-error valid HTML attribute
          fetchpriority="high"
          decoding="sync"
          className="hero-settle absolute inset-0 h-full w-full object-cover object-[50%_center]"
        />
      </div>
      <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/45 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink/55 to-transparent" />

      <div className="wrap relative flex h-full items-end pb-[clamp(1.75rem,5vh,3.5rem)]">
        <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="type-caption max-w-[26ch] text-[0.9375rem] text-primary-foreground/90">
            Laboratorio orafo dal 1898 — Lamezia Terme
          </h1>
          <Link to="/collezioni" className="type-nav link-draw gap-4 self-start text-primary-foreground sm:self-auto">
            <span aria-hidden className="inline-block h-px w-10 bg-current" />
            Collezioni
          </Link>
        </div>
      </div>
    </section>
  );
}
