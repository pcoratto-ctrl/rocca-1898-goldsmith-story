# ROCCA 1898 — Homepage polish pass

Focused quality pass on the approved homepage. No redesign, no scene reordering, no internal pages. Hero photo and layout, colours, fonts, logos, copy, Collections interaction, Workshop, Heritage and scene order stay as they are.

## 1. Material scene becomes a typographic index
- Remove the gold texture photo from the dark Material scene entirely.
- Replace with a quiet index on ink: ORO 18Kt / PLATINO / TITANIO, stacked, Bodoni at about 4–5.5vw on desktop (not poster-sized), very faint 1px champagne separators, generous negative space, optional small Karla label "Materiali".
- No cards, icons, gradients or effects. Scene is shorter than today.

## 2. Header — two states, always visible
- State A (homepage, while Hero is on screen): transparent, white logo, white labels, no container. Mobile: white logo + MENU. No CTA button.
- State B (after Hero, and on internal pages from first paint): ivory, green logo, ink labels, 1px bottom border, about 68px on desktop, compact on mobile, no shadow.
- Hide-on-scroll removed completely; the bar never leaves the screen.

## 3. No flash on first load
- Internal pages render directly in State B, never briefly transparent.
- Homepage renders in State A and switches only when the Hero leaves the screen.
- Initial state comes from the current page; the switch is driven by watching the Hero, not a scroll distance.

## 4. Hero to header transition
- Ivory fades in, bar moves -8px to 0, white and green logos stacked and crossfaded, labels crossfade white to ink, border fades in.
- 420ms, atelier easing, no bounce. Reduced motion: instant.

## 5. Navigation clarity
- Desktop links: Karla about 13.5px, current letter spacing, 48px tap height, high contrast in both states.
- Underline: 1px, grows left to right from zero in 300ms.
- Only the current page keeps a permanent underline. CONTATTI gets slightly stronger type weight, no permanent underline, no filled button.

## 6. Mobile header and menu
- Same full-screen menu; focus trap and Escape unchanged.
- MENU 48px target; page links at least 56px tall in Bodoni; phone / email / WhatsApp in Karla.
- Compact ivory bar stays visible after the Hero, without taking too much screen height.

## 7. WhatsApp
- Stays a discreet utility; nothing floating on desktop.
- Mobile button: 48px, round, Racing Green, white icon; appears only after the Hero, hidden over the contact scene and on the Contatti page.

## 8. Motion vocabulary

```text
Header morph            420ms
Nav / text underline    300ms
Image mask reveals      1000ms
Image hover zoom        1 -> 1.025, 650ms
Collection crossfade    500ms
Hero settle             unchanged 1.04 -> 1
```
- Body paragraphs and repeated text blocks appear without animation (generic fade-up removed).
- Reduced motion respected everywhere. No new libraries, no scroll-jacking, cursor, springs, page transitions or loaders.

## 9. Interactive styles — three only
1. Navigation link: header, footer, mobile menu
2. Editorial text link with drawn underline: Hero "Collezioni", "Storia", "La nostra storia", personalisation link and similar
3. Utility action: WhatsApp, contact actions
Every homepage link audited to match one of these and read clearly as clickable.

## 10. Image quality
Rule: never display beyond native pixels; for detail photography prefer sources at 1.5–2x the displayed size, otherwise shrink, demote to detail, or remove. No filters, sharpening or stretching.
- Texture (992x1404): out of Material scene; large 16:10 use in Personalisation removed; kept only as small detail if sharp, otherwise removed.
- Flame (551x688): max about 275px.
- Workshop B/W (1200x1200): capped at native, composition kept.
- Hands double exposure (1170x780): width capped, never full-screen on large desktops.
- Bride (800x1200): portrait use, capped.
- Panoramica (1600x900): capped at native.
- Personalisation keeps strong type, the bride photo, and only sharp small detail; whitespace carries the rest.

## 11. Verification
Review at 1440, 1280, 1024, 768, 390px: State A and B, transition, no hiding, no first-paint flash on home and internal pages, mobile header and menu, active link, WhatsApp visibility rules, Material scene, Personalisation images, image sizes at 1440+, reduced motion, smooth scrolling. Then stop.

## Technical details
- `SiteHeader.tsx`: remove `hidden`/`lastY`/directional logic; initial `solid = pathname !== "/"`; IntersectionObserver on `#hero`, solid if absent; `--header-h-solid: 4.25rem`; stacked logos with opacity swap.
- `FloatingWhatsApp.tsx`: show via the same Hero observer; hide while the contact scene intersects and on `/contatti`.
- `styles.css`: `link-draw` scaleX 0 -> 1 / 300ms / origin left; `img-zoom` 1.025 / 650ms; `unveil`/`unveil-up` 1000ms; `link-draw-strong` only for active routes if needed.
- `MaterialScene.tsx` rewritten; `PersonalisationScene.tsx` texture use trimmed; `CollectionsScene.tsx` crossfade 500ms; image max-widths set per scene.
- `AGENTS.md` motion rule updated to the new timings.
