---
name: new-component
description: Create a new React component or page section following this project's conventions, with shadcn/ui primitives and a co-located test. Use when the user asks to add, build or scaffold a component, form, list, card, dialog or other UI piece.
---

# New component

1. **Check for a primitive first.** If the UI needs a button, input, dialog,
   select, table, etc., add it from shadcn instead of hand-rolling it:
   `yarn dlx shadcn@latest add <name>` (for example `input label dialog`).
   Generated files land in `src/components/ui`; do not edit them by hand.
2. **Pick the location.** Feature components go in
   `src/components/<feature>/<component-name>.tsx` (kebab-case file name,
   PascalCase component name). Route-only pieces may live next to the route in
   `src/app/<route>/_components/`.
3. **Server or client.** Keep it a Server Component unless it needs state,
   effects, event handlers or browser APIs. If only part of it is interactive,
   split that part into its own `"use client"` component.
4. **Write it** using this shape:

   ```tsx
   import { cn } from "@/lib/utils";

   type ProductCardProps = {
     title: string;
     className?: string;
   };

   export function ProductCard({ title, className }: ProductCardProps) {
     return (
       <article className={cn("rounded-lg border p-4", className)}>
         {title}
       </article>
     );
   }
   ```

   - Accept `className` and merge it with `cn()` when the component renders a
     single root element.
   - Use semantic elements and accessible names. Cover loading, empty and error
     states when the component shows data.

5. **Test it** in a sibling `<component-name>.test.tsx`, following
   `.cursor/rules/testing.mdc`: render, query by role, interact with
   `userEvent`.
6. Run the `verify-changes` skill.
