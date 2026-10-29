import { contacts, whatsappLink } from "@/lib/site";

/** Scene 9 — contact set as the colophon of the piece. */
export function ColophonScene() {
  const row = "flex min-h-14 flex-col justify-center border-b border-border py-4 md:border-0 md:py-0 md:min-h-0";
  return (
    <section id="colophon" aria-labelledby="colophon-title" className="wrap py-[var(--section-y)]">
      <div className="grid gap-y-14 lg:grid-cols-12">
        <h2 id="colophon-title" className="type-h2 lg:col-span-4">ROCCA 1898</h2>

        <dl className="grid gap-x-12 md:grid-cols-2 md:gap-y-12 lg:col-span-7 lg:col-start-6">
          <div className={row}>
            <dt className="type-caption text-muted-foreground">Laboratorio</dt>
            <dd className="mt-2">
              <address className="not-italic">
                {contacts.address.street}<br />{contacts.address.city}<br />{contacts.address.country}
              </address>
            </dd>
          </div>
          <div className={row}>
            <dt className="type-caption text-muted-foreground">Telefono</dt>
            <dd className="mt-1 flex flex-col">
              {contacts.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="link-draw min-h-10 self-start">{p.display}</a>
              ))}
            </dd>
          </div>
          <div className={row}>
            <dt className="type-caption text-muted-foreground">Email</dt>
            <dd className="mt-1">
              <a href={`mailto:${contacts.email}`} className="link-draw break-all">{contacts.email}</a>
            </dd>
          </div>
          <div className={row}>
            <dt className="type-caption text-muted-foreground">WhatsApp</dt>
            <dd className="mt-1">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="link-draw">{contacts.whatsapp.display}</a>
            </dd>
          </div>
          <div className={row}>
            <dt className="type-caption text-muted-foreground">Indicazioni</dt>
            <dd className="mt-1">
              <a href={contacts.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-draw">Apri in Google Maps</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
