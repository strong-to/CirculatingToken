<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# Repository Guidelines

## Project Structure & Module Organization
Source lives under the Next.js App Router tree in `app/`, with `layout.tsx` handling providers and `globals.css` holding Tailwind layers. Reusable UI sits in `components/` (feature folders such as `com/BuildWithThe`), while `lib/api.ts` centralizes Axios clients and interceptors. Global state atoms live in `store/atoms.ts`. Design tokens are defined once in `config/design.ts` and re-exported through Tailwind via `tailwind.config.ts`; keep spacing/typography edits there. Utility helpers (notably `utils/pxToRem.ts`) provide runtime px→rem conversion that matches the PostCSS pipeline. Static assets belong in `public/`.

## Build, Test, and Development Commands
Install once with `npm install`. Use `npm run dev` to boot Next.js locally on `http://localhost:3000`. Ship with `npm run build && npm run start`, which compiles the app and serves the optimized output. Run `npm run lint` before every PR; it invokes `next lint` with the repo ESLint config and doubles as a TypeScript sanity check.

## Coding Style & Naming Conventions
TypeScript is `strict` with the `@/*` path alias—import modules using `@/components/Hero` rather than relative ladders. Stick to functional components, PascalCase filenames (`Hero.tsx`), and co-locate CSS modules when styling is component-specific. Tailwind utility classes cover most layout; when inline styles are unavoidable, wrap px values with the `px()` helper so rem scaling remains consistent. Update `config/design.ts` when adjusting palette, typography, or spacing so Tailwind tokens and direct imports stay in sync.

## Testing Guidelines
There is no automated test suite; add Testing Library or Playwright coverage soon. Until then, rely on `npm run lint` plus manual checks in responsive viewports. Name future test files `<Component>.test.tsx` beside the component and gate merges on a green lint + test run.

## Commit & Pull Request Guidelines
Recent history favors short present-tense statements (often Chinese, e.g., `添加页面`). Continue using concise, imperative summaries that explain the user-visible change; include scoped prefixes when multiple surfaces are affected (`feat: hero copy`). For PRs, provide a short intent, linked issue, before/after captures for UI work, and the commands/env changes you ran. Ensure `.env.local` requirements such as `NEXT_PUBLIC_API_URL` are documented when they change.

## Security & Configuration Tips
Never commit `.env.local`; reference expected keys in docs instead. When tweaking API hosts, update both `lib/api.ts` (Axios base URL) and Vercel project settings. Use `COLLABORATOR.md` for onboarding new maintainers and keep permissions at least `Write` so preview deployments can be promoted.
