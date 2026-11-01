# Phase D2 — /laboratorio-su-misura

A tactile, technical atelier page: the bench, the tools, the hand. It is quieter and more documentary than /fedi-matrimonio. It uses no wedding imagery and no collection renders. All copy uses confirmed facts only.

## Photography (real sizes, never enlarged)

| Role | Image | Native | Max display |
|---|---|---|---|
| Primary workshop | laboratorio-lavorazione-bn | 1200×1200 | up to 1200px, square |
| Bench work (secondary) | lavorazione-artigianale-banco | 600×315 | 600px wide, landscape strip |
| Flame detail | laboratorio-fiamma | 551×688 | about 275px inset |
| Finishing / polishing | lucidatura-laboratorio | 480×640 | 480px, 3:4 |
| Finished result / pause | mani-con-fedi-verticale | 516×916 | 516px, centred on ivory |
| Material detail | texture-fedi-oro | 992×1404 | about 280px inset |
| Personalisation refs | diamanti 240, impronta 252, microtesto 252 | — | shown at about 1× (≤252px), square |

The bench photo is only 600px wide, so it is never shown full width. It sits as a documentary print beside text.

## Page sequence

1. **Opening.** Left (5 columns): small "ROCCA 1898" label with a hairline, then the title "Laboratorio & Su misura" in Bodoni, the page's one display moment. Right (7 columns): the black-and-white bench photo, square. The flame photo sits as a small inset, overlapping the lower edge. On mobile the title comes first, then the square photo edge to edge, then the flame inset offset right.
2. **Al banco.** The bench-work photo at 600px beside a short confirmed line: "Ogni fede nasce a mano, nel laboratorio di famiglia, dove Eugenio e Giulio Rocca lavorano fianco a fianco." Below it, a caption in technical style: "Eugenio e Giulio Rocca, laboratorio di Lamezia Terme". No heading paragraph block.
3. **Su misura: a technical sheet.** A ruled table in Karla. This is the atelier signature, like a workshop job sheet. Each row has a code (01–04), a name and a confirmed note, on hairline rows:
   - 01 Incastonatura: Pietre interne o esterne, with the diamanti reference (240px) in the row
   - 02 Incisioni: Nomi scritti a mano · Impronte · Simboli · Micro-testi, with the impronta and microtesto references (252px) side by side
   - 03 Texture: Superfici lavorate a mano, with the texture inset (about 280px, 4:5)
   - 04 Materiali: Oro 18Kt · Platino · Titanio (text only)

   The reference images sit at the right end of each row, at native size, framed with a thin hairline like specimen cards. On mobile each row stacks: code + name, note, then the images in a row.
4. **Finitura.** The polishing photo (480px, 3:4) on the left, with the label "LUCIDATURA" set to its right in Karla capitals and a short vertical hairline. The label comes from the confirmed services list. No invented description.
5. **Pause / finished result.** The vertical hands-with-rings photo, centred at 516px on ivory. No caption beyond alt text.
6. **Contact ending.** The shared contact colophon, unchanged.

## Visual language (differs from Matrimonio)
- More rules and grids: hairline tables, codes 01–04 in tabular Karla (not Bodoni numerals), small technical captions.
- Bodoni appears once only (the title).
- Racing Green appears only in the opening hairline, the row codes and link hovers. There are no green surfaces except the footer.
- Motion: existing Reveal effects only (unveil on the opening photo, crossfade on insets). Text is not animated.

## Going live
- Set `/laboratorio-su-misura` to live and add "Laboratorio" to the header, mobile menu and footer after Matrimonio.
- Show the hidden "Il laboratorio" action on /fedi-matrimonio. Point the homepage Su misura/Texture link here (instead of /personalizzazioni), and add a link from the homepage workshop scene.
- Make `/personalizzazioni` redirect to this page.
- Give the page its own Italian title and description, with no share image.

## Technical notes
- Route `src/routes/laboratorio-su-misura.tsx`; page in `src/components/laboratorio/LaboratorioPage.tsx`, reading from `site.ts` (`personalisationAreas`, `services`).
- Upload `lavorazione-artigianale-banco`, `lucidatura-laboratorio`, `mani-con-fedi-verticale` and the three personalisation references with lovable-assets, and add them to `photos` with their real sizes.
- All images go through `EditorialImage` with max-width caps equal to native width.
- Update AGENTS.md (new page module) and add a routing test for the page.

## Open points
- The page has no confirmed text about polishing beyond the word "Lucidatura". The label stands alone unless you provide a sentence.
