import { createFileRoute } from "@tanstack/react-router";
import { HoldingPage } from "@/components/site/HoldingPage";

export const Route = createFileRoute("/collezioni")({
  head: () => ({
    meta: [
      { title: "Collezioni — ROCCA 1898" },
      { name: "description", content: "Classic, Hollow, Plate, Twist, Square, Waves: le sei collezioni di fedi ROCCA 1898." },
      { property: "og:title", content: "Collezioni — ROCCA 1898" },
      { property: "og:description", content: "Sei collezioni di fedi nuziali lavorate a mano." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <HoldingPage label="Collezioni" title="Sei mondi, una tradizione." intro="Classic, Hollow, Plate, Twist, Square, Waves. La pagina delle collezioni è in preparazione." />
  ),
});
