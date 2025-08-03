# Minimal React + TypeScript + Tailwind v4 + shadcn/ui (Vite) — Dark Mode Only

A lean starter template wired with:
- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4 (zero-config via @tailwindcss/vite)
- shadcn/ui (Button component included)
- React Compiler (via babel-plugin-react-compiler)
- Dark-mode-only styling (html.dark)

Why this template?
- Minimal footprint: no Tailwind config, no PostCSS config, and only essential dependencies.
- Zero-FOUC: dark mode is enforced at the HTML root without runtime detection.
- Sensible defaults: path alias @ → /src, index.css includes base tokens and a small utility.
- Ready to extend: shadcn/ui integrated with a working Button and utility helpers.

## Getting Started

Install:
- npm install

Develop:
- npm run dev
- Open the printed URL (e.g. http://localhost:5173)

Build:
- npm run build

Preview:
- npm run preview

## Project Structure

- [`index.html`](index.html): Dark mode is enforced using `class="dark"` and `<meta name="color-scheme" content="dark">`.
- [`vite.config.ts`](vite.config.ts): Vite config with React plugin + React Compiler and Tailwind v4 plugin.
- [`src/index.css`](src/index.css): Tailwind v4 entry with small token set and a demo utility.
- [`src/main.tsx`](src/main.tsx): App bootstrap and single global CSS import.
- [`src/App.tsx`](src/App.tsx): Minimal landing page showing technologies and a shadcn Button.
- [`src/components/ui/button.tsx`](src/components/ui/button.tsx): shadcn/ui Button.
- [`src/lib/utils.ts`](src/lib/utils.ts): cn() helper using clsx + tailwind-merge.
- [`tsconfig.json`](tsconfig.json), [`tsconfig.app.json`](tsconfig.app.json): TS configs with bundler mode and vite/client types.
- [`package.json`](package.json): Scripts and dependencies.

## Technologies and Decisions

Tailwind v4 (zero-config):
- Uses `@tailwindcss/vite` plugin; no `tailwind.config.*` or `postcss.config.*` required.
- Dark variants rely on `html.dark`. This template always renders in dark mode.

shadcn/ui:
- Integrated and verified with Vite + Tailwind v4.
- Includes a Button component and a simple `cn` utility.

React Compiler:
- Enabled through Vite’s React plugin (babel-plugin-react-compiler, target "18" for transform compatibility).
- Runtime `react-compiler-runtime` included.

TypeScript:
- Bundler mode resolution, strict checks, and vite/client types.
- Path alias: `@` → `/src`.

## Customization

- Tokens: Adjust colors/radius in [`src/index.css`](src/index.css).
- Components: Use the shadcn/ui CLI to add more components or scaffold your own in `src/components/ui`.
- Light Mode: If needed later, remove `class="dark"` in `index.html` and re-introduce preference detection in `index.html`/`main.tsx`.

## License

MIT — use freely for personal and commercial projects.