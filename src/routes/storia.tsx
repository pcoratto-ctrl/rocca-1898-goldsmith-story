import { createFileRoute } from "@tanstack/react-router";
import { StoriaPage } from "@/components/storia/StoriaPage";

export const Route = createFileRoute("/storia")({
  head: () => ({
    meta: [
      { title: "La nostra storia, dal 1898 — ROCCA 1898" },
      { name: "description", content: "La tradizione orafa della famiglia Rocca ha inizio nel 1898. Oggi Eugenio e Giulio Rocca, quarta e quinta generazione, lavorano insieme a Lamezia Terme." },
      { property: "og:title", content: "La nostra storia, dal 1898 — ROCCA 1898" },
      { property: "og:description", content: "Eugenio e Giulio Rocca, quarta e quinta generazione, nello stesso laboratorio di famiglia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoriaPage,
});
