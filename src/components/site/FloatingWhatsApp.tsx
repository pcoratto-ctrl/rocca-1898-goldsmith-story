import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Small mobile-only utility: appears after the hero, hides over the contact colophon. */
export function FloatingWhatsApp() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [show, setShow] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const past = window.scrollY > window.innerHeight * 0.9;
      const col = document.getElementById("colophon")?.getBoundingClientRect();
      const overContact = col ? col.top < window.innerHeight && col.bottom > 0 : false;
      const footer = document.querySelector("footer")?.getBoundingClientRect();
      const overFooter = footer ? footer.top < window.innerHeight : false;
      setShow(past && !overContact && !overFooter);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  if (pathname === "/contatti") return null;
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      tabIndex={show ? 0 : -1}
      className={cn(
        "fixed bottom-5 right-5 z-30 grid size-12 place-items-center rounded-full bg-primary text-primary-foreground ring-1 ring-primary-foreground/25 transition-[opacity,transform] duration-500 ease-atelier md:hidden",
        show ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <svg aria-hidden viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 19.5l1.1-3.6A8 8 0 1 1 8.3 18.6z" />
        <path d="M9.2 8.6c.2 2.6 3.4 5.8 6 6l1-1.2-1.8-1-.8.7c-1-.4-2.2-1.6-2.6-2.6l.7-.8-1-1.8z" />
      </svg>
    </a>
  );
}
