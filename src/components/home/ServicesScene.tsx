import { services } from "@/lib/site";

/** Scene 9 — confirmed services as a plain numbered list. Names only. */
export function ServicesScene() {
  return (
    <section aria-labelledby="servizi-title" className="py-[var(--section-y)]">
      <div className="wrap lg:grid lg:grid-cols-12 lg:gap-x-8">
        <h2 id="servizi-title" className="type-nav lg:col-span-3">Servizi</h2>
        <ol className="mt-8 border-t border-border lg:col-span-7 lg:col-start-6 lg:mt-0">
          {services.map((s, i) => (
            <li key={s} className="flex items-baseline gap-8 border-b border-border py-5">
              <span className="type-numeral w-6 text-[0.75rem] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <span className="type-caption text-[1rem] text-foreground">{s}</span>
            </li>
          ))}
        </ol>
        {/* "Servizi" editorial action is added when /servizi becomes live. */}
      </div>
    </section>
  );
}
