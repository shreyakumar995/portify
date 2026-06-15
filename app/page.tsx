import dynamic from "next/dynamic";
import { HomeThemeProvider } from "@/components/home/ThemeProvider";
import { HomeInteractionsProvider } from "@/components/home/HomeInteractions";
import Navbar from "@/components/home/Navbar";
import HomeHero from "@/components/home/HomeHero";
import TechStackStrip from "@/components/home/TechStackStrip";
import TrustBar from "@/components/home/TrustBar";
import Footer from "@/components/home/Footer";

const HowItWorks = dynamic(() => import("@/components/home/HowItWorks"));
const BeforeAfter = dynamic(() => import("@/components/home/BeforeAfter"));
const SocialProof = dynamic(() => import("@/components/home/SocialProof"));
const PortfolioShowcase = dynamic(() => import("@/components/home/PortfolioShowcase"));
const FeatureGrid = dynamic(() => import("@/components/home/FeatureGrid"));
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA"));

export default function HomePage() {
  return (
    <HomeThemeProvider>
      <HomeInteractionsProvider>
        <Navbar />
        <main>
          <HomeHero />
          <TechStackStrip />
          <TrustBar />
          <HowItWorks />
          <BeforeAfter />
          <SocialProof />
          <PortfolioShowcase />
          <FeatureGrid />
          <FinalCTA />
          <Footer />
        </main>
      </HomeInteractionsProvider>
    </HomeThemeProvider>
  );
}
