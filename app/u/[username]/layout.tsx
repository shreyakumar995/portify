import { HomeThemeProvider } from "@/components/home/ThemeProvider";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomeThemeProvider>{children}</HomeThemeProvider>;
}
