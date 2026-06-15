"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

export type HomeTheme = "dark" | "light" | "aurora";

const STORAGE_KEY = "portify-home-theme";
const THEMES: HomeTheme[] = ["dark", "light", "aurora"];
const DEFAULT_THEME: HomeTheme = "dark";
const THEME_CHANGE_EVENT = "portify-home-theme-change";

type ThemeContextValue = {
  theme: HomeTheme;
  setTheme: (theme: HomeTheme) => void;
  cycleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function isHomeTheme(value: string | null): value is HomeTheme {
  return value !== null && THEMES.includes(value as HomeTheme);
}

function readStoredTheme(): HomeTheme {
  const stored = localStorage.getItem(STORAGE_KEY);
  return isHomeTheme(stored) ? stored : DEFAULT_THEME;
}

function subscribeToTheme(onStoreChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      onStoreChange();
    }
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
  };
}

function writeTheme(theme: HomeTheme) {
  localStorage.setItem(STORAGE_KEY, theme);
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export function HomeThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    readStoredTheme,
    () => DEFAULT_THEME,
  );

  const setTheme = useCallback((next: HomeTheme) => {
    writeTheme(next);
  }, []);

  const cycleTheme = useCallback(() => {
    const current = readStoredTheme();
    const idx = THEMES.indexOf(current);
    const next = THEMES[(idx + 1) % THEMES.length];
    writeTheme(next);
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, cycleTheme }),
    [theme, setTheme, cycleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <div
        className="home-root min-h-screen"
        data-home-theme={theme}
        suppressHydrationWarning
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useHomeTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useHomeTheme must be used within HomeThemeProvider");
  return ctx;
}
