import Link from "next/link";
import { ArrowRight, Calendar, ChevronRight, ShieldCheck, Users, BookOpen } from "lucide-react";
import { BeeMascot } from "~/components/ui/BeeMascot";
import { HoneycombGrid, type HexItem } from "~/components/ui/HoneycombGrid";
import { PollenTip } from "~/components/ui/PollenTip";
import { NewsletterSignup } from "~/components/ui/NewsletterSignup";
import { ServiceTiers } from "~/components/ui/ServiceTiers";
import { TestimonialGrid } from "~/components/ui/TestimonialGrid";
import { NutritionQuiz } from "~/components/ui/NutritionQuiz";
import { posts } from "~/data/posts";

const featuredItems: HexItem[] = posts.slice(0, 8).map((p) => ({
  id: p.id,
  title: p.title,
  category: p.category,
  emoji: p.emoji,
  href: `/blog/${p.slug}`,
  buzzTime: p.buzzTime,
  image: p.image,
}));

const stats = [
  { value: "500+", label: "Clients worldwide" },
  { value: "10+", label: "Years in practice" },
  { value: "80k+", label: "Monthly readers" },
  { value: "100%", label: "Evidence-based" },
];

const steps = [
  { n: "01", emoji: "📖", title: "Learn", body: "Evidence-based articles in plain English — no jargon, no fear-mongering." },
  { n: "02", emoji: "🗓️", title: "Plan", body: "Personalised meal plans, downloadable templates, and grocery lists on auto-pilot." },
  { n: "03", emoji: "🌟", title: "Thrive", body: "Track your habits, keep your hive buzzing, and book expert support whenever you need it." },
];

export default function HomePage() {
  return (
    <>
      {/* ════════════════ HERO — dark, dramatic ════════════════ */}
      <section className="relative bg-charcoal-900 overflow-hidden">
        {/* Background hex decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.06]">
            {Array.from({ length: 30 }).map((_, i) => {
              const col = i % 5;
              const row = Math.floor(i / 5);
              return (
                <div
                  key={i}
                  className="hex absolute bg-honey-400"
                  style={{
                    width: 120,
                    height: 139,
                    left: col * 126 + (row % 2 === 1 ? 63 : 0),
                    top: row * 105,
                  }}
                />
              );
            })}
          </div>
          <div className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-honey-500/10 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 w-48 h-48 rounded-full bg-amber-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-honey-500/10 border border-honey-500/25 text-honey-400 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-7">
                <ShieldCheck size={13} />
                HCPC Registered Dietitian
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] mb-6 tracking-tight">
                Small habits,{" "}
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b 0%, #fb923c 60%, #f59e0b 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  sweet results.
                </span>
              </h1>

              <p className="text-charcoal-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
                Practical, evidence-based nutrition coaching from a registered dietitian who believes food should be joyful — not stressful.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 bg-honey-500 hover:bg-honey-400 text-charcoal-900 font-black rounded-2xl px-7 py-4 text-sm transition-all duration-200 shadow-lg shadow-honey-500/25 hover:shadow-honey-400/40 hover:-translate-y-0.5"
                >
                  <Calendar size={17} />
                  Book a Free Call
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2.5 border border-charcoal-600 hover:border-honey-500 text-charcoal-200 hover:text-honey-400 font-bold rounded-2xl px-7 py-4 text-sm transition-all duration-200"
                >
                  <BookOpen size={17} />
                  Read the Blog
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Credential chips */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <ShieldCheck size={13} />, text: "HCPC Registered" },
                  { icon: <Users size={13} />, text: "500+ Clients" },
                  { icon: <BookOpen size={13} />, text: "10 Years Experience" },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-1.5 text-xs font-semibold text-charcoal-400 bg-charcoal-800/60 px-3 py-1.5 rounded-full border border-charcoal-700">
                    <span className="text-honey-500">{c.icon}</span>
                    {c.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — bee + floating cards */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative">
                {/* Glow behind bee */}
                <div className="absolute inset-0 rounded-full bg-honey-500/15 blur-2xl scale-150" />

                <div className="bee-float relative z-10">
                  <BeeMascot size={260} mood="waving" />
                </div>

                {/* Floating stat cards */}
                <div className="absolute -right-4 sm:-right-10 top-6 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-honey-100 z-20 min-w-[140px]">
                  <p className="text-xs text-charcoal-400 font-medium">Happy clients</p>
                  <p className="text-2xl font-black text-charcoal-900">🍯 500+</p>
                </div>

                <div className="absolute -left-4 sm:-left-8 bottom-16 bg-honey-500 rounded-2xl px-4 py-3 shadow-2xl z-20">
                  <p className="text-xs text-honey-100 font-medium">Free to start</p>
                  <p className="text-sm font-black text-white">Discovery call ✨</p>
                </div>

                <div className="absolute right-0 bottom-4 bg-charcoal-800 border border-charcoal-700 rounded-2xl px-3 py-2.5 shadow-xl z-20">
                  <p className="text-[10px] text-charcoal-400 font-medium uppercase tracking-wider">Evidence-based</p>
                  <p className="text-xs font-black text-honey-400">🔬 Peer-reviewed only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ STATS BAR ════════════════ */}
      <section className="bg-honey-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-black text-charcoal-900">{s.value}</p>
                <p className="text-xs font-semibold text-honey-800 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ HOW IT WORKS ════════════════ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-black text-honey-600 uppercase tracking-[0.25em] mb-3">The process</p>
            <h2 className="text-3xl sm:text-4xl font-black text-charcoal-900 mb-4">How the Hive Works</h2>
            <p className="text-charcoal-500 text-lg max-w-md mx-auto">Three steps from curious to confident.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <div key={step.n} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-10 z-10 w-8 h-8 items-center justify-center text-honey-300">
                    <ChevronRight size={28} strokeWidth={1.5} />
                  </div>
                )}
                <div className="h-full bg-honey-50 border border-honey-100 rounded-3xl p-8 hover:border-honey-300 hover:shadow-lg hover:shadow-honey-100 transition-all duration-200">
                  <div className="w-14 h-14 hex bg-honey-500 flex items-center justify-center text-2xl mx-auto mb-5">
                    {step.emoji}
                  </div>
                  <p className="text-xs font-black text-honey-500 uppercase tracking-[0.2em] text-center mb-2">Step {step.n}</p>
                  <h3 className="text-xl font-black text-charcoal-900 text-center mb-3">{step.title}</h3>
                  <p className="text-charcoal-500 text-sm text-center leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ POLLEN TIP ════════════════ */}
      <section className="bg-honey-50 border-y border-honey-100 py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <PollenTip />
        </div>
      </section>

      {/* ════════════════ HONEYCOMB BLOG GRID — dark bg ════════════════ */}
      <section className="bg-charcoal-900 py-20 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-black text-honey-500 uppercase tracking-[0.25em] mb-3">From the blog</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">The Hive 🍯</h2>
              <p className="text-charcoal-400">Evidence-based nutrition — one article at a time.</p>
            </div>
            <Link
              href="/blog"
              className="flex items-center gap-2 text-honey-400 hover:text-honey-300 font-bold transition-colors shrink-0 text-sm"
            >
              All articles <ArrowRight size={15} />
            </Link>
          </div>

          <HoneycombGrid items={featuredItems} perRow={4} showBookmark onDark />
        </div>
      </section>

      {/* ════════════════ SERVICES ════════════════ */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-black text-honey-600 uppercase tracking-[0.25em] mb-3">Work with me</p>
            <h2 className="text-3xl sm:text-4xl font-black text-charcoal-900 mb-4">Find your hive tier</h2>
            <p className="text-charcoal-500 text-lg max-w-md mx-auto">One-off session, ongoing support, or full coaching — there&apos;s a tier for every stage.</p>
          </div>
          <ServiceTiers />
          <div className="mt-10 text-center">
            <Link
              href="/services#discovery"
              className="inline-flex items-center gap-2 text-sm font-bold text-charcoal-500 hover:text-honey-700 transition-colors"
            >
              <Calendar size={15} />
              Start with a free 20-min discovery call — no commitment
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════ QUIZ ════════════════ */}
      <section className="bg-charcoal-900 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-black text-honey-500 uppercase tracking-[0.25em] mb-4">3-question quiz</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">What&apos;s your nutrition type?</h2>
              <p className="text-charcoal-300 leading-relaxed mb-7 text-lg">
                Three quick questions to find out which approach to nutrition fits your life — and get a personalised recommendation.
              </p>
              <ul className="space-y-3">
                {["Discover your nutrition personality", "Get a tailored starting point", "No email required"].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 hex bg-honey-500 flex items-center justify-center shrink-0">
                      <span className="text-[8px] text-charcoal-900 font-black">✓</span>
                    </div>
                    <span className="text-charcoal-300 text-sm font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <NutritionQuiz />
          </div>
        </div>
      </section>

      {/* ════════════════ TESTIMONIALS ════════════════ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-black text-honey-600 uppercase tracking-[0.25em] mb-3">Results</p>
            <h2 className="text-3xl sm:text-4xl font-black text-charcoal-900 mb-4">Real people, real results 💬</h2>
            <p className="text-charcoal-500 text-lg">Straight from the hive.</p>
          </div>
          <TestimonialGrid />
        </div>
      </section>

      {/* ════════════════ NEWSLETTER ════════════════ */}
      <NewsletterSignup />
    </>
  );
}
