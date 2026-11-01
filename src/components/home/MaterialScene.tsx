/** Scene 4 — the material index on Racing Green: a physical ROCCA brand surface. */
const materials = ["Oro 18Kt", "Platino", "Titanio"] as const;

export function MaterialScene() {
  return (
    <section aria-labelledby="materiali-title" className="bg-primary text-primary-foreground">
      <div className="wrap grid gap-10 py-[var(--section-y-sm)] lg:grid-cols-12 lg:py-[clamp(5rem,9vw,8.5rem)]">
        <h2 id="materiali-title" className="type-caption text-primary-foreground/55 lg:col-span-2 lg:col-start-2 lg:pt-6">
          Materiali
        </h2>
        <ul className="lg:col-span-7 lg:col-start-5">
          {materials.map((m, i) => (
            <li
              key={m}
              className="flex items-baseline justify-between gap-6 border-t border-champagne/25 py-[clamp(1.25rem,2.4vw,2.25rem)] last:border-b"
            >
              <span className="font-display text-[clamp(2.25rem,5vw,5.25rem)] leading-none tracking-[-0.01em] uppercase">{m}</span>
              <span className="type-numeral text-primary-foreground/40">{String(i + 1).padStart(2, "0")}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
