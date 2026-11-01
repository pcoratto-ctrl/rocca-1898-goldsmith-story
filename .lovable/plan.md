# Phase D3 — /storia

ROCCA 1898: five generations of a family goldsmith tradition, from 1898 to Eugenio and Giulio working together today. The page is a documentary editorial feature. It has no timeline, no rail, no dots and no cards. Every line comes from the confirmed facts.

## 1. Page sequence

1. Opening: 1898
2. Origine: the beginning
3. IV: Eugenio
4. V: Giulio
5. Italia / Svizzera
6. Oggi: father and son (the one green surface)
7. Shared contact colophon (unchanged)

## 2–3. Composition per chapter (desktop / mobile)

**1. Opening (ivory).**
- Desktop (1440/1280): on the left (6 columns), a small Karla label "ROCCA 1898" with a green hairline. Below it, a very large Bodoni "1898". Below that, a Karla line "Tradizione orafa di famiglia". On the right (5 columns, set slightly lower), the black-and-white bench photo, cropped tall at 4:5.
- 1024/768: the date stays left, and the photo shrinks to 5 columns.
- 390: label, then 1898 across almost the full width, then the line. The photo sits offset right at about 85% width, so the stack is not centred.

**2. Origine (ivory, no image).**
- Desktop: one Karla sentence set at lead size, starting at column 7. Wide empty space sits to the left. A fine hairline draws in above it.
- 390: the sentence is right-aligned to about 80% width, with the hairline above it.
- Leaving out a photo here is deliberate: we have no archive pictures and we will not make one up.

**3. IV: Eugenio (ivory).**
- Desktop: a green Bodoni "IV" on the far left, and the name EUGENIO in Karla capitals with the line "Quarta generazione". On the right is a 4:5 portrait slot for Eugenio. Until the photoshoot it is a silent neutral field. A small unframed flame photo (about 275px) sits at its lower corner as a workshop detail, so it is not mistaken for a portrait.
- 390: the IV and the name sit on one line, then the field at 70% width aligned left, then the flame inset offset right.

**4. V: Giulio (ivory, the stronger chapter).**
- Desktop: a green Bodoni "V" set larger than the IV, with GIULIO and "Quinta generazione". To its right is a narrow ruled column of four Karla rows on hairlines: Italia · Svizzera · Bulgari · Zurigo. Each row has one short confirmed note: "Formazione", "Formazione", "Esperienza", "Anni di lavoro". The 4:5 portrait slot sits on the opposite side from Eugenio's, so the two chapters mirror each other.
- 390: V and the name, then the four ruled rows full width, then the portrait field right-aligned.
- Bulgari appears as plain text only, with no logo.

**5. Italia / Svizzera (ivory, typographic).**
- Desktop: ITALIA in Karla capitals at chapter size on the left and SVIZZERA on the right, on the same baseline. They are separated by one long champagne hairline. Below, centred and narrow, is the confirmed sentence: "Il laboratorio unisce la tradizione artigianale italiana alle tecniche e agli standard conosciuti nei grandi distretti europei della gioielleria." To one side is a small texture inset (about 240px).
- 390: ITALIA left-aligned, the hairline, SVIZZERA right-aligned, then the sentence, then the inset.

**6. Oggi (Racing Green surface, option B).**
- Desktop: a small champagne label "OGGI · LAMEZIA TERME". On the left is a wide slot for the future portrait of father and son at the bench. Until then it shows the bench-work photo at its real 600px width, framed in ivory as a print. On the right is the closing statement in Bodoni at chapter size, in ivory: "Eugenio e Giulio Rocca lavorano insieme nello stesso laboratorio di famiglia."
- 390: label, then the statement, then the print full width (capped at 600px).

**7. Colophon:** shared and unchanged.

## 4. Images assigned now

| Chapter | Image | Note |
|---|---|---|
| Opening | laboratorio-lavorazione-bn | Different crop (tall 4:5) and smaller than on Laboratorio and the homepage |
| Origine | none | Deliberate |
| IV | neutral field + laboratorio-fiamma (small) | The field waits for the portrait |
| V | neutral field | Waits for the portrait |
| Italia/Svizzera | texture-fedi-oro (small) | Black background; can be removed |
| Oggi | lavorazione-artigianale-banco (600px) | Waits for the father-and-son photo |

No wedding photos and no collection images.

## 5. Photos needed from the shoot
1. Eugenio portrait (4:5)
2. Giulio portrait (4:5)
3. Eugenio and Giulio together at the bench (Oggi slot, 3:2)
4. A wide portrait of the workshop (could replace the Opening photo)
5. A detail of hands and tools (could replace the flame inset)
6. Optional: family or archive material, only if the client supplies it

Each photo goes into an existing slot, with no redesign.

## 6. Typography
- Bodoni: the opening 1898, the IV and V numerals, and the Oggi statement. That makes three moments, each at a different size.
- Karla: names, places, notes, labels, captions and the Origine and Italia/Svizzera sentences.

## 7. Racing Green
- One surface: the Oggi chapter.
- Accents: the opening hairline, the IV and V numerals, and link hovers.
- Option A (a green 1898) is not used, so the opening does not copy the homepage Heritage section.

## 8. Copy (confirmed only)
- "ROCCA 1898" / "1898" / "Tradizione orafa di famiglia"
- "La tradizione orafa della famiglia Rocca ha inizio nel 1898."
- "IV · Eugenio · Quarta generazione"
- "V · Giulio · Quinta generazione"; Italia, Svizzera (Formazione); Bulgari (Esperienza); Zurigo (Anni di lavoro)
- Italia / Svizzera sentence (above)
- "Oggi · Lamezia Terme" + "Eugenio e Giulio Rocca lavorano insieme nello stesso laboratorio di famiglia."

## 9. Sections with no paragraph
Opening, IV, V and Oggi. Origine and Italia/Svizzera carry a single sentence each.

## 10–11. Components
- Reused: `EditorialImage`, `Reveal` (unveil on photos, settle on insets, hairline draw), `SectionLabel`, `ColophonScene`.
- New: `src/components/storia/StoriaPage.tsx`, holding one function per chapter, plus a `PortraitSlot` (a fixed 4:5 frame that shows the neutral field until an image is given). Portrait image fields go in `site.ts` (`family.eugenio.portrait`, etc.), left empty for now.

## 12. Overlap with Home and Laboratorio
- The black-and-white bench photo appears on all three pages. Here it uses a different crop and size, and it moves out once the workshop portrait arrives.
- The flame and bench-work photos also appear on Laboratorio. Here they play different roles (an inset under the portrait slot, and a print inside the green surface).
- The homepage Heritage section (green, 1898, IV/V) is the closest relative. Here 1898 sits on ivory, IV and V are not on green, and the green is used for "Oggi".
- The Oggi sentence also appears on the homepage and on Laboratorio. It is the confirmed wording, and on this page it is the closing statement.

## 13. Risks
- Two empty portrait fields can look unfinished. Mitigation: hairline-framed, deliberate proportions, and the flame inset next to Eugenio's. Option: hide both fields until the shoot (tell me which you prefer).
- The giant 1898 at 390px needs a fluid size cap so it does not run off the screen.
- The note words (Formazione / Esperienza / Anni di lavoro) are rewordings of the confirmed facts. They can be removed so only the four place names remain.
- I will verify 1440/1280/1024/768/390, motion off and keyboard focus.

## Site integration
- `src/routes/storia.tsx` replaces the holding page and gets a new Italian title and description, with no share image.
- The homepage "La nostra storia" link and the footer already point to /storia, so no other page changes.
- Add a routing test and update AGENTS.md.
