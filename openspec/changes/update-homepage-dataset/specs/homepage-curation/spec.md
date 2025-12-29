## ADDED Requirements
### Requirement: Homepage sections sourced from dataset config
The system SHALL load homepage hero sections (e.g., `WhereUsingBecomesInvesting`, `LetEveryShare`, `BuildWithThe`) from a JSON config (e.g., `dataset/index.json`) that maps each section id to its title copy, CTA labels, and ordered project id list.

#### Scenario: Config defines section membership
- **GIVEN** `dataset/index.json` contains `{ "WhereUsingBecomesInvesting": { "projects": ["DBTF0000001"] } }`
- **WHEN** the homepage renders the "Where Using Becomes Investing" section
- **THEN** the component SHALL request the project data by id instead of hard-coded JSX.

### Requirement: Project cards hydrate from dataset entries
The system SHALL resolve every project id referenced by the homepage config against the authoritative `dataset/projects/*.json`, using their `profile` (name, summary, media.assets hero), `taxonomy`, and `metrics` fields to populate card imagery, text, and stats with no duplicated literals in components.

#### Scenario: Section card uses dataset media
- **GIVEN** the config lists `DBTF0000001` and that project's `media.assets[0].url` is `/images/Investing/Investing1.png`
- **WHEN** the card renders
- **THEN** the hero image SHALL use `/images/Investing/Investing1.png` and the overlay text SHALL use the project's `profile.name` and `system_id`.

#### Scenario: Dataset asset references are corrected
- **GIVEN** a dataset entry still references an outdated CDN URL for its hero image
- **WHEN** the dataset is prepared for the homepage
- **THEN** its `media` section SHALL be updated to point to the shipped `/public/images/...` asset and contain an `description` that matches the rendered card copy.

#### Scenario: Dataset text aligns with existing UI copy
- **GIVEN** the dataset summary or CTA text differs from the copy currently呈现 on the homepage
- **WHEN** the dataset is used to hydrate the card
- **THEN** the dataset entry SHALL be updated to adopt the existing homepage wording so the live UI remains authoritative during the migration.

### Requirement: Client-side taxonomy filtering
The system SHALL expose at least domain and action filters on each dataset-driven section so visitors can toggle filter chips and immediately re-render the cards, showing only projects whose taxonomy arrays include the selected values.

#### Scenario: Filtering by domain updates cards
- **GIVEN** a visitor selects the "AI / Computing" filter chip in a section
- **WHEN** the filter state updates
- **THEN** only projects whose `taxonomy.domain` contains "AI / Computing" SHALL remain visible, and clearing the chip restores all curated projects without a full page reload.
