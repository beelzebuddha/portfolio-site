# Kevin B. Doyle — Portfolio

Next.js (App Router) build generated from the Figma file
`EO2EoSJL26YhBT9FcOKK9z`: Home frame (node `179:1413`, pulled 2026-08-18,
DragOn row added 2026-08-26) and About frame (node `509:4462`, pulled
2026-08-19, copy synced 2026-08-26).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Formatting

Prettier is configured (`.prettierrc.json`: 2-space indent, single quotes,
semicolons, 80-char print width).

```bash
npm run format        # write formatting fixes
npm run format:check  # CI-friendly check, no writes
```

## What's done

- Full Home page: header/nav with working dark↔light toggle, hero, stats
  band, all five case study rows, resources grid, about/contact (real bio
  copy + photo, pulled from Figma), footer.
- All five case study pages built: Dev Insights (`179:1931`), Chassis
  CodeGen (`179:2184`), DragOn UI Builder (`733:834`), AXA Vantage
  (`292:3404`), Rearview (`303:4066`).
- About page built (`/about`, node `509:4462`): hero with portrait, fact
  strip, bio copy with a contact aside, end CTA into the Dev Insights case
  study. Bio copy synced with the current Figma text, including inline
  links on the four credential mentions pointing to certificate PDFs in
  `/public`. `SiteHeader` now uses the route to decide which nav item is
  active instead of hardcoding "Case Studies".
- Shared `ContactCard` component factored out of the Home page's
  about/contact block so the Home page and About page render the identical
  email/LinkedIn/résumé card instead of two copies of the same markup.
- Résumé PDF live at `/resume.pdf`, linked from the Contact card.
- Case study, home, and about page images exported from Figma and served
  locally from `/public/images` — no more expiring
  `figma.com/api/mcp/asset/...` URLs.
- Design tokens in `app/globals.css`, matching your Figma variable
  collections (Primitives → Theme → Scale).
- Fonts wired via `next/font`: Space Grotesk (display) + Source Sans 3 (body).
- Visible keyboard focus ring + `prefers-reduced-motion` handling baked into
  `globals.css` globally, not per-component.
- Vercel Analytics (`@vercel/analytics`) wired into the root layout.

## Before this goes live — do these first

1. **Light theme colors are placeholders.** `[data-theme='light']` in
   `app/globals.css` was NOT pulled from the file — I don't have your real
   Light mode alias values yet. The toggle works, but the light palette is a
   guess. Say the word and I'll pull the Light mode variant and fix this.
2. **Phosphor icons** aren't wired in yet — none appeared on the frames
   pulled so far, but they'll be needed once we build pages that use them.

## Deploying

Live at [kevinbdoyle.com](https://kevinbdoyle.com), Vercel project
`beelzebuddhas-projects/portfolio-site`. Source is on GitHub at
[beelzebuddha/portfolio-site](https://github.com/beelzebuddha/portfolio-site)
and connected to Vercel — pushing to `main` auto-deploys to production.
