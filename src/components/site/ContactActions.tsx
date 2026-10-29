import { contacts, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ContactActions({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const dark = tone === "dark";
  const cell = cn(
    "group flex min-h-[9rem] flex-col justify-between gap-6 p-6 transition-colors duration-500 sm:p-8",
    dark ? "hover:bg-primary-deep" : "hover:bg-surface",
  );
  const label = cn("type-label", dark ? "text-primary-foreground/70" : "text-muted-foreground");
  return (
    <div
      className={cn(
        "grid border-y sm:grid-cols-3 sm:divide-x",
        dark ? "border-primary-foreground/20 divide-primary-foreground/20" : "border-border-strong divide-border-strong",
        "divide-y sm:divide-y-0",
        className,
      )}
    >
      <a href={whatsappLink("Buongiorno, vorrei informazioni sulle vostre fedi.")} target="_blank" rel="noopener noreferrer" className={cell}>
        <span className={label}>WhatsApp</span>
        <span className="type-h3">Scrivici</span>
      </a>
      <div className={cn(cell, "hover:bg-transparent")}>
        <span className={label}>Telefono</span>
        <ul className="space-y-1">
          {contacts.phones.map((p) => (
            <li key={p.tel}>
              <a href={`tel:${p.tel}`} className="link-draw min-h-[40px] text-lg" aria-label={`Chiama ${p.display}, ${p.label}`}>
                {p.display}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a href={`mailto:${contacts.email}`} className={cell}>
        <span className={label}>Email</span>
        <span className="break-all text-lg">{contacts.email}</span>
      </a>
    </div>
  );
}
