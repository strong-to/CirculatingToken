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
- **GIVEN** the config lists `DBTF0000001` and that project's `media.assets[0].url` is `https://miaocode-ai.oss-ap-southeast-1.aliyuncs.com/the4/images/Investing/Investing1.png`
- **WHEN** the card renders
- **THEN** the hero image SHALL use该远程路径并展示项目 `profile.name` 与 `system_id`。

#### Scenario: Dataset asset references are corrected
- **GIVEN** a dataset entry仍引用过期或本地路径的封面图片
- **WHEN** the dataset is prepared for the homepage
- **THEN** its `media` section SHALL be updated to point to the deployed OSS 资源 `https://miaocode-ai.oss-ap-southeast-1.aliyuncs.com/the4/...` 并包含与卡片一致的 `description`。

#### Scenario: Dataset text aligns with existing UI copy
- **GIVEN** the dataset summary or CTA text differs from the copy currently呈现 on the homepage
- **WHEN** the dataset is used to hydrate the card
- **THEN** the dataset entry SHALL be updated to adopt the existing homepage wording so the live UI remains authoritative during the migration.

#### Scenario: All assets use OSS prefix
- **GIVEN** any component or dataset entry references a local `/public/...` image path
- **WHEN** the homepage data is assembled
- **THEN** every image/asset URL SHALL be rewritten to `https://miaocode-ai.oss-ap-southeast-1.aliyuncs.com/the4/...`, and the UI SHALL NOT depend on the local filesystem for those resources.

### Requirement: Homepage sections render without filter controls
The curated homepage sections SHALL render the project list defined in `dataset/index.json` without exposing taxonomy filter chips; audiences browse the editorial list as-is.

#### Scenario: No filter UI is displayed
- **GIVEN** a visitor views any dataset-driven homepage section
- **WHEN** the section renders
- **THEN** no filter toggle UI is shown, and the section displays the curated cards in the order provided by the dataset config.
