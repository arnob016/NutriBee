"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, Clock, Users, ShoppingCart } from "lucide-react";
import { recipes, recipeCategories } from "~/data/recipes";
import { NewsletterSignup } from "~/components/ui/NewsletterSignup";

function GoldenScore({ score }: { score: number }) {
  const filled = Math.round(score / 2);
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < filled ? "fill-honey-500 text-honey-500" : "fill-charcoal-100 text-charcoal-100"}
          />
        ))}
      </div>
      <span className="text-xs font-black text-honey-600">{score}/10</span>
    </div>
  );
}

export default function RecipesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = recipes.filter(
    (r) => activeCategory === "All" || r.category === activeCategory,
  );

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-charcoal-900 relative overflow-hidden py-16 sm:py-20">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V17L28 0l28 17v33L28 66z' fill='none' stroke='%23f59e0b' stroke-width='1.5'/%3E%3Cpath d='M28 100L0 83V50l28-17 28 17v33L28 100z' fill='none' stroke='%23f59e0b' stroke-width='1.5'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-black text-honey-500 uppercase tracking-[0.25em] mb-4">Nutrient-dense recipes</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              Golden Foods ⭐
            </h1>
            <p className="text-charcoal-300 text-lg">
              Rated by nutrient density, not just calories. Every dish earns its score.
            </p>
          </div>
        </div>
      </section>

      {/* ── Golden Score explainer ── */}
      <section className="bg-honey-500 border-b border-honey-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 hex bg-honey-600 flex items-center justify-center text-white text-lg shrink-0">⭐</div>
          <p className="text-charcoal-900 text-sm leading-relaxed">
            <strong>Golden Score</strong> is a nutrient-density rating out of 10: how much protein, fibre, vitamins, and minerals a recipe delivers per calorie. Higher = more nourishing. This is about fuelling, not restricting.
          </p>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="bg-white border-b border-charcoal-100 py-4 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2">
          {recipeCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-charcoal-900 text-white"
                  : "bg-charcoal-50 border border-charcoal-200 text-charcoal-500 hover:bg-charcoal-100 hover:text-charcoal-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Recipe grid ── */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((recipe) => (
              <Link
                key={recipe.id}
                href={`/recipes/${recipe.slug}`}
                className="bg-white rounded-3xl overflow-hidden border border-charcoal-100 hover:border-honey-300 hover:shadow-xl hover:shadow-honey-100 transition-all duration-300 hover:-translate-y-1.5 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-honey-50">
                  {recipe.image ? (
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl">{recipe.emoji}</div>
                  )}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-charcoal-700 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/50">
                    {recipe.category}
                  </div>
                </div>

                <div className="p-5">
                  <GoldenScore score={recipe.goldenScore} />
                  <h3 className="text-base font-black text-charcoal-900 mt-2 mb-1.5 leading-snug">{recipe.title}</h3>
                  <p className="text-charcoal-400 text-xs leading-relaxed line-clamp-2 mb-4">{recipe.description}</p>

                  <div className="flex items-center gap-4 text-[11px] text-charcoal-400 mb-3">
                    <div className="flex items-center gap-1"><Clock size={11} />{recipe.prepTime}</div>
                    <div className="flex items-center gap-1"><Users size={11} />{recipe.servings} servings</div>
                    <div className="ml-auto flex items-center gap-1 text-honey-600 font-bold">
                      <ShoppingCart size={11} />Grocery list
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-charcoal-50">
                    {recipe.keyNutrients.map((n) => (
                      <span key={n.name} className="text-[10px] bg-honey-50 text-honey-700 font-bold px-2 py-0.5 rounded-full border border-honey-100">
                        {n.name}: {n.amount}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
