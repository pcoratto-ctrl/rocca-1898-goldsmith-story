# ROCCA 1898 — Premium Showcase Website Plan

## 1. Visual direction

"Quiet Italian atelier." An editorial, magazine-like site where photography carries the emotion and typography carries the authority. Mostly ivory pages, Racing Green used as a deep, confident field colour (full sections, footer, contact), champagne used only as a hairline accent (rules, small numerals, focus rings) — never as gold gradients.

Principles:
- One idea per screen. Minimal copy above the fold.
- Asymmetric editorial compositions instead of uniform card grids.
- Thin rules, generous margins, small uppercase labels with wide tracking.
- No icons-as-decoration, no gradients, no glows, no ornaments.
- The official logo is used only as supplied (green version on light, white version on green/photography). Never redrawn, recoloured or cropped.

## 2. Sitemap

```text
/                     Home
/collezioni           Collections (index of six brand worlds)
/collezioni/$slug     Reserved for future dedicated collection pages
                      (classic, hollow, plate, twist, square, waves)
/personalizzazioni    Personalisation
/storia               Our Story
/contatti             Contact
404                   Branded not-found page
```

Language: Italian as primary copy. Structure ready for an English version later (no hardcoded strings scattered in layout components).

Each collection lives as structured data (name, slug, tagline, short story, material notes, image set, accent tone). The index page renders from it today; dedicated pages can be switched on later without redesign.

## 3. Homepage hierarchy

1. **Hero** — full-viewport cinematic landscape image (fedi), logo-white in header over it, one short line of display type ("Fedi nuziali, a mano, dal 1898"), one quiet text link "Scopri le collezioni". Subtle scroll cue line.
2. **Manifesto** — short centered statement in large serif on ivory, with small "Dal 1898" label. Lots of air.
3. **Collections preview** — editorial asymmetric layout: one large featured collection + five in a staggered rhythm (not identical cards). Each: image, name, one-line character. Link to /collezioni.
4. **Craftsmanship** — split section: black-and-white workshop image + flame detail, text about hand work, family, Italian bench tradition.
5. **Full-bleed emotional band** — wedding/lifestyle image (hands, double exposure) with one line of type.
6. **Personalisation teaser** — texture image + short copy (engraving, alloys, widths, finishes) → /personalizzazioni.
7. **Story teaser** — Racing Green section, timeline numerals (1898 → today) in champagne hairline type → /storia.
8. **Contact invitation** — "Parliamone" with three equal direct actions: WhatsApp, Telefono, Email. Visit by appointment note.
9. **Footer** (Racing Green).

## 4. Collections page concept

- Intro: title "Collezioni", short paragraph, horizontal index of the six names (anchor links, sticky on desktop as a thin sub-nav).
- Each collection is a **chapter**, not a card: numeral (01–06), name in large display type, a poetic one-line character, 2–3 sentences, material/finish notes in small caps, and a composed image group (one large + one detail).
- Layout alternates between chapter templates so the six feel distinct: e.g. Classic = centered symmetrical; Hollow = image-left wide; Plate = flat graphic/frontal; Twist = diagonal offset composition; Square = strict grid; Waves = flowing full-bleed. Each chapter ends with "Richiedi informazioni" (WhatsApp prefilled with collection name).
- Image slots use fixed aspect ratios with neutral placeholder tone until high-res photography arrives — no stretched low-res imagery.

## 5. Personalisation page concept

- Hero: texture of gold, title "Personalizzazioni".
- Numbered process (01 Incontro, 02 Disegno, 03 Lavorazione, 04 Consegna), each with workshop image and short text.
- Options as an editorial list (not cards): metals and colours of gold, widths & profiles, finishes (lucido, satinato, martellato), engraving (inside/outside, handwriting, fingerprints), stones.
- Closing contact invitation.

## 6. Story page concept

- Opening: large "1898" numerals with logo-like restraint, short intro.
- Long-form editorial chapters with alternating image/text, pull quotes in serif italic.
- Quiet vertical timeline of generations (dates in champagne, hairline connector).
- B/W workshop photography dominant; one full-bleed flame image as emotional break.
- Ends with "Vieni a trovarci in laboratorio".

## 7. Contact page concept

- No form. Three large, equally weighted contact blocks: WhatsApp (primary), Telefono, Email — each a full tap target with label, value and action.
- Address, opening hours / "su appuntamento", embedded static map image or link to Google Maps (no heavy map script).
- Brief reassurance copy (consultation without commitment).
- Persistent but discreet WhatsApp access on mobile (small fixed pill at bottom, hidden on contact page).

## 8. Design system

**Typography**
- Display: Cormorant Garamond (light/regular + italic) — classical Italian bookish feel. Alternative to review: Bodoni Moda for higher contrast.
- Text/UI: Karla or Work Sans — clean, warm, unbranded.
- Fluid scale with clamp(): Display XL clamp(3rem, 7vw, 7.5rem); Display L clamp(2.5rem, 5vw, 5rem); H2 clamp(2rem, 3.5vw, 3.25rem); H3 clamp(1.5rem, 2vw, 2rem); Body 1.0625rem/1.65; Small label 0.75rem uppercase, tracking 0.18em.
- Line length capped at ~62ch for body.

**Colour tokens** (oklch in CSS, mapped to semantic names)
- background = ivory #F7F5EF; surface = neutral #ECEAE3
- foreground = almost black #181818; muted-foreground = grey #686862
- primary = Racing Green #004225; primary-foreground = ivory
- accent-hairline = champagne #B59A67 (rules, numerals, focus ring only)
- Contrast check: grey on ivory ≈ 5.4:1 (OK for body); champagne used only decoratively or at large sizes.

**Spacing & widths**
- Fluid section spacing: clamp(5rem, 12vw, 11rem) vertical.
- Gutters: clamp(1.25rem, 4vw, 4rem).
- Widths: text 38rem, content 72rem, wide 90rem, full-bleed.
- 12-column grid desktop, 8 tablet, 4 mobile; asymmetric spans (7/5, 5/7, 8/4).

**Image aspect ratios**
- Hero: 16:9 desktop, 4:5 crop on mobile (art-directed).
- Collection: 4:5 portrait primary, 1:1 detail.
- Workshop: 1:1 and 3:4.
- Full-bleed bands: 21:9 desktop, 4:5 mobile.

**Buttons / links**
- Primary: Racing Green fill, ivory text, square corners (0–2px radius), uppercase small label.
- Secondary: 1px hairline outline.
- Text link: underline that draws in from left on hover (300ms).
- Min tap target 48px.

**Header states**
- Over hero: transparent, white logo, ivory nav.
- After scroll: ivory background, green logo, hairline bottom border, slightly reduced height (400ms).
- Hides on scroll down, reappears on scroll up (desktop and mobile).
- Mobile: logo + "Menu" text; full-screen ivory overlay menu with large serif links and contact actions.

**Footer**: Racing Green, white logo, short sign-off, nav, direct contacts, address, P.IVA, legal links.

**Section rhythm**: alternate ivory → image → ivory → green; never two dense text sections in a row.

## 9. Responsive strategy

- 1440px+: wide max-width (90rem) with grown margins; images stay sharp via srcset; type caps at clamp max.
- Laptop (1024–1439): full asymmetric layouts.
- Tablet (768–1023): asymmetric layouts simplify to 2 columns, chapters stack image-then-text with offsets kept.
- Mobile (<768): single column, art-directed crops (portrait), editorial offsets reduced not removed, sticky contact pill, larger tap targets.
- Fluid clamp() for type and spacing; breakpoints used mainly for layout changes.

## 10. Image strategy

- Every image wrapped in a component with fixed aspect ratio, ivory/neutral placeholder background, width/height set → zero layout shift.
- `<picture>` with AVIF + WebP sources and srcset widths (640 / 960 / 1280 / 1920 / 2560) once high-res originals exist.
- Hero preloaded with fetchpriority=high; all others lazy and async decoded.
- Rule: an image is never displayed larger than its native resolution; slots too large for a current file use a smaller layout or placeholder.
- Consistent grading: warm, soft contrast; B/W reserved for workshop.

**Current uploads assessment**
- hero-home-fedi (1600×900): usable for hero up to laptop; too small for 1440px+ retina full-bleed.
- panoramica-modelli-fedi (1600×900): good for a medium band.
- laboratorio-lavorazione-bn (1200×1200): good for half-width.
- mani-sposi-doppia-esposizione (1170×780): half-width or medium band only.
- sposa-anelli-artistica (800×1200), texture-fedi-oro (992×1404): portrait column use only.
- coppia-sposi-palme (593×889), laboratorio-fiamma (551×688): small — supporting/detail sizes only.
- Logos (SVG, green and white): used as-is.

## 11. Motion strategy

- Soft reveal: opacity 0→1 + 12–16px translate, 500–600ms, ease-out, via one small IntersectionObserver hook (no animation library).
- Image hover: scale 1.03 over 600ms inside overflow-hidden frame.
- Header transform: 400ms.
- Very light parallax (≤8% translate) only on the hero and one full-bleed band, desktop only.
- Native smooth anchor scrolling; no scroll-jacking.
- All motion disabled/reduced under prefers-reduced-motion.

## 12. Accessibility

- Semantic landmarks, single h1 per page, logical heading order.
- Visible champagne/green focus ring on all interactive elements; skip-to-content link.
- Keyboard-operable mobile menu with focus trap and Esc to close.
- Meaningful Italian alt text; decorative images marked empty alt.
- Contrast verified for all text pairs; 48px tap targets.

## 13. Reusable components

SiteHeader, MobileMenu, SiteFooter, Section (spacing + background variant), Container (text/content/wide), EditorialImage (ratio, srcset, placeholder), FullBleedBand, SectionLabel, DisplayHeading, CollectionChapter (6 layout variants), CollectionPreviewGrid, SplitStory, ProcessStep, Timeline, ContactActions (WhatsApp/phone/email), FloatingWhatsApp, Reveal, TextLink, Button.

## 14. Implementation order

1. Design tokens, fonts, fluid type/spacing utilities, logos as assets, favicon from logo.
2. Layout shell: header (all states), mobile menu, footer, page routes with metadata.
3. Core primitives: Container, Section, EditorialImage, Reveal, buttons/links.
4. Home page end-to-end (sets the visual bar).
5. Collections page + collection data model.
6. Story, Personalisation, Contact pages.
7. Motion polish, reduced motion, focus states.
8. Responsive QA at 1440/1280/1024/768/390 with screenshots; performance and accessibility pass.

## 15. Risks and missing assets

- **No dedicated photography for the six collections** — biggest risk. Need at least 2 high-res images per collection (portrait 4:5 at ≥2400px tall, plus a detail).
- Hero image only 1600px wide — ideally a ≥2880px original (and a portrait crop for mobile).
- Several lifestyle/workshop images are small (≈550–800px) and limit layout freedom.
- Missing real content: contact details (WhatsApp, phone, email, address, hours), family history facts/dates, collection descriptions, personalisation options actually offered, legal info (P.IVA).
- Until provided, I will use clearly marked placeholder copy and neutral image placeholders — not stock or AI imagery — unless you prefer otherwise.

## Technical notes

- TanStack Start routes per page with unique head() metadata; collection data in a typed module.
- Fonts via `<link>` in root head with preconnect and display=swap; Tailwind v4 tokens in styles.css.
- Images served through Lovable Assets CDN; no animation or carousel libraries.
