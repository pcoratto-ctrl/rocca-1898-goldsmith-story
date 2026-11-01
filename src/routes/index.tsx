import { createFileRoute } from "@tanstack/react-router";
import { HeroScene } from "@/components/home/HeroScene";
import { ManifestoScene } from "@/components/home/ManifestoScene";
import { CollectionsScene } from "@/components/home/CollectionsScene";
import { MaterialScene } from "@/components/home/MaterialScene";
import { CraftScene } from "@/components/home/CraftScene";
import { PauseScene } from "@/components/home/PauseScene";
import { PersonalisationScene } from "@/components/home/PersonalisationScene";
import { HeritageScene } from "@/components/home/HeritageScene";
import { ServicesScene } from "@/components/home/ServicesScene";
import { ColophonScene } from "@/components/home/ColophonScene";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROCCA 1898 — Fedi nuziali, laboratorio orafo di famiglia" },
      {
        name: "description",
        content:
          "Laboratorio orafo della famiglia Rocca dal 1898. Fedi nuziali lavorate a mano a Lamezia Terme: collezioni, personalizzazioni, cinque generazioni.",
      },
      { property: "og:title", content: "ROCCA 1898 — Fedi nuziali dal 1898" },
      {
        property: "og:description",
        content: "Laboratorio orafo di famiglia: collezioni di fedi e personalizzazioni lavorate a mano.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroScene />
      <ManifestoScene />
      <CollectionsScene />
      <MaterialScene />
      <CraftScene />
      <PauseScene />
      <PersonalisationScene />
      <HeritageScene />
      <ServicesScene />
      <ColophonScene />
    </>
  );
}
