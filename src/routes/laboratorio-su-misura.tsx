import { createFileRoute } from "@tanstack/react-router";
import { LaboratorioPage } from "@/components/laboratorio/LaboratorioPage";

export const Route = createFileRoute("/laboratorio-su-misura")({
  head: () => ({
    meta: [
      { title: "Laboratorio & Su misura — ROCCA 1898" },
      {
        name: "description",
        content:
          "Il laboratorio di famiglia ROCCA 1898 a Lamezia Terme: incastonatura, incisioni, texture e materiali (Oro 18Kt, Platino, Titanio), lucidatura.",
      },
      { property: "og:title", content: "Laboratorio & Su misura — ROCCA 1898" },
      { property: "og:description", content: "Eugenio e Giulio Rocca al banco: personalizzazioni e lucidatura nel laboratorio di Lamezia Terme." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LaboratorioPage,
});
