import { Link } from "@tanstack/react-router";
import logoWhite from "@/assets/rocca-1898-logo-white-transparent.svg.asset.json";
import { contacts, navItems } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="wrap py-[clamp(3rem,6vw,5rem)]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Link to="/" aria-label="ROCCA 1898 — Home" className="self-start">
            <img src={logoWhite.url} alt="ROCCA 1898" width={150} height={37.5} loading="lazy" className="h-auto w-40" />
          </Link>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-1">
              {navItems.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="type-nav link-draw">{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="type-caption mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-primary-foreground/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} ROCCA 1898 · {contacts.address.street}, {contacts.address.city}</p>
          <a href={`mailto:${contacts.email}`} className="hover:text-primary-foreground">{contacts.email}</a>
        </div>
      </div>
    </footer>
  );
}
