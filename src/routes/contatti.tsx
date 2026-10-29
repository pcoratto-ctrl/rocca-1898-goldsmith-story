import { createFileRoute } from "@tanstack/react-router";
import { ContactActions } from "@/components/site/ContactActions";
import { SectionLabel } from "@/components/site/primitives";
import { contacts } from "@/lib/site";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — ROCCA 1898" },
      { name: "description", content: "Contatta il laboratorio ROCCA 1898 a Lamezia Terme: WhatsApp, telefono, email." },
      { property: "og:title", content: "Contatti — ROCCA 1898" },
      { property: "og:description", content: "WhatsApp, telefono ed email del laboratorio ROCCA 1898." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contatti,
});

function Contatti() {
  return (
    <section className="wrap pt-[calc(var(--header-h)+var(--section-y-sm))] section-y">
      <SectionLabel className="text-muted-foreground">Contatti</SectionLabel>
      <h1 className="type-display-xl mt-8">Parliamone.</h1>
      <address className="type-lead mt-8 not-italic text-muted-foreground">
        {contacts.address.street}, {contacts.address.city}, {contacts.address.country}
      </address>
      <ContactActions className="mt-14" />
    </section>
  );
}
