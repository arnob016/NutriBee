"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { BeeMascot } from "./BeeMascot";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-honey-500 hc-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center relative z-10">
        {/* Floating bee */}
        <div className="flex justify-center mb-4">
          <div className="bee-float">
            <BeeMascot size={64} mood="waving" />
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
          Join the Buzz 🐝
        </h2>
        <p className="text-honey-100 text-lg mb-8 max-w-xl mx-auto">
          Weekly nutrition insights, seasonal recipes, and evidence-based tips — delivered straight to your hive every Sunday.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-white text-lg font-semibold">
            <CheckCircle size={28} className="text-honey-100" />
            <span>You&apos;re in! Welcome to the hive.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-2xl px-5 py-3.5 text-charcoal-900 font-medium bg-white placeholder:text-charcoal-400 outline-none focus:ring-2 focus:ring-honey-300"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-charcoal-800 text-white font-bold rounded-2xl px-6 py-3.5 transition-colors duration-200 shrink-0"
            >
              <Send size={16} />
              Subscribe
            </button>
          </form>
        )}

        <p className="text-honey-200 text-xs mt-4">
          No spam, ever. Unsubscribe in one click.
        </p>
      </div>

      {/* Decorative hexes */}
      <div className="absolute -left-8 top-8 w-24 h-24 hex bg-honey-400/30" />
      <div className="absolute -right-6 bottom-6 w-32 h-32 hex bg-honey-600/25" />
      <div className="absolute left-1/4 -bottom-4 w-16 h-16 hex bg-honey-400/20" />
    </section>
  );
}
