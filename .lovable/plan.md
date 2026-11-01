# ROCCA 1898 — Final art-direction phase (revised)

Guiding test: with all motion disabled, the site must still read as "clearly ROCCA 1898". It should be carried by 1898, Racing Green, the jewellery, the family, the workshop and the six named collections, not by luxury typography.

## Confirmed content added in this revision
- **Services:** Co-creazione, Lucidatura, Aggiornamenti, Certificato, Packaging. Names only; no descriptions until the client approves them.
- **Wedding process:** Ascolto e consulenza → Scelta modello/materiale → Personalizzazioni → Realizzazione artigianale → Consegna e cura.
- Both lists are added to the site's single content source (`site.ts`) and saved to project memory as brand facts.

## What stays exactly as it is
Hero, the header switch at the bottom edge of the Hero, Dal 1898, the green Materials scene, the Workshop scene, the wedding photograph, the four Personalisation chapters, the green Heritage scene, the Colophon, the green footer, Bodoni Moda + Karla, and the motion timings.

## Homepage order
Hero → Dal 1898 → Collection plates → Materials → Workshop → Fedi & Matrimonio → Su misura → Heritage → **Services** → Colophon → Footer.

## Racing Green rhythm
Green fills the background in three places only: Materials, Heritage and the footer. It appears as a detail in three places: the green "Dal 1898", the hover/focus line on the collection plates, and the small Materiali heading. Everything else stays ivory or photographic. Two green backgrounds never sit next to each other.

## Collection plates: a vitrine, not product cards
- Desktop shows 3×2, tablet 2 columns, mobile 1 column. It is technically a grid, but it should read as one continuous photographic field:
  - very tight gutters (about 2–4px, or a shared field split only by tone);
  - generous whitespace around the whole block;
  - aligned to the main site grid;
  - no border, shadow, rounded corners or box styling.
- Default state:
  - a 1:1 field with the jewellery suspended in negative space (object-contain);
  - a tiny numeral and a restrained name in Karla small caps, with Bodoni kept out so the name never competes with the ring;
  - no description and no button.
- The whole square is one link to its chapter on /collezioni.
- Hover and keyboard focus (600ms, atelier easing):
  - the ring scales from 1 to 1.035;
  - the name strengthens;
  - a 1px Racing Green line draws along one edge;
  - a small line/arrow cue appears;
  - the image crossfades to the detail photo only when `primaryImage` and `detailImage` are different files. Otherwise only the primary shows, with no fake second image.
- Mobile: full-width squares with the whole square as the tap target. The green line shows as brief press feedback, then the page moves.
- Reduced motion: no scale and no crossfade.
- Wide-desktop check: at 1440px and above, compare a tight gutter with a 2rem gutter on screen and keep whichever reads less like a shop grid.
- The panoramic photo leaves the homepage. It stays only as the opening of /collezioni.
- One editorial action below the plates: "Tutte le collezioni".

## Temporary images
They are shown at the final intended scale: never shrunk, never blurred, sharpened or filtered. A separate image enhancement pass happens later. Swapping the file paths for final photography turns on the full experience (including the detail crossfade) with no layout change.

## Services preview (homepage)
- Warm ivory, Karla only.
- The five names as a numbered list (01–05) separated by fine hairlines.
- No icons, cards or text.
- One editorial action, "Servizi", appears only once /servizi is a real page.

## Fedi & Matrimonio / Su misura on the homepage
- The wedding photo gets one editorial action, "Fedi & Matrimonio", once that page is live.
- The Su misura closing link targets /laboratorio-su-misura once live. Until then it keeps its current target.

## Typography
- Large Bodoni only for: the Hero, "Dal 1898", the Heritage dates, and one title per page.
- No scene gets a display title just because there is room for one.
- "Incastonatura" drops to the chapter size.
- "Parliamone." drops one step.
- Karla carries facts, controls, services, captions, navigation and labels.
- No body text is animated.

## Link system (three families only)
- **A. Navigation:** small, with the existing active underline.
- **B. Editorial action:** text plus a short line that extends on hover (one shared component).
- **C. Contact:** WhatsApp, phone, email (existing).
- On /collezioni, the six repeated "Richiedi informazioni" links become a single quiet WhatsApp link per dossier plus the shared Colophon.

## Navigation and routes
- Final routes: /collezioni, /fedi-matrimonio, /laboratorio-su-misura, /storia, /servizi, /contatti.
- Labels: COLLEZIONI · MATRIMONIO · LABORATORIO · STORIA · SERVIZI · CONTATTI.
- **No public holding pages.** A label appears in the header, mobile menu and footer only when its page has a real designed structure. The new routes are prepared internally and added to the menu as each page is finished.
- /personalizzazioni redirects permanently to /laboratorio-su-misura once that page is live.
- Behaviour is unchanged: transparent over the Hero, solid ivory after it, never hidden. The mobile menu is full-height. The width of six labels gets checked at 1024px; if they don't fit, that size falls back to the menu.

## Phases
- **A — Foundation cleanup**
  - Remove from the screen and the data: the six character lines, "Sei fedi, sei caratteri", "Descrizione in arrivo" and every "fotografia in arrivo" label. Placeholders become silent neutral fields.
  - Apply the typography corrections.
  - Build the shared editorial action.
  - Make navigation data-driven, with a flag per page for whether it is live.
- **B — Homepage art direction**
  - The new collection plates.
  - The Matrimonio action.
  - The Su misura link.
  - The Services list.
  - A brand-rhythm check with motion disabled.
- **C — Collections page**
  - Dossier cleanup.
  - Anchors that match the homepage plates.
  - The consolidated contact action.
  - No duplicate temporary detail image.
- **D — Internal pages, each built as a real page:**
  1. Fedi & Matrimonio: wedding photography, the rings, Oro 18Kt / Platino / Titanio, the personalisation options, and the five-step process. No romantic copy.
  2. Laboratorio & Su misura, plus the /personalizzazioni redirect.
  3. La nostra storia.
  4. Servizi.
  5. Contatti.

  Each page is planned for review before it is built.
- **E — Final photography replacement and media direction.**

This Build covers Phases A–C. Phase D starts with Fedi & Matrimonio as its own reviewed step.

## Technical notes
- `site.ts`:
  - `navItems` get `{ to, label, live }`;
  - add `services` and `weddingProcess`;
  - `character` is replaced by an optional `description` that shows only when filled.
- `EditorialImage` loses its visible placeholder label.
- A new collection plate grid replaces `CollectionsScene` (the sticky desktop index and mobile swipe row are removed).
- A new `ServicesScene` lives in `src/components/home/`.
- A new `EditorialAction` primitive.
- AGENTS.md is updated: the only sticky composition is now the /collezioni index; collections render as the plate grid; nav visibility is controlled by `live`.
- The routing test is updated.

## Risks
- Removing the homepage sticky index changes an established rule (recorded in AGENTS.md).
- Six nav labels at 1024px.
- The 240px temporary renders look soft at full plate size. This is accepted until the enhancement pass.
- The WhatsApp number is still unconfirmed.
- Until Phase D, the nav shows fewer than six items.
