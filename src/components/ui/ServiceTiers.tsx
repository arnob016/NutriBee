import Link from "next/link";
import { Check, Zap } from "lucide-react";
import { serviceTiers } from "~/data/services";

export function ServiceTiers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
      {serviceTiers.map((tier, i) => (
        <TierCard key={tier.id} tier={tier} index={i} />
      ))}
    </div>
  );
}

function TierCard({
  tier,
  index,
}: {
  tier: (typeof import("~/data/services").serviceTiers)[number];
  index: number;
}) {
  const isHighlight = tier.highlight;
  const isDark = index === 2; // Queen tier

  return (
    <div
      className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
        isDark
          ? "bg-charcoal-900 shadow-xl shadow-charcoal-900/30"
          : isHighlight
          ? "bg-honey-500 shadow-xl shadow-honey-500/25"
          : "bg-white border border-charcoal-100 shadow-md"
      }`}
    >
      {/* Popular tag */}
      {isHighlight && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-charcoal-900 text-honey-400 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
          <Zap size={10} />
          Popular
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        {/* Icon + name */}
        <div className="flex items-center gap-3.5 mb-5">
          <div
            className={`w-12 h-12 hex flex items-center justify-center text-2xl ${
              isDark
                ? "bg-charcoal-800"
                : isHighlight
                ? "bg-honey-600"
                : "bg-honey-100"
            }`}
          >
            {tier.emoji}
          </div>
          <div>
            <h3
              className={`text-lg font-black leading-none mb-0.5 ${
                isDark
                  ? "text-white"
                  : isHighlight
                  ? "text-charcoal-900"
                  : "text-charcoal-900"
              }`}
            >
              {tier.name}
            </h3>
            <p
              className={`text-xs font-semibold ${
                isDark
                  ? "text-charcoal-400"
                  : isHighlight
                  ? "text-honey-800"
                  : "text-honey-600"
              }`}
            >
              {tier.subtitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed mb-6 ${
            isDark
              ? "text-charcoal-300"
              : isHighlight
              ? "text-honey-900/80"
              : "text-charcoal-500"
          }`}
        >
          {tier.description}
        </p>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-end gap-1.5">
            <span
              className={`text-4xl font-black ${
                isDark ? "text-white" : isHighlight ? "text-charcoal-900" : "text-charcoal-900"
              }`}
            >
              {tier.price}
            </span>
            <span
              className={`text-sm pb-1.5 font-medium ${
                isDark ? "text-charcoal-400" : isHighlight ? "text-honey-800" : "text-charcoal-400"
              }`}
            >
              {tier.priceNote}
            </span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2.5 mb-7 flex-1">
          {tier.features.map((feat, j) => (
            <li key={j} className="flex items-start gap-2.5">
              <div
                className={`w-4 h-4 hex flex items-center justify-center shrink-0 mt-0.5 ${
                  isDark
                    ? "bg-honey-500"
                    : isHighlight
                    ? "bg-charcoal-900"
                    : "bg-honey-400"
                }`}
              >
                <Check
                  size={8}
                  strokeWidth={3}
                  className={isDark ? "text-charcoal-900" : "text-white"}
                />
              </div>
              <span
                className={`text-sm ${
                  isDark ? "text-charcoal-300" : isHighlight ? "text-honey-900" : "text-charcoal-600"
                }`}
              >
                {feat}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/services"
          className={`block text-center font-black text-sm rounded-2xl px-6 py-3.5 transition-all duration-200 ${
            isDark
              ? "bg-honey-500 hover:bg-honey-400 text-charcoal-900 shadow-lg shadow-honey-500/25 hover:-translate-y-0.5"
              : isHighlight
              ? "bg-charcoal-900 hover:bg-charcoal-800 text-white shadow-lg"
              : "bg-charcoal-100 hover:bg-charcoal-200 text-charcoal-800"
          }`}
        >
          {tier.ctaText}
        </Link>
      </div>
    </div>
  );
}
