/** Your live Vercel URL — update this if your deployment domain changes. */
export const PRODUCTION_SITE_URL = "https://portify-git.vercel.app";

/** Domains that must never be used for QR codes (not wired up or placeholder). */
const BLOCKED_HOSTS = ["portify.dev", "localhost"];

function isBlockedUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname;
    return BLOCKED_HOSTS.some(
      (blocked) => host === blocked || host.endsWith(`.${blocked}`),
    );
  } catch {
    return true;
  }
}

/** Resolve the public site origin for QR codes and share links. */
export function resolveSiteOrigin(): string {
  const envUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "");
  if (envUrl && !isBlockedUrl(envUrl)) return envUrl;

  if (typeof window !== "undefined") {
    const origin = window.location.origin;
    if (!isBlockedUrl(origin)) return origin;
  }

  return PRODUCTION_SITE_URL;
}

export function getPortfolioUrl(username: string): string {
  return `${resolveSiteOrigin()}/u/${username}`;
}
