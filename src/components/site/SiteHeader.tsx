import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/rocca-1898-logo-transparent.svg.asset.json";
import logoWhite from "@/assets/rocca-1898-logo-white-transparent.svg.asset.json";
import { contacts, navItems, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  // Internal pages start solid from first paint; home starts over the hero.
  const [pastHero, setPastHero] = useState(!isHome);
  const [morphed, setMorphed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hero = isHome ? document.getElementById("hero") : null;
    if (!hero) {
      setPastHero(true);
      setMorphed(false);
      return;
    }
    setPastHero(false);
    const io = new IntersectionObserver(
      ([entry]) => {
        const past = !entry!.isIntersecting;
        setPastHero(past);
        if (past) setMorphed(true);
      },
      // Switch as the hero's bottom edge passes under the bar.
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [isHome]);

  useEffect(() => setOpen(false), [pathname]);

  const solid = pastHero || open;

  return (
    <>
      <a
        href="#contenuto"
        className="type-label fixed left-4 top-4 z-[60] -translate-y-24 bg-primary px-4 py-3 text-primary-foreground focus:translate-y-0"
      >
        Vai al contenuto
      </a>
      <header
        data-solid={solid ? "true" : "false"}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,color,height] duration-[420ms] ease-atelier motion-reduce:transition-none",
          solid
            ? "border-border bg-background text-foreground"
            : "border-transparent bg-transparent text-primary-foreground",
          solid && morphed && isHome && "header-drop",
        )}
        style={{ height: solid ? "var(--header-h-solid)" : "var(--header-h)" }}
      >
        <div className="wrap grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-6">
          <Link to="/" className="flex min-h-12 min-w-0 items-center" aria-label="ROCCA 1898 — Home">
            <span className="relative block w-[clamp(7rem,10vw,8.75rem)] shrink-0">
              <img
                src={logo.url}
                alt="ROCCA 1898"
                width={150}
                height={37.5}
                className={cn("h-auto w-full transition-opacity duration-[420ms] ease-atelier motion-reduce:transition-none", solid ? "opacity-100" : "opacity-0")}
              />
              <img
                src={logoWhite.url}
                alt=""
                aria-hidden
                width={150}
                height={37.5}
                className={cn("absolute inset-0 h-auto w-full transition-opacity duration-[420ms] ease-atelier motion-reduce:transition-none", solid ? "opacity-0" : "opacity-100")}
              />
            </span>
          </Link>

          <nav aria-label="Principale" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={cn("type-nav link-draw text-[0.84375rem]", item.to === "/contatti" && "font-semibold")}
                    activeProps={{ "aria-current": "page", className: "link-active" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="type-nav -mr-2 inline-flex min-h-12 min-w-12 items-center gap-3 px-2 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Chiudi" : "Menu"}
            <span aria-hidden className="relative block h-3 w-6">
              <span className={cn("absolute left-0 h-px w-6 bg-current transition-transform duration-300", open ? "top-1.5 rotate-45" : "top-0.5")} />
              <span className={cn("absolute left-0 h-px w-6 bg-current transition-transform duration-300", open ? "top-1.5 -rotate-45" : "top-2.5")} />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const first = ref.current?.querySelector<HTMLElement>("a,button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && ref.current) {
        const items = ref.current.querySelectorAll<HTMLElement>("a,button");
        const a = items[0]!;
        const b = items[items.length - 1]!;
        if (e.shiftKey && document.activeElement === a) {
          e.preventDefault();
          b.focus();
        } else if (!e.shiftKey && document.activeElement === b) {
          e.preventDefault();
          a.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="menu-mobile"
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      hidden={!open}
      className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-background pt-[var(--header-h-solid)] lg:hidden"
    >
      <nav aria-label="Mobile" className="wrap flex flex-1 flex-col justify-center py-8">
        <ul className="border-t border-border">
          <li>
            <Link to="/" onClick={onClose} className="type-h2 flex min-h-14 items-center border-b border-border py-4">
              Home
            </Link>
          </li>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} onClick={onClose} className="type-h2 flex min-h-14 items-center border-b border-border py-4">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="wrap grid gap-1 pb-8">
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="type-caption flex min-h-12 items-center text-[0.9375rem]">
          WhatsApp · {contacts.whatsapp.display}
        </a>
        <a href={`tel:${contacts.phones[1].tel}`} className="type-caption flex min-h-12 items-center text-[0.9375rem]">
          {contacts.phones[1].display}
        </a>
        <a href={`mailto:${contacts.email}`} className="type-caption flex min-h-12 items-center text-[0.9375rem]">
          {contacts.email}
        </a>
      </div>
    </div>
  );
}
