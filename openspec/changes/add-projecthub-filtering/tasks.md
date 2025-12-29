## 1. Filter plumbing
- [ ] 1.1 Convert `TokenMarketplaceContent` into the single source of truth for filter values (Interaction/Form, Domain, Object, Action, Search) and pass handlers into `FilterSection`.
- [ ] 1.2 Derive a memoized list of `projectsList` entries that satisfy all non-empty selectors (using `taxonomy.*` arrays) and feed that list into the List/Chat renderers.
- [ ] 1.3 Ensure the Chat/List view toggle continues to work off the filtered dataset so view changes never reset the filter state.

## 2. UX behaviors
- [ ] 2.1 Implement a case-insensitive search that matches `profile.name`, `system_id`, and `profile.summary` substrings in addition to taxonomy filters.
- [ ] 2.2 Add an inline empty-state block (“No projects match these filters” + “Reset filters” button) that appears when the filtered array is empty and clears all selectors when clicked.

## 3. Validation
- [ ] 3.1 Manually verify combinations such as Interaction=Code + Domain=AI / Computing, Search="Prime" to ensure only matching cards remain in both List and Chat views.
- [ ] 3.2 Run `npm run lint`.
