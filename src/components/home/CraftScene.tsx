import { Link } from "@tanstack/react-router";
import { EditorialImage, Reveal } from "@/components/site/primitives";
import { photos } from "./images";

/** Scene 5 — a magazine feature on the workshop. */
export function CraftScene() {
  return (
    <section aria-labelledby="craft-title" className="py-[var(--section-y)]">
      <div className="lg:grid lg:grid-cols-[min(60vw,1200px)_minmax(0,1fr)] lg:gap-x-[clamp(2.5rem,5vw,6rem)]">
        <div className="relative">
          <Reveal effect="unveil-up">
            <EditorialImage image={photos.labBn} ratio="1 / 1" sizes="(min-width: 1024px) 60vw, 100vw" />
          </Reveal>
          <Reveal
            effect="crossfade"
            delay={400}
            className="absolute -bottom-16 right-[var(--gutter)] w-[52%] max-w-[275px] lg:-bottom-24 lg:-right-[clamp(4rem,9vw,9rem)] lg:w-[40%]"
          >
            <EditorialImage image={photos.fiamma} ratio="551 / 688" sizes="275px" />
          </Reveal>
        </div>

        <div className="px-[var(--gutter)] pt-28 lg:pl-0 lg:pt-[18vw]">
          <div className="max-w-[24rem] lg:ml-[clamp(2rem,6vw,6rem)]">
            <h2 id="craft-title" className="type-h2">Il laboratorio</h2>
            <p className="mt-8">
              Ogni fede nasce a mano, nel laboratorio di famiglia, dove Eugenio e Giulio Rocca lavorano fianco a fianco.
            </p>
            <p className="mt-5 text-muted-foreground">
              La tradizione artigianale italiana incontra le tecniche e gli standard dei grandi distretti orafi europei.
            </p>
            <p className="type-caption mt-10 border-t border-border pt-4 text-muted-foreground">
              Eugenio e Giulio Rocca, laboratorio di Lamezia Terme
            </p>
            <Link to="/storia" className="type-nav link-draw mt-6 hover:text-primary">Storia</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
