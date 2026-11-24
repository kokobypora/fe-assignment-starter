# Frontend assignment starter

My starting point for frontend interview assignments: an empty Next.js (App
Router) project with linting, formatting, testing, Git hooks, CI and Cursor
rules and skills already set up. When an assignment arrives, I copy this repo
and spend my time on the task, not on config.

The assignment brief itself arrives separately and is not stored here.

## What's included

| Area        | Tooling                                                                           |
| ----------- | --------------------------------------------------------------------------------- |
| Framework   | Next.js 16 (App Router, Turbopack), React 19, TypeScript (strict)                 |
| Styling     | Tailwind CSS v4, shadcn/ui (Base UI primitives), `lucide-react` icons             |
| Linting     | ESLint 9 flat config: `next/core-web-vitals`, `next/typescript`, extra rules      |
| Formatting  | Prettier with `prettier-plugin-tailwindcss` (sorts class names)                   |
| Testing     | Vitest, React Testing Library, `user-event`, `jest-dom`, jsdom, v8 coverage       |
| Git hooks   | Husky + lint-staged (lint and format staged files on commit)                      |
| CI          | GitHub Actions: `yarn validate` and `yarn build`                                  |
| Editor      | `.editorconfig`, VS Code / Cursor settings and recommended extensions             |
| AI (Cursor) | Project rules in `.cursor/rules`, project skills in `.cursor/skills`, `AGENTS.md` |

## Run it locally

Requires Node.js 22+. Yarn is pinned to 4.19 in `package.json`; Corepack
(bundled with Node) installs that exact version.

```bash
nvm use         # or: nvm install   # reads .nvmrc → Node 22
corepack enable
yarn install
yarn dev        # http://localhost:4317
```

Yarn uses the classic `node_modules` layout (`nodeLinker: node-modules` in
`.yarnrc.yml`), so editors and tools need no Plug'n'Play setup. Yarn 4 also
refuses package versions published in the last 24 hours, as a supply-chain
safeguard; if an install reports a "quarantined" version, pick the previous
release.

## Scripts

| Command              | What it does                                      |
| -------------------- | ------------------------------------------------- |
| `yarn dev`           | Dev server on port 4317                           |
| `yarn build`         | Production build                                  |
| `yarn start`         | Serve the production build on port 4317           |
| `yarn lint`          | ESLint                                            |
| `yarn lint:fix`      | ESLint with auto-fix                              |
| `yarn format`        | Prettier write                                    |
| `yarn format:check`  | Prettier check                                    |
| `yarn typecheck`     | Generate Next.js route types, then `tsc --noEmit` |
| `yarn test`          | Run tests once                                    |
| `yarn test:watch`    | Tests in watch mode                               |
| `yarn test:coverage` | Tests with coverage report                        |
| `yarn validate`      | typecheck + lint + format check + tests (CI gate) |

The quality gate is called `validate` rather than `check` because
`yarn check` is a built-in command in Yarn 1.

Add shadcn/ui components as needed, for example
`yarn dlx shadcn@latest add input label dialog`. `button` and `card` are
already included.

## ESLint rules on top of the Next.js defaults

- Import/export sorting (`simple-import-sort`), auto-fixable
- `eqeqeq`, `prefer-const`, `no-var`, `object-shorthand`, `prefer-template`
- `no-console` (warn; `console.warn` and `console.error` are allowed)
- Unused variables are errors unless prefixed with `_`
- `consistent-type-imports` (inline `type` imports)
- `no-explicit-any` and `no-non-null-assertion` as warnings
- React: self-closing tags, no needless curly braces or fragments, components
  as function declarations
- `eslint-config-prettier` last, so ESLint never fights Prettier

## Cursor setup

- **Rules** (`.cursor/rules`)
  - `project.mdc`: always applied; stack, folder structure and code style.
  - `testing.mdc`: applied to `*.test.ts(x)`; Testing Library conventions.
- **Skills** (`.cursor/skills`), picked up by the agent when relevant, or on
  request ("use the start-assignment skill"):
  - `start-assignment`: reads the brief you paste or attach and writes
    `PLAN.md` with a requirements checklist, open questions, assumptions and an
    implementation order.
  - `mock-api`: adds typed fixture data and Route Handlers under `/api`, with
    optional latency and error simulation.
  - `new-component`: scaffolds a component with shadcn primitives and a test.
  - `verify-changes`: runs the full quality gate and fixes failures.
  - `prepare-submission`: checks every requirement, runs the gate and build,
    cleans up, and rewrites this README for the reviewer.
- **`AGENTS.md`**: Next.js writes a block here that points agents to the docs
  bundled in `node_modules/next/dist/docs`. That matters because this Next.js
  version has APIs newer than most models know.

## When an assignment arrives

1. Copy the starter into a new repo for the assignment, for example
   "Use this template" on GitHub, or clone it and push to a new remote.
2. Run `corepack enable && yarn install && yarn dev`.
3. In Cursor, paste or attach the brief and ask: "Use the start-assignment
   skill." Review `PLAN.md`, send the open questions to the interviewer, and
   start on the first step.
4. Commit in small steps; run `yarn validate` before each commit.
5. When done, ask: "Use the prepare-submission skill." It replaces this README
   with one written for the reviewer.

## How this project was created

These are the steps to recreate the starter from scratch.

1. Scaffold Next.js with the App Router, TypeScript, Tailwind, ESLint and a
   `src/` directory:

   ```bash
   corepack enable
   yarn dlx create-next-app@latest fe-assignment-starter \
     --ts --tailwind --eslint --app --src-dir --import-alias "@/*" \
     --use-yarn --turbopack --no-react-compiler --yes
   cd fe-assignment-starter
   ```

2. Pin Yarn 4 with the classic `node_modules` layout:

   ```bash
   corepack use yarn@4.19.0
   printf 'nodeLinker: node-modules\nenableTelemetry: false\n' > .yarnrc.yml
   yarn install
   ```

3. Add shadcn/ui and the two most common components:

   ```bash
   yarn dlx shadcn@latest init -d
   yarn dlx shadcn@latest add button card
   ```

4. Install the dev tooling (`vite` is a peer dependency of Vitest that Yarn
   does not install on its own):

   ```bash
   yarn add -D prettier prettier-plugin-tailwindcss eslint-config-prettier \
     eslint-plugin-simple-import-sort \
     vitest vite @vitest/coverage-v8 @vitejs/plugin-react jsdom \
     @testing-library/react @testing-library/dom @testing-library/jest-dom \
     @testing-library/user-event \
     husky lint-staged @types/node@^24
   ```

5. Add the config files: `eslint.config.mjs` (extra rules, Prettier last),
   `.prettierrc.json`, `.prettierignore`, `vitest.config.mts`,
   `vitest.setup.ts`, `.editorconfig`, `.nvmrc`, `.env.example`,
   `.vscode/`, and `.github/workflows/ci.yml`.
6. Update `package.json`: the scripts listed above, a `postinstall: husky`
   script (Yarn 4 does not run `prepare` on install), the `lint-staged`
   block, and `engines.node`. Set the dev port with `next dev --port 4317`.
7. Tighten `tsconfig.json` (`noFallthroughCasesInSwitch`,
   `noImplicitOverride`, `forceConsistentCasingInFileNames`, Vitest and
   jest-dom global types).
8. Create `.husky/pre-commit` containing `yarn lint-staged`.
9. Replace the demo page with a minimal `page.tsx`, add `error.tsx` and
   `not-found.tsx`, remove the demo SVGs from `public/`, and add a smoke test
   (`src/app/page.test.tsx`).
10. Add the Cursor rules and skills under `.cursor/`.
11. Run `yarn validate && yarn build`.
