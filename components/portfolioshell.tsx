'use client';

import { useState } from "react";
import { GithubUser, GithubRepo } from "@/types/github";
import { LanguageStat } from "@/lib/github";
import { ThemeName, THEMES } from "@/lib/themes";
import HeroSection from "@/components/HeroSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import LanguageBar from "@/components/LanguageBar";
import ThemeSwitcher from "@/components/themeswitcher";

type Props = {
  user: GithubUser;
  topRepos: GithubRepo[];
  languageStats: LanguageStat[];
};

export default function PortfolioShell({ user, topRepos, languageStats }: Props) {
  const [theme, setTheme] = useState<ThemeName>("minimal");
  const t = THEMES[theme];
  function handleDownloadPDF() {
    window.print();
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${t.page}`}>
      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Theme switcher — top right */}
        <div className="flex justify-end mb-8 no-print">
          <ThemeSwitcher current={theme} onChange={setTheme} />
          <button
          onClick={handleDownloadPDF}
          className="text-xs px-3 py-1.5 rounded-full border
               border-gray-200 hover:border-gray-400
               text-gray-500 hover:text-black transition"
          >
          Download PDF ↓
          
        </button>
        </div>

        <HeroSection user={user} theme={t} />
        <LanguageBar stats={languageStats} theme={t} />
        <ProjectsGrid repos={topRepos} theme={t} />

      </main>
    </div>
  );
}