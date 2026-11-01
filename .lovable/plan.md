# Phase D1 — /fedi-matrimonio

A real editorial page where the rings and the workshop lead and marriage is the context. It uses only confirmed facts, with no romantic copy. If nothing confirmed exists for a spot, the text is left out.

Note: the uploaded brief ends at "Some secti…" in section 11, so anything after that point was not received. Send the rest if it adds rules.

## Photography (approved images only, never shown larger than their real size)

| Scene | Image | Size | Why |
|---|---|---|---|
| Opening | Hands with rings and rose bouquet (`hero`) | 1600×900 | A different, tighter crop focused on the hands and rings. It is not the full-screen homepage framing. |
| Modelli | Six-model panorama, second version (`panoramica-modelli-fedi-2`, not used anywhere yet) | 1600×900 | A different image from the one opening /collezioni, so it doesn't repeat. |
| Personalizzazioni | Bride showing rings (`sposa`) + gold texture detail (`texture`) | 800×1200, 992×1404 | The texture image comes back here only as a small detail beside its label, never large. |
| Realizzazione | Black-and-white bench (`labBn`) + flame (`fiamma`) | 1200², 551×688 | The real laboratory. |
| Photographic pause | Couple under the palms (`coppia-sposi-palme`, not used anywhere yet) | 593×889 | Portrait image. |

The palms photo is only 593px wide, so a full-width version would mean enlarging it. Instead it sits centred on ivory at its real size. That still reads as a strong, quiet pause.

## Page sequence

### 1. Opening (about 85svh on desktop)
- **Left (5 of 12 columns), ivory:**
  - "ROCCA 1898" in small Karla, with a champagne hairline;
  - "Fedi &" and "Matrimonio" in Bodoni on two lines: the one display title on the page;
  - no paragraph and no button;
  - the title sits low in the column, with the eye line on the image's horizon.
- **Right (7 columns):** the hands photo, filling the column height, cropped toward the rings. No overlay.
- **Mobile, as one composition rather than stacked halves:**
  - the title comes first, set large across the full width;
  - then the photo in 4:5, bleeding edge to edge;
  - the photo rises a little under the bottom of the title, so the two lock together.
- The solid ivory header shows from the start, as on all inner pages.

### 2. Modelli
- A horizontal panorama strip at its real width (up to 1600px).
- Below it, the six names as one Karla line separated by thin dots: Classic · Hollow · Plate · Twist · Square · Waves. Each name links to its chapter on /collezioni.
- "MODELLI" as a small label on the left.
- Editorial action (type B): "Le collezioni" → /collezioni.
- No cards and no descriptions.

### 3. Materiali (a different treatment from the green homepage scene)
- White/ivory field, with three names as a large left-aligned index in Karla capitals, wide letter-spacing: ORO 18KT / PLATINO / TITANIO.
- Each name sits on a full-width hairline row.
- The single green element: the row rule under the first name is Racing Green, the others champagne. On hover, each rule turns green from left to right.
- No icons, swatches or gradients.

### 4. Personalizzazioni (tight, wedding-specific)
- One composition instead of four big blocks:
  - the bride photo (4:5, left, 5 columns);
  - beside it a typed fact sheet in Karla, as three short groups with green numerals:
    - **Incastonatura:** Pietre interne o esterne
    - **Incisioni:** Nomi scritti a mano · Impronte · Simboli · Micro-testi
    - **Texture:** Superfici lavorate a mano
  - the texture detail as a small 4:5 inset (around 240–300px wide) next to the Texture group.
- Materials are not listed a fourth time (they already appear in Materiali). The sheet carries a "Materiali: Oro 18Kt · Platino · Titanio" footnote line.
- No display type.

### 5. The five-step process (the signature section)
- **Desktop:** one long horizontal progression across the full width, five columns on one shared hairline:
  - large Bodoni numerals 01–05, restrained and in Racing Green: the page's second Bodoni moment;
  - under each numeral, the step name in Karla.
  - A short champagne tick marks each step on the line.
- No icons, no cards and no paragraphs.
- Readable with all motion off. The only motion is a hairline that draws once across as the section enters the screen, and with reduced motion it is simply already drawn.
- **Tablet:** two rows (3 + 2) on the same line system.
- **Mobile:** a vertical progression. The numeral sits on the left with a vertical hairline, and the step name sits to its right. No carousel.

### 6. Realizzazione artigianale
- Heading "REALIZZAZIONE ARTIGIANALE" in Karla, ties visually to step 04 above.
- The black-and-white bench photo large, square, 7 columns; the flame photo smaller at its real size, offset and lower. The arrangement differs from the homepage workshop scene: the images swap sides and there is no long text.
- The "Il laboratorio" action → /laboratorio-su-misura appears only once that page is live.

### 7. Photographic pause
- The palms couple, centred, at its real size, with generous ivory around it. No caption text beyond the alt text, and no quote.

### 8. Contact ending
The shared contact colophon (direct phone, email and address, as on Home), unchanged. No booking, form or new WhatsApp action.

## Racing Green on this page
Green appears only as:
- the opening hairline accent;
- the first Materiali rule and its hover state;
- the personalisation numerals;
- the five process numerals;
- link hover states.

There are no green backgrounds; the footer is the only green surface. Ivory and photography lead.

## Typography
- Bodoni: the page title, plus the five process numerals.
- Everything else is Karla: labels, collection names, materials, facts, step names, captions.
- No scene uses the "small label + giant serif + paragraph + button" pattern.

## Going live (part of this phase)
- Mark /fedi-matrimonio as live in the site data and add the "Matrimonio" item to the header, mobile menu and footer, in its final position after Collezioni.
- On the homepage, add the "Fedi & Matrimonio" editorial action under the wedding photo.
- Give the page its own title and description (Italian, factual), with no share image tag (the hosting adds the preview).

## Technical notes
- New route `src/routes/fedi-matrimonio.tsx`. The page lives in `src/components/matrimonio/`, one file per scene, all reading from `site.ts` (`collections`, `weddingProcess`, `personalisationAreas`).
- Add `coppia` and `panoramica2` to `photos` in `src/components/home/images.ts`, with their real sizes.
- Images go through `EditorialImage`. The pause and flame images keep their native max width.
- The process line uses the existing `Reveal` "unveil" mask, with no new motion.
- Update AGENTS.md (the new page module) and add a small routing test that /fedi-matrimonio resolves.

## Risks
- The tighter opening crop of the hands photo needs checking at 1440 and 1920px so it never stretches beyond 1600px. Above that width the image column is capped and the ivory field widens.
- Seven nav items (with Home in the mobile menu) still fit on desktop, since only four are live after this change.
