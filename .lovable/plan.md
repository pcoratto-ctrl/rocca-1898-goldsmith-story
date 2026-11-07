# Phase D3 (revised): /storia

The page is a documentary about a real Italian goldsmith family. It moves from 1898 to Eugenio and Giulio working together today. It uses only confirmed facts and real photographs. It has no empty portrait frames, no timeline, no cards and no rail. Only /storia and its images change.

## 1. Page sequence

1. **Opening.** 1898 and the origin statement, merged into one scene.
2. **IV · Eugenio Rocca.** Compact and typographic.
3. **V · Giulio Rocca.** His training and experience, with the precision-work photo.
4. **Italia / Svizzera.** The workshop today, typographic only.
5. **Oggi · Lamezia Terme.** The one Racing Green scene.
6. **Contact colophon.** Shared and unchanged.

Each scene's height comes from its content. No scene is a near-empty full-height block.

## 2. Photography placement

| Scene | Image | Native | Display |
|---|---|---|---|
| Opening | laboratorio-lavorazione-dettaglio-mani | 1536×1024 | Kept horizontal at 3:2, up to about 860px wide on desktop. Hands and work stay visible (crop anchored left-centre). Colour as supplied, no filter. |
| Giulio | laboratorio-macro-lavorazione-microscopio | 1024×1536 | Kept vertical at 2:3, about 420–480px wide. Treated as documentary evidence of the work. No caption names who is in it. |
| Oggi | storia-ritratto-due-persone-da-confermare | 1152×1536 | Only once you confirm the two people are Eugenio and Giulio. 3:4, about 460–520px wide, with both people kept fully in frame. Not full-screen, and no background editing. |
| Oggi (until confirmed) | lavorazione-artigianale-banco | 600×315 | At its real width, shown as a print on the green. No empty frame. |

- Not used here: the black-and-white bench photo, the flame, texture, wedding photos, collection renders, or any of the recent product photos (gemstones, gloved ring, bracelets, earrings).
- The three new images are uploaded via lovable-assets with the exact filenames above.

## 3. Scene compositions

**1. Opening (ivory).**
- Desktop (1440/1280):
  - Left, 5 columns: the Karla label "ROCCA 1898" with a green hairline, then a large Bodoni "1898" (one step below the homepage monument size).
  - Under the date: "Tradizione orafa di famiglia" in Karla, then the origin sentence at lead size: "La tradizione orafa della famiglia Rocca ha inizio nel 1898."
  - Right, 7 columns: the horizontal photo, its top aligned to the date's cap height, so the date and the image read as one composition.
- 1024/768: the date and the lines first, then the photo wide below. It is offset right, about 85% wide.
- 390: the date has a fluid cap (no overflow), then the two lines, then the photo full width at 3:2. The gaps stay tight.
- The scene uses the unveil effect on the photo only.

**2. IV · Eugenio Rocca (ivory, compact).**
- Desktop: one horizontal band ruled top and bottom with hairlines. It reads left to right: a green Bodoni "IV" at a moderate size, about the same height as the name, so the numeral does not overwhelm the name. Then "EUGENIO ROCCA" in Karla capitals, then "Quarta generazione" in Karla. Wide ivory space sits to the right.
- 390: IV and the name on one line, with "Quarta generazione" below. The band is about a third of the screen height.
- No image here, so no workshop photo is mistaken for him. A real portrait can be added later as an optional field (`family.eugenio.portrait`). It renders only once a portrait is supplied, and nothing shows until then.

**3. V · Giulio Rocca (ivory, the stronger chapter).**
- Desktop:
  - Left, 5 columns: the vertical microscope photo.
  - Right, 6 columns: a green Bodoni "V" (same size as IV, for balance), "GIULIO ROCCA" and "Quinta generazione".
  - Below that, a short ruled list of three facts on hairlines, place in Karla capitals and the fact in Karla:
    - ITALIA · SVIZZERA: Formazione tra Italia e Svizzera
    - BULGARI: Esperienza con Bulgari
    - ZURIGO: Anni di lavoro a Zurigo
  - Bulgari is plain text, with no logo.
- This mirrors the Eugenio band: Eugenio is a horizontal band, Giulio is a vertical image-and-text column.
- 1024/768: the photo moves to 5 columns, with the text beside it.
- 390: V and the name, then the three facts, then the photo right-aligned at about 80% width.
- Giulio's personal training is told only here.

**4. Italia / Svizzera (ivory, typographic).**
- This scene is about the workshop, not the person.
- Desktop: ITALIA left-aligned and SVIZZERA right-aligned, in Karla capitals at chapter size, joined by one long champagne hairline that draws in. Below, a narrow centred column holds the sentence: "Il laboratorio unisce la tradizione artigianale italiana alle tecniche e agli standard conosciuti nei grandi distretti europei della gioielleria."
- 390: ITALIA, the hairline and SVIZZERA staggered left and right, then the sentence.
- No image, flags or maps. The texture photo is removed from this scene.

**5. Oggi · Lamezia Terme (Racing Green #004225, ivory type).**
- Desktop:
  - Left, 5 columns: the photograph. That is the confirmed family photo, or the bench print until it is confirmed. No overlaps and no floating insets.
  - Right, 6 columns: the champagne label "OGGI · LAMEZIA TERME", then the statement in Bodoni at chapter size: "Eugenio e Giulio Rocca lavorano insieme nello stesso laboratorio di famiglia."
  - No IV/V numerals and no caption naming who is in the photo.
- The photo's gold background is contained by its modest width. Comfortable green space surrounds it.
- 1024/768: the photo and statement sit side by side at 5/7 columns.
- 390: label, then the statement, then the photo full width (portrait about 3:4, never taller than about 70% of the screen).
- This scene differs from the homepage Heritage: there are no monumental dates and no chronology, just people and one sentence.

## 4. Family photo strategy
- The family photo is controlled by one setting, `familyPortrait.confirmed`, in site.ts, set to false by default. While it is false, Oggi shows the bench print. When it is true, Oggi shows the family photo with alt text naming Eugenio and Giulio Rocca. Nothing else changes.
- Until then the alt text stays neutral ("Fotografia di famiglia").
- Confirming who the two people are is your call (see the question below).

## 5. Typography and colour
- Bodoni: 1898, the IV and V numerals at the same restrained size, and the Oggi statement.
- Karla: everything else.
- Green: the opening hairline, the IV and V numerals, and link hovers, plus the single Oggi surface.
- Champagne: the Italia/Svizzera hairline and the Oggi label.
- No new fonts or tokens.

## 6. Motion
Existing `Reveal` only: unveil on the opening and Giulio photos, settle on the Oggi photo, and the hairline draw. Text is never animated, and the page reads fully with motion off.

## 7. Paragraph-free scenes
IV, V and Oggi contain no paragraphs (just names, facts and one statement). The Opening and Italia/Svizzera scenes carry one sentence each.

## 8. Components and steps
1. Upload the three images and add them to `photos` (in `images.ts`) with their real sizes.
2. In `site.ts`, add the `family` facts and `familyPortrait` (confirmed: false), plus optional portrait fields, left empty.
3. Create `src/components/storia/StoriaPage.tsx` with five scene functions plus the shared `ColophonScene`. It reuses `EditorialImage`, `Reveal` and `SectionLabel`. No new shared components.
4. `src/routes/storia.tsx` renders the page, with an Italian title and description and no share image.
5. Add a routing test for /storia, and update the Story rule in AGENTS.md.
6. Verify at 1440/1280/1024/768/390, with motion off and keyboard focus.

## 9. Overlap and risks
- The confirmed Oggi sentence also appears on the homepage and Laboratorio. Here it is the closing statement.
- The bench print appears on Laboratorio too. It is temporary here, until the family photo is confirmed.
- The large 1898 at 390px needs a fluid size cap.
- Three short fact notes (Formazione / Esperienza / Anni di lavoro) restate the confirmed facts in brief.

## Open question
Are the two people in the family photo Eugenio (right) and Giulio (left)? If yes, I'll switch the setting on at Build time. If not, Oggi uses the bench print.
