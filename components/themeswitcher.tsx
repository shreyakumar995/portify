'use client';

import { ThemeName, THEMES } from "@/lib/themes";

type Props = {
  current: ThemeName;
  onChange: (theme: ThemeName) => void;
};

export default function ThemeSwitcher({ current, onChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400 mr-1">Theme:</span>
      {(Object.keys(THEMES) as ThemeName[]).map(name => (
        <button
          key={name}
          onClick={() => onChange(name)}
          className={`
            text-xs px-3 py-1.5 rounded-full border transition-all
            ${current === name
              ? "bg-black text-white border-black"
              : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
            }
          `}
        >
          {THEMES[name].label}
        </button>
      ))}
    </div>
  );
}