import { useRouterState } from "@tanstack/react-router";
import { whatsappLink } from "@/lib/site";

export function FloatingWhatsApp() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/contatti") return null;
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="type-label fixed bottom-4 right-4 z-30 inline-flex min-h-12 items-center gap-3 bg-primary px-5 text-primary-foreground shadow-[0_8px_30px_-12px_var(--ink)] md:hidden"
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-champagne" />
      WhatsApp
    </a>
  );
}
