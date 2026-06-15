"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
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
import { scrollToSection } from "@/components/home/layout";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const usernameInputRef = useRef<HTMLInputElement>(null);
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
    scrollToSection("showcase");
  }, []);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      const target = event.target;
      const isEditable =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        (target instanceof HTMLElement && target.isContentEditable);

      if (event.key === "/" && !isEditable && !event.ctrlKey && !event.metaKey && !event.altKey) {
        event.preventDefault();
        usernameInputRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <HomeThemeProvider>
      <Navbar />
      <main>
        <HomeHero
          inputRef={usernameInputRef}
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
