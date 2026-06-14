"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import GithubIcon from "./GithubIcon";
import ThemeSwitcher from "./ThemeSwitcher";
import { useActiveSection } from "./useActiveSection";
import { CONTAINER, scrollToHeroAndFocus, scrollToSection } from "./layout";

const REPO_URL = "https://github.com/sumandey7684/portify-sheryaa";

const NAV_LINKS = [
  { label: "Features", id: "features" },
  { label: "Examples", id: "showcase" },
  { label: "How It Works", id: "how-it-works" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleNavClick(id: string) {
    setMobileOpen(false);
    scrollToSection(id);
  }

  function handleGenerateClick() {
    setMobileOpen(false);
    scrollToHeroAndFocus();
  }

  function isActive(id: string) {
    return activeSection === id;
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background,box-shadow,border-color] duration-300 ease-out ${
        scrolled ? "home-nav-glass" : "bg-transparent"
      }`}
    >
      <div className={`${CONTAINER} flex h-14 sm:h-16 items-center justify-between gap-4`}>
          <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--home-text)] hover:text-[var(--home-primary)] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-primary)] rounded-lg py-1 shrink-0 min-w-0"
        >
          <GithubIcon className="h-5 w-5 shrink-0" />
          <span className="truncate">Portify</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id)}
              className={`home-nav-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-primary)] ${
                isActive(id) ? "home-nav-link-active" : ""
              }`}
            >
              {label}
            </button>
          ))}
          <Link
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="home-nav-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-primary)]"
          >
            GitHub
          </Link>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <ThemeSwitcher compact />
          <button
            type="button"
            onClick={handleGenerateClick}
            className="home-btn-primary hidden md:inline-flex h-8 px-3 text-xs lg:h-9 lg:px-4 lg:text-sm"
          >
            <span className="lg:hidden">Generate</span>
            <span className="hidden lg:inline">Generate Portfolio</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--home-border)] bg-[var(--home-surface)] text-[var(--home-text)] shadow-[var(--home-elevation-2)] hover:border-[var(--home-border-hover)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-primary)]"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="lg:hidden home-nav-glass"
          aria-label="Mobile"
        >
          <div className={`${CONTAINER} py-4 flex flex-col gap-0.5`}>
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleNavClick(id)}
                className={`rounded-lg px-3 py-2.5 text-left text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-primary)] ${
                  isActive(id)
                    ? "bg-[var(--home-elevated)] text-[var(--home-text)] shadow-[var(--home-elevation-2)]"
                    : "text-[var(--home-muted)] hover:bg-[var(--home-surface)] hover:text-[var(--home-text)]"
                }`}
              >
                {label}
              </button>
            ))}
            <Link
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-[var(--home-muted)] hover:bg-[var(--home-surface)] hover:text-[var(--home-text)] transition-colors duration-200"
            >
              GitHub
            </Link>
            <div className="mt-3 px-3">
              <ThemeSwitcher />
            </div>
            <button
              type="button"
              onClick={handleGenerateClick}
              className="home-btn-primary mt-3 h-10 w-auto self-start px-5 text-sm"
            >
              Generate Portfolio
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
