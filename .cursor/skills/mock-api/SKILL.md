---
name: mock-api
description: Add a local mock REST API with Next.js Route Handlers and typed fixture data, plus a typed client to call it. Use when an assignment needs data to fetch, when the user asks for a fake backend, mock endpoint, seed data, or to simulate latency and errors.
---

# Mock API

Use this when the assignment brief gives data (or a data shape) but no
backend, or when its real API is unreliable to develop against. Serve the data
from Route Handlers inside this app so the project runs with no external
services. If the brief specifies a real API, match its paths and response
shapes so switching over is a base-URL change.

1. **Types and data** in `src/lib/<resource>/`:
   - `types.ts`: the resource type (for example `type Product = { id: string; ... }`).
   - `data.ts`: an exported array of realistic fixtures (real-looking names,
     prices, dates; 10-30 items). No lorem ipsum.
2. **Route Handlers** in `src/app/api/<resource>/route.ts` (list) and
   `src/app/api/<resource>/[id]/route.ts` (detail). Read the current
   Route Handler and dynamic params API in
   `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/route.md`
   before writing them; the signatures changed between Next.js versions.
   - Support `?q=` search, `?page=` / `?limit=` pagination and sorting only if
     the assignment asks for them.
   - Return `Response.json(data)`; return `404` with a JSON body for unknown ids.
3. **Realism toggles** (optional, off by default): read `?delay=<ms>` to
   simulate latency and `?fail=1` to return a `500`, to make loading and error
   states easy to develop and demo.
4. **Client** in `src/lib/<resource>/api.ts`: small typed functions
   (`getProducts`, `getProduct`) that call the endpoints, check `res.ok`, and
   throw a descriptive `Error` otherwise.
5. **Tests**: unit-test filtering/pagination helpers in `src/lib`. Do not spin
   up a server in tests.
6. Run the `verify-changes` skill.
