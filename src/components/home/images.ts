// Approved photography with true native sizes — never displayed larger.
import hero from "@/assets/hero-home-fedi-1600x900.webp.asset.json";
import panoramica from "@/assets/panoramica-modelli-fedi.webp.asset.json";
import labBn from "@/assets/laboratorio-lavorazione-bn.webp.asset.json";
import fiamma from "@/assets/laboratorio-fiamma.webp.asset.json";
import mani from "@/assets/mani-sposi-doppia-esposizione.webp.asset.json";
import texture from "@/assets/texture-fedi-oro.webp.asset.json";
import coppia from "@/assets/coppia-sposi-palme.webp.asset.json";
import panoramica2 from "@/assets/panoramica-modelli-fedi-2.webp.asset.json";
import sposa from "@/assets/sposa-anelli-artistica.webp.asset.json";
import banco from "@/assets/lavorazione-artigianale-banco.webp.asset.json";
import lucidatura from "@/assets/lucidatura-laboratorio.webp.asset.json";
import maniVerticale from "@/assets/mani-con-fedi-verticale.webp.asset.json";
import diamanti from "@/assets/personalizzazione-diamanti.webp.asset.json";
import impronta from "@/assets/personalizzazione-impronta.webp.asset.json";
import microtesto from "@/assets/personalizzazione-microtesto-01.webp.asset.json";

export const photos = {
  hero: { src: hero.url, alt: "Mani di due sposi intrecciate, con fedi e anello, accanto a un bouquet di rose", width: 1600, height: 900 },
  panoramica: { src: panoramica.url, alt: "Sei modelli di fedi in oro giallo e rosa, affiancati", width: 1600, height: 900 },
  labBn: { src: labBn.url, alt: "Mani dell'orafo al banco durante la lavorazione di una fede, in bianco e nero", width: 1200, height: 1200 },
  fiamma: { src: fiamma.url, alt: "Fiamma del cannello che scalda l'oro in laboratorio", width: 551, height: 688 },
  mani: { src: mani.url, alt: "Mani di sposa con anello, in doppia esposizione con fiori", width: 1170, height: 780 },
  texture: { src: texture.url, alt: "Dettaglio della texture lavorata su fedi in oro", width: 992, height: 1404 },
  sposa: { src: sposa.url, alt: "Sposa che mostra le fedi, ritratto artistico", width: 800, height: 1200 },
  coppia: { src: coppia.url, alt: "Due sposi che camminano ridendo sotto una grande palma", width: 593, height: 889 },
  panoramica2: { src: panoramica2.url, alt: "I sei modelli di fedi ROCCA 1898 disposti su due file", width: 1600, height: 900 },
  banco: { src: banco.url, alt: "Mani dell'orafo che tengono una fede con le pinze al banco", width: 600, height: 315 },
  lucidatura: { src: lucidatura.url, alt: "Lucidatura di una fede alla spazzola rotante, in laboratorio", width: 480, height: 640 },
  maniVerticale: { src: maniVerticale.url, alt: "Mani di due sposi con le fedi, intrecciate per un dito", width: 516, height: 916 },
  diamanti: { src: diamanti.url, alt: "Riferimento di incastonatura con diamanti su fede", width: 240, height: 240 },
  impronta: { src: impronta.url, alt: "Riferimento di incisione di un'impronta digitale su fede", width: 252, height: 252 },
  microtesto: { src: microtesto.url, alt: "Riferimento di micro-testo inciso su fede", width: 252, height: 252 },
} as const;
