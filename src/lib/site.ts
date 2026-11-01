// Single source for confirmed brand content. Only client-provided facts here.

export const contacts = {
  phones: [
    { label: "Svizzera", display: "+41 76 268 48 28", tel: "+41762684828" },
    { label: "Italia, cellulare", display: "+39 331 3583226", tel: "+393313583226" },
    { label: "Italia, laboratorio", display: "+39 0968 423522", tel: "+390968423522" },
  ],
  // WhatsApp number still to be confirmed by the client.
  whatsapp: { display: "+39 331 3583226", wa: "393313583226" },
  email: "giulioroccalab@gmail.com",
  address: {
    street: "C.so Numistrano, 81",
    city: "88046 Lamezia Terme (CZ)",
    country: "Italia",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("Corso Numistrano 81, 88046 Lamezia Terme CZ, Italia"),
  },
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${contacts.whatsapp.wa}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Public navigation: only destinations with a designed page.
export const navItems = [
  { to: "/collezioni", label: "Collezioni" },
  { to: "/storia", label: "Storia" },
  { to: "/contatti", label: "Contatti" },
] as const;

/**
 * Final architecture. Entries with `live: false` have no route yet and are
 * never rendered; each moves into `navItems` when its real page is built.
 */
export const siteArchitecture = [
  { to: "/collezioni", label: "Collezioni", title: "Collezioni", live: true },
  { to: "/fedi-matrimonio", label: "Matrimonio", title: "Fedi & Matrimonio", live: false },
  { to: "/laboratorio-su-misura", label: "Laboratorio", title: "Laboratorio & Su misura", live: false },
  { to: "/storia", label: "Storia", title: "La nostra storia", live: true },
  { to: "/servizi", label: "Servizi", title: "Servizi", live: false },
  { to: "/contatti", label: "Contatti", title: "Contatti", live: true },
] as const;

export const isLive = (to: string) => siteArchitecture.some((p) => p.to === to && p.live);

/** Confirmed service names. Descriptions only once client-approved. */
export const services = ["Co-creazione", "Lucidatura", "Aggiornamenti", "Certificato", "Packaging"] as const;

/** Confirmed wedding-ring process. */
export const weddingProcess = [
  "Ascolto e consulenza",
  "Scelta modello/materiale",
  "Personalizzazioni",
  "Realizzazione artigianale",
  "Consegna e cura",
] as const;

// Temporary low-res model renders (240–400px): shown only at native size,
// replaced later by final photography without layout changes.
import m02 from "@/assets/modello-fedi-02.webp.asset.json";
import m03 from "@/assets/modello-fedi-03.webp.asset.json";
import m04 from "@/assets/modello-fedi-04.webp.asset.json";
import m05 from "@/assets/modello-fedi-05.webp.asset.json";
import m06 from "@/assets/modello-fedi-06.webp.asset.json";
import m07 from "@/assets/modello-fedi-07.webp.asset.json";

export type CollectionImage = { src: string; alt: string; width: number; height: number };

export type Collection = {
  slug: string;
  name: string;
  numeral: string;
  /** Client-approved description; rendered only when present. */
  description?: string;
  /** Composition of the collection plate (homepage) and chapter (/collezioni). */
  layout: "centered" | "wide" | "frontal" | "diagonal" | "grid" | "drift";
  /** Final 4:5 photography (≈2400×3000). Empty until the shoot: editorial placeholder. */
  primaryImage?: CollectionImage;
  /** Final 1:1 detail (≈1600–2400). Until then: temporary model render at native size. */
  detailImage?: CollectionImage;
};

const temp = (img: { url: string }, name: string, size: number): CollectionImage => ({
  src: img.url,
  alt: `Fedi ${name}, ROCCA 1898`,
  width: size,
  height: size,
});

// Temporary renders fill the final slots (mockup): primary 4:5 + detail 1:1.
// Final photography (≈2400×3000 / ≈1600–2400) replaces these paths only.
export const collections: Collection[] = [
  { slug: "classic", name: "Classic", numeral: "01", layout: "centered", primaryImage: temp(m07, "Classic", 400), detailImage: temp(m07, "Classic", 400) },
  { slug: "hollow", name: "Hollow", numeral: "02", layout: "wide", primaryImage: temp(m04, "Hollow", 240), detailImage: temp(m04, "Hollow", 240) },
  { slug: "plate", name: "Plate", numeral: "03", layout: "frontal", primaryImage: temp(m03, "Plate", 240), detailImage: temp(m03, "Plate", 240) },
  { slug: "twist", name: "Twist", numeral: "04", layout: "diagonal", primaryImage: temp(m06, "Twist", 240), detailImage: temp(m06, "Twist", 240) },
  { slug: "square", name: "Square", numeral: "05", layout: "grid", primaryImage: temp(m02, "Square", 240), detailImage: temp(m02, "Square", 240) },
  { slug: "waves", name: "Waves", numeral: "06", layout: "drift", primaryImage: temp(m05, "Waves", 240), detailImage: temp(m05, "Waves", 240) },
];

/**
 * The detail slot shows only when it holds a different asset than the primary
 * image. Temporary mockup renders reuse the same file, so the detail stays
 * hidden until separate detail/macro photography arrives.
 */
export const hasDistinctDetail = (c: Collection): boolean =>
  !!c.detailImage && c.detailImage.src !== c.primaryImage?.src;

export const personalisationAreas = [
  { name: "Incastonatura", note: "Pietre interne o esterne" },
  { name: "Materiali", note: "Oro 18Kt · Platino · Titanio" },
  { name: "Incisioni", note: "Nomi scritti a mano, impronte, simboli, micro-testi" },
  { name: "Texture", note: "Superfici lavorate a mano" },
] as const;
