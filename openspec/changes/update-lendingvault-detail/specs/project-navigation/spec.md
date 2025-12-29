## ADDED Requirements
### Requirement: Homepage curated cards deep-link to Lending Vault detail
Every `HomepageProjectCard` rendered by `WhereUsingBecomes`, `LetEveryShare`, and `BuildWithThe` SHALL include a clickable target that navigates to `/LendingVault/[systemId]` so visitors can jump from discovery sections to the matching project detail. The link MUST be implemented with `next/link` (or equivalent) so keyboard focus, cmd/ctrl+click, and right-click “open in new tab” all work.

#### Scenario: Where Using Becomes Investing card opens detail
- **GIVEN** the section renders a card for `DBAI0000009`
- **WHEN** the visitor clicks anywhere on that card (or presses Enter while it is focused)
- **THEN** the app SHALL route to `/LendingVault/DBAI0000009` without requiring additional configuration.

#### Scenario: Build With The card supports tab opening
- **GIVEN** the Build With The slider renders `DBAI0000015`
- **WHEN** the visitor cmd/ctrl+clicks the card or its “Details” button
- **THEN** the browser SHALL open `/LendingVault/DBAI0000015` in a new tab, confirming the link uses semantic anchor markup instead of click handlers.

### Requirement: Detail link metadata is centralized per project card
`HomepageProjectCard` data returned by `lib/homepageData.ts` SHALL expose a canonical `detailHref` (or enough data to derive it) so downstream components do not hard-code `/LendingVault` or guess IDs. Buttons such as “Learn more details”, hover actions (“Details”, “Favorites”), and any future badges MUST reuse this field.

#### Scenario: Learn more CTA inherits the card link
- **GIVEN** section config sets `learnMoreHref: '#` but the rendered card represents `DBAI0000027`
- **WHEN** the visitor clicks the card’s “Details” button
- **THEN** the handler SHALL use the shared `detailHref` (`/LendingVault/DBAI0000027`) instead of the placeholder hash, guaranteeing consistent routing.
