import PortfolioShell from "@/components/portfolioshell";
import {
  fetchUser,
  fetchRepos,
  getLanguageStats,
  getTopRepos,
  getTopicStats,
} from "@/lib/github";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ username: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { username } = await params;
    const user = await fetchUser(username);
    return {
      title: `${user.name ?? user.login} — Portify`,
      description: user.bio ?? `${user.login}'s developer portfolio on Portify`,
      openGraph: {
        title: `${user.name ?? user.login} — Portify`,
        description: user.bio ?? `Check out ${user.login}'s projects on Portify`,
        images: [{ url: user.avatar_url }],
      },
    };
  } catch {
    return { title: "Portfolio not found — Portify" };
  }
}

export default async function PortfolioPage({ params }: Props) {
  const { username } = await params;
  let user, topRepos, languageStats, topicStats;

  try {
    const [userData, repoData] = await Promise.all([
      fetchUser(username),
      fetchRepos(username),
    ]);
    user = userData;
    topRepos = getTopRepos(repoData);
    languageStats = getLanguageStats(repoData);
    topicStats = getTopicStats(repoData);
  } catch (err: unknown) {
    if (err instanceof Error && err.message === "User not found") notFound();
    throw err;
  }

  return (
    <PortfolioShell
      user={user}
      topRepos={topRepos}
      languageStats={languageStats}
      topicStats={topicStats}
    />
  );
}
