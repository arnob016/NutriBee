"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, MessageCircle, ChevronDown, ChevronUp, CheckCircle, ShieldCheck } from "lucide-react";
import { ServiceTiers } from "~/components/ui/ServiceTiers";
import { NewsletterSignup } from "~/components/ui/NewsletterSignup";
import { BeeMascot } from "~/components/ui/BeeMascot";
import { faqs } from "~/data/services";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl overflow-hidden border transition-colors ${open ? "border-honey-300 bg-honey-50" : "border-charcoal-100 bg-white"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-bold text-charcoal-900 pr-4 text-sm leading-snug">{q}</span>
        {open
          ? <ChevronUp size={17} className="text-honey-500 shrink-0" />
          : <ChevronDown size={17} className="text-charcoal-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-charcoal-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-charcoal-900 relative overflow-hidden py-16 sm:py-24">
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
            <div>
              <p className="text-xs font-black text-honey-500 uppercase tracking-[0.25em] mb-5">Work with me</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.0] mb-5">
                Find your<br/>
                <span className="gradient-gold">hive tier.</span>
              </h1>
              <p className="text-charcoal-300 text-lg leading-relaxed mb-8 max-w-lg">
                Every package is rooted in evidence, personalised to you, and delivered with genuine warmth.
              </p>
              <Link
                href="#discovery"
                className="inline-flex items-center gap-2.5 bg-honey-500 hover:bg-honey-400 text-charcoal-900 font-black rounded-2xl px-7 py-4 text-sm transition-all duration-200 shadow-lg shadow-honey-500/25 hover:-translate-y-0.5"
              >
                <Calendar size={16} />
                Book a free discovery call
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="bee-float">
                <BeeMascot size={200} mood="waving" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tier cards ── */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-black text-honey-600 uppercase tracking-[0.25em] mb-3">Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-black text-charcoal-900 mb-4">Hive tiers</h2>
            <p className="text-charcoal-500 max-w-md mx-auto">
              Not sure which is right for you? A free discovery call will help us figure that out together.
            </p>
          </div>
          <ServiceTiers />
        </div>
      </section>

      {/* ── What to expect ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal-900 mb-3">The process</h2>
            <p className="text-charcoal-500">From first hello to lasting habits — here&apos;s what to expect.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "01", emoji: "☕", title: "Discovery Call", desc: "20 minutes, free, no obligation. Just a friendly chat." },
              { n: "02", emoji: "📋", title: "Intake Form", desc: "A short questionnaire about your health history and goals." },
              { n: "03", emoji: "🎯", title: "First Session", desc: "Deep-dive session with a clear, personalised action plan." },
              { n: "04", emoji: "🍯", title: "Your Hive Grows", desc: "Ongoing support, check-ins, and habits that actually stick." },
            ].map((item) => (
              <div key={item.n} className="bg-charcoal-50 rounded-3xl p-6 text-center hover:bg-honey-50 hover:border-honey-200 border border-transparent transition-all duration-200">
                <div className="w-12 h-12 hex bg-honey-500 flex items-center justify-center text-xl mx-auto mb-4">{item.emoji}</div>
                <p className="text-[10px] font-black text-honey-600 uppercase tracking-widest mb-1.5">Step {item.n}</p>
                <h3 className="font-black text-charcoal-900 mb-2">{item.title}</h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Discovery call booking ── */}
      <section id="discovery" className="bg-charcoal-900 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <p className="text-xs font-black text-honey-500 uppercase tracking-[0.25em] mb-4">Free · No commitment</p>
              <h2 className="text-2xl sm:text-3xl font-black mb-4">Book your free discovery call</h2>
              <p className="text-charcoal-300 leading-relaxed mb-6">
                Just a friendly 20-minute chat. We&apos;ll talk about your goals, I&apos;ll answer any questions, and we&apos;ll see if working together feels right. No pressure at all.
              </p>
              <div className="space-y-3">
                {["Free — no credit card needed", "Online video call, 7 days a week", "Completely confidential", "Slots book out fast!"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle size={15} className="text-honey-500 shrink-0" />
                    <span className="text-charcoal-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking placeholder */}
            <div className="bg-charcoal-800 border border-charcoal-700 rounded-3xl p-7 shadow-2xl">
              <h3 className="font-black text-white mb-5 flex items-center gap-2">
                <Calendar size={18} className="text-honey-500" />
                Pick a time
              </h3>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {["Mon 23", "Tue 24", "Wed 25", "Thu 26", "Fri 27", "Sat 28"].map((d) => (
                  <button key={d} className="py-2.5 rounded-xl border border-charcoal-700 hover:border-honey-500 hover:bg-honey-500/10 hover:text-honey-400 text-sm font-semibold text-charcoal-400 transition-all">
                    {d}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"].map((t) => (
                  <button key={t} className="py-2.5 rounded-xl border border-charcoal-700 hover:bg-honey-500 hover:text-charcoal-900 hover:border-honey-500 text-sm font-semibold text-charcoal-400 transition-all">
                    {t}
                  </button>
                ))}
              </div>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 bg-honey-500 hover:bg-honey-400 text-charcoal-900 font-black rounded-2xl py-4 w-full transition-colors shadow-lg shadow-honey-500/25"
              >
                <MessageCircle size={16} />
                Confirm discovery call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust ── */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <ShieldCheck size={20} className="text-forest-600" />
            <span className="font-bold text-charcoal-900 text-sm">Registered Dietitian</span>
          </div>
          <p className="text-charcoal-500 text-sm max-w-lg mx-auto leading-relaxed">
            The title &quot;Dietitian&quot; is legally protected. Only HCPC-registered practitioners can use it — meaning you&apos;re always protected by professional standards and a formal code of ethics.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black text-charcoal-900 mb-8 text-center">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
