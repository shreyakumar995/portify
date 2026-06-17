# Portify

Turn any public GitHub profile into a polished developer portfolio in seconds.

**[Live demo](https://portify-git.vercel.app)** · **[GitHub](https://github.com/shreyakumar995/portify)**

Portify pulls live data from GitHub — repositories, languages, topics, and profile stats — and renders a shareable portfolio page. No sign-up, no manual data entry.

---

## Features

- **Instant portfolio generation** — Enter a GitHub username and get a full portfolio at `/u/username`
- **GitHub-powered analytics** — Repo counts, followers, language breakdown, and top projects
- **Skills & topics** — Aggregated from repository topics across public repos
- **Theme switching** — Dark, Light, and Aurora themes (synced across homepage and portfolio)
- **PDF export** — Print or save your portfolio as a PDF from the portfolio page
- **QR code in PDF** — Each portfolio includes a scannable QR code embedded in the exported PDF
- **Responsive design** — Optimized for mobile, tablet, and desktop
- **Open source** — No account required to generate a portfolio

---

## How it works

1. **Analyze** — Fetch public profile and repository data from the GitHub API
2. **Extract** — Rank top repos, compute language stats, and collect skill topics
3. **Generate** — Render a portfolio page with hero, stats, projects, and skills

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/) |
| Language | TypeScript |
| Icons | [Lucide React](https://lucide.dev/) |
| QR codes | [qrcode.react](https://www.npmjs.com/package/qrcode.react) |
| Data | GitHub REST API |

---

## Getting started

### Prerequisites

- Node.js 20+
- npm (or pnpm / yarn)
- A [GitHub personal access token](https://github.com/settings/tokens) (recommended for higher API rate limits)

### Installation

```bash
git clone https://github.com/shreyakumar995/portify.git
cd portify
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
# Required for reliable GitHub API access (avoids low unauthenticated rate limits)
GITHUB_TOKEN=ghp_your_token_here

# Public site URL — used for QR codes and share links in production
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

| Variable | Required | Description |
|----------|----------|-------------|
| `GITHUB_TOKEN` | Recommended | GitHub PAT with `public_repo` (or no scopes for public data only) |
| `NEXT_PUBLIC_BASE_URL` | Production | Your deployed origin, e.g. `https://portify-git.vercel.app` |

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), enter a GitHub username, and click **Generate Portfolio**.

### Build for production

```bash
npm run build
npm start
```

---

## Project structure

```
portify/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout & fonts
│   └── u/[username]/
│       ├── page.tsx             # Generated portfolio page
│       ├── layout.tsx           # Portfolio theme wrapper
│       └── loading.tsx          # Loading skeleton
├── components/
│   ├── home/                    # Homepage sections & theme
│   ├── HeroSection.tsx          # Portfolio hero
│   ├── ProjectsGrid.tsx         # Top repositories
│   ├── LanguageBar.tsx          # Language breakdown
│   ├── TopicBar.tsx             # Skills & technologies
│   ├── QrCodeCard.tsx           # QR code component
│   └── portfolioshell.tsx       # Portfolio page shell
├── lib/
│   ├── github.ts                # GitHub API & data helpers
│   ├── site.ts                  # Site URL & portfolio link helpers
│   └── themes.ts                # Legacy theme tokens
└── types/
    └── github.ts                # GitHub API types
```

---

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with portfolio generator |
| `/u/[username]` | Generated developer portfolio |

**Example:** [portify-git.vercel.app/u/sindresorhus](https://portify-git.vercel.app/u/sindresorhus)

---

## Deployment

Portify works well on [Vercel](https://vercel.com), [Render](https://render.com), or any Node.js host that supports Next.js.

1. Push the repo to GitHub
2. Connect the repository to your hosting provider
3. Set `GITHUB_TOKEN` and `NEXT_PUBLIC_BASE_URL` in environment variables
4. Deploy

On Render, bind the web service to `0.0.0.0:$PORT` per platform requirements.

---

## PDF export

On any portfolio page (`/u/username`):

1. Click **PDF** in the top navigation
2. Use your browser’s print dialog to save as PDF

The exported PDF includes a QR code at the bottom that links back to the live portfolio URL.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |

---

## Contributing

Contributions are welcome. Feel free to open an issue or submit a pull request on [GitHub](https://github.com/shreyakumar995/portify).

---

## License

Open source. See the repository for license details.
