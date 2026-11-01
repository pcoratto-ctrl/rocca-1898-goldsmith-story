import { createFileRoute } from "@tanstack/react-router";
import { MatrimonioPage } from "@/components/matrimonio/MatrimonioPage";

export const Route = createFileRoute("/fedi-matrimonio")({
  head: () => ({
    meta: [
      { title: "Fedi & Matrimonio — ROCCA 1898" },
      {
        name: "description",
        content:
          "Fedi nuziali ROCCA 1898 in Oro 18Kt, Platino e Titanio: sei modelli, incastonatura, incisioni e texture, realizzate a mano nel laboratorio di Lamezia Terme.",
      },
      { property: "og:title", content: "Fedi & Matrimonio — ROCCA 1898" },
      {
        property: "og:description",
        content: "Modelli, materiali, personalizzazioni e il percorso in cinque passi per le fedi nuziali.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MatrimonioPage,
});
