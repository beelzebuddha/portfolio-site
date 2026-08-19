# Kevin B. Doyle — Portfolio

Next.js (App Router) build generated from the Figma file
`EO2EoSJL26YhBT9FcOKK9z`: Home frame (node `179:1413`, pulled 2026-08-18)
and About frame (node `509:4462`, pulled 2026-08-19).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's done

- Full Home page: header/nav with working dark↔light toggle, hero, stats
  band, all three case study rows, resources grid, about/contact (real bio
  copy + photo, pulled from Figma), footer.
- All four case study pages built: Dev Insights (`179:1931`), Chassis
  CodeGen (`179:2184`), AXA Vantage (`292:3404`), Rearview (`303:4066`).
- About page built (`/about`, node `509:4462`): hero with portrait, fact
  strip, bio copy with a contact aside, end CTA into the Dev Insights case
  study. `SiteHeader` now uses the route to decide which nav item is
  active instead of hardcoding "Case Studies".
- Shared `ContactCard` component factored out of the Home page's
  about/contact block so the Home page and About page render the identical
  email/LinkedIn/résumé card instead of two copies of the same markup.
- Case study, home, and about page images exported from Figma and served
  locally from `/public/images` — no more expiring
  `figma.com/api/mcp/asset/...` URLs.
- Design tokens in `app/globals.css`, matching your Figma variable
  collections (Primitives → Theme → Scale).
- Fonts wired via `next/font`: Space Grotesk (display) + Source Sans 3 (body).
- Visible keyboard focus ring + `prefers-reduced-motion` handling baked into
  `globals.css` globally, not per-component.

## Before this goes live — do these first

1. **Light theme colors are placeholders.** `[data-theme='light']` in
   `app/globals.css` was NOT pulled from the file — I don't have your real
   Light mode alias values yet. The toggle works, but the light palette is a
   guess. Say the word and I'll pull the Light mode variant and fix this.
2. **Résumé PDF** is linked (`/resume.pdf`) but the file doesn't exist yet —
   drop your actual résumé at `public/resume.pdf`.
3. **Phosphor icons** aren't wired in yet — none appeared on the frames
   pulled so far, but they'll be needed once we build pages that use them.

## Deploying

Push this to a GitHub repo, then import it at vercel.com (or netlify.com) —
both auto-detect Next.js, no config needed. Add your custom domain in the
project settings once it's live.
