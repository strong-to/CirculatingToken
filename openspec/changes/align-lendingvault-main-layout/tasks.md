## 1. Layout Parity Foundations
- [x] 1.1 Capture the reference layout from the "main" Lending Vault page (existing components + design tokens) and document the section order + required paddings.
- [x] 1.2 Update `LendingVaultContent` shell so the header, scroll container, and section sequence match the captured reference (hero + marquee + KPI tabs + governance mega-tabs + token/finance strips + recommendations + footer).

## 2. Dataset-Bound Section Restorations
- [x] 2.1 Restore the original `UserComments` rating board (stars, histogram, carousel) while sourcing scores, bar data, and quotes from `metrics.rating` + `reviews` with safe fallbacks.
- [x] 2.2 Rebuild `ProjectConstruction`'s black cards + avatar ribbon using `co_creation` & `metrics` data, looping dataset avatars when fewer than 16 assets exist.
- [x] 2.3 Re-enable the governance mega-tabs (Ecosystem / Token / Finance / Proposal) by wiring `ProjectGovernanceContent` + subcomponents to `project`, covering charts, tables, and filter defaults.
- [x] 2.4 Recreate the Token Trading / Token Lending grid layouts from the main page while binding order book, price history, staking, and exchange-rate data from the dataset.
- [x] 2.5 Ensure "Projects You May Be Interested In" always renders six unique dataset cards (taxonomy matches + random fallback) and inherits the revived card styling.

## 3. Data Plumbing & Guardrails
- [x] 3.1 Extend `ProjectDetailProvider` helpers if needed (e.g., computed rating buckets, normalized media) so view components avoid duplicating parsing logic.
- [x] 3.2 Patch any dataset entries that lack required media contexts (banner, carousel, avatar) or governance fields referenced by the revived layout, documenting assumptions (handled via runtime fallbacks—no dataset edits required).

## 4. Validation
- [x] 4.1 Run `npm run lint`.
- [x] 4.2 Manually verify `/LendingVault/DBAI0000001`, `/LendingVault/DBTF0000017`, and a project missing reviews/co_creation still render the main layout without console errors; capture before/after notes for review.
