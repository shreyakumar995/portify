'use client';

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import HomeHero from "@/components/home/HomeHero";
import TrustBar from "@/components/home/TrustBar";
import HowItWorks from "@/components/home/HowItWorks";
import PortfolioShowcase from "@/components/home/PortfolioShowcase";
import FeatureGrid from "@/components/home/FeatureGrid";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = username.trim();
    if (!trimmed || loading) return;
    setLoading(true);
    router.push(`/u/${trimmed}`);
  }

  function handleExampleClick(name: string) {
    setUsername(name);
    setLoading(true);
    router.push(`/u/${name}`);
  }

  const handleViewExamples = useCallback(() => {
    document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      <HomeHero
        username={username}
        loading={loading}
        onUsernameChange={setUsername}
        onSubmit={handleSubmit}
        onExampleClick={handleExampleClick}
        onViewExamples={handleViewExamples}
      />
      <TrustBar />
      <HowItWorks />
      <PortfolioShowcase />
      <FeatureGrid />
    </main>
  );
}
