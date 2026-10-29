import { createFileRoute } from "@tanstack/react-router";
import { HoldingPage } from "@/components/site/HoldingPage";

export const Route = createFileRoute("/personalizzazioni")({
  head: () => ({
    meta: [
      { title: "Personalizzazioni — ROCCA 1898" },
      { name: "description", content: "Incastonatura, materiali, incisioni e texture: fedi personalizzate nel laboratorio ROCCA 1898." },
      { property: "og:title", content: "Personalizzazioni — ROCCA 1898" },
      { property: "og:description", content: "Oro 18Kt, platino, titanio, incisioni e pietre." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <HoldingPage label="Personalizzazioni" title="Il vostro segno." intro="Incastonatura, materiali, incisioni, texture. La pagina è in preparazione." />
  ),
});
