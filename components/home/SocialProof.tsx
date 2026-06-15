import { Star, Code2, Zap, Heart } from "lucide-react";
import Link from "next/link";
import GithubIcon from "./GithubIcon";
import { CONTAINER, SECTION_BORDER } from "./layout";

const REPO_URL = "https://github.com/sumandey7684/portify-sheryaa";

const PROOF_ITEMS = [
  { icon: Star, label: "Open Source", desc: "Free and transparent", custom: false },
  { icon: null, label: "GitHub Powered", desc: "Live profile data", custom: true },
  { icon: Code2, label: "Developer Focused", desc: "Built for engineers", custom: false },
  { icon: Zap, label: "Instant Generation", desc: "Results in seconds", custom: false },
] as const;

export default function SocialProof() {
  return (
    <section aria-label="Social proof" className={`${SECTION_BORDER} bg-[var(--home-bg)]`}>
      <div className={`${CONTAINER} py-12 sm:py-16 lg:py-20`}>
        <div className="flex flex-col items-center gap-8 sm:gap-10">
          <Link
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--home-border)] bg-[var(--home-surface)] px-4 py-2 text-sm text-[var(--home-text)] hover:border-[var(--home-border-hover)] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-primary)]"
          >
            <Star className="h-4 w-4 text-[#f0c040]" aria-hidden />
            <span>Open Source Project</span>
            <Heart className="h-3.5 w-3.5 text-[var(--home-success)]" aria-hidden />
          </Link>

          <ul className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PROOF_ITEMS.map(({ icon: Icon, label, desc, custom }) => (
              <li
                key={label}
                className="flex flex-col items-center text-center rounded-xl border border-[var(--home-border)] bg-[var(--home-surface)] px-4 py-5 transition-all duration-300 hover:border-[var(--home-border-hover)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--home-shadow)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--home-elevated)] text-[var(--home-primary)] mb-3">
                  {custom ? (
                    <GithubIcon className="h-4 w-4" />
                  ) : (
                    Icon && <Icon className="h-4 w-4" aria-hidden />
                  )}
                </span>
                <p className="text-sm font-semibold text-[var(--home-text)] mb-1">{label}</p>
                <p className="text-xs text-[var(--home-muted)]">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
