import { fetchUser, fetchRepos, getTopRepos } from "@/lib/github";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import LanguageBar from "@/components/LanguageBar";
import { getLanguageStats } from "@/lib/github";

type Props = {
  params: Promise<{ username: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const {username} = await params;
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
    return { title: 'Portfolio not found — Portify' };
  }
}

export default async function PortfolioPage({ params }: Props) {
  const {username} = await params;
  let user, topRepos, languageStats;
  try {
    const [userData, repoData] = await Promise.all([
      fetchUser(username),
      fetchRepos(username),
    ]);
    user = userData;
    topRepos = getTopRepos(repoData);
    languageStats = getLanguageStats(topRepos);
  } catch (err: any) {
    if (err.message === 'User not found') notFound();
    throw err;
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <HeroSection user={user} />
      <ProjectsGrid repos={topRepos} />
      <LanguageBar stats={languageStats} />
      <div className="flex gap-6 items-start mb-10">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-20 h-20 rounded-full border"
        />
        <div>
          <h1 className="text-2xl font-semibold">
            {user.name ?? user.login}
          </h1>
          <p className="text-gray-500 mt-1">{user.bio}</p>
          <div className="flex gap-4 mt-2 text-sm text-gray-400">
            <span>📦 {user.public_repos} repos</span>
            <span>👥 {user.followers} followers</span>
            {user.location && <span>📍 {user.location}</span>}
          </div>
        </div>
      </div>

      <h2 className="text-lg font-medium mb-4">Top Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topRepos.map(repo => (
          <div key={repo.id}
            className="border rounded-lg p-4 hover:border-gray-400 transition">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{repo.name}</h3>
              <span className="text-sm text-gray-400">
                ⭐ {repo.stargazers_count}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {repo.description ?? 'No description'}
            </p>
            {repo.language && (
              <span className="text-xs text-gray-400 mt-2 block">
                {repo.language}
              </span>
            )}
            <a
            href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-500 mt-2 block hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>

    </main>
  );
}