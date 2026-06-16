"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import GithubIcon from "./GithubIcon";
import ThemeSwitcher from "./ThemeSwitcher";
import { useActiveSection } from "./useActiveSection";
import { CONTAINER, scrollToHeroAndFocus, scrollToSection } from "./layout";

//const REPO_URL = "https://github.com/sumandey7684/portify-sheryaa";
const REPO_URL = "https://github.com/shreyakumar995/portify";

const NAV_LINKS = [
  { label: "Features", id: "features" },
  { label: "Examples", id: "showcase" },
  { label: "How It Works", id: "how-it-works" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLButtonElement>(null);
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

  useEffect(() => {
    if (!mobileOpen) return;

    firstMobileLinkRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
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
          className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-(--home-text) hover:text-(--home-primary) transition-colors duration-200 shrink-0 min-w-0"
        >
          <GithubIcon className="h-5 w-5 shrink-0" />
          <span className="truncate">Portify</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main">
          {NAV_LINKS.map(({ label, id }) => {
            const active = isActive(id);
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleNavClick(id)}
                aria-current={active ? "page" : undefined}
                className={`home-nav-link ${active ? "home-nav-link-active" : ""}`}
              >
                {label}
              </button>
            );
          })}
          <Link
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="home-nav-link"
          >
            GitHub
          </Link>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <ThemeSwitcher compact />
          <button
            type="button"
            onClick={handleGenerateClick}
            className="home-btn-primary hidden md:inline-flex min-h-11 px-3 text-xs lg:px-4 lg:text-sm"
          >
            <span className="lg:hidden">Generate</span>
            <span className="hidden lg:inline">Generate Portfolio</span>
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-(--home-border) bg-(--home-surface) text-(--home-text) shadow-(--home-elevation-2) hover:border-(--home-border-hover) transition-colors duration-200"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-haspopup="true"
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
            {NAV_LINKS.map(({ label, id }, index) => {
              const active = isActive(id);
              return (
                <button
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                  key={id}
                  type="button"
                  onClick={() => handleNavClick(id)}
                  aria-current={active ? "page" : undefined}
                  className={`min-h-11 rounded-lg px-3 py-2.5 text-left text-sm transition-colors duration-200 ${
                    active
                      ? "bg-(--home-elevated) text-(--home-text) shadow-(--home-elevation-2)"
                      : "text-(--home-muted) hover:bg-(--home-surface) hover:text-(--home-text)"
                  }`}
                >
                  {label}
                </button>
              );
            })}
            <Link
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-11 items-center rounded-lg px-3 py-2.5 text-sm text-(--home-muted) hover:bg-(--home-surface) hover:text-(--home-text) transition-colors duration-200"
            >
              GitHub
            </Link>
            <div className="mt-3 px-3">
              <ThemeSwitcher />
            </div>
            <button
              type="button"
              onClick={handleGenerateClick}
              className="home-btn-primary mt-3 min-h-11 w-full px-5 text-sm sm:w-auto sm:self-start"
            >
              Generate Portfolio
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
