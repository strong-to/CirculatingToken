## ADDED Requirements
### Requirement: Lending Vault detail layout mirrors the main experience
The `/LendingVault/[systemId]` page SHALL reuse the original "main" layout structure—hero, marquee, KPI tabs, construction/feedback strips—while hydrating every surface from the resolved project JSON (via `ProjectDetailProvider`). Section padding (e.g., 80 px horizontal gutters) and typography MUST match the existing `components/Home` tokens so the restored layout is visually indistinguishable from the main reference.

#### Scenario: Hero → marquee → KPI tabs stay in the original order
- **GIVEN** a project with `profile.media.banner`, taxonomy arrays, and summary copy
- **WHEN** `/LendingVault/DBAI0000001` renders
- **THEN** the hero banner, marquee taxonomy ticker, and KPI tab bar SHALL appear in that exact sequence with the same gutters as the main layout, using banner + taxonomy data without inserting new white-card wrappers.

#### Scenario: User comments board recreates rating histogram
- **GIVEN** `metrics.rating.score = 4.3` and `reviews.list` contains at least one entry
- **WHEN** the “User Comments” section renders
- **THEN** it SHALL show the five-star board, histogram bars, and quote carousel from the main layout, sourcing scores from `metrics.rating`, buckets computed from `reviews.list`, and avatar/text from each review, with an empty-state message only when no reviews exist.

#### Scenario: Project Construction revives black background + avatar ribbon
- **GIVEN** `co_creation.summary` and `profile.media.assets` provide fewer than 16 `project_construction_avatar` entries
- **WHEN** the “Project Construction” section renders
- **THEN** it SHALL display the black-backed stat cards, avatar ribbon, open-task grid, and contributor leaderboard exactly like the main layout, looping available avatar URLs to fill all 16 slots and deriving every number from `co_creation` / `metrics` fields.

### Requirement: Governance mega-tabs and token strips reuse dataset pipelines
The governance area SHALL restore the black chrome mega-tabs (`Ecosystem`, `Token`, `Finance`, `Proposal`) and power each tab’s charts, filters, and tables with project data. Token trading/lending grids MUST also match the main design while reading exclusively from `tokenomics`, `market`, and `co_creation.exchange_rates`.

#### Scenario: Ecosystem / Token / Finance / Proposal tabs show authentic data
- **GIVEN** a project whose dataset contains `governance.proposals`, `market.price_history`, and `co_creation.contribution_history`
- **WHEN** a visitor toggles each mega-tab
- **THEN** the restored tab body SHALL render the original chart + table layout, populated with the project’s governance/market/co-creation data (falling back to empty-states when absent) instead of placeholder strings.

#### Scenario: Token Trading + Token Lending grids match the main layout
- **GIVEN** `tokenomics.price_info`, `tokenomics.supply`, `tokenomics.staking`, and `market.order_book`
- **WHEN** the Token Trading and Token Lending sections render
- **THEN** each grid SHALL replicate the main-page cards (including black borders, typographic scale, CTA buttons) while formatting their values from those dataset objects, with minted/burned/staked numbers updating as the JSON changes.

### Requirement: Recommendation gallery always fills with dataset projects
The “Projects You May Be Interested In” gallery SHALL keep the six-card grid style from the main layout and MUST always render six distinct dataset projects: first prioritizing taxonomy overlaps via `getRelatedProjects`, then padding with randomly shuffled remaining projects (excluding the active one) when fewer than six matches exist.

#### Scenario: Random fallback tops off the gallery without duplicates
- **GIVEN** only three taxonomy-overlap projects are returned for `DBAI0000030`
- **WHEN** the recommendation gallery renders
- **THEN** it SHALL append three additional random projects (none matching the current `system_id`) so the six-card layout remains full, each card linking to `/LendingVault/<systemId>` and styled like the main reference grid.
