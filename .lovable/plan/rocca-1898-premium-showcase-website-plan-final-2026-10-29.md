# ROCCA 1898 — Premium Showcase Website Plan (final)

## 1. Visual direction

"Quiet Italian atelier." An editorial, magazine-like site where photography carries the emotion and typography carries the authority. Mostly ivory pages, Racing Green as a deep, confident field colour (full sections, footer), champagne only as a hairline accent (rules, small numerals, focus rings) — never gold gradients.

- One idea per screen. Minimal copy above the fold.
- Asymmetric editorial compositions instead of uniform card grids.
- Thin rules, generous margins, small uppercase labels with wide tracking.
- No decorative icons, gradients, glows or ornaments.
- Official logo used only as supplied (green on light, white on green/photography). Never redrawn, recoloured or cropped.

Copy rule: only information provided by the client. No invented awards, certifications, sustainability claims, guarantees, services, opening hours, "by appointment", "no-commitment" or other commercial policies.

## 2. Sitemap

```text
/                     Home
/collezioni           Collections (six brand worlds)
/collezioni/$slug     Reserved for future dedicated collection pages
/personalizzazioni    Personalisation
/storia               Our Story
/contatti             Contact
404                   Branded not-found page
```

Italian copy, structured so an English version can be added later. Collections live as structured data (name, slug, tagline, story, notes, image set), so dedicated pages can be added without redesign.

## 3. Homepage hierarchy

Three pillars: Heritage (since 1898), Collections, Craftsmanship/Personalisation. Intentional rhythm, not nine equal blocks:
cinematic image → whitespace → editorial text → collections → craft → emotional photography → personalisation → heritage → contact.
Sections vary in height, density and background.

1. **Hero** — full-viewport cinematic image (fedi), white logo over it, one short display line, one quiet link "Scopri le collezioni".
2. **Whitespace + manifesto** — short serif statement, "Dal 1898" label, the Rocca family goldsmith tradition in one sentence.
3. **Collections — the strongest, largest moment** — immersive editorial sequence: one large featured collection plus five in a staggered, non-uniform rhythm; numeral, name, one-line character, image slot (neutral placeholder until dedicated photography arrives). Strong link to /collezioni.
4. **Craft** — B/W workshop image + flame detail; hand work in the family laboratory, Italian artisanal tradition combined with techniques and standards from major European jewellery districts.
5. **Emotional full-bleed** — wedding hands / double exposure, one line of type.
6. **Personalisation** — gold texture image; the four areas (Incastonatura, Materiali, Incisioni, Texture) as a typographic list → /personalizzazioni.
7. **Heritage** — Racing Green field: 1898 → Eugenio Rocca, fourth generation → Giulio Rocca, fifth generation (trained between Italy and Switzerland, experience with Bulgari, several years in Zurich); father and son in the same laboratory → /storia.
8. **Contact** — WhatsApp, phone, email as direct actions, plus address.
9. **Footer** (Racing Green).

## 4. Collections page concept (approved)

- Intro: title "Collezioni", short paragraph, index of the six names (anchor links; thin sticky sub-nav on desktop).
- Each collection is a **chapter**, not a card: numeral (01–06), large display name, one-line character, short text, notes in small caps, composed image group (one large + one detail).
- Distinct chapter templates: Classic = centered symmetrical; Hollow = wide image-left; Plate = flat frontal/graphic; Twist = diagonal offset; Square = strict grid; Waves = flowing full-bleed.
- Each chapter ends with "Richiedi informazioni" (WhatsApp prefilled with the collection name).
- Fixed-ratio image slots with neutral placeholders until high-res photography arrives. Descriptions remain placeholder until the client supplies final copy.

## 5. Personalisation page concept

- Hero: gold texture image, title "Personalizzazioni".
- Four editorial chapters, confirmed content only:
  - **Incastonatura** — stones set inside or outside the band.
  - **Materiali** — Oro 18Kt, Platino, Titanio.
  - **Incisioni** — handwritten names, fingerprints, symbols, micro-text / poetry.
  - **Texture** — shown through photography; no invented list of finishes.
- Closing direct contact actions. No invented process steps or services.

## 6. Story page concept

- Opening: large "1898" numerals, short intro on the family goldsmith tradition.
- Editorial chapters alternating image/text, serif pull quotes.
- Generations: tradition since 1898 → Eugenio Rocca (fourth generation) → Giulio Rocca (fifth generation; trained between Italy and Switzerland; experience with Bulgari; several years in Zurich).
- Today: Eugenio and Giulio together in the same laboratory, joining Italian artisanal tradition with techniques and standards from major European jewellery districts.
- B/W workshop photography dominant; one full-bleed flame image as emotional break.

## 7. Contact page concept

- No form. Large, equally weighted contact blocks, each a full tap target:
  - WhatsApp (primary)
  - Telefono: +41 76 268 48 28 · +39 331 3583226 · +39 0968 423522
  - Email: giulioroccalab@gmail.com
- Address: C.so Numistrano, 81 — 88046 Lamezia Terme (CZ), Italia, with a Google Maps link (no heavy map script).
- No opening hours or appointment claims until confirmed.
- Discreet fixed WhatsApp pill on mobile (hidden on the contact page).
- To confirm: which number is used for WhatsApp.

## 8. Design system

**Typography**
- Display: Cormorant Garamond (light/regular + italic). Alternative to review: Bodoni Moda.
- Text/UI: Karla.
- Fluid scale: Display XL clamp(3rem, 7vw, 7.5rem); Display L clamp(2.5rem, 5vw, 5rem); H2 clamp(2rem, 3.5vw, 3.25rem); H3 clamp(1.5rem, 2vw, 2rem); Body 1.0625rem / 1.65; Label 0.75rem uppercase, tracking 0.18em. Body line length ≤ 62ch.

**Colour tokens**
- background ivory #F7F5EF; surface neutral #ECEAE3
- foreground #181818; muted-foreground #686862
- primary Racing Green #004225; primary-foreground ivory
- hairline champagne #B59A67 (rules, numerals, focus ring only)

**Spacing & widths**
- Section spacing clamp(5rem, 12vw, 11rem); gutters clamp(1.25rem, 4vw, 4rem).
- Widths: text 38rem, content 72rem, wide 90rem, full-bleed.
- Grid: 12 columns desktop, 8 tablet, 4 mobile; asymmetric spans (7/5, 5/7, 8/4).

**Image ratios**: hero 16:9 desktop / 4:5 mobile crop; collection 4:5 + 1:1 detail; workshop 1:1 and 3:4; full-bleed bands 21:9 desktop / 4:5 mobile.

**Buttons / links**: primary green fill, ivory label, near-square corners; secondary hairline outline; text link with underline drawing in from left (300ms); tap targets ≥ 48px.

**Header**: transparent with white logo over hero → ivory with green logo, hairline border and reduced height after scroll (400ms); hides on scroll down, returns on scroll up. Mobile: logo + "Menu"; full-screen ivory overlay with large serif links and contact actions.

**Footer**: Racing Green, white logo, nav, contacts, address. Legal/VAT line added once provided.

**Rhythm**: alternate ivory → image → ivory → green; never two dense text sections in a row.

## 9. Responsive strategy

- 1440px+: wide max-width with grown margins; type caps at clamp max; images only as large as their resolution allows.
- Laptop (1024–1439): full asymmetric layouts.
- Tablet (768–1023): two-column simplifications, offsets kept.
- Mobile (<768): single column, art-directed portrait crops, reduced (not removed) offsets, WhatsApp pill.
- Fluid clamp() for type and spacing; breakpoints mainly for layout changes.

## 10. Image strategy

- Every image in a fixed-ratio frame with neutral placeholder background and explicit dimensions → no layout shift.
- `<picture>` with AVIF/WebP and srcset widths when high-res originals exist.
- Hero preloaded (fetchpriority high); everything else lazy and async-decoded.
- No image displayed larger than its useful native resolution; no upscaling; no AI-generated jewellery.
- Current uploads: hero and panoramica (1600×900) for hero/medium bands; laboratorio B/W (1200²) half-width; mani doppia esposizione (1170×780) medium band; sposa, texture (≈800–1000 wide) portrait columns; coppia palme and fiamma (≈550–600 wide) supporting sizes only.

## 11. Motion strategy

- Fluidity comes from well-engineered layout, image loading and interactions — not from everything moving.
- Soft reveal: opacity + 12–16px translate, 500–600ms ease-out, via one small IntersectionObserver hook. No animation library.
- Image hover: scale 1.03 over 600ms in a clipped frame. Header transform 400ms.
- Very light parallax (≤8%) only on hero and one full-bleed band, desktop only.
- Native smooth anchor scrolling. No scroll-jacking, page transitions, custom cursor or loading animation.
- Reduced/disabled under prefers-reduced-motion.

## 12. Accessibility

Semantic landmarks, one h1 per page, skip link, visible focus rings, keyboard-operable mobile menu (focus trap, Esc), meaningful Italian alt text, verified contrast, 48px tap targets.

## 13. Reusable components

SiteHeader, MobileMenu, SiteFooter, Section, Container, EditorialImage (with placeholder), FullBleedBand, SectionLabel, DisplayHeading, CollectionPreview, CollectionChapter (6 variants, later), SplitStory, Timeline, ContactActions, FloatingWhatsApp, Reveal, TextLink, Button.

## 14. Implementation order

**Build pass 1 — only:**
1. Design tokens, typography, global fluid spacing system, logos as assets, favicon from the official logo.
2. Header (all states), mobile menu, footer.
3. Core reusable components.
4. Homepage end-to-end — sets the quality bar. Nav links to other pages lead to minimal holding pages so navigation works.

**After homepage approval:**
1. Collections
2. Personalisation
3. Story
4. Contact
5. Final responsive / performance / accessibility polish (1440 / 1280 / 1024 / 768 / 390).

## 15. Risks and missing assets

Still missing:
- **High-resolution dedicated photography for Classic, Hollow, Plate, Twist, Square, Waves** — highest priority. Until supplied: slots preserved, neutral placeholders.
- Final descriptions for each collection.
- Opening hours.
- Company legal information / VAT number.
- Which phone number handles WhatsApp.
- Optional: larger hero original (≥2880px) and a portrait crop for mobile.

## Technical notes

- TanStack Start routes per page with unique head() metadata; collections in a typed data module.
- Fonts via `<link>` in the root head with preconnect and display=swap; Tailwind v4 tokens in styles.css.
- Images served through Lovable Assets CDN; no animation or carousel libraries.
