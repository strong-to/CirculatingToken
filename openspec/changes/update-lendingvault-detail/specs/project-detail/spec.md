## ADDED Requirements
### Requirement: Parameterized Lending Vault route resolves dataset projects
The system SHALL serve the Lending Vault detail view from the dynamic route `/LendingVault/[systemId]`, where `systemId` matches a key exported by `dataset/projects/index.ts`. The route MUST load the matching project JSON on the server, redirect the legacy `/LendingVault` path to a configurable default id, and return a 404 for unknown ids.

#### Scenario: Valid system id renders detail
- **GIVEN** `dataset/projects/DBAI0000001.json` exists
- **WHEN** a visitor opens `/LendingVault/DBAI0000001`
- **THEN** the page SHALL render while exposing that project’s metadata to child components and set the document title to `PRIME CORE | Lending Vault`.

#### Scenario: Base route redirects to default
- **GIVEN** `DEFAULT_LENDING_VAULT_ID` is configured as `DBAI0000017`
- **WHEN** a visitor opens `/LendingVault`
- **THEN** the router SHALL redirect (302 during navigation, 308 for direct hits) to `/LendingVault/DBAI0000017`.

#### Scenario: Unknown system id returns 404
- **GIVEN** no JSON exists for `DBAI9999999`
- **WHEN** a visitor opens `/LendingVault/DBAI9999999`
- **THEN** the page SHALL respond with `notFound()` / HTTP 404 instead of rendering stale FrameFlow data.

### Requirement: Hero and summary mirror project metadata
The Lending Vault hero section SHALL pull every visual/textual element from the resolved project: `profile.media.banner` for the backdrop, `profile.media.assets` entries tagged `lending_vault_banner_carousel` for the slider, and `profile.name`/`system_id`/`profile.slogan`/`profile.summary` for copy. Missing assets MUST degrade gracefully (e.g., hide the carousel and reuse `banner`).

#### Scenario: Updating project media swaps the hero without code changes
- **GIVEN** `DBAI0000020`’s `profile.media.banner` is updated to a new OSS URL
- **WHEN** `/LendingVault/DBAI0000020` loads
- **THEN** the hero background SHALL use the new URL, and the slider SHALL display all `profile.media.assets` where `context === 'lending_vault_banner_carousel'`.

#### Scenario: Missing carousel assets fall back safely
- **GIVEN** `DBAI0000025` has no asset tagged `lending_vault_banner_carousel`
- **WHEN** its detail page loads
- **THEN** the carousel container SHALL collapse or reuse the banner image without throwing errors or leaking FrameFlow imagery.

### Requirement: Tabbed sections consume structured project data
Each tab within `LendingVaultContent` SHALL bind directly to structured fields from the resolved project:
- **Project Introduction** renders `profile.description_md` (Markdown) and `profile.links`.
- **User Comments** displays `metrics.rating` plus any `reviews.list` entries (showing `avatar`, `user_name`, `content`, `rating`, `date`) and falls back to an empty state when `reviews` is absent.
- **Project Construction** surfaces `co_creation.summary`, `co_creation.open_tasks`, and `co_creation.contributors_leaderboard`, counting totals instead of the hard-coded 1,503 / 667 numbers.
- **Project Governance** lists `governance.proposals` and their `votes_summary`.
- **Token Trading / Token Lending** uses `tokenomics` and `market` data for KPIs, charts, and trade tables.

#### Scenario: Markdown + metrics update automatically
- **GIVEN** `DBTF0000013` updates `profile.description_md` and `metrics.operation.revenue_24h`
- **WHEN** `/LendingVault/DBTF0000013` loads
- **THEN** the “Project Introduction” tab SHALL render the new Markdown, and the KPI chips SHALL show the updated `$` value without editing JSX.

#### Scenario: Projects without reviews hide the comments grid
- **GIVEN** `DBAI0000006` lacks a `reviews` block
- **WHEN** its detail page loads
- **THEN** the “User Comments” tab SHALL still show the aggregated rating from `metrics.rating` but replace the review slider with a friendly empty state instead of fake testimonials.

### Requirement: Related media and recommendations derive from dataset context
Supporting sections SHALL no longer depend on baked-in `/LendingVault/...` assets. Instead, they SHALL either reuse context-aware assets from the active project or derive fresh recommendations from other dataset entries:
- Builder avatar reels MUST draw from `profile.media.assets` where `context === 'project_construction_avatar'`, repeating only when fewer than 16 entries exist.
- “Projects You May Be Interested In” SHALL choose up to six other projects that share at least one `taxonomy.domain` or `taxonomy.action` value with the active project and render each card with that project’s `profile.media.banner`/`hero` plus a link to its detail page. If there are fewer than six qualified matches, the system MUST fill the remaining slots with random distinct projects (excluding the active project) so long as the total still maxes out at six.

#### Scenario: Recommendation list reflects taxonomy overlap
- **GIVEN** `DBAI0000009` shares the taxonomy domain `Media` with `DBAI0000017`
- **WHEN** `/LendingVault/DBAI0000017` loads
- **THEN** the “Projects You May Be Interested In” section SHALL include `DBAI0000009` (or similar matches) and omit duplicates of the active project, with each card linking to `/LendingVault/DBAI0000009`.

#### Scenario: Random fallback keeps list full without duplicates
- **GIVEN** only three projects share taxonomy overlap with `DBAI0000030`
- **WHEN** `/LendingVault/DBAI0000030` loads
- **THEN** the recommendation list SHALL append up to three additional random projects (excluding `DBAI0000030` and previously selected ids) so the gallery still renders at most six unique cards.

#### Scenario: Builder avatars honor dataset contexts
- **GIVEN** `DBTF0000021` lists three assets tagged `project_construction_avatar`
- **WHEN** its detail page loads
- **THEN** the constructor avatar strip SHALL show those three images first and only loop/repeat them to fill the grid instead of pulling the default sixteen PNGs.
