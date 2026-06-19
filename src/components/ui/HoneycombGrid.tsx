"use client";

import Link from "next/link";
import { useState } from "react";
import { Clock, Bookmark } from "lucide-react";

export interface HexItem {
  id: string;
  title: string;
  category: string;
  emoji: string;
  href: string;
  buzzTime?: string;
  image?: string;
  bgColor?: string;
}

// Correct proportions for a REGULAR pointy-top hexagon:
// clip-path polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)
// For regular hex: height = width * (2/√3) ≈ width * 1.1547
const CELL_W = 188;
const CELL_H = Math.round(CELL_W * 1.1547); // 217px
const GROUT = 6; // gap between cells

// Absolute positioning math — no flex gap artifacts
const cellX = (row: number, col: number): number =>
  col * (CELL_W + GROUT) + (row % 2 === 1 ? CELL_W / 2 + GROUT / 2 : 0);

const cellY = (row: number): number =>
  Math.round(row * (CELL_H * 0.75 + GROUT));

const gridW = (perRow: number): number =>
  perRow * (CELL_W + GROUT) - GROUT + Math.round(CELL_W / 2) + GROUT;

const gridH = (rows: number): number =>
  (rows - 1) * Math.round(CELL_H * 0.75 + GROUT) + CELL_H;

interface HoneycombGridProps {
  items: HexItem[];
  perRow?: number;
  showBookmark?: boolean;
  onDark?: boolean;
}

export function HoneycombGrid({
  items,
  perRow = 4,
  showBookmark = false,
  onDark = false,
}: HoneycombGridProps) {
  const rowCount = Math.ceil(items.length / perRow);
  const W = gridW(perRow);
  const H = gridH(rowCount);

  return (
    <>
      {/* ── Desktop: proper tessellated honeycomb ── */}
      <div className="hidden sm:flex justify-center overflow-hidden w-full">
        <div className="relative" style={{ width: W, height: H }}>
          {items.map((item, idx) => {
            const row = Math.floor(idx / perRow);
            const col = idx % perRow;
            return (
              <div
                key={item.id}
                className="absolute"
                style={{
                  left: cellX(row, col),
                  top: cellY(row),
                  width: CELL_W,
                  height: CELL_H,
                }}
              >
                <HexCell
                  item={item}
                  showBookmark={showBookmark}
                  onDark={onDark}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Mobile: clean card grid ── */}
      <div className="sm:hidden grid grid-cols-2 gap-3">
        {items.map((item) => (
          <MobileCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

// ── Individual hex cell ──────────────────────────────────────────────────────

function HexCell({
  item,
  showBookmark,
  onDark,
}: {
  item: HexItem;
  showBookmark: boolean;
  onDark: boolean;
}) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="relative w-full h-full group">
      <Link href={item.href} className="block w-full h-full">
        {/* Hex container */}
        <div
          className="hex w-full h-full relative overflow-hidden"
          style={{ background: item.bgColor ?? "#fef3c7" }}
        >
          {/* Background layer */}
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.08]">
            {item.image ? (
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="select-none transition-transform duration-300 group-hover:scale-110"
                  style={{ fontSize: `${CELL_W * 0.28}px`, lineHeight: 1 }}
                >
                  {item.emoji}
                </span>
              </div>
            )}
          </div>

          {/* Honey-fill overlay — slides up from bottom on hover */}
          <div
            className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full transition-all duration-500 ease-out"
            style={{
              background:
                "linear-gradient(to top, #92400e 0%, #b45309 30%, #d97706 65%, #f59e0b 100%)",
              opacity: 0.92,
            }}
          />

          {/* Category + title revealed on hover */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 text-center z-10">
            <span
              className="font-black uppercase tracking-[0.12em] text-honey-200 mb-1"
              style={{ fontSize: 9 }}
            >
              {item.category}
            </span>
            <h3
              className="text-white font-black leading-snug line-clamp-3"
              style={{ fontSize: Math.round(CELL_W * 0.072) }}
            >
              {item.title}
            </h3>
            {item.buzzTime && (
              <div className="flex items-center gap-1 mt-2 text-amber-200">
                <Clock size={9} />
                <span className="text-[9px] font-semibold">{item.buzzTime} buzz</span>
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* Bookmark */}
      {showBookmark && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setSaved(!saved);
          }}
          className="absolute z-20 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md hover:scale-110 active:scale-95"
          style={{ top: Math.round(CELL_H * 0.22), right: Math.round(CELL_W * 0.08) }}
          aria-label={saved ? "Unsave" : "Save to My Hive"}
        >
          <Bookmark
            size={13}
            className={
              saved
                ? "fill-honey-600 text-honey-600"
                : "text-charcoal-500"
            }
          />
        </button>
      )}
    </div>
  );
}

// ── Mobile fallback card ────────────────────────────────────────────────────

function MobileCard({ item }: { item: HexItem }) {
  return (
    <Link href={item.href} className="block group">
      <div
        className="rounded-2xl overflow-hidden aspect-square relative"
        style={{ background: item.bgColor ?? "#fef3c7" }}
      >
        {item.image ? (
          <img
            src={item.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            {item.emoji}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-honey-900/80 via-honey-700/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-[9px] font-black text-honey-300 uppercase tracking-widest">
            {item.category}
          </p>
          <h3 className="text-white font-bold text-xs leading-tight line-clamp-2">
            {item.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
