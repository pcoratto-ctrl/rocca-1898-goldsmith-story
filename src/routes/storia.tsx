import { createFileRoute } from "@tanstack/react-router";
import { HoldingPage } from "@/components/site/HoldingPage";

export const Route = createFileRoute("/storia")({
  head: () => ({
    meta: [
      { title: "Storia — ROCCA 1898" },
      { name: "description", content: "La famiglia Rocca, orafi dal 1898: Eugenio e Giulio, quarta e quinta generazione nello stesso laboratorio." },
      { property: "og:title", content: "Storia — ROCCA 1898" },
      { property: "og:description", content: "Cinque generazioni di orafi dal 1898." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <HoldingPage label="Dal 1898" title="La nostra storia." intro="Cinque generazioni della famiglia Rocca. La pagina è in preparazione." />
  ),
});
