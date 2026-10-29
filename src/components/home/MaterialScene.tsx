import { EditorialImage, Reveal } from "@/components/site/primitives";
import { photos } from "./images";

/** Scene 4 — a near-silent material pause on ink. */
export function MaterialScene() {
  return (
    <section aria-label="Dettaglio della materia" className="bg-ink text-primary-foreground">
      <div className="wrap grid items-end gap-6 py-[var(--section-y-sm)] lg:grid-cols-12 lg:py-[var(--section-y)]">
        <Reveal effect="settle" className="lg:col-span-5 lg:col-start-2 lg:max-w-[540px]">
          <EditorialImage image={photos.texture} ratio="3 / 4" sizes="(min-width: 1024px) 540px, 92vw" />
        </Reveal>
        <p className="type-caption text-right text-primary-foreground/60 lg:col-span-2 lg:col-start-11">Oro 18Kt</p>
      </div>
    </section>
  );
}
