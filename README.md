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
  band, four case study rows (Chassis CodeGen → DragOn UI Builder → AXA
  Vantage → Rearview; Dev Insights isn't a Home row — it's linked
  separately from the stats band), resources grid, about/contact (real bio
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
  `figma.com/api/mcp/asset/...` URLs. Re-exported at higher resolution for a
  site-wide sharpness/responsive-sizing pass.
- Resources grid's four templates all link out now (Customer Interview and
  Stakeholder Interview templates were placeholder cells until their Figma
  board links were added).
- Design tokens in `app/globals.css`, matching your Figma variable
  collections (Primitives → Theme → Scale). Both Dark and Light mode alias
  values are now confirmed from Figma's Theme collection — the dark↔light
  toggle is trustworthy.
- Theme choice now persists across navigation and reloads: the toggle
  writes to `localStorage`, and a `beforeInteractive` bootstrap script in
  `app/layout.tsx` applies the stored value before first paint to avoid a
  flash of the wrong theme. First-time visitors with no stored value
  default to dark (not OS-level `prefers-color-scheme`).
- Fonts wired via `next/font`: Space Grotesk (display) + Source Sans 3 (body).
- Visible keyboard focus ring + `prefers-reduced-motion` handling baked into
  `globals.css` globally, not per-component.
- Vercel Analytics (`@vercel/analytics`) wired into the root layout.

## Before this goes live — do these first

1. **Font Awesome Pro (Sharp family)** icons aren't wired into the codebase
   yet — none appeared on the frames pulled so far, but they'll be needed
   once we build pages that use them.
2. **`npm audit` reports 3 high-severity vulnerabilities** (`postcss`,
   `sharp`), both transitive via `next`. A fix is available only via
   `npm audit fix --force`, which upgrades to `next@16` (breaking change) —
   deferred until that upgrade is planned deliberately rather than forced
   in as a side effect.

## Deploying

Live at [kevinbdoyle.com](https://kevinbdoyle.com), Vercel project
`beelzebuddhas-projects/portfolio-site`. Source is on GitHub at
[beelzebuddha/portfolio-site](https://github.com/beelzebuddha/portfolio-site)
and connected to Vercel — pushing to `main` auto-deploys to production.
