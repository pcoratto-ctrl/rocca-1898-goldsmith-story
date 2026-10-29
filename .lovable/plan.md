# ROCCA 1898 — Homepage Art Direction, revision 2

## Core idea

"A historic Italian goldsmith atelier, shown with the discipline of a modern magazine."

Three tensions drive every choice: 1898 heritage against modern restraint, hand craft against precision, family against design.

The page is built as **ten scenes**. Each scene has its own composition, density and motion. None of them share a template. The pattern "small label, big serif headline, paragraph, link" appears **at most once** on the whole page.

## The honest limit: photography

The current files limit how big an image can be shown:

| Photo | Size | Largest honest use |
|---|---|---|
| Hero hands (fedi) | 1600×900 | Full screen (the only one) |
| Overview of the models | 1600×900 | Wide band, up to about 1600px |
| Workshop, black and white | 1200×1200 | Up to about 60% of a desktop screen |
| Hands, double exposure | 1170×780 | Band up to about 1170px, with ivory margins |
| Bride, gold texture | about 800–1000 wide | Portrait columns, no wider than about 40% |
| Couple with palms, flame | about 550–600 wide | Small supporting images only |

So the "full-screen pause" scenes go edge to edge on phones and tablets. On large desktops they stop at their real width, inside a wide ivory or ink frame. That frame is part of the design, like a passe-partout mount, not a fallback. When high-resolution photos arrive, one setting makes those scenes fully edge to edge.

## Scene by scene

### 1. Hero — "The photograph"
- **Desktop:** the hands photo fills the whole screen (100svh) with a very light dark veil at the top and bottom only. The white logo sits small at top-left, with four text links top-right in small spaced sans: Collezioni · Personalizzazioni · Storia · Contatti. No buttons, no boxes. One line of sans text at bottom-left, about 15px: "Laboratorio orafo dal 1898 — Lamezia Terme". At bottom-right, a fine 1px line with the word "Collezioni" as the only call to action. No big headline: the photo is the headline.
- **Mobile:** a portrait crop (focus on the hands, set on purpose) at 100svh. Logo at top-left, the word "Menu" at top-right. The same single caption line. No WhatsApp button.
- **Motion:** the photo opens slightly zoomed (1.04) and settles to 1.0 over 1.6s. A small amount of depth on scroll, desktop only (≤6%).

### 2. Manifesto — "A quiet introduction"
- **Desktop:** a generous ivory space (about 90–100vh) laid out as a calm editorial spread. "Dal 1898" in Bodoni at a confident, readable size (about 9–11vw), fully on screen, aligned left. Offset lower on the right, one narrow column (about 30ch) of body sans: "Cinque generazioni di orafi. Eugenio Rocca, la quarta. Giulio Rocca, la quinta. Lo stesso laboratorio." The IV/V numerals are kept for Heritage. No button.
- **Mobile:** "Dal 1898" on one line at about 18vw, with the text below after a large gap.
- **Motion:** one soft mask reveal on the date, and nothing else.

### 3. Collections — "Six worlds" (the main experience)
**Chosen idea: a sticky index of names with images that change.**
- **Desktop (≥1024px):** the scene is about 6 screens tall. The left 5 columns hold a fixed list of the six names in Bodoni at about 7vw: CLASSIC, HOLLOW, PLATE, TWIST, SQUARE, WAVES. The active name is ink; the others are a light outline-grey. The right 7 columns scroll through six "plates". Each plate has a portrait image slot (4:5) plus an offset detail slot (1:1). Each plate also has its own composition, echoing the collection: Classic centred, Hollow pushed wide, Plate flat and frontal, Twist offset diagonally, Square on a strict grid, Waves loose and drifting. As each plate passes the middle of the screen, its name becomes active and a small numeral (01–06) plus a one-line description crossfade in under the list. Clicking a name scrolls smoothly to its plate. This is normal scrolling, with no scroll-jacking.
- **Before real photos arrive:** every slot is a calm neutral field with a fine champagne corner mark and a small caption, "Classic — fotografia in arrivo". The overview photo of all the models appears once, as a wide band introducing the scene, at its real size.
- **Mobile:** a horizontal swipe sequence with snap points. One collection per screen (about 86vw wide, so the next one peeks in). Each shows its name large across the top, a 4:5 slot, and its one-line description. A thin progress line shows "01 / 06". No sticky behaviour.
- **Exit:** one link, "Tutte le collezioni", aligned to the right edge.

### 4. Material moment — "The pause"
- **Desktop:** the gold texture photo as a tall portrait (about 3:4, at most 40vw wide), placed off-centre on the left. The rest of the screen is ink-dark. No text except a tiny caption at the far right: "Oro 18Kt". The image goes from scale 1.06 to 1.0 as it enters.
- **Mobile:** the photo nearly full width (4:5), on a dark background, with the same caption.

### 5. Craftsmanship — "Magazine feature"
- **Desktop:** the black-and-white workshop photo, square, takes columns 1–8 and **bleeds off the left edge**. A narrow text column (columns 10–12) begins lower, about a third of the way down the image. It reads like a feature story: a short Bodoni heading (no italics), two short paragraphs of factual text (hand work in the family laboratory; Italian tradition joined with techniques and standards from Europe's main jewellery districts), and a caption line "Eugenio e Giulio Rocca, laboratorio di Lamezia Terme". The small flame photo (at its real size) overlaps the bottom edge of the workshop photo, crossing the grid.
- **Mobile:** the workshop photo full width, edge to edge. The text sits below it with wide margins. The flame image is set to the right, about 55% wide, overlapping upward.
- **Motion:** a mask reveal on the workshop photo (it opens from the bottom). The flame fades in later.

### 6. Photographic pause — "Turning the page"
- **Desktop:** the double-exposure hands photo, centred at its real width (up to 1170px), on an ivory field with very large margins above and below. No text at all, only a tiny photo caption under it.
- **Mobile:** edge to edge, 4:5 crop.
- **Motion:** a slow crossfade-in only.

### 7. Personalisation — "Typographic system", normal scrolling
- No sticky behaviour. Four editorial chapters that scroll normally, each with its own asymmetric layout:
  - **Incastonatura:** the large word on the left, with the bride photo (4:5) offset right and lower. Facts: pietre interne · pietre esterne.
  - **Materiali:** the word aligned right, with the facts set as one typographic line: Oro 18Kt · Platino · Titanio. A small 1:1 texture close-up.
  - **Incisioni:** type only, with no image. Facts: nomi scritti a mano · impronte · simboli · micro-testi. A slot is kept for an engraving close-up later.
  - **Texture:** the word next to a wide crop of the texture photo, at its real size. Fact: superfici lavorate a mano.
- No numbers, no cards. One link at the end: "Personalizzazioni".
- **Mobile:** the same four chapters with alternating alignment. Images full width at 4:5.
- **Motion:** only a gentle image settle as each picture enters.

### 8. Heritage — "Monument"
- **Desktop:** a full Racing Green field, about 160vh. The chronology is shown through size and position, not a timeline:
  - "1898" at monumental size at top-left (about 20–22vw), ivory. This is the only monumental use of 1898 on the page.
  - "IV" with "EUGENIO" in the middle-right, at about half that size, with one line: "Quarta generazione".
  - "V" with "GIULIO" lower-left, at the same size, with three short lines: "Quinta generazione. Formazione tra Italia e Svizzera. Esperienza con Bulgari, anni a Zurigo."
  - At the bottom, centred and small: "Oggi, padre e figlio nello stesso laboratorio." with a single champagne hairline above it.
  - The descending diagonal reads as time passing.
- **Mobile:** the same three markers, stacked but alternating left and right alignment, with large gaps.
- **Motion:** each numeral is revealed by a mask as it enters. Nothing else moves.

### 9. Contact — "Colophon"
- Set like the last page of a magazine. Ivory, very spacious.
- **Desktop:** "ROCCA 1898" in Bodoni at medium size on the left. On the right, a two-column colophon in small sans: the address on three lines, then Telefono (three numbers), Email, WhatsApp, Indicazioni. Each one is a plain link with the drawn underline. No headline, no banner.
- **Mobile:** one column. Each contact line is a full-width row at least 56px tall, divided by fine lines.

### 10. Footer
- Racing Green, white logo, menu links, short contact line. Shorter and quieter than now, because scene 9 already carries the contacts.

## Typography

- **Display: Bodoni Moda**, mostly at weights 400–500, upright. Italics only for photo captions, never for headline words. Large sizes use optical sizing and slightly tighter letter spacing.
- **Text and interface: Karla** stays, for menu, body text, captions and links.
- Cormorant Garamond is removed.
- Scale varies widely but stays legible: the largest type (Heritage, about 20–22vw) is used for one moment only. Other scenes use nothing above 15px. A shared middle size is avoided.
- Text is mostly aligned left or placed off-centre. Only scene 8's closing line is centred.
- The small uppercase spaced labels are reduced to header, captions and the collection index. They are no longer put above every section.

## Header and navigation

- **Over the hero:** no background. White logo, four links in white sans, 13px with wide spacing. Nothing else.
- **After the hero:** an ivory bar fades in with the green logo, a fine line under it and a lower height. It hides when scrolling down and returns when scrolling up (400ms).
- **Mobile menu:** a full-screen ivory panel. The four pages in Bodoni at large size, aligned left, with a fine line between them. Contacts in small sans at the bottom. It closes with Esc and keyboard focus stays inside it.
- **WhatsApp:** the large pill is removed. On mobile only, a small 48px Racing Green circle with a fine WhatsApp mark appears after the hero has been scrolled past. It is hidden over the Contact scene and on the Contatti page. Nothing floats on desktop.

## Motion vocabulary (only five moves)

1. **Mask reveal:** a clip-path opening, used on key images and the large numerals (scenes 2, 5, 8).
2. **Gentle scale:** an image settling from 1.04–1.06 to 1.0 as it enters (scenes 1, 4).
3. **Crossfade:** text and images changing in Collections and in the photo pause (6).
4. **Sticky composition:** Collections only, desktop only. This is the page's one signature interaction.
5. **Header state change.**

The current fade-up is removed from almost everything. Body text appears without animation. There is no scroll-jacking, no text splitting, no cursor effects and no page transitions. Only transform and opacity are animated, and everything turns off when the visitor asks for reduced motion.

## What stays from the current homepage

- The official logos and how they are used (white on photos and green, green on ivory).
- The colour palette, with Racing Green as the field and champagne only as hairlines.
- All factual content, contacts and data, unchanged.
- The hero photo and concept, the sitemap, and the menu.
- Fixed-ratio image frames with neutral placeholders and no upscaling.
- The header's hide-on-scroll behaviour, the mobile menu's accessibility, and the skip link.

## What gets redesigned or removed

- **Removed:** the hero headline and its italic word; the "Parliamone" heading; the large WhatsApp pill; the label-plus-headline opening of each section; the numbered personalisation list; the three-step heritage list; the fade-up on every block; Cormorant Garamond.
- **Redesigned:** the manifesto (a quieter editorial introduction); collections (from a staggered grid to the sticky index on desktop and swipe on mobile); craftsmanship (from a split section to a magazine feature); the emotional band (from image plus slogan to image only); personalisation (from a list to four asymmetric editorial chapters); heritage (from a timeline to the page's one monumental chronology); contact (from a call to action to a colophon); a shorter footer.

## Building it without a template feel

- Each scene is its own handmade piece of the homepage with its own layout. There is no shared "section" wrapper deciding spacing. Only true basics are shared: image frame, link style, motion hooks and type scale.
- Each scene is designed separately at 1440px and 390px, then checked at 1280, 1024 and 768.
- After each scene is built, it is screenshotted at both sizes and checked against the question: "Could a luxury template have produced this?"
- Build order: type and header → hero and manifesto → collections (desktop and mobile) → craftsmanship and material moment → personalisation → heritage → contact and footer → a performance and motion pass at 60fps.

## Photography still needed (unchanged priority)

- For each of the six collections: one portrait image, at least 2400px tall, and one detail image, at least 1600px.
- Ideally: a hero original of at least 2880px wide plus a portrait crop for mobile; and a close-up of an engraving for Incisioni.
- Still waiting: which phone number handles WhatsApp.

## Technical notes

- Fonts: replace Cormorant with Bodoni Moda (opsz axis) in the root head link; update the `--font-display` token and the type utilities; add display sizes up to about 22vw.
- New small hooks in `use-reveal.ts`: `useInView` (data attribute for clip-path reveals), `useActiveIndex` (IntersectionObserver over the collection plates only), and the existing rAF parallax, kept to the hero. No libraries.
- First build pass scope: homepage, header, mobile menu, footer and WhatsApp circle only. The internal pages keep their holding pages.

## Guiding rule

Intentional, not experimental. If an effect draws attention to itself rather than to ROCCA 1898, simplify it.
- New `@utility` classes: `mask-reveal`, `settle`, `crossfade`, and `passe-partout` (caps an image at its native width inside a coloured mount).
- `EditorialImage` gains `maxNativeWidth` and a `fullBleedWhenAvailable` flag. Placeholders gain the champagne corner mark.
- Collections data in `site.ts` gains a `layout` variant per collection and `primary`/`detail` image slots.
- Scenes live in `src/components/home/` as one file each. `index.tsx` only arranges them.
- Floating WhatsApp is restyled to a 48px circle, shown via IntersectionObserver after the hero and hidden over the contact scene.
