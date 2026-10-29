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
- Site shell (header, mobile menu, footer, WhatsApp pill) is mounted in `src/routes/__root.tsx` around `<Outlet />`.
