"use client";

import { useState } from "react";
import { defaultNutrients, type NutrientGoal } from "~/data/nutrients";

const CELL = 140;
const GAP = 6;
const V_OVERLAP = Math.round(CELL * 0.26);
const ROW_SHIFT = Math.round((CELL + GAP) / 2);

export function NutrientTracker() {
  const [nutrients, setNutrients] = useState<NutrientGoal[]>(defaultNutrients);
  const [selected, setSelected] = useState<NutrientGoal | null>(null);

  const addProgress = (id: string, delta: number) => {
    setNutrients((prev) =>
      prev.map((n) =>
        n.id === id
          ? { ...n, current: Math.min(n.target, Math.max(0, n.current + delta)) }
          : n,
      ),
    );
  };

  const rows: NutrientGoal[][] = [];
  const perRow = 4;
  for (let i = 0; i < nutrients.length; i += perRow) {
    rows.push(nutrients.slice(i, i + perRow));
  }

  const totalPct =
    nutrients.reduce((acc, n) => acc + Math.min(n.current / n.target, 1), 0) /
    nutrients.length;

  return (
    <div className="space-y-6">
      {/* Daily score */}
      <div className="bg-honey-50 border border-honey-200 rounded-2xl p-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-charcoal-500 uppercase tracking-widest">
            Today&apos;s Hive Score
          </p>
          <p className="text-3xl font-black text-honey-600">
            {Math.round(totalPct * 100)}
            <span className="text-lg font-semibold text-charcoal-400">%</span>
          </p>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 hex transition-colors duration-300 ${
                i < Math.ceil(totalPct * 5) ? "bg-honey-500" : "bg-honey-100"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hex tracker grid */}
      <div className="hidden sm:block overflow-hidden">
        <div className="flex flex-col" style={{ gap: `${GAP}px` }}>
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex shrink-0"
              style={{
                gap: `${GAP}px`,
                marginLeft: rowIdx % 2 === 1 ? `${ROW_SHIFT}px` : 0,
                marginTop: rowIdx > 0 ? `-${V_OVERLAP - 2}px` : 0,
              }}
            >
              {row.map((nutrient) => (
                <TrackerCell
                  key={nutrient.id}
                  nutrient={nutrient}
                  onSelect={() => setSelected(selected?.id === nutrient.id ? null : nutrient)}
                  isSelected={selected?.id === nutrient.id}
                  onAdd={() => addProgress(nutrient.id, nutrient.target * 0.1)}
                  onRemove={() => addProgress(nutrient.id, -(nutrient.target * 0.1))}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile list */}
      <div className="sm:hidden space-y-3">
        {nutrients.map((n) => {
          const pct = Math.min((n.current / n.target) * 100, 100);
          return (
            <div key={n.id} className="bg-white rounded-2xl p-4 border border-honey-100">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-charcoal-800">
                  {n.emoji} {n.name}
                </span>
                <span className="text-sm text-charcoal-500">
                  {n.current}/{n.target} {n.unit}
                </span>
              </div>
              <div className="h-2.5 bg-honey-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, background: n.color }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Tip panel when cell selected */}
      {selected && (
        <div className="bg-white border border-honey-200 rounded-2xl p-4 shadow-sm">
          <p className="text-xs font-bold text-honey-600 uppercase tracking-widest mb-1">
            {selected.emoji} {selected.name} tip
          </p>
          <p className="text-sm text-charcoal-700">{selected.tip}</p>
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => addProgress(selected.id, selected.target * 0.1)}
              className="flex-1 bg-honey-500 hover:bg-honey-600 text-white font-semibold rounded-xl py-2 text-sm transition-colors"
            >
              + Log serving
            </button>
            <button
              onClick={() => addProgress(selected.id, -(selected.target * 0.1))}
              className="px-4 bg-honey-100 hover:bg-honey-200 text-honey-700 font-semibold rounded-xl py-2 text-sm transition-colors"
            >
              −
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function TrackerCell({
  nutrient,
  onSelect,
  isSelected,
  onAdd,
  onRemove,
}: {
  nutrient: NutrientGoal;
  onSelect: () => void;
  isSelected: boolean;
  onAdd: () => void;
  onRemove: () => void;
}) {
  const pct = Math.min(nutrient.current / nutrient.target, 1);
  const isComplete = pct >= 1;

  return (
    <button
      onClick={onSelect}
      className="relative shrink-0 group focus:outline-none"
      style={{ width: `${CELL}px`, height: `${CELL}px` }}
      aria-label={`${nutrient.name}: ${Math.round(pct * 100)}% of daily goal`}
    >
      <div
        className={`hex w-full h-full relative overflow-hidden transition-all duration-200 ${
          isSelected ? "scale-105 shadow-lg" : "hover:scale-103"
        }`}
        style={{ background: "#fef3c7" }}
      >
        {/* Fill bar from bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 transition-all duration-700"
          style={{
            height: `${pct * 100}%`,
            background: isComplete
              ? `linear-gradient(to top, ${nutrient.color}, ${nutrient.color}88)`
              : `linear-gradient(to top, ${nutrient.color}99, ${nutrient.color}44)`,
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 z-10">
          <span className="text-2xl">{nutrient.emoji}</span>
          <span className="text-[11px] font-bold text-charcoal-800 leading-none">
            {nutrient.name}
          </span>
          <span className="text-[10px] text-charcoal-600 leading-none">
            {Math.round(pct * 100)}%
          </span>
        </div>

        {/* Complete ring */}
        {isComplete && (
          <div className="absolute inset-0 hex border-2 border-honey-500 opacity-60" />
        )}
      </div>
    </button>
  );
}
