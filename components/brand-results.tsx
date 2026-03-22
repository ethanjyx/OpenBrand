"use client";

import { useState } from "react";
import type { BrandExtractionResult } from "@/src/types";
import { ColorPalette } from "./color-palette";
import { LogoDisplay } from "./logo-display";
import { BackdropGallery } from "./backdrop-gallery";
import { JsonView } from "./json-view";

export function BrandResults({ data }: { data: BrandExtractionResult }) {
  const [view, setView] = useState<"visual" | "json">("visual");
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {data.brandName ? (
            <h2 className="text-2xl font-semibold text-neutral-900">
              {data.brandName}
            </h2>
          ) : (
            <div />
          )}
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors text-sm"
            title="Share result"
          >
            {copied ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                <span>Share</span>
              </>
            )}
          </button>
        </div>
        <div className="flex rounded-lg border border-neutral-200 overflow-hidden text-sm">
          <button
            onClick={() => setView("visual")}
            className={`px-3 py-1.5 font-medium transition-colors ${
              view === "visual"
                ? "bg-neutral-900 text-white"
                : "bg-white text-neutral-600 hover:bg-neutral-50"
            }`}
          >
            Visual
          </button>
          <button
            onClick={() => setView("json")}
            className={`px-3 py-1.5 font-medium transition-colors ${
              view === "json"
                ? "bg-neutral-900 text-white"
                : "bg-white text-neutral-600 hover:bg-neutral-50"
            }`}
          >
            JSON
          </button>
        </div>
      </div>

      {view === "visual" ? (
        <>
          <LogoDisplay logos={data.logos} />
          <ColorPalette colors={data.colors} />
          <BackdropGallery backdrops={data.backdrops} />
        </>
      ) : (
        <JsonView data={data} />
      )}
    </div>
  );
}
