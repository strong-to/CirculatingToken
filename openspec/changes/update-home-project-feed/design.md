## Context
- `WhereUsingBecomes`, `LetEveryShare`, and `BuildWithThe` currently import hard-coded `/home/.../img/Investing*.png` assets plus descriptive strings sourced from `chatContentData` via `cardIndex`.
- Product wants these carousels to reflect the ordered sections described in `app/data/index.json`, where editors already manage section metadata (titles, CTA copy, `projectIds`).
- The canonical project content lives inside `app/data/projects/DBTF*.json` and powers other areas (Project Hub, Lending Vault). We need to reuse it so cards stay consistent with the rest of the app and avoid duplicating marketing copy.

## Goals / Non-Goals
- Goals:
  - Make the three home sections fully data-driven: order, labels, CTA links, and the list of projects must be read from `app/data/index.json`.
  - Derive card visuals/text (hero image, logo, buttons/tags, subtitle) from the referenced project JSON instead of `chatContentData` or local resource lists.
  - Preserve every existing interaction (Swiper settings, hover states, CTA buttons) so the change is purely about data sourcing.
- Non-goals:
  - No redesign of the carousel layout or addition of new filters/controls.
  - No attempt to unify the other home sections (Liquidity, YourNextWorld, etc.) since they use different card templates.

## Decisions
1. **Typed section loader**: extend `app/data/index.ts` to import/parse `app/data/index.json`, outputting a `homeSections` map keyed by slug and `homeSectionsList` array that keeps file order. The exported type will expose `titleLines`, `panelTriggerLabel`, `cta`, colors, and a `projects` array that already contains the resolved card payload.
2. **Project mapping helper**: introduce a `resolveHomeProject(projectId)` that swaps the `DBAI` prefix for `DBTF`, looks up the corresponding `ProjectData`, and builds a `HomeProjectCard` object with:
   - `image`: first asset with `context === 'project_home_hero'`, else `profile.media.banner`, else a default placeholder.
   - `logo`: `profile.media.logo` (with path normalized for Next/Image).
   - `title`: `profile.name`.
   - `subtitle`: original `projectId` so marketing IDs stay visible.
   - `buttons`: first four non-empty strings from `taxonomy.object`, `taxonomy.action`, `taxonomy.domain`, `taxonomy.interaction_form` in that order.
   - `descriptions`: `[profile.slogan, profile.summary]` trimmed to ~48 chars each; fall back to `profile.media.description` or `system_id` when missing.
   Missing project IDs will yield a lightweight placeholder entry so Swiper math still works.
3. **BlueSquareCard contract**: swap the `cardIndex` + `iconSrcOverride` props for a single `card` prop exposing the fields above; keep `src`/`alt` for the background image so the component’s DOM stays untouched. The component remains responsible for transitions but no longer fetches `chatContentData` or icon arrays internally.
4. **Section consumers**: each of the three sections will grab its slugged configuration from `homeSections`, feed `section.projects` into Swiper, and render CTA labels / Learn-more copy straight from the config file.

## Risks / Trade-offs
- **Missing assets**: Some project JSON files reference OSS URLs while others reference `/public/...`. The helper will need to normalize both; otherwise Next/Image might fail at runtime.
- **Config drift**: Editors might input a `projectId` that lacks a matching `DBTF` file. We mitigate by logging a warning during build/dev and rendering a placeholder card instead of breaking the carousel.
- **Bundle impact**: Importing all project JSON plus the index config already happens elsewhere, so reusing the shared loader keeps incremental bundle change minimal.

## Migration Plan
1. Land the data loader + helper and unit-test/console-assert the mapping.
2. Update BlueSquareCard + sections in one PR so no intermediate state relies on removed props.
3. Run `npm run lint` and manually verify the three sections still scroll/animate correctly (no design regressions).
