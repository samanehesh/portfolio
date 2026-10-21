# Bilingual portfolio

Next.js App Router, React, and TypeScript. English at `/`, Farsi at `/fa/` with native RTL layout. Static export is generated in `out/`.

## Run

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000/.

```sh
npm run typecheck
npm run build
```

## Résumé download

Add your PDF as `public/resume.pdf`, then rebuild (or refresh in development) to enable the résumé download button. Until the file exists, the button displays a coming-soon state. Both languages share the same PDF.

## Personalize

- Edit translations in `messages/en.json` and `messages/fa.json`. Pages and metadata use next-intl; shared project IDs, artwork, and technology tags live in `lib/projects.ts`.
- Replace the sample projects with your work. Email and LinkedIn links are configured in `lib/contact.ts`.
- Update metadata in `app/[[...locale]]/page.tsx`. Search indexing is disabled while personal content is unfinished.
- Styling lives in `app/globals.css`. The theme follows system preference until changed and saves the choice locally.

Fonts load from Google Fonts with system fallbacks. No database, account, or API keys are required.

## Languages

next-intl is configured in `i18n/request.ts`, `i18n/routing.ts`, and `i18n/navigation.ts`. Use `getTranslations` in async Server Components and `useTranslations` in Client Components under the locale layout's `NextIntlClientProvider`. Use the exported `Link` for localized page navigation.

English is the default language at `/`; Farsi is at `/fa/`. `/en/` also renders English for compatibility with existing links. The optional locale route renders the English homepage directly, without an entry page or redirect. Static export does not use proxy/middleware or browser language detection. To add a language, update `i18n/routing.ts`, add its message file, and set the appropriate text direction in the locale layout.
