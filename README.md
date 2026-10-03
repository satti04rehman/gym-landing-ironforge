# IronForge Landing

A single-page campaign site for a gym: one offer, one form, everything above the fold.

**Live:** https://gym-landing-ironforge.vercel.app

Source code is in this repo — hand-written HTML/CSS/vanilla JS, no build step. Serve the folder locally (see below).

## About

IronForge Landing is a demo one-page campaign build for a gym, built around a single "first week free" offer. It is the smallest build in this collection — one `index.html`, no sub-pages, no navigation between documents — with anchor links scrolling to the program, pricing, testimonial and contact sections.

## Tech stack

| | |
|---|---|
| Markup | HTML5, one page with in-page anchors (`#programs`, `#pricing`, `#contact`, `#faq`) |
| Styling | `css/style.css`, CSS custom properties |
| Script | `js/main.js` — vanilla ES6+, no dependencies |
| Fonts | Google Fonts |
| Images | 7 of the 12 local JPEGs in `images/` are used |
| Icons | `favicon.svg` and `favicon.ico` |
| Build | None. No `package.json`, no dependencies |
| Hosting | Vercel, static hosting |

## Features

Everything below is implemented in `index.html` / `js/main.js`.

- **Single-page structure** — hero, features, programs, testimonials, pricing, FAQ and contact, all on one scrolling page.
- **Membership pricing** — three tiers (monthly, quarterly, annual) with the quarterly plan flagged "Most Popular" and the longer plans showing their per-month saving.
- **Per-plan WhatsApp CTAs** — each pricing card and each program card opens WhatsApp with a message naming that specific plan or program.
- **Validated lead form** (`#leadForm`) — name, phone and goal, all `required`; empty fields are flagged on the `.form-group` and submission stops until they are filled. A valid submission opens WhatsApp with the details formatted as a message.
- **Count-up statistics** — animated from 0 to their `data-count` target when scrolled into view, with thousands separators.
- **Scroll progress bar** and **reveal-on-scroll** via `IntersectionObserver`, with a fallback that reveals everything immediately if `IntersectionObserver` is unavailable.
- **FAQ accordion** built with native `<details>` / `<summary>` — no JavaScript needed.
- **Header darkening on scroll** past 60px.
- **Mobile navigation** — links panel toggles with `aria-expanded` kept in sync and closes when a link is tapped.
- **Responsive** — breakpoints at 960px and 600px, plus `prefers-reduced-motion` handling in CSS.

## Project structure

```
.
├── index.html        # the entire page
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/           # gym-01.jpg … gym-12.jpg (7 used)
├── favicon.svg
├── favicon.ico
├── .gitignore        # ignores .vercel
└── .vercel/          # Vercel project link (projectName: gym-landing)
```

## Local preview

No install step. Serve it over HTTP so `css/`, `js/` and `images/` resolve:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Notes

- **Practice build.** The gym, its prices, offers and member testimonials are sample content written for the demo — not a real business and not a delivered client project.
- The WhatsApp number in the page and in `js/main.js` is Abdul's own, used here as the demo's contact channel.
- This is the landing-page counterpart to `gym`, the four-page IronForge Fitness site in the same collection.
- There is no backend. The lead form validates client-side and then hands off to WhatsApp.
