import { Link } from "@tanstack/react-router";
import { EditorialAction, Reveal } from "@/components/site/primitives";
import { collections, hasDistinctDetail, type Collection } from "@/lib/site";

/**
 * Scene 3 — the six collections as a vitrine: square photographic fields
 * separated only by hairline gutters, jewellery first, name second.
 * Each plate opens its chapter on /collezioni.
 */
export function CollectionsScene() {
  return (
    <section aria-labelledby="collezioni-title" className="py-[var(--section-y)]">
      <div className="wrap">
        <h2 id="collezioni-title" className="type-nav border-t border-border-strong pt-5">
          Collezioni
        </h2>
        <ul className="mt-12 grid grid-cols-1 gap-[3px] sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {collections.map((c, i) => (
            <li key={c.slug}>
              <Reveal effect="settle" delay={(i % 3) * 80}>
                <Plate c={c} />
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-end">
          <Link to="/collezioni">
            <EditorialAction>Tutte le collezioni</EditorialAction>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Plate({ c }: { c: Collection }) {
  const detail = hasDistinctDetail(c) ? c.detailImage : undefined;
  const img = c.primaryImage;
  return (
    <a
      href={`/collezioni#collezione-${c.slug}`}
      aria-label={`${c.name}, collezione ${c.numeral}`}
      className="vitrine aspect-square bg-white"
    >
      {img && (
        <img
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="vitrine-img absolute inset-[9%] h-[82%] w-[82%] object-contain"
        />
      )}
      {detail && (
        <img
          src={detail.src}
          alt=""
          aria-hidden
          width={detail.width}
          height={detail.height}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="vitrine-img vitrine-detail absolute inset-0 h-full w-full object-cover"
        />
      )}
      <span className="type-numeral absolute left-5 top-4 text-[0.7rem] text-muted-foreground">{c.numeral}</span>
      <span className="absolute inset-x-5 bottom-4 flex items-center justify-between">
        <span className="vitrine-name type-nav">{c.name}</span>
        <span aria-hidden className="vitrine-cue inline-block h-px w-8 bg-primary" />
      </span>
      <span aria-hidden className="vitrine-rule" />
    </a>
  );
}
