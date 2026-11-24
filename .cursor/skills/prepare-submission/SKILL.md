---
name: prepare-submission
description: Get a finished frontend assignment ready to hand in - check requirements are covered, run the full quality gate and build, and rewrite the README for reviewers. Use when the user says they are done, wants to submit, or asks to write the final README.
---

# Prepare the submission

1. **Requirements pass.** Go through every item in `PLAN.md` (or the brief, if
   there is no plan). For each one, confirm it works in the running app, not
   just in code. List anything missing or partial to the user before going on.
2. **Quality gate.** Run `yarn validate` and `yarn build`; both must pass.
   Fix failures with the `verify-changes` skill.
3. **Clean up.** Remove leftover `console.log` calls, commented-out code, unused
   files and components, and TODOs that will not be addressed. Make sure no
   secrets are committed; real values belong in `.env.local`, documented in
   `.env.example`.
4. **Rewrite `README.md` for the reviewer.** Replace the starter README with:
   - **Title and one-line summary** of what was built.
   - **Getting started**: prerequisites (Node 22+, `corepack enable`),
     `yarn install`, `yarn dev`, the local URL, and any env variables.
   - **Scripts**: `yarn validate`, `yarn test`, `yarn build`.
   - **What's implemented**: the requirements checklist with status.
   - **Technical decisions**: stack choices, state management, data fetching,
     Server vs Client Components, and why.
   - **Trade-offs and limitations**: what was simplified given the time box.
   - **What I would do next** with more time.
   - **Time spent**, if the brief asks for it.
     Write it in the user's voice, first person, concise.
5. **Decide about `PLAN.md`**: ask the user whether to keep it (shows the
   process) or delete it.
6. Commit with a clear message and remind the user to check the brief's
   submission instructions (repo link, zip, deadline).
