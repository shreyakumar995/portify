"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
  type RefObject,
} from "react";
import { useRouter } from "next/navigation";
import { scrollToSection } from "./layout";

type HomeInteractionsValue = {
  username: string;
  loading: boolean;
  usernameInputRef: RefObject<HTMLInputElement | null>;
  setUsername: (value: string) => void;
  submitUsername: (value: string) => void;
  handleSubmit: (event: FormEvent) => void;
  handleExampleClick: (name: string) => void;
  handleViewExamples: () => void;
};

const HomeInteractionsContext = createContext<HomeInteractionsValue | null>(null);

export function HomeInteractionsProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const submitUsername = useCallback(
    (value: string) => {
      const trimmed = value.trim();
      if (!trimmed || loading) return;
      setLoading(true);
      router.push(`/u/${trimmed}`);
    },
    [loading, router],
  );

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      submitUsername(username);
    },
    [submitUsername, username],
  );

  const handleExampleClick = useCallback(
    (name: string) => {
      setUsername(name);
      submitUsername(name);
    },
    [submitUsername],
  );

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

  const value = useMemo(
    () => ({
      username,
      loading,
      usernameInputRef,
      setUsername,
      submitUsername,
      handleSubmit,
      handleExampleClick,
      handleViewExamples,
    }),
    [
      username,
      loading,
      submitUsername,
      handleSubmit,
      handleExampleClick,
      handleViewExamples,
    ],
  );

  return (
    <HomeInteractionsContext.Provider value={value}>
      {children}
    </HomeInteractionsContext.Provider>
  );
}

export function useHomeInteractions() {
  const context = useContext(HomeInteractionsContext);
  if (!context) {
    throw new Error("useHomeInteractions must be used within HomeInteractionsProvider");
  }
  return context;
}
