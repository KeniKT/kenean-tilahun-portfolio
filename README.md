# Kenean Tilahun — Portfolio

A ground-up single-page portfolio for Kenean Tilahun, focused on software engineering experience, selected client and product work, technical skills, and direct contact.

## Stack

- React 19 and TypeScript (strict mode)
- Vite 6
- Tailwind CSS 4 through the Vite plugin
- Framer Motion and Lucide React
- Vercel Functions with Resend for contact-form delivery

## Local setup

```bash
npm install
npm run dev
```

Create `.env.local` for contact-form development. Never commit real values:

```text
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

`CONTACT_FROM_EMAIL` must use a sender/domain verified in Resend. `CONTACT_TO_EMAIL` is the inbox that receives submissions.

## Commands

- `npm run dev` — start the development server
- `npm run build` — type-check and create a production build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Deployment

The app is configured for Vercel. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` to the Vercel project environment before deploying. Fingerprinted Vite assets receive immutable one-year cache headers.

Before final launch, add the résumé PDF at the path documented in `src/App.tsx`, confirm the current location, test form delivery, and validate every external project URL.
