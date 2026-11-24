<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## This repository

A Next.js App Router starter for solving a frontend interview assignment. The
assignment brief is provided separately by the user and is not stored in this
repository; once work starts, `PLAN.md` tracks its requirements. Project
conventions live in `.cursor/rules/project.mdc`; reusable workflows live in
`.cursor/skills/`.

- Package manager: Yarn 4 only.
- Dev server: `yarn dev` (port 4317).
- Quality gate: `yarn validate` must pass before a change is done.
