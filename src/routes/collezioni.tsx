import { createFileRoute } from "@tanstack/react-router";
import { CollezioniPage } from "@/components/collezioni/CollezioniPage";

export const Route = createFileRoute("/collezioni")({
  head: () => ({
    meta: [
      { title: "Collezioni — ROCCA 1898" },
      {
        name: "description",
        content:
          "Le sei collezioni di fedi nuziali ROCCA 1898 — Classic, Hollow, Plate, Twist, Square, Waves — lavorate a mano nel laboratorio di famiglia a Lamezia Terme.",
      },
      { property: "og:title", content: "Collezioni — ROCCA 1898" },
      {
        property: "og:description",
        content: "Sei collezioni di fedi nuziali lavorate a mano: Classic, Hollow, Plate, Twist, Square, Waves.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollezioniPage,
});
