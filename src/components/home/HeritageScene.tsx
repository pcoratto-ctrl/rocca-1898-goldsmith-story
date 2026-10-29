import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/primitives";

/** Scene 8 — the monumental chronology. The only large 1898 on the page. */
export function HeritageScene() {
  return (
    <section aria-labelledby="heritage-title" className="overflow-hidden bg-primary text-primary-foreground">
      <div className="wrap py-[var(--section-y)]">
        <h2 id="heritage-title" className="sr-only">Cinque generazioni dal 1898</h2>

        <Reveal effect="mask-reveal">
          <p className="type-monument" aria-hidden>1898</p>
          <p className="type-caption mt-6 text-primary-foreground/70">Tradizione orafa di famiglia</p>
        </Reveal>

        <div className="mt-[clamp(5rem,14vw,14rem)] flex justify-end">
          <Reveal effect="mask-reveal" className="w-full max-w-[34rem] lg:mr-[6%]">
            <p className="type-marker">IV</p>
            <p className="type-nav mt-4 text-[clamp(0.9rem,1.2vw,1.125rem)]">Eugenio</p>
            <p className="type-caption mt-3 text-primary-foreground/70">Quarta generazione</p>
          </Reveal>
        </div>

        <div className="mt-[clamp(5rem,12vw,12rem)] lg:ml-[14%]">
          <Reveal effect="mask-reveal" className="max-w-[34rem]">
            <p className="type-marker">V</p>
            <p className="type-nav mt-4 text-[clamp(0.9rem,1.2vw,1.125rem)]">Giulio</p>
            <p className="type-caption mt-3 max-w-[30ch] text-primary-foreground/70">
              Quinta generazione. Formazione tra Italia e Svizzera. Esperienza con Bulgari, anni a Zurigo.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-[clamp(6rem,14vw,14rem)] max-w-md text-center">
          <span aria-hidden className="hairline mx-auto block w-16" />
          <p className="mt-8 font-display text-[clamp(1.25rem,2vw,1.625rem)]">
            Oggi, padre e figlio nello stesso laboratorio.
          </p>
          <Link to="/storia" className="type-nav link-draw mt-8">La nostra storia</Link>
        </div>
      </div>
    </section>
  );
}
