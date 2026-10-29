import { Reveal } from "@/components/site/primitives";

/** Scene 2 — a quiet editorial introduction to the family. */
export function ManifestoScene() {
  return (
    <section aria-labelledby="manifesto-title" className="wrap flex min-h-[90svh] flex-col justify-center py-[var(--section-y)]">
      <div className="grid gap-y-14 lg:grid-cols-12">
        <Reveal effect="unveil" className="lg:col-span-7">
          <h2 id="manifesto-title" className="font-display text-[clamp(3.75rem,10vw,10rem)] leading-[0.9] tracking-[-0.02em] whitespace-nowrap">
            Dal 1898
          </h2>
        </Reveal>
        <div className="lg:col-span-3 lg:col-start-9 lg:self-end lg:pb-3">
          <p className="max-w-[30ch] text-[1.0625rem] leading-[1.7]">
            Cinque generazioni di orafi. Eugenio Rocca, la quarta. Giulio Rocca, la quinta. Lo stesso laboratorio.
          </p>
          <p className="type-caption mt-8 text-muted-foreground">Lamezia Terme, Calabria</p>
        </div>
      </div>
    </section>
  );
}
