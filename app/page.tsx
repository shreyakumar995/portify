"use client";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { HomeThemeProvider } from "@/components/home/ThemeProvider";
import Navbar from "@/components/home/Navbar";
import HomeHero from "@/components/home/HomeHero";
import TechStackStrip from "@/components/home/TechStackStrip";
import TrustBar from "@/components/home/TrustBar";
import HowItWorks from "@/components/home/HowItWorks";
import BeforeAfter from "@/components/home/BeforeAfter";
import SocialProof from "@/components/home/SocialProof";
import PortfolioShowcase from "@/components/home/PortfolioShowcase";
import FeatureGrid from "@/components/home/FeatureGrid";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/home/Footer";

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
    <HomeThemeProvider>
      <Navbar />
      <main>
        <HomeHero
          username={username}
          loading={loading}
          onUsernameChange={setUsername}
          onSubmit={handleSubmit}
          onExampleClick={handleExampleClick}
          onViewExamples={handleViewExamples}
        />
        <TechStackStrip />
        <TrustBar />
        <HowItWorks />
        <BeforeAfter />
        <SocialProof />
        <PortfolioShowcase />
        <FeatureGrid />
        <FinalCTA
          username={username}
          loading={loading}
          onUsernameChange={setUsername}
          onSubmit={handleSubmit}
        />
        <Footer />
      </main>
    </HomeThemeProvider>
  );
}
