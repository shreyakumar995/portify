/** Public site origin — prefers the live Vercel URL over a custom domain env var. */
export function getSiteUrl(): string {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "");
  }

  return "http://localhost:3000";
}

export function getPortfolioUrl(username: string): string {
  return `${getSiteUrl()}/u/${username}`;
}
