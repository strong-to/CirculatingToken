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
Next.js 14 App Router drives the project. Routes, layouts, and globals live in `app/`; UI blocks stay under `components/` (organize by page such as `components/Home/...`). API helpers and shared config live in `lib/` and `config/`—`config/design` feeds Tailwind tokens consumed in `tailwind.config.ts`. State is handled in `store/` (Jotai), while reusable hooks/utilities belong in `hooks/` and `utils/`. Static inputs in `public/` and `uploads/` feed the `scripts/sync-texts.sh` workflow that copies localized JSON into components; stash large reference files in `dataset/`. Use the `@/` alias from `tsconfig.json` for intra-project imports.

## Build, Test, and Development Commands
- `npm run dev`: start Next.js locally at `http://localhost:3000`.
- `npm run build`: produce the optimized output; automatically runs `npm run optimize-images` via the `prebuild` hook.
- `npm run start`: serve the last build in production mode.
- `npm run lint`: run the Next/ESLint suite; this is the minimum CI gate.
- `npm run optimize-images`: minify assets in `public/`.
- `npm run sync-texts`: mirror `public/**/text/texts.json` into the corresponding component directories.

## Coding Style & Naming Conventions
TypeScript is strict: annotate props/exports and keep logic inside functional `.tsx` components. Use two-space indentation, single quotes, PascalCase components and atoms, and `useSomething` camelCase hooks. Reference Tailwind tokens from `config/design` instead of hard-coded values, and remember Tailwind config executes in Node so rely on relative paths (no `@` aliasing there).

## Testing Guidelines
No automated test runner exists yet, so run `npm run lint` and exercise critical flows manually before every PR. When adding coverage, follow the Next.js Jest + React Testing Library stack, keep specs beside the component in `__tests__/` folders, and target >80% statements for atoms, hooks, and API wrappers. Capture repro steps or recordings for UI regressions.

## Commit & Pull Request Guidelines
History favors concise Chinese summaries (`修改样式`); keep that style or adopt `type(scope): summary` so the first word signals intent. Reference issue IDs, list scripts executed (`npm run lint`, `npm run build`), and include screenshots or clips for UI work plus notes on assets or scripts touched.

## Security & Configuration Tips
Configure secrets in `.env.local` following `env.production.example`; never commit tokens. Keep `vercel.json` and `nginx.conf.example` aligned with any new rewrites. Store heavy media in `uploads/` and run `npm run optimize-images` before pushing.
