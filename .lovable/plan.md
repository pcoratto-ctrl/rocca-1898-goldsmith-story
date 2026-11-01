# ROCCA 1898 — Final art-direction phase

## Audit of the current build

What works and stays: the full-screen photo Hero with the white logo over it, the header switch exactly at the bottom of the Hero, the workshop photo scene, the standalone wedding photo (PauseScene), the green Heritage chronology, the green Materials index, Bodoni Moda + Karla, the ivory palette, and the restrained motion tokens.

What still looks like a template:
- Collections on the homepage use a sticky list of names with six different plate layouts. It is clever, but the jewellery is not the interface. On mobile it is a swipe row with very large names.
- "fotografia in arrivo" / "Descrizione in arrivo" still appear: on placeholders (homepage and /collezioni) and as a note in every /collezioni chapter.
- The six character lines ("La forma essenziale della fede." and the rest) are still in the data. They no longer show on screen but they would come back if anyone used the field.
- "Richiedi informazioni" is repeated six times on /collezioni.
- Display type is still too big too often: "Parliamone." on Contatti, the holding pages, and "Incastonatura" plus the heritage numerals on Home.
- Navigation has 4 items and /personalizzazioni is a holding page. There are no Matrimonio, Laboratorio or Servizi areas yet.
- Green footer: already done. Green manifesto "Dal 1898": already done.

## 1. Exact homepage changes

Final order: Hero → Dal 1898 → Collection plates → Materials → Workshop → Fedi & Matrimonio → Su misura → Heritage → Services preview → Colophon → Footer.

- Hero, Manifesto, Materials, Workshop (CraftScene), Heritage, Colophon: no changes. Only the Workshop link becomes an editorial action (type B).
- Collections: replace the current scene with a new grid of plates (section 2). The panoramic photo above it is removed from Home and kept only on /collezioni.
- Fedi & Matrimonio: the existing wedding photo scene, plus one editorial action, "Fedi & Matrimonio", linking to /fedi-matrimonio. No new copy.
- Su misura: the existing four Personalisation chapters stay. Their closing link now points to /laboratorio-su-misura.
- Services preview (new): Karla only, ivory, a plain list. **Blocked: there are no confirmed services.** The rules forbid inventing services, so this scene is built only once the client supplies the list. Until then it is left out of the page (not shown with placeholder text).

## 2. Collections interaction design

A new grid component replaces CollectionsScene.

Each plate:
- 1:1 square on an ivory/neutral field (`bg-surface`). The jewellery is centred with object-contain. No radius, no shadow.
- The numeral sits small, top-left, in Karla in the muted colour. The name sits bottom-left in Bodoni, at a modest size (not display size).
- The whole square is one link to `/collezioni#collezione-{slug}`, with an aria-label of the name.

Desktop hover and keyboard focus (600ms, atelier easing):
- The jewellery scales from 1 to 1.035.
- The name goes from foreground/70 to full foreground.
- A 1px Racing Green rule draws along the bottom edge, from left to right.
- A small arrow line appears next to the name.
- If `hasDistinctDetail(c)` is true, the image crossfades to the detail photo (500ms). If not, there is no crossfade and no faked second image.

No second CTA below the grid, except one editorial action, "Tutte le collezioni".

Click: moves to /collezioni and scrolls to that collection's chapter (the existing scroll offset handles the header and the sticky index).

## 3. Desktop / tablet / mobile

- Desktop (1024px and up): 3 × 2 grid with a 2rem gap, inside the standard page width.
- Tablet (640–1023px): 2 columns.
- Mobile (under 640px): 1 column of full-width squares. The whole square is the tap target. On tap there is a brief green rule as press feedback, then the page moves. Plates use the existing image "settle" reveal as they enter the screen.
- Reduced motion: no scale and no crossfade. Only the static rule on focus.

## 4. Navigation architecture

New routes:
- /fedi-matrimonio
- /laboratorio-su-misura
- /servizi

Existing routes: /collezioni, /storia, /contatti.

/personalizzazioni becomes a permanent redirect to /laboratorio-su-misura.

Desktop labels: COLLEZIONI · MATRIMONIO · LABORATORIO · STORIA · SERVIZI · CONTATTI. Page titles keep their full names ("Fedi & Matrimonio", "Laboratorio & Su misura").

Six labels need a width check at 1024px. If they don't fit, the full menu is used from 1024 to 1279px.

Header behaviour does not change: transparent over the Hero, solid ivory after it, never hidden. The mobile menu stays full-height, now with six items.

The three new pages start as structured holding pages using only confirmed facts. They are not filled with invented copy.

## 5. Racing Green usage map

| Section | Treatment |
|---|---|
| Hero | photo, white nav |
| Dal 1898 | ivory, green "Dal 1898" (kept) |
| Collections | ivory, green hover rule and focus |
| Materials | full green (kept) |
| Workshop | ivory, black-and-white photo, green on link hover only |
| Matrimonio | photo / ivory, no green |
| Su misura | ivory, the small green Materiali heading (kept) |
| Heritage | full green (kept) |
| Services | ivory, no green |
| Colophon | ivory |
| Footer | green (kept) |

Green appears, disappears and returns. There are never two green surfaces next to each other.

## 6. Typography hierarchy

- Display Bodoni only for: the Hero, "Dal 1898", the Heritage dates, and one title per page.
- "Incastonatura" drops one step further, to the chapter size. Collection names on the plates use the new medium size.
- "Parliamone." on Contatti drops from the largest display size to the next one down. Holding pages use the medium size.
- Karla is used for all navigation, facts, services, captions and contact data. No body text is animated.

## 7. Button / link system

- A. Navigation link: the existing nav style and its active underline.
- B. Editorial action: one shared component, text + a 40px line that extends on hover. Used for "Tutte le collezioni", "Il laboratorio", "La nostra storia", "Fedi & Matrimonio".
- C. Contact action: the existing contact actions plus the WhatsApp button.

On /collezioni, the six "Richiedi informazioni" links become one contact action under the dossiers (inside the colophon), plus a small type-C WhatsApp link in each dossier. That link uses Karla in muted grey.

## 8. Preserve

HeroScene, ManifestoScene, MaterialScene, CraftScene, PauseScene, PersonalisationScene, HeritageScene, ColophonScene, the header logic, EditorialImage, Reveal, the motion tokens, the site.ts image fields, the CollezioniPage structure, and the sticky index.

## 9. Replace / refactor

- CollectionsScene → the new collection grid (the old desktop index and mobile swipe row are deleted).
- `character` is removed from the Collection type and the data. Its slot for Giulio's real copy is named `description?`, empty by default and shown only when filled.
- The placeholder label inside EditorialImage is removed: the placeholder frame becomes silent.
- On /collezioni: delete the "Descrizione in arrivo" note, consolidate the CTAs, and show the description only when it exists.
- site.ts: new navItems and the redirect.
- New editorial action component.
- New routes: the three new pages plus the redirect route.
- Update the AGENTS.md rules (collections grid, nav) and the routing test.

## 10. Implementation order

1. Copy cleanup: placeholder labels, character lines, "Descrizione in arrivo".
2. Editorial action component and type size changes.
3. The collection grid on Home with its hover, focus and tap behaviour.
4. Fedi & Matrimonio link on the wedding photo; Su misura link target.
5. The /collezioni dossier cleanup.
6. Routes, navigation, redirect, holding pages, head metadata.
7. Check at 1440, 1280, 1024, 768 and 390px; keyboard; reduced motion; tests.
8. Services preview: only once the client supplies the list.

## 11. Temporary photography strategy

- The temporary renders fill the square plates with object-contain on a neutral field, with no labels and no filters.
- The detail crossfade stays inactive until `detailImage` is a different file.
- Final photography (square primary of about 2400px, plus detail) swaps in through site.ts only.
- The renders' white background may show as a lighter square inside the ivory field. To avoid that, the plate field stays white until final photography arrives, and that is one token to change.

## 12. Risks / regressions

- Six nav labels at 1024px (fallback to the full menu).
- The old /personalizzazioni links and the routing test need updating.
- The Services and Matrimonio pages have no confirmed content (blocked on the client).
- Removing the sticky homepage index changes the rule "the only sticky composition is the Collections index". After this change, only /collezioni keeps a sticky index.
- The low-res renders (240px) look soft inside large squares. This is accepted for the mockup, per the brief.
- The WhatsApp number is still unconfirmed.
