"use client";

import QrCodeCard from "@/components/QrCodeCard";

export default function QrCodeFeatureVisual() {
  return (
    <div
      className="h-full min-h-[150px] rounded-xl border border-[var(--home-border)] bg-[var(--home-bg)] p-3 sm:p-4 flex items-center"
      aria-hidden
    >
      <QrCodeCard username="developer" compact />
    </div>
  );
}
