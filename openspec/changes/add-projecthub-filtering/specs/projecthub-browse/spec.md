## ADDED Requirements
### Requirement: ProjectHub filters derive from project taxonomy
The ProjectHub (Token Marketplace) list SHALL recompute the visible cards client-side whenever a visitor picks Interaction/Form, Domain, Object, or Action options. Each selector MUST match against the corresponding `taxonomy.*` array in every `projectsList` entry, and projects SHALL remain only if they satisfy every non-empty selector (logical AND). Clearing a selector restores it to "all".

#### Scenario: Domain filter limits cards to matching taxonomy
- **GIVEN** `DBTF0000021`, `DBTF0000026`, and `DBTF0000011` all list `"Finance"` inside `taxonomy.domain`, while `DBTF0000001` does not
- **WHEN** a visitor opens ProjectHub and selects Domain → Finance
- **THEN** only the Finance-tagged projects remain in the grid and cards like `DBTF0000001` disappear until the selector is cleared.

#### Scenario: Interaction and Object filters stack via AND logic
- **GIVEN** `DBTF0000001` includes `"Code"` under `taxonomy.interaction_form` and `"Data"` under `taxonomy.object`, while `DBTF0000005` lacks the Code interaction
- **WHEN** the visitor applies Interaction/Form → Code and Object → Data simultaneously
- **THEN** `DBTF0000001` stays visible, `DBTF0000005` is removed, and no project that fails either criterion is shown.

### Requirement: ProjectHub search narrows cards by name, summary, or id
The top search box SHALL filter the same dataset in real time, using a case-insensitive substring match against `profile.name`, `profile.summary`, and `system_id`. Search MUST combine with the taxonomy filters (i.e., another AND condition) and clearing the input shall restore the previous taxonomy-filtered results.

#### Scenario: Searching "Prime" isolates PrimeCore
- **GIVEN** `DBTF0000001` has `profile.name = "PrimeCore"` and `profile.summary` containing "PrimeCore"
- **WHEN** the visitor types `Prime` into the ProjectHub search field
- **THEN** only cards whose name/summary/system id includes "Prime" remain, so `DBTF0000001` surfaces while unrelated Finance projects are hidden.

#### Scenario: System id search works with taxonomy filters
- **GIVEN** the visitor already selected Domain → Finance
- **WHEN** they type `0021` into the search field
- **THEN** `DBTF0000021` stays visible (because its system id matches) and other Finance projects disappear even though they pass the domain filter.

### Requirement: Empty filters show a helpful reset state
When no project satisfies the combined taxonomy + search criteria, ProjectHub SHALL replace the card grid with a message explaining that no projects match and surface a control to reset all filters back to "all" plus an empty search. Activating the reset MUST immediately restore the full dataset.

#### Scenario: Impossible combination yields empty state with reset action
- **GIVEN** no dataset entry simultaneously lists Domain = Finance and Interaction/Form = Audio (verified across `app/data/projects/*.json`)
- **WHEN** the visitor selects Domain → Finance and Interaction/Form → Audio
- **THEN** the page SHALL render an inline empty-state message plus a "Reset filters" action, and clicking reset clears all selectors so the full project grid reappears.

### Requirement: Filtered dataset stays consistent across List/Chat views
The List/Chat toggle SHALL reuse the same filtered dataset so switching views never repopulates cards that were excluded by filters or search. View changes also MUST not clear the filter state.

#### Scenario: Switching to Chat view keeps filtered results
- **GIVEN** the visitor filters Domain → Finance and sees three matching cards in List view
- **WHEN** they toggle the Sort By control to Chat
- **THEN** the Chat layout SHALL show the exact same filtered Finance projects (no others) and, when toggling back to List, the selection remains unchanged.
