import Link from "next/link";
import GithubIcon from "./GithubIcon";
import { CONTAINER } from "./layout";

const REPO_URL = "https://github.com/sumandey7684/portify-sheryaa";

const LINKS = [
  { label: "GitHub", href: REPO_URL, external: true },
  { label: "Examples", href: "#showcase", external: false },
  { label: "Documentation", href: `${REPO_URL}#readme`, external: true },
  { label: "Contact", href: `${REPO_URL}/issues`, external: true },
  { label: "Privacy", href: `${REPO_URL}/blob/main/README.md`, external: true },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-[var(--home-border-subtle)] bg-[var(--home-bg)]">
      <div className={`${CONTAINER} py-14 sm:py-16 lg:py-20`}>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center gap-2 rounded text-lg font-semibold text-[var(--home-text)] hover:text-[var(--home-primary)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-primary)]"
            >
              <GithubIcon className="h-5 w-5" />
              Portify
            </Link>
            <p className="mt-4 home-body text-base leading-relaxed">
              Turn GitHub profiles into professional developer portfolios — instantly.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-10">
              {LINKS.map(({ label, href, external }) => (
                <li key={label}>
                  <Link
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex min-h-11 items-center rounded text-sm text-[var(--home-muted)] hover:text-[var(--home-text)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-primary)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--home-border-subtle)]">
          <p className="text-xs text-[var(--home-subtle)]">
            © {new Date().getFullYear()} Portify, By Shreya Kumar with ❤️ Open source on{" "}
            <Link
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="home-link underline underline-offset-2 decoration-[var(--home-border)]"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
