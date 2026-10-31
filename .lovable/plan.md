# ROCCA 1898 — Homepage polish pass

Focused quality pass on the approved homepage. No redesign, no scene reordering, no internal pages. Hero photo, colours, fonts, logos, copy, Collections interaction, Workshop and Heritage stay as they are.

## 1. Material scene becomes a typographic index
- Remove the gold texture photo from the dark Material scene entirely.
- Replace with a quiet material index on ink: ORO 18Kt / PLATINO / TITANIO set in large Bodoni, stacked, separated by very faint champagne 1px hairlines, generous negative space, one small Karla caption ("Materiali") at most.
- No cards, icons, gradients or images. Scene is shorter than today.
- Only materials already confirmed in the brand facts are listed.

## 2. Header — two states, always visible
- State A (over Hero, homepage only): transparent, white logo, white labels, no container. Mobile: white logo + MENU.
- State B (after Hero, and immediately on every internal page): ivory background, green logo, ink labels, 1px bottom border, about 68px tall on desktop (compact on mobile), no shadow.
- Hide-on-scroll-down logic removed completely; the bar never leaves the viewport.
- State switch is driven by the Hero leaving the viewport (observer on the Hero), not a 40px scroll threshold.

## 3. Hero to header transition
- Ivory fades in, bar moves -8px to 0, logo crossfades white to green (both logos stacked, opacity swap so there is no flash), labels go white to ink, border fades in.
- 420ms, existing atelier easing, no bounce. Reduced-motion: instant switch.

## 4. Navigation clarity
- Desktop links: Karla about 13.5px, kept letter spacing, 48px tap height, high contrast in both states.
- Underline refined: 1px, grows left to right from zero in 300ms; active page keeps a full, subtle line.
- CONTATTI gets slightly stronger emphasis (permanent underline), no filled button.

## 5. Mobile menu
- Same full-screen concept, focus trap and Escape unchanged.
- MENU button 48px target; page links at least 56px tall, Bodoni; WhatsApp / phone / email below in small Karla.
- Compact ivory bar stays visible after the Hero on phones too.

## 6. Motion vocabulary (standardised)

```text
Header morph            420ms
Nav / text underline    300ms
Image mask reveals      1000ms   (currently 1200-1300ms)
Image hover zoom        1 -> 1.025, 650ms   (currently 1.03 / 700ms)
Collection crossfade    500ms    (currently 700ms)
Hero settle             unchanged 1.04 -> 1
```
- Body paragraphs are not animated; the generic soft fade-up is removed from repeated text.
- Everything respects reduced motion. No new libraries.

## 7. Interactive styles — three only
1. Navigation link (header, footer, mobile menu)
2. Editorial text link with drawn underline (Hero "Collezioni", "Storia", "La nostra storia", personalisation link)
3. Utility action (WhatsApp pill, contact actions)
Audit every homepage link so it matches one of these and clearly looks clickable.

## 8. Image quality audit
Rule: never display an image wider than its native pixels.
- Texture photo (992x1404): removed from Material scene; also its large 16:10 use in the Personalisation scene is removed — kept only as the small square detail, or dropped if still soft.
- Fiamma (551x688): stays small (max 275px).
- Lab B/N (1200x1200), Mani (1170x780), Sposa (800x1200), Panoramica (1600x900): cap displayed width at native size; reduce any that exceed it at 1440px.
- No filters, sharpening or upscaling.

## 9. Verification
Screenshots and scroll checks at 1440, 1280, 1024, 768 and 390px: header state A/B, transition, no hiding on scroll, mobile menu, Material scene, image sizes. Then stop.

## Technical details
- `SiteHeader.tsx`: drop `hidden`/`lastY`; IntersectionObserver on `#hero` (fallback: solid state when no hero on the route); fixed height token `--header-h-solid: 4.25rem`.
- `styles.css`: update `link-draw` (scaleX 0 -> 1, 300ms), `img-zoom`, `unveil`/`unveil-up` durations; add `link-draw-strong`.
- `MaterialScene.tsx` rewritten; `PersonalisationScene.tsx` image use trimmed; `CollectionsScene.tsx` crossfade duration.
- Update AGENTS.md motion rule to the new timings.
