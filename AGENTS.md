<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project rules

- Brand content (contacts, nav, collections, personalisation areas) lives only in `src/lib/site.ts`; pages read from it so copy stays consistent and future collection pages render from the same data.
- Typography, layout widths, fluid spacing and motion are `@utility` classes in `src/styles.css` (type-*, wrap*, section-y, reveal, link-draw, img-zoom); components use these instead of ad hoc sizes.
- Images render through `EditorialImage` (fixed aspect ratio, explicit size, neutral placeholder when missing) to avoid layout shift and never upscale small originals.
- Motion uses the small hooks in `src/hooks/use-reveal.ts` (IntersectionObserver, rAF parallax); no animation libraries.
- Header has two states (transparent over `#hero` on home, solid ivory everywhere else) switched by an IntersectionObserver on `#hero`; it never hides on scroll.
- Site shell (header, mobile menu, footer, WhatsApp pill) is mounted in `src/routes/__root.tsx` around `<Outlet />`.
- Homepage scenes live one per file in `src/components/home/` with their own layouts (no shared section wrapper); `src/routes/index.tsx` only orders them, so scenes never collapse into a repeated template.
- `/collezioni` lives in `src/components/collezioni/CollezioniPage.tsx`: opening, sticky index, six chapters keyed by `Collection.layout`, then the shared `ColophonScene`. Each collection has `primaryImage` and `detailImage` in `site.ts`; final photography swaps into these fields without layout changes. The detail only renders/crossfades when it is a different file (`hasDistinctDetail`). Placeholders and chapters never show unfinished-copy labels; `description` renders only when supplied.
- Motion vocabulary is limited to the `effect` options on `Reveal` (mask-reveal, mask-reveal-up, settle, crossfade) plus the header morph; timings are fixed tokens (header 420ms, underline 300ms, masks 1000ms, hover zoom 1.025/650ms, collection crossfade 500ms) and body text is never animated; the only sticky scroll composition is the `/collezioni` index.
- Homepage collections render as the square `vitrine` plate grid (3/2/1 columns, hairline gutters), each linking to `/collezioni#collezione-{slug}`; hover/focus motion lives in the `vitrine` utility.
- Navigation renders only `navItems`; `siteArchitecture` lists the final pages with a `live` flag, and a page joins `navItems` (and gets a route file) only once its real designed page exists — no public holding pages.
- Links use three families: nav (`link-draw`), editorial action (`EditorialAction`), contact (`ContactActions`/WhatsApp).
