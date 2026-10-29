import { Link } from "@tanstack/react-router";
import logoWhite from "@/assets/rocca-1898-logo-white-transparent.svg.asset.json";
import { contacts, navItems, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="wrap section-y-sm">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={logoWhite.url} alt="ROCCA 1898" width={150} height={37.5} loading="lazy" className="h-auto w-44" />
            <p className="type-lead mt-8 max-w-sm text-primary-foreground/85">
              Laboratorio orafo di famiglia, dal 1898.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <p className="type-label text-primary-foreground/60">Sito</p>
            <ul className="mt-5 space-y-1">
              {navItems.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="link-draw min-h-10">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="type-label text-primary-foreground/60">Contatti</p>
            <ul className="mt-5 space-y-1">
              {contacts.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="link-draw min-h-10">{p.display}</a>
                </li>
              ))}
              <li>
                <a href={`mailto:${contacts.email}`} className="link-draw min-h-10 break-all">{contacts.email}</a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="link-draw min-h-10">WhatsApp</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="type-label text-primary-foreground/60">Laboratorio</p>
            <address className="mt-5 not-italic leading-relaxed">
              <a href={contacts.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                {contacts.address.street}
                <br />
                {contacts.address.city}
                <br />
                {contacts.address.country}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} ROCCA 1898</p>
          <p>Lamezia Terme, Italia</p>
        </div>
      </div>
    </footer>
  );
}
