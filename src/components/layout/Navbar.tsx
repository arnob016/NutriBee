"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { BeeMascot } from "~/components/ui/BeeMascot";

const links = [
  { href: "/blog", label: "The Hive" },
  { href: "/recipes", label: "Golden Foods" },
  { href: "/tools", label: "Tools" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-charcoal-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0" aria-label="NutriBee home">
            <div className="bee-float w-9 h-9 flex items-center justify-center">
              <BeeMascot size={36} />
            </div>
            <span className="text-xl font-black text-charcoal-900 tracking-tight leading-none">
              Nutri<span className="text-honey-500">Bee</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 rounded-xl text-sm font-semibold text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-50 transition-all duration-150"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              href="/services"
              className="flex items-center gap-2 bg-charcoal-900 hover:bg-charcoal-800 text-white font-bold rounded-xl px-5 py-2.5 text-sm transition-all duration-200 hover:shadow-lg"
            >
              <Calendar size={14} />
              Book a Call
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-charcoal-700 hover:bg-charcoal-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-charcoal-100 bg-white/95 backdrop-blur-xl">
          <nav className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-charcoal-700 hover:text-charcoal-900 hover:bg-charcoal-50 font-semibold text-sm transition-colors"
              >
                {l.label}
                <ChevronRight size={15} className="text-charcoal-300" />
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-honey-500 hover:bg-honey-600 text-white font-bold rounded-xl px-5 py-3.5 text-sm transition-colors w-full"
              >
                <Calendar size={15} />
                Book a Free Discovery Call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function ChevronRight({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
