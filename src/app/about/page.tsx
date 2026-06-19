import Link from "next/link";
import { ShieldCheck, Award, Calendar, BookOpen } from "lucide-react";
import { BeeMascot } from "~/components/ui/BeeMascot";
import { NewsletterSignup } from "~/components/ui/NewsletterSignup";

const credentials = [
  { icon: "🎓", label: "BSc Nutrition & Dietetics, King's College London" },
  { icon: "🏥", label: "HCPC Registered Dietitian (RD)" },
  { icon: "📜", label: "Member, British Dietetic Association (BDA)" },
  { icon: "🔬", label: "MSc Sports Nutrition, Loughborough University" },
  { icon: "🌍", label: "ICDA Member (International)" },
];

const values = [
  { emoji: "🔬", title: "Evidence-Based", body: "Every recommendation is backed by peer-reviewed research. No trends, no gimmicks." },
  { emoji: "🤗", title: "Non-Judgmental", body: "All bodies, all backgrounds. This is a genuinely shame-free zone." },
  { emoji: "🎯", title: "Practical", body: "Advice that works in the real world, not a perfect lab setting." },
  { emoji: "🌱", title: "Sustainable", body: "We build habits that last years, not crash diets that last days." },
];

const timeline = [
  { year: "2010", event: "Graduated from King's College London with first-class honours" },
  { year: "2011", event: "Started NHS career as a Band 5 Dietitian" },
  { year: "2015", event: "Completed MSc in Sports Nutrition at Loughborough" },
  { year: "2018", event: "Founded NutriBee as a private practice" },
  { year: "2021", event: "Launched the blog — now reaching 80,000+ monthly readers" },
  { year: "2024", event: "Expanded to global online coaching" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-charcoal-900 py-16 sm:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V17L28 0l28 17v33L28 66z' fill='none' stroke='%23f59e0b' stroke-width='1.5'/%3E%3Cpath d='M28 100L0 83V50l28-17 28 17v33L28 100z' fill='none' stroke='%23f59e0b' stroke-width='1.5'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="w-64 h-72 sm:w-72 sm:h-80 rounded-[3rem] overflow-hidden shadow-2xl"
                  style={{ background: "linear-gradient(135deg, #f59e0b 0%, #92400e 100%)" }}>
                  <div className="absolute top-8 right-8 bee-float">
                    <BeeMascot size={64} mood="waving" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-charcoal-900/90 backdrop-blur-sm p-5 rounded-b-[3rem]">
                    <p className="font-black text-white">Dr. Maya Sullivan</p>
                    <p className="text-honey-400 text-sm font-semibold">Registered Dietitian, RD</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-3 shadow-xl border border-charcoal-100 flex items-center gap-2.5">
                  <ShieldCheck size={18} className="text-forest-600" />
                  <div>
                    <p className="text-xs font-black text-charcoal-900 leading-none">HCPC Registered</p>
                    <p className="text-[10px] text-charcoal-400">Verified Dietitian</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-black text-honey-500 uppercase tracking-[0.25em] mb-5">Meet your dietitian</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-5">
                Hi, I&apos;m Maya.<br/>
                <span className="gradient-gold">I help people fall back in love with food.</span>
              </h1>
              <p className="text-charcoal-300 leading-relaxed mb-5">
                I became a dietitian because nutrition changed my life — and I wanted to share that as widely as possible. After a decade in the NHS and private practice, I still get a genuine buzz every time a client messages to say their energy has transformed.
              </p>
              <p className="text-charcoal-400 leading-relaxed text-sm">
                NutriBee was born from one belief: nutrition advice should be warm, practical, and always backed by evidence. No gimmicks. No guilt. Just sustainable habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section id="credentials" className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <Award size={22} className="text-honey-500" />
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal-900">Qualifications & registration</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {credentials.map((c) => (
              <div key={c.label} className="flex items-start gap-4 bg-charcoal-50 rounded-2xl p-4 border border-charcoal-100">
                <span className="text-2xl shrink-0">{c.icon}</span>
                <p className="font-semibold text-charcoal-800 text-sm leading-relaxed">{c.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-forest-50 border border-forest-100 rounded-3xl p-6 flex items-start gap-4">
            <ShieldCheck size={22} className="text-forest-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-black text-charcoal-900 mb-1.5">Why &quot;registered&quot; matters to you</h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                &quot;Dietitian&quot; is legally protected in the UK — only HCPC-registered practitioners can use it. This means you&apos;re always protected by formal professional standards, ethics, and continuing education requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section id="evidence" className="bg-cream py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal-900 mb-3">How I approach nutrition</h2>
            <p className="text-charcoal-500 max-w-md mx-auto">Four principles behind every session, article, and recipe on this site.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-charcoal-100 rounded-3xl p-7 hover:border-honey-300 hover:shadow-lg hover:shadow-honey-50 transition-all duration-200">
                <div className="w-12 h-12 hex bg-honey-500 flex items-center justify-center text-xl mb-5">{v.emoji}</div>
                <h3 className="text-xl font-black text-charcoal-900 mb-2">{v.title}</h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-charcoal-900 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-10 text-center">The NutriBee story</h2>
          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-charcoal-700" />
            <div className="space-y-7">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6">
                  <div className="w-12 h-14 hex bg-honey-500 flex items-center justify-center text-charcoal-900 font-black text-xs shrink-0 z-10">
                    {item.year.slice(-2)}&apos;
                  </div>
                  <div className="flex-1 pt-3">
                    <p className="text-[10px] font-black text-honey-500 uppercase tracking-widest mb-0.5">{item.year}</p>
                    <p className="text-charcoal-200 font-semibold text-sm">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-honey-500 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bee-float inline-block mb-5">
            <BeeMascot size={60} mood="happy" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-charcoal-900 mb-4">Ready to start?</h2>
          <p className="text-honey-900 mb-7">A 20-minute free discovery call is all it takes. No pressure, just a conversation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/services" className="flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-charcoal-800 text-white font-black rounded-2xl px-7 py-4 transition-colors shadow-lg text-sm">
              <Calendar size={16} />Book a Free Call
            </Link>
            <Link href="/blog" className="flex items-center justify-center gap-2 bg-honey-600 hover:bg-honey-700 text-white font-bold rounded-2xl px-7 py-4 transition-colors text-sm">
              <BookOpen size={16} />Read the Blog
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
