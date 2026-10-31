import { Link } from "@tanstack/react-router";
import { EditorialImage, Reveal } from "@/components/site/primitives";
import { photos } from "./images";

/** Scene 7 — personalisation as a typographic system, normal scrolling. */
export function PersonalisationScene() {
  return (
    <section aria-labelledby="pers-title" className="border-t border-border py-[var(--section-y)]">
      <div className="wrap">
        <h2 id="pers-title" className="type-nav">Personalizzazioni</h2>

        {/* Incastonatura — word left, portrait offset right and lower */}
        <div className="mt-16 grid gap-y-10 lg:mt-24 lg:grid-cols-12">
          <div className="lg:col-span-12">
            <h3 className="type-chapter break-words">Incastonatura</h3>
            <p className="type-caption mt-6 text-muted-foreground">Pietre interne · Pietre esterne</p>
          </div>
          <Reveal effect="settle" className="ml-auto w-[78%] lg:col-span-4 lg:col-start-8 lg:-mt-4 lg:w-full">
            <EditorialImage image={photos.sposa} ratio="4 / 5" sizes="(min-width: 1024px) 33vw, 78vw" />
          </Reveal>
        </div>

        {/* Materiali — aligned right, typographic line */}
        <div className="mt-[var(--section-y)] grid items-end gap-y-10 lg:grid-cols-12">
          <Reveal effect="settle" className="order-2 w-[52%] lg:order-1 lg:col-span-2 lg:w-full">
            <EditorialImage image={photos.texture} ratio="1 / 1" position="50% 60%" sizes="(min-width: 1024px) 16vw, 52vw" />
          </Reveal>
          <div className="order-1 text-right lg:order-2 lg:col-span-8 lg:col-start-5">
            <h3 className="type-chapter">Materiali</h3>
            <p className="mt-6 font-display text-[clamp(1.25rem,2vw,1.75rem)]">Oro 18Kt · Platino · Titanio</p>
          </div>
        </div>

        {/* Incisioni — type only */}
        <div className="mt-[var(--section-y)] lg:ml-[16.666%]">
          <h3 className="type-chapter">Incisioni</h3>
          <ul className="mt-8 grid max-w-3xl gap-x-10 gap-y-3 border-t border-border pt-6 sm:grid-cols-2">
            {["Nomi scritti a mano", "Impronte", "Simboli", "Micro-testi"].map((t) => (
              <li key={t} className="type-caption text-[0.9375rem]">{t}</li>
            ))}
          </ul>
        </div>

        {/* Texture — type only until sharp macro photography exists */}
        <div className="mt-[var(--section-y)] grid lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="type-chapter">Texture</h3>
            <p className="type-caption mt-6 text-muted-foreground">Superfici lavorate a mano</p>
            <Link to="/personalizzazioni" className="type-nav link-draw mt-12 gap-4">
              <span aria-hidden className="inline-block h-px w-10 bg-current" />
              Personalizzazioni
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
