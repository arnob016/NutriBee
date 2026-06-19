"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { pollenTips } from "~/data/nutrients";
import { BeeMascot } from "./BeeMascot";

export function PollenTip() {
  const [idx, setIdx] = useState(0);
  const tip = pollenTips[idx % pollenTips.length]!;

  return (
    <div className="relative bg-honey-50 border border-honey-200 rounded-3xl p-6 pr-8 flex items-start gap-4 max-w-2xl">
      {/* Bee peeking */}
      <div className="shrink-0 bee-float">
        <BeeMascot size={56} mood="happy" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold text-honey-700 uppercase tracking-widest">
            🌼 Pollen tip of the day
          </span>
        </div>
        <p className="text-sm font-semibold text-charcoal-800 leading-relaxed">
          <span className="text-honey-600">{tip.emoji} {tip.nutrient}:</span>{" "}
          {tip.tip}
        </p>
      </div>

      <button
        onClick={() => setIdx((i) => i + 1)}
        className="absolute top-4 right-4 text-honey-400 hover:text-honey-600 transition-colors"
        aria-label="Next tip"
      >
        <RefreshCw size={16} />
      </button>
    </div>
  );
}
