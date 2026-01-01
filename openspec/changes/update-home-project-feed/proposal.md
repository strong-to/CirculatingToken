# Change: Config-driven home project listings

## Why
The three home hero sections (Where Using Becomes Investing, Let Every Share Come With Joy, Build With The Brightest Minds Worldwide) currently render hard-coded image lists plus `chatContentData` snippets. Curators now maintain ordered project IDs inside `app/data/index.json`, and the canonical project details (logos, hero assets, taxonomy tags, summaries) already live in `app/data/projects/*.json`. Without wiring these sources together, marketing updates require code edits and the card content easily drifts out of sync with Project Hub data.

## What Changes
- Load section metadata and project ID lists from `app/data/index.json`, export a typed helper (e.g., `homeSections`) from `app/data/index.ts`, and keep config as the single source of truth for order, labels, CTA links, and filter keys.
- Map each configured `projectId` to its `app/data/projects/<system_id>.json` entry (DBAI → DBTF) to pull hero image, logo, taxonomy tags, and summary/slogan strings so BlueSquareCard no longer depends on `chatContentData` indexes.
- Update `BlueSquareCard` plus the three section components to accept explicit project payloads (image, icon, title, subtitle, buttons, descriptions) while preserving all layout, animation, and Swiper interactions.
- Remove unused static resource lists that baked in `/home/.../img` assets so future updates only touch JSON data.

## Impact
- Affected specs: home-feed
- Affected code: `app/data/index.json`, `app/data/index.ts`, `components/Home/WhereUsingBecomes.tsx`, `components/Home/LetEveryShare.tsx`, `components/Home/BuildWithThe.tsx`, `components/Home/com/UseCaseSection/BlueSquareCard.tsx`, associated resource helpers.
