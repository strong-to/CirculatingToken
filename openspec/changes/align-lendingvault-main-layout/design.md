## Context
- The first pass at `/LendingVault/[systemId]` prioritized data correctness over layout fidelity, so the shipped UI diverges from the "main" (legacy) Lending Vault presentation that stakeholders reference.
- The repo still contains the original mega-tab components (Ecosystem/Token/Finance/Proposal, `DataTable`, `FilterDropdown`, etc.) but they render placeholder metrics because they are no longer mounted nor wired to `ProjectDetailProvider`.
- Dataset entries already include the numbers/charts we need (tokenomics, market history, governance proposals, co-creation stats), but some contexts (carousel asset tags, avatar strips) must be enforced consistently to avoid blank shells.

## Goals / Non-Goals
- **Goals**: (1) Make the active detail page visually and structurally match the main layout; (2) hydrate every resurrected component from `dataset/projects` with reusable helpers/fallbacks; (3) guarantee six-card recommendations and data-driven filters for any project id.
- **Non-Goals**: (1) Rework homepage or Project Hub cards; (2) introduce new backend APIs; (3) refresh the overall visual language—this change focuses on parity, not redesign.

## Decisions
1. **Layout orchestration**: Keep `LendingVaultContent` as the orchestrator but reintroduce section-specific wrappers (black-background blocks, fixed paddings) via dedicated subcomponents so the DOM mirrors the main version. Sections stay client components because they rely on Swiper, echarts, and hover interactions.
2. **Governance mega-tabs**: Reuse `ProjectGovernanceContent` and the per-tab components but convert their placeholder datasets to derive from the active `project`. Chart/table adapters will live beside the components to convert `project.market`, `project.co_creation`, and `project.governance` into the column structures those tables expect. Missing data collapses the tab body while keeping the tab chrome clickable.
3. **Computed helpers**: Extend `ProjectDetailProvider` (or a sibling hook) with derived structures—e.g., rating histograms calculated from `reviews.list`, avatar URLs filtered by `asset.context`, normalized `market.price_history` slices—so each section consumes pre-shaped data and animations remain lightweight.
4. **Recommendation fallback**: Keep taxonomy-overlap selection as primary, but add deterministic shuffling for fallback picks to ensure the revived six-card grid always renders, matching the main gallery layout.

## Risks / Trade-offs
- Reintroducing echarts and Swiper-heavy sections can bloat the client bundle; memoizing derived data and lazy-loading heavy modules mitigates this but still impacts LCP.
- Some dataset entries may lack the contexts the main layout expects (e.g., 16 avatars, governance proposals); we need clear fallbacks (loop existing avatars, show empty-state cards) to avoid blank screens.
- The mega-tab filters currently have no functional backend; we will keep their visual affordances but scope them to client-side filtering of the available dataset to avoid implying real-time queries we cannot support yet.

## Migration Plan
1. Capture screenshots/DOM of the main layout for reference, mark padding/gap tokens, and note which legacy components can be reused vs. rebuilt.
2. Update `ProjectDetailProvider` and section props to expose the data shape each revived component needs; add unit-friendly helpers (e.g., `formatCurrency`, rating buckets).
3. Reintroduce each section sequentially, starting with `UserComments`/`ProjectConstruction`, then the governance mega-tabs, then token trading/lending strips, validating with multiple project ids.
4. Audit dataset entries for missing assets/governance data referenced by the layout; document any stop-gap placeholders alongside TODOs for dataset owners.
5. Re-run lint + manual checks; capture before/after for design review.

## Open Questions
- Do we need to support live filtering/pagination for the mega-tab tables, or is a static snapshot sufficient for now?
- Should `projectsYouMayBeInterestedIn` respect section-specific ordering (e.g., same as dataset config) or is taxonomy + fallback adequate?
