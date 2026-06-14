/** Shared homepage layout tokens — Draftr-inspired spacing rhythm. */
export const CONTAINER = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-7xl";
export const SECTION_PY = "py-20 sm:py-24 lg:py-28 xl:py-32";
export const SECTION_BORDER = "border-b border-[var(--home-border-subtle)]";

/** Elevation-aware card tiers */
export const CARD_HOVER = "home-card home-card-interactive";
export const CARD_FEATURED = "home-card home-card-featured home-card-interactive";
export const CARD_SUPPORTING = "home-card home-card-supporting home-card-interactive";

export const CARD_HOVER_SUBTLE =
  "home-card home-card-supporting transition-all duration-250 ease-out hover:border-[var(--home-border-hover)] hover:shadow-[var(--home-elevation-3-hover)] hover:-translate-y-px hover:scale-[1.01]";

export const IMAGE_HOVER = "home-image-hover";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function scrollToSection(id: string) {
  scrollToId(id);
}

export function scrollToHeroAndFocus() {
  scrollToId("hero");
  window.setTimeout(() => {
    document.getElementById("github-username")?.focus();
  }, 400);
}
