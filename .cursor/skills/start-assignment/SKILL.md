---
name: start-assignment
description: Kick off work on a frontend assignment from its task description - extract requirements, list open questions and assumptions, and plan the implementation order. Use when the user shares an assignment, task description or take-home brief, or says they are starting the assignment.
---

# Start an assignment

The assignment description is provided by the user (pasted text or an attached
file). It is not part of this repository.

1. **Read the whole brief** before writing any code. If it was not provided,
   ask for it.
2. **Write `PLAN.md`** at the repo root with these sections:
   - **Summary**: the product and the user problem in two or three sentences.
   - **Requirements**: every explicit requirement as a checklist item
     (`- [ ]`), split into "Must have" and "Nice to have" exactly as the brief
     states them. Quote the brief's wording where it matters.
   - **Implicit expectations**: things a reviewer will look for even if not
     written: loading, empty and error states, responsive layout,
     accessibility, tests for core behaviour, clean commits.
   - **Open questions**: ambiguities to ask the interviewer about.
   - **Assumptions**: the decision taken for each open question if there is no
     answer, so work is not blocked.
   - **Plan**: ordered steps, each small enough for one commit. Start with
     data and types, then the core happy path, then states and edge cases,
     then tests, then polish and nice-to-haves.
   - **Time budget**: if the brief has a time box, assign rough slices of it
     to the plan steps and leave a buffer for the final README.
3. **Show the plan to the user** and wait for confirmation before
   implementing.
4. **Set up the project**: update `metadata` in `src/app/layout.tsx` and the
   heading in `src/app/page.tsx` to the assignment's product name, and update
   the `name` in `package.json`.
5. If the brief provides an API, write typed client functions for it in
   `src/lib`. If it provides only data, or no backend at all, use the
   `mock-api` skill.
6. Implement step by step, ticking items in `PLAN.md` and running the
   `verify-changes` skill before each commit.
