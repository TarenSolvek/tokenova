# Copilot / Agent Instructions for this repo

Purpose: give an AI coding agent focused, actionable information to be immediately productive working on this React + Vite project.

## Quick summary
- React 19 app bootstrapped with Vite, using `react-bootstrap` + Bootstrap CSS for UI and `react-router-dom` for routing.
- Global state: `src/components/CartContext.jsx` provides `CartContext` and `CartProvider` (API: `carrito`, `agregarAlCarrito`, `eliminarDelCarrito`, `vaciarCarrito`).
- Deployment: GitHub Pages via `gh-pages` (see `package.json` scripts and `vite.config.js` `base` setting).
- Language: mixed Spanish/English identifiers and comments; be conservative and follow existing naming (e.g., `agregarAlCarrito`).

## Important commands (run from repo root)
- Dev server: `npm run dev` (Vite with HMR)
- Build: `npm run build` (produces `dist`)
- Preview built site: `npm run preview`
- Lint: `npm run lint` (ESLint configured in `eslint.config.js`)
- Deploy: `npm run deploy` (runs `gh-pages -d dist` — `npm run predeploy` runs build first)

## Architecture & key files to inspect
- `vite.config.js` — **base** is set to `/tokenova/` for GH Pages; `App.jsx` uses `BrowserRouter` with `basename={import.meta.env.BASE_URL}` to match this.
- `package.json` — scripts, dependencies (Bootstrap, FontAwesome, react-helmet, react-router-dom, gh-pages).
- `src/main.jsx` — entry (imports `index.css`, `bootstrap` CSS) and mounts `<App />` in `StrictMode`.
- `src/App.jsx` — central routing and global `<CartProvider>`; includes `Helmet` global metadata.
- `src/components/CartContext.jsx` — global cart API and patterns for state updates.
- `src/components/ProductListV2.jsx` — fetches products from external MockAPI URL: `https://692e49a591e00bafccd3623c.mockapi.io/products`; contains filters/sorting and loading UX.
- `src/components/ProductCardV2.jsx` — product modal pattern and `onBuy` callback; uses Bootstrap components and `ProgressBar` UI.
- CSS: component-specific styles are alongside components (e.g., `ProductV2.css`) and global styles in `src/index.css`.

## Conventions & notable behavior (AI-specific notes)
- Component files follow PascalCase and live in `src/components/` (one component per file). Follow existing structure when adding new components.
- Spanish naming: many functions/props use Spanish (`agregarAlCarrito`, `carrito`, `Comenzar`). Preserve these names when possible to keep code consistent.
- Routing: add new routes by importing the component in `App.jsx` and adding a `<Route path="/..." element={<YourComponent/>} />` inside `<Routes>`.
- External data: product lists are fetched at runtime from a public MockAPI URL — tests and offline runs should mock network responses.
- Sorting in `ProductListV2` uses `Array.sort` on the filtered array (note: `sort` mutates the array in-place); be careful when refactoring to avoid unintended mutations.
- ESLint: rules configured in `eslint.config.js`. `no-unused-vars` is set but ignores names starting with uppercase or underscore (`varsIgnorePattern: '^[A-Z_]'`).
- Accessibility & SEO: `Helmet` is used for page-level metadata; components include ARIA labels in some places (e.g., `Header aria-label`).

## Testing & CI
- No test runner or CI pipeline is present in the repo. If adding tests or CI, document exact commands and keep tests opt-in (ask maintainers). Do not assume a test framework.

## External integrations to be cautious about
- GitHub Pages (`gh-pages`) and `vite.config.js` base path — changing these affects routing and asset paths on deploy.
- External MockAPI endpoint (see `ProductListV2.jsx`) — when editing data shapes, update components that rely on fields such as `image`, `price`, `title`, `description`, and optional `tokenPrice` / `tokensTotal`.

## Edit examples (concrete shortcuts)
- Add a route: import the component in `src/App.jsx` and add a route within `<Routes>`:
  - `import NewPage from './components/NewPage';` then `<Route path="/new-page" element={<NewPage/>} />`
- Use cart context in a component:
  - `import { useContext } from 'react'; import { CartContext } from './CartContext';` then `const { agregarAlCarrito } = useContext(CartContext);`
- Local dev with base path: run `npm run dev` — routes will work locally; verify production paths with `npm run build` then `npm run preview`.

## When to ask the maintainers
- Before adding tests or CI, changing `vite.config.js` base or `package.json` homepage, or modifying the GH Pages deploy flow.
- If you need to change the external API URL (the mock API used for products).

---
If you want, I can (1) merge in content from a preferred template, (2) add a short developer FAQ, or (3) add explicit code examples for common refactors — which would you prefer to see next?