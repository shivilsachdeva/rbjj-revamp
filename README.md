# Radji Barrett Jiu Jitsu — Website

Built with React + Vite.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `/dist` — upload those files to GoDaddy public_html via FileZilla.

## Deploy via Netlify (recommended)

1. Push this repo to GitHub
2. Go to netlify.com → "Add new site" → "Import from Git"
3. Select your repo, build command: `npm run build`, publish dir: `dist`
4. Every `git push` auto-deploys

## Adding images

Put photos in `/public/images/` and reference them as `/images/filename.jpg`

In each component, swap placeholder divs for `<img>` tags:
```jsx
// Before (placeholder)
<div className="ph" style={{ height: '100%' }}>RADJI PHOTO</div>

// After (real image)
<img src="/images/radji.jpg" alt="Radji Bryson-Barrett" />
```

### Image slots:
- `/public/images/logo.png` — navbar logo (circular)
- `/public/images/hero.jpg` — hero background
- `/public/images/comp-1.jpg` through `comp-3.jpg` — About carousel 1
- `/public/images/gym-1.jpg` through `gym-5.jpg` — About carousel 2
- `/public/images/radji.jpg` — Radji instructor photo
- `/public/images/shlok.jpg` — Shlok instructor photo
- `/public/images/shivil.jpg` — Shivil instructor photo
- `/public/images/angel.jpg` — Angel instructor photo
