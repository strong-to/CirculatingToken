## ADDED Requirements

### Requirement: Config-driven home sections
The homepage sections "Where Using Becomes Investing", "Let Every Share Come With Joy", and "Build With The Brightest Minds" SHALL render their headings, CTA labels, learn-more links, accent colors, and ordered project lists from `app/data/index.json` instead of hard-coded values.

#### Scenario: Load section metadata from config
- **GIVEN** `app/data/index.json` defines a section entry (e.g., `where-using-becomes-investing`) with `titleLines`, `panelTriggerLabel`, `learnMore`, `cta`, colors, and `projectIds`
- **WHEN** the corresponding homepage section renders
- **THEN** it MUST read those values via the shared `app/data/index.ts` helper and reflect them verbatim in the UI without requiring code changes for copy/ordering updates

#### Scenario: Graceful handling of missing section data
- **GIVEN** a section slug exists in the component but is temporarily missing from `app/data/index.json`
- **WHEN** the page loads
- **THEN** the component MUST skip rendering the carousel content for that section (or show an empty state) without throwing runtime errors or breaking the surrounding layout/animations

### Requirement: Project cards sourced from project dataset
Each project card in the above sections SHALL resolve its media, metadata, and tag strings from the corresponding entry under `app/data/projects/<system_id>.json`, mapping `projectId` prefixes (DBAI → DBTF) automatically so editors only manage IDs once.

#### Scenario: Map project ID to project data
- **GIVEN** a section lists `projectIds: ["DBAI0000009", ...]`
- **WHEN** the carousel builds its slides
- **THEN** it MUST convert the ID to the matching `DBTF0000009` file, load hero image/logo data, set the card title to `profile.name`, subtitle to the original `projectId`, derive up to four button labels from the project taxonomy, and populate the two description lines from the project's slogan/summary while preserving the existing Swiper/hover interactions

#### Scenario: Missing project fallback
- **GIVEN** a `projectId` has no matching `app/data/projects` file
- **WHEN** the cards are generated
- **THEN** the system MUST render a placeholder card (using default imagery/text) so the carousel still loops, and log a warning (during build or dev) to alert maintainers about the bad ID instead of crashing
