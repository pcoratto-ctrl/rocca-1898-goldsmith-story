import { Link } from "@tanstack/react-router";
import { SectionLabel } from "./primitives";

/** Temporary page shown until the internal page is built after homepage approval. */
export function HoldingPage({ label, title, intro }: { label: string; title: string; intro: string }) {
  return (
    <section className="wrap-content flex min-h-[80svh] flex-col justify-center pt-[var(--header-h)] section-y">
      <SectionLabel className="text-muted-foreground">{label}</SectionLabel>
      <h1 className="type-display-xl mt-8">{title}</h1>
      <p className="type-lead measure mt-8 text-muted-foreground">{intro}</p>
      <Link to="/" className="type-label link-draw mt-12 self-start">
        Torna alla home
      </Link>
    </section>
  );
}
