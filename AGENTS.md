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
- `/collezioni` lives in `src/components/collezioni/CollezioniPage.tsx`: opening, sticky index, six chapters keyed by `Collection.layout`, then the shared `ColophonScene`. Each collection has `primaryImage` (4:5, empty → placeholder) and `detailImage` (1:1) in `site.ts`; final photography swaps into these fields without layout changes, and temporary low-res renders are capped at native pixel size.
- Motion vocabulary is limited to the `effect` options on `Reveal` (mask-reveal, mask-reveal-up, settle, crossfade) plus the header morph; timings are fixed tokens (header 420ms, underline 300ms, masks 1000ms, hover zoom 1.025/650ms, collection crossfade 500ms) and body text is never animated; the only sticky scroll composition is the Collections index (`useActiveIndex`).
