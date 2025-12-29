# Change: ProjectHub filters drive dataset results

## Why
- ProjectHub's header filter controls (Interaction/Form, Domain, Object, Action, Search) are purely cosmetic—the cards always render the full `projectsList`, so users cannot narrow hundreds of DAO projects down to the subset they need.
- Builders already curate taxonomy metadata (`taxonomy.interaction_form`, `taxonomy.domain`, etc.) within every `app/data/projects/*.json`, but the UI ignores it, which makes the dataset investment pointless and breaks the expectation set by the filter copywriting.

## What Changes
- Bind `FilterSection` selections to a shared filter state and recompute the visible card collection client-side using the taxonomy arrays provided by each project entry.
- Implement AND-style filtering across Interaction/Form, Domain, Object, Action, plus a case-insensitive search that matches `profile.name`, `profile.summary`, or `system_id`; empty selectors default to "all".
- Provide a helpful empty state (e.g., message + reset action) whenever the filter returns zero projects so users understand why the grid is blank.
- Keep the existing List/Chat toggle behavior but ensure it reuses the same filtered dataset so both layouts stay in sync when filters change.

## Impact
- Specs: `projecthub-browse`
- Code: `components/TokenMarketplace/TokenMarketplaceContent.tsx`, `components/TokenMarketplace/com/FilterSection.tsx`, `components/TokenMarketplace/com/PlaceholderComponent.tsx` (or successor list component), optional shared filter utilities under `lib/` if needed
