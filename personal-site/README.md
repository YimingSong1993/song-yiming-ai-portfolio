# Song Yiming AI Product Portfolio

Static job-search portfolio for 宋依明, focused on AI product manager roles in pharma, healthcare AI, and R&D digitalization.

The visual system uses a Newsprint editorial style: off-white paper, black structural grids, serif display typography, restrained red accents, sharp corners, and grayscale case imagery.

## Content

Resume-backed content lives in `src/portfolio.js`.

Main sections:

- Hero positioning: AI 产品经理 | 医药方向
- Metrics: 6+ IND, 3 年 AI 实战, 0→1 产品落地, 北大医学部
- Case studies: internal static pages in `demos/`
- Resume attachment: thumbnail card links to `resume.html`, with the original PDF in `resume/song-yiming-ai-pm-resume.pdf`

## Demo Pages

Every project `demoPath` points to an internal static page:

- `demos/ai-model-productization.html`
- `demos/wuxi-ai-assistant.html`
- `demos/lights-out-lab.html`
- `demos/cell-process-selector.html`
- `demos/ind-delivery.html`

This avoids broken links when the site is served from `personal-site`.

## Test

```bash
npm test
```

Expected result: all Node test files pass. Tests also verify that every project demo page exists.

## Preview Locally

```bash
npm run serve
```

Open `http://127.0.0.1:4173/`.

## Deploy

This site is static. Deploy the `personal-site` directory to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static hosting provider.
