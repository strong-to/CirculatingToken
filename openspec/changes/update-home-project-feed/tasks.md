## 1. Data plumbing
- [x] 1.1 Add typed loaders in `app/data/index.ts` that parse `app/data/index.json`, normalize section metadata, and expose helpers (map + list) for consumers.
- [x] 1.2 Implement a `resolveProjectCard(projectId)` helper that converts DBAI IDs to DBTF system IDs, reads `app/data/projects`, and derives the hero image, logo, buttons (taxonomy tags), and two-line description with sensible fallbacks.

## 2. Component updates
- [x] 2.1 Refactor `components/Home/com/UseCaseSection/BlueSquareCard.tsx` to accept a `card` payload instead of `cardIndex`, preserving all existing transitions/markup.
- [x] 2.2 Update `WhereUsingBecomes`, `LetEveryShare`, and `BuildWithThe` to consume the new section data (including CTA metadata) rather than local resource files, and make sure missing project entries fail gracefully without breaking the Swiper layout.
- [x] 2.3 Remove or minimize now-unused resource imports (`images`, `chatContentData` overrides) so the sections read strictly from the config+project data pipeline.

## 3. Validation
- [x] 3.1 Re-run `npm run lint` (and any impacted component tests if they exist) to confirm the refactor introduces no type errors or regressions.
