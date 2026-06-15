"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["hero", "how-it-works", "showcase", "features"] as const;
export type ActiveSection = (typeof SECTION_IDS)[number] | null;

export function useActiveSection() {
  const [active, setActive] = useState<ActiveSection>("hero");

  useEffect(() => {
    const elements = SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id as ActiveSection);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.15, 0.4, 0.6] },
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}
