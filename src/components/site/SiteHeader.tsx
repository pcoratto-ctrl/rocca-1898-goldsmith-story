import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/rocca-1898-logo-transparent.svg.asset.json";
import logoWhite from "@/assets/rocca-1898-logo-white-transparent.svg.asset.json";
import { contacts, navItems, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        setScrolled(y > 40);
        setHidden(y > 320 && y > lastY.current + 4 ? true : y < lastY.current - 4 ? false : (h) => h);
        lastY.current = y;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const transparent = overHero && !scrolled && !open;

  return (
    <>
      <a
        href="#contenuto"
        className="type-label fixed left-4 top-4 z-[60] -translate-y-24 bg-primary px-4 py-3 text-primary-foreground focus:translate-y-0"
      >
        Vai al contenuto
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color,height] duration-500 ease-atelier",
          transparent
            ? "border-b border-transparent bg-transparent text-primary-foreground"
            : "border-b border-border bg-background/95 text-foreground backdrop-blur-sm",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
        )}
        style={{ height: scrolled ? "var(--header-h-compact)" : "var(--header-h)" }}
      >
        <div className="wrap grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-6">
          <Link to="/" className="flex min-w-0 items-center" aria-label="ROCCA 1898 — Home">
            <img
              src={transparent ? logoWhite.url : logo.url}
              alt="ROCCA 1898"
              width={150}
              height={37.5}
              className="h-auto w-[clamp(7.5rem,11vw,9.5rem)] shrink-0 transition-opacity duration-300"
            />
          </Link>

          <nav aria-label="Principale" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="type-nav link-draw"
                    activeProps={{ "aria-current": "page", className: "after:!scale-x-100" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="type-nav inline-flex min-h-12 items-center gap-3 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Chiudi" : "Menu"}
            <span aria-hidden className="relative block h-3 w-6">
              <span className={cn("absolute left-0 h-px w-6 bg-current transition-transform duration-400", open ? "top-1.5 rotate-45" : "top-0.5")} />
              <span className={cn("absolute left-0 h-px w-6 bg-current transition-transform duration-400", open ? "top-1.5 -rotate-45" : "top-2.5")} />
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
      className="fixed inset-0 z-40 flex flex-col bg-background pt-[var(--header-h)] lg:hidden"
    >
      <nav aria-label="Mobile" className="wrap flex flex-1 flex-col justify-center">
        <ul className="border-t border-border">
          <li>
            <Link to="/" onClick={onClose} className="type-h2 block border-b border-border py-5">
              Home
            </Link>
          </li>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} onClick={onClose} className="type-h2 block border-b border-border py-5">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="wrap grid grid-cols-2 gap-4 py-6">
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="type-nav flex min-h-12 items-center">
          WhatsApp
        </a>
        <a href={`mailto:${contacts.email}`} className="type-nav flex min-h-12 items-center">
          Email
        </a>
      </div>
    </div>
  );
}
