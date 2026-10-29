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

export const navItems = [
  { to: "/collezioni", label: "Collezioni" },
  { to: "/personalizzazioni", label: "Personalizzazioni" },
  { to: "/storia", label: "Storia" },
  { to: "/contatti", label: "Contatti" },
] as const;

export type Collection = {
  slug: string;
  name: string;
  numeral: string;
  /** Placeholder character line until the client supplies final copy. */
  character: string;
  /** Composition of the collection plate on the homepage. */
  layout: "centered" | "wide" | "frontal" | "diagonal" | "grid" | "drift";
  image?: { src: string; alt: string; width: number; height: number };
  detail?: { src: string; alt: string; width: number; height: number };
};

export const collections: Collection[] = [
  { slug: "classic", name: "Classic", numeral: "01", character: "La forma essenziale della fede.", layout: "centered" },
  { slug: "hollow", name: "Hollow", numeral: "02", character: "Leggerezza ricavata dal pieno.", layout: "wide" },
  { slug: "plate", name: "Plate", numeral: "03", character: "Superfici piane, linee nette.", layout: "frontal" },
  { slug: "twist", name: "Twist", numeral: "04", character: "Due fili che si intrecciano.", layout: "diagonal" },
  { slug: "square", name: "Square", numeral: "05", character: "Un profilo deciso, geometrico.", layout: "grid" },
  { slug: "waves", name: "Waves", numeral: "06", character: "Il movimento dell'oro.", layout: "drift" },
];

export const personalisationAreas = [
  { name: "Incastonatura", note: "Pietre interne o esterne" },
  { name: "Materiali", note: "Oro 18Kt · Platino · Titanio" },
  { name: "Incisioni", note: "Nomi scritti a mano, impronte, simboli, micro-testi" },
  { name: "Texture", note: "Superfici lavorate a mano" },
] as const;
