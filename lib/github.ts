import type { GithubRepo, GithubUser } from "@/types/github";

const BASE = "https://api.github.com";

function headers() {
  return {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
  };
}

export async function fetchUser(username: string): Promise<GithubUser> {
  const res = await fetch(`${BASE}/users/${username}`, {
    headers: headers(),
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("User not found");
  return res.json();
}

export async function fetchRepos(username: string): Promise<GithubRepo[]> {
  const repos: GithubRepo[] = [];
  let page = 1;

  while (true) {
    const res = await fetch(
      `${BASE}/users/${username}/repos?per_page=100&page=${page}&sort=updated`,
      {
        headers: headers(),
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) throw new Error("Repos not found");

    const batch: GithubRepo[] = await res.json();
    if (batch.length === 0) break;

    repos.push(...batch);
    if (batch.length < 100) break;
    page++;
  }

  return repos;
}

export function getTopRepos(repos: GithubRepo[], limit = 6): GithubRepo[] {
  return repos
    .filter((repo) => !repo.fork && !repo.archived && repo.visibility === "public")
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, limit);
}

export interface LanguageStat {
  language: string;
  count: number;
}

export function getLanguageStats(repos: GithubRepo[]): LanguageStat[] {
  const counts = new Map<string, number>();

  for (const repo of repos) {
    if (!repo.language || repo.fork) continue;
    counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count);
}
