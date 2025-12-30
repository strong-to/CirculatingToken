# Change: Align Lending Vault detail with main layout

## Why
- The current `/LendingVault/[systemId]` UI diverges sharply from the original "main" layout: carousel shells, governance tabs (Ecosystem / Token / Finance / Proposal), and black card grids were replaced with simplified white cards, so the new detail page feels like a different product despite sharing the same data.
- Several legacy components (`EcosystemContent`, `TokenContent`, `FinanceContent`, `ProposalContent`, `DataTable`, etc.) remain in the repo but are disconnected from the dataset pipeline, leaving placeholder metrics and filters that no longer render.
- Ops wants to keep the familiar main layout while still hydrating everything from `dataset/projects/*.json`, to avoid re-design churn and to maintain parity with marketing captures that already show the main experience.

## What Changes
- Restore the Lending Vault section stack (banner, marquee, KPI tabs, governance mega-tabs, token marketplace grids) so its DOM structure, spacing, and interactions match the original main layout, just with dataset-driven values.
- Reconnect dormant components (e.g., `ProjectGovernanceContent`, `TokenContent`, `FinanceContent`, `ProposalContent`, advanced tables) to the `ProjectDetailProvider` so carousel cards, charts, tables, and filter rows no longer render fake data.
- Ensure every metric, avatar, chart point, and review uses dataset fields with deterministic fallbacks, guaranteeing the revived layout works for any project JSON without hand-written overrides.
- Keep the homepage and Project Hub entry points untouched; this change is scoped to the `/LendingVault/[systemId]` experience and its shared data utilities.

## Impact
- Specs: `project-detail`
- Code: `components/LendingVault/**/*`, `components/common/ImageWithSkeleton`, `utils/cdn`, `lib/projectDetail.ts`, relevant JSON contexts under `dataset/projects/*.json`
