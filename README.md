# Acadore Consulting — Website

A production-ready Next.js website for Acadore Consulting, built with TypeScript and Tailwind CSS. Designed to deploy on Vercel in under 5 minutes.

## Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **Fonts**: Playfair Display + DM Sans (Google Fonts)

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
# → Open http://localhost:3000

# 3. Lint
npm run lint

# 4. Production build (test before deploying)
npm run build
npm start
```

## Deploy to GitHub + Vercel

```bash
# Step 1 — Initialize git and push to GitHub
git init
git add .
git commit -m "Initial commit — Acadore Consulting website"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/acadore-consulting.git
git branch -M main
git push -u origin main
```

```bash
# Step 2 — Deploy to Vercel
# Option A: Connect via Vercel dashboard (recommended)
# 1. Go to vercel.com → New Project
# 2. Import your GitHub repo
# 3. Framework: Next.js (auto-detected)
# 4. Click Deploy — done.

# Option B: Vercel CLI
npm install -g vercel
vercel login
vercel --prod
```

## Contact Form Setup (Required Before Go-Live)

The contact form at `/contact` submits to `/api/contact`. To make it actually send emails:

**Option A — Resend (recommended, free tier available)**
1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Run: `npm install resend`
4. In `pages/api/contact.ts`, uncomment the Resend block and comment out the `console.log`
5. Add `RESEND_API_KEY=re_xxxx` to Vercel → Settings → Environment Variables

**Option B — Formspree (zero-code)**
1. Create a form at [formspree.io](https://formspree.io) (free tier: 50 submissions/month)
2. Replace the `fetch('/api/contact')` call in `pages/contact.tsx` with a direct POST to your Formspree endpoint

## Environment Variables

Create `.env.local` in the project root for local dev:

```
# Required for email delivery (Option A)
RESEND_API_KEY=re_your_api_key_here
```

Add the same variable in Vercel → Project → Settings → Environment Variables.

## Customisation Checklist

- [ ] Replace `hello@acadore.com` and `privacy@acadore.com` with your real email addresses
- [ ] Update `https://www.acadore.com` with your real domain in `components/Meta.tsx`
- [ ] Add `public/favicon.ico` (use [favicon.io](https://favicon.io) to generate)
- [ ] Add `public/og-image.png` (1200×630px) for social sharing previews
- [ ] Set up contact form email delivery (see above)
- [ ] Add Google Analytics or Plausible script to `pages/_document.tsx` if needed
- [ ] Update the LinkedIn URL in `pages/_document.tsx` JSON-LD schema

## Project Structure

```
acadore-consulting/
├── .github/
│   └── workflows/
│       └── ci.yml            # GitHub Actions — lint + build on push
├── components/
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── Meta.tsx
│   └── Navbar.tsx
├── pages/
│   ├── api/
│   │   └── contact.ts        # Contact form API route
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx             # Homepage
│   ├── about.tsx
│   ├── services.tsx
│   ├── case-studies.tsx
│   ├── contact.tsx
│   ├── privacy.tsx
│   └── terms.tsx
├── styles/
│   └── globals.css
├── types/
│   └── content.ts
├── utils/
│   └── content.ts
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```
