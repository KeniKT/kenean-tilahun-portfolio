# Kenean Tilahun — Portfolio

A ground-up single-page portfolio for Kenean Tilahun, focused on software engineering experience, selected client and product work, technical skills, and direct contact.

## Stack

- React 19 and TypeScript (strict mode)
- Vite 6
- Tailwind CSS 4 through the Vite plugin
- Framer Motion and Lucide React
- Direct email, LinkedIn, LeetCode, and GitHub contact links

## Local setup

```bash
npm install
npm run dev
```

## Commands

- `npm run dev` — start the development server
- `npm run build` — type-check and create a production build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Deployment

The app is configured for Vercel and does not require environment variables. Fingerprinted Vite assets receive immutable one-year cache headers.

Before final launch, add the résumé PDF at the path documented in `src/App.tsx`, confirm the current location, and validate every external project URL.
