---
name: verify-changes
description: Run the project's full quality gate (types, lint, formatting, tests, build) and fix failures. Use before committing, before declaring a task done, or when the user asks to check, verify or validate the project.
---

# Verify changes

1. Run `yarn validate`. It runs, in order: `yarn typecheck`, `yarn lint`,
   `yarn format:check`, `yarn test`.
2. If formatting or lint fails, run `yarn format` and `yarn lint:fix` first,
   then fix whatever remains by hand.
3. Fix type errors at the source. Do not silence them with `any`,
   `@ts-ignore`, `@ts-expect-error` or `eslint-disable` comments.
4. If a test fails, decide whether the code or the test is wrong before
   changing either. Do not delete or skip tests to make the run green.
5. When the change touches routing, data fetching, `next.config.ts` or
   Server/Client boundaries, also run `yarn build`.
6. Re-run `yarn validate` until it passes, then report what was fixed.
