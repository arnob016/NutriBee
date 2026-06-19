export interface ServiceFeature {
  text: string;
}

export interface ServiceTier {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  emoji: string;
  price: string;
  priceNote: string;
  features: string[];
  highlight?: boolean;
  ctaText: string;
  color: string;
}

export const serviceTiers: ServiceTier[] = [
  {
    id: "worker",
    name: "Worker Bee",
    subtitle: "Single Consult",
    description:
      "Perfect for getting unstuck. One focused session to identify your biggest nutrition opportunity and walk away with a clear, actionable plan.",
    emoji: "🐝",
    price: "$120",
    priceNote: "one-time",
    features: [
      "60-minute 1:1 video session",
      "Personalised nutrition recommendations",
      "Goal-setting framework",
      "Resource pack (recipes + guides)",
      "14-day email follow-up",
    ],
    ctaText: "Book a Session",
    color: "honey-500",
  },
  {
    id: "forager",
    name: "Forager",
    subtitle: "Ongoing Plan",
    description:
      "For those ready to build lasting habits. Monthly sessions with full meal planning support so you're never flying blind at the grocery store.",
    emoji: "🍯",
    price: "$380",
    priceNote: "/ month",
    highlight: true,
    features: [
      "4 × 45-minute monthly sessions",
      "Custom 4-week meal plan",
      "Weekly check-in messages",
      "Grocery list generated automatically",
      "Habit-streak tracking access",
      "Priority booking",
    ],
    ctaText: "Start Foraging",
    color: "honey-600",
  },
  {
    id: "queen",
    name: "Queen Bee",
    subtitle: "Full Coaching",
    description:
      "The complete transformation experience. An intensive 12-week programme with deep personalisation, daily support, and full accountability.",
    emoji: "👑",
    price: "$1,200",
    priceNote: "12-week programme",
    features: [
      "12 × weekly 60-min sessions",
      "Comprehensive health audit",
      "Bespoke meal & lifestyle plan",
      "24/7 WhatsApp support",
      "Lab result interpretation",
      "Supplement review",
      "Unlimited recipe customisation",
    ],
    ctaText: "Apply for Queen Bee",
    color: "charcoal-900",
  },
];

export const faqs = [
  {
    q: "Do you work with clients outside the UK?",
    a: "Yes! All sessions are online via video call so we work with clients globally. Fees are in GBP.",
  },
  {
    q: "Is a discovery call really free?",
    a: "Absolutely — a 20-minute call with no sales pressure. It's a chance to see if we're a good fit.",
  },
  {
    q: "Do you accept referrals from GPs?",
    a: "Yes, and we work collaboratively with your existing healthcare team when needed.",
  },
  {
    q: "Can I switch tiers mid-programme?",
    a: "Of course. If you start with a Worker Bee and want to continue, we simply transition you to Forager and credit what you've paid.",
  },
];
