import Link from "next/link";
import { BeeMascot } from "~/components/ui/BeeMascot";

const navGroups = [
  {
    label: "Explore",
    links: [
      { href: "/blog", label: "The Hive (Blog)" },
      { href: "/recipes", label: "Golden Foods" },
      { href: "/tools", label: "Meal Plan Tools" },
    ],
  },
  {
    label: "Work Together",
    links: [
      { href: "/services", label: "Services & Pricing" },
      { href: "/services#discovery", label: "Free Discovery Call" },
      { href: "/about", label: "About the Dietitian" },
    ],
  },
  {
    label: "Trust",
    links: [
      { href: "/about#credentials", label: "Credentials" },
      { href: "/about#evidence", label: "Evidence-Based Approach" },
      { href: "#", label: "Privacy Policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-charcoal-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <BeeMascot size={42} />
              <span className="text-xl font-black text-white">
                Nutri<span className="text-honey-400">Bee</span>
              </span>
            </Link>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-5">
              Small habits, sweet results. Evidence-based nutrition coaching from a registered dietitian.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 hex bg-charcoal-800 hover:bg-honey-500 flex items-center justify-center transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 hex bg-charcoal-800 hover:bg-honey-500 flex items-center justify-center transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              {/* Pinterest icon as SVG since lucide doesn't have it */}
              <a
                href="#"
                aria-label="Pinterest"
                className="w-9 h-9 hex bg-charcoal-800 hover:bg-honey-500 flex items-center justify-center transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
                {group.label}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-charcoal-400 hover:text-honey-400 text-sm transition-colors duration-150"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-charcoal-500 text-xs">
            © {new Date().getFullYear()} NutriBee. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-charcoal-500">
            <div className="w-3 h-3 hex bg-honey-500" />
            <span>Registered Dietitian · Evidence-Based Nutrition · Not Medical Advice</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
