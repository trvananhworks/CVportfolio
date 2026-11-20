# Van Anh Tran — Portfolio

React + Vite + Tailwind CSS v4 + React Router.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Editing content
All text lives in `src/data/site.js`. Anything not taken from the CV is marked
as a placeholder (`placeholder: '...'` in project sections, `year: null`, etc.)
and shows as a dashed lavender "Placeholder" box on the site.

## Adding your photos (4 slots)
1. Put files in `public/images/` (e.g. `portrait.jpg`).
2. In `src/data/site.js` → `images`, set `src: '/images/portrait.jpg'`.

| Slot       | Where it appears                      | Suggested shape |
|------------|---------------------------------------|-----------------|
| `portrait` | Home hero                             | 4:5 vertical    |
| `about`    | About page intro                      | 4:5 vertical    |
| `philips`  | Home spotlight + Experience page      | 16:10 landscape |
| `creative` | Home "Beyond the classroom"           | 4:5 vertical    |

## Structure
- `src/components/` — Button/TextLink, ImageSlot, ProjectCard, Reveal, SectionHeading, PageHero, Placeholder, Header, Footer
- `src/pages/` — Home, About, Experience, Projects, ProjectDetail, Contact, NotFound

## Deploying
Any static host works (Netlify, Vercel, GitHub Pages). It's a single-page app,
so configure the host to rewrite unknown routes to `index.html`.
