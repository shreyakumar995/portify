// lib/themes.ts

export type ThemeName = "minimal" | "dark" | "gradient";

export interface Theme {
  name: ThemeName;
  label: string;
  // Tailwind classes applied to the page wrapper
  page: string;
  // Card styles
  card: string;
  // Heading text colour
  heading: string;
  // Body text colour
  body: string;
  // Border colour
  border: string;
  // Badge/tag styles
  badge: string;
}

export const THEMES: Record<ThemeName, Theme> = {
  minimal: {
    name: "minimal",
    label: "Minimal",
    page:    "bg-white text-gray-900",
    card:    "bg-white border border-gray-200 hover:border-gray-400",
    heading: "text-gray-900",
    body:    "text-gray-500",
    border:  "border-gray-200",
    badge:   "bg-blue-50 text-blue-600",
  },

  dark: {
    name: "dark",
    label: "Dark",
    page:    "bg-gray-950 text-gray-100",
    card:    "bg-gray-900 border border-gray-700 hover:border-gray-500",
    heading: "text-white",
    body:    "text-gray-400",
    border:  "border-gray-700",
    badge:   "bg-gray-800 text-gray-300",
  },

  gradient: {
    name: "gradient",
    label: "Gradient",
    page:    "bg-gradient-to-br from-violet-50 via-white to-pink-50 text-gray-900",
    card:    "bg-white/70 backdrop-blur border border-violet-100 hover:border-violet-300",
    heading: "text-violet-900",
    body:    "text-gray-500",
    border:  "border-violet-100",
    badge:   "bg-violet-50 text-violet-600",
  },
};