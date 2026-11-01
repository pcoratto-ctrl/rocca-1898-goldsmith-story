import { Link } from "@tanstack/react-router";
import { EditorialImage, Reveal } from "@/components/site/primitives";
import { photos } from "./images";

/**
 * Scene 7 — personalisation as four deliberately different chapters:
 * one lead word with photography, then quieter editorial treatments.
 * Giant serif type is used once, not four times.
 */
export function PersonalisationScene() {
  return (
    <section aria-labelledby="pers-title" className="border-t border-border py-[var(--section-y)]">
      <div className="wrap">
        <h2 id="pers-title" className="type-nav">Personalizzazioni</h2>

        {/* Incastonatura — the lead chapter: reduced display word, portrait offset right and lower */}
        <div className="mt-16 grid gap-y-10 lg:mt-24 lg:grid-cols-12">
          <div className="lg:col-span-12">
            <h3 className="type-chapter break-words">Incastonatura</h3>
            <p className="type-caption mt-6 text-muted-foreground">Pietre interne · Pietre esterne</p>
          </div>
          <Reveal effect="settle" className="ml-auto w-[78%] lg:col-span-4 lg:col-start-8 lg:-mt-4 lg:w-full">
            <EditorialImage image={photos.sposa} ratio="4 / 5" sizes="(min-width: 1024px) 33vw, 78vw" />
          </Reveal>
        </div>

        {/* Materiali — small editorial heading in Racing Green, one factual line */}
        <div className="mt-[var(--section-y)] grid lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-8 lg:text-right">
            <span aria-hidden className="hairline mb-8 block w-16 lg:ml-auto" />
            <h3 className="type-h3 uppercase tracking-[0.06em] text-primary">Materiali</h3>
            <p className="mt-5 font-display text-[clamp(1.25rem,2vw,1.75rem)]">Oro 18Kt · Platino · Titanio</p>
          </div>
        </div>

        {/* Incisioni — medium heading, factual list */}
        <div className="mt-[var(--section-y)] lg:ml-[16.666%]">
          <h3 className="type-h2">Incisioni</h3>
          <ul className="mt-8 grid max-w-3xl gap-x-10 gap-y-3 border-t border-border pt-6 sm:grid-cols-2">
            {["Nomi scritti a mano", "Impronte", "Simboli", "Micro-testi"].map((t) => (
              <li key={t} className="type-caption text-[0.9375rem]">{t}</li>
            ))}
          </ul>
        </div>

        {/* Texture — the quiet closing chapter */}
        <div className="mt-[var(--section-y)] grid lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="type-nav">Texture</h3>
            <p className="type-caption mt-4 text-muted-foreground">Superfici lavorate a mano</p>
            <Link to="/personalizzazioni" className="type-nav link-draw mt-12 gap-4 hover:text-primary">
              <span aria-hidden className="inline-block h-px w-10 bg-current" />
              Personalizzazioni
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
