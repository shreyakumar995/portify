import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { CONTAINER, SECTION_PY, SECTION_BORDER, CARD_FEATURED, CARD_SUPPORTING, IMAGE_HOVER } from "./layout";

const FEATURED = {
  src: "/examples/dark.svg",
  theme: "Dark",
  username: "torvalds",
  name: "Linus Torvalds",
  alt: "Featured dark theme portfolio for @torvalds",
  desc: "Full profile with repository stats, language analytics, and top open-source projects — the kind of portfolio you send to hiring managers.",
} as const;

const SECONDARY = [
  {
    src: "/examples/minimal.svg",
    theme: "Minimal",
    username: "gaearon",
    name: "Dan Abramov",
    alt: "Minimal theme portfolio for @gaearon",
  },
  {
    src: "/examples/gradient.svg",
    theme: "Gradient",
    username: "sindresorhus",
    name: "Sindre Sorhus",
    alt: "Gradient theme portfolio for @sindresorhus",
  },
] as const;

export default function PortfolioShowcase() {
  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className={`${SECTION_BORDER} bg-[var(--home-bg)] scroll-mt-20`}
    >
      <div className={`${CONTAINER} ${SECTION_PY}`}>
        <SectionHeader
          id="showcase-heading"
          eyebrow="Showcase"
          title="Portfolios developers actually share"
          description="Real layouts generated from public GitHub profiles — switch themes, export PDFs, and share a single link."
        />

        <div className="space-y-6 sm:space-y-8">
          <article className={`group relative overflow-hidden rounded-2xl ${CARD_FEATURED}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--home-primary)]/6 via-transparent to-[var(--home-success)]/4 pointer-events-none" />
            <div className="relative grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative aspect-[16/9] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[460px] xl:min-h-[520px] bg-[var(--home-bg)] border-b lg:border-b-0 lg:border-r border-[var(--home-border)] overflow-hidden">
                <Image
                  src={FEATURED.src}
                  alt={FEATURED.alt}
                  fill
                  className={`object-cover object-top ${IMAGE_HOVER}`}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                />
                <div className="absolute top-4 left-4 rounded-full border border-[var(--home-border)] bg-[var(--home-bg)]/90 backdrop-blur-sm px-3 py-1">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--home-success)]">
                    Featured
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-9 xl:p-10 bg-[var(--home-elevated)]">
                <p className="home-eyebrow mb-2.5 text-[var(--home-primary)]">{FEATURED.theme} theme</p>
                <h3 className="home-card-title text-xl sm:text-2xl xl:text-3xl mb-1.5">{FEATURED.name}</h3>
                <p className="text-sm font-mono text-[var(--home-muted)] mb-4">@{FEATURED.username}</p>
                <p className="home-body mb-6 max-w-md text-sm sm:text-base">{FEATURED.desc}</p>
                <Link
                  href={`/u/${FEATURED.username}`}
                  className="home-btn-primary home-btn-primary-lg w-fit px-5 py-2.5 gap-2"
                >
                  View Example Portfolio
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </article>

          <ul className="grid gap-4 sm:gap-5 lg:grid-cols-2 opacity-[0.98]">
            {SECONDARY.map(({ src, theme, username, name, alt }) => (
              <li key={username}>
                <article className={`group h-full flex flex-col overflow-hidden rounded-xl ${CARD_SUPPORTING}`}>
                  <div className="relative aspect-[16/11] bg-[var(--home-bg)] border-b border-[var(--home-border-subtle)] overflow-hidden">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className={`object-cover object-top ${IMAGE_HOVER}`}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--home-bg)]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5 bg-[var(--home-surface)]">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-base font-semibold text-[var(--home-text)]">{name}</h3>
                        <p className="text-[11px] font-mono text-[var(--home-muted)] mt-0.5">@{username}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-[var(--home-border-subtle)] bg-[var(--home-bg)] px-2 py-0.5 text-[10px] font-mono text-[var(--home-muted)]">
                        {theme}
                      </span>
                    </div>
                    <Link
                      href={`/u/${username}`}
                      className="home-link mt-auto inline-flex items-center gap-1.5 text-sm font-medium w-fit group/link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-primary)] rounded"
                    >
                      View Example Portfolio
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
