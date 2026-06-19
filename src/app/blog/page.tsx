"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { HoneycombGrid, type HexItem } from "~/components/ui/HoneycombGrid";
import { PollenTip } from "~/components/ui/PollenTip";
import { NewsletterSignup } from "~/components/ui/NewsletterSignup";
import { posts, categories, pollenOfTheWeek } from "~/data/posts";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const hexItems: HexItem[] = filtered.map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    emoji: p.emoji,
    href: `/blog/${p.slug}`,
    buzzTime: p.buzzTime,
    image: p.image,
  }));

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-charcoal-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V17L28 0l28 17v33L28 66z' fill='none' stroke='%23f59e0b' stroke-width='1.5'/%3E%3Cpath d='M28 100L0 83V50l28-17 28 17v33L28 100z' fill='none' stroke='%23f59e0b' stroke-width='1.5'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-black text-honey-500 uppercase tracking-[0.25em] mb-4">
              Evidence-based nutrition
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              The Hive
              <span className="ml-3">🍯</span>
            </h1>
            <p className="text-charcoal-300 text-lg max-w-lg">
              Articles written for real people, not textbooks. Practical, peer-reviewed, and actually enjoyable to read.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pollen of the Week ── */}
      <section className="bg-honey-500 border-b border-honey-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-12 h-12 hex bg-honey-600 flex items-center justify-center text-2xl">
                {pollenOfTheWeek.emoji}
              </div>
              <div>
                <p className="text-[9px] font-black text-honey-800 uppercase tracking-widest">🌼 Pollen of the Week</p>
                <h3 className="text-lg font-black text-charcoal-900">{pollenOfTheWeek.name}</h3>
              </div>
            </div>
            <p className="text-sm text-honey-900 leading-relaxed flex-1">{pollenOfTheWeek.fact}</p>
            <div className="bg-charcoal-900 rounded-2xl px-4 py-3 text-center shrink-0">
              <p className="text-[9px] font-bold text-honey-500 uppercase tracking-widest">Golden Score</p>
              <p className="text-2xl font-black text-white">{pollenOfTheWeek.goldenScore}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Daily tip ── */}
      <section className="bg-cream border-b border-honey-100 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <PollenTip />
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="bg-white border-b border-charcoal-100 py-5 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {/* Search */}
          <div className="relative shrink-0">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-400" />
            <input
              type="search"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-charcoal-50 border border-charcoal-200 rounded-xl pl-9 pr-4 py-2 text-sm text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-honey-300 w-52"
            />
          </div>

          <div className="flex flex-wrap gap-2 flex-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 ${
                  activeCategory === cat
                    ? "bg-charcoal-900 text-white"
                    : "bg-charcoal-50 text-charcoal-500 hover:bg-charcoal-100 hover:text-charcoal-800 border border-charcoal-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-xs text-charcoal-400 shrink-0 font-medium">
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* ── Honeycomb grid — dark bg ── */}
      <section className="bg-charcoal-900 py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {hexItems.length > 0 ? (
            <HoneycombGrid items={hexItems} perRow={4} showBookmark onDark />
          ) : (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">🐝</div>
              <p className="text-charcoal-300 font-semibold text-lg">No articles match your search.</p>
              <button
                onClick={() => { setActiveCategory("All"); setSearch(""); }}
                className="mt-5 text-honey-400 hover:text-honey-300 font-bold text-sm transition-colors"
              >
                Clear filters →
              </button>
            </div>
          )}
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
