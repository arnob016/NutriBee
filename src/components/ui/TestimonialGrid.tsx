import { Star } from "lucide-react";
import { testimonials } from "~/data/testimonials";

export function TestimonialGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {testimonials.map((t) => (
        <div
          key={t.id}
          className="bg-white border border-honey-100 rounded-3xl p-6 relative hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          {/* Hex accent */}
          <div className="w-10 h-10 hex bg-honey-100 flex items-center justify-center text-lg mb-4">
            {t.emoji}
          </div>

          {/* Stars */}
          <div className="flex gap-0.5 mb-3">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={13} className="fill-honey-400 text-honey-400" />
            ))}
          </div>

          <blockquote className="text-charcoal-700 text-sm leading-relaxed mb-4">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-charcoal-900 text-sm">{t.name}</p>
              <p className="text-charcoal-400 text-xs">{t.role}</p>
            </div>
            <span className="text-[10px] bg-honey-50 text-honey-700 font-bold px-2.5 py-1 rounded-full border border-honey-200">
              {t.tier}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
