export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  buzzTime: string;
  publishedAt: string;
  emoji: string;
  image?: string;
  saved?: boolean;
}

export const categories = [
  "All",
  "Gut Health",
  "Vegetarian",
  "Pregnancy",
  "Weight Management",
  "Sports Nutrition",
  "Heart Health",
  "Mental Wellness",
];

export const posts: Post[] = [
  {
    id: "1",
    slug: "fiber-friendly-gut",
    title: "The Fiber Fix: Why Your Gut Is Begging for More",
    excerpt:
      "Most of us get half the recommended daily fiber. Here's how to double yours without the bloat.",
    category: "Gut Health",
    tags: ["fiber", "microbiome", "gut health"],
    buzzTime: "6 min",
    publishedAt: "2026-06-01",
    emoji: "🌿",
    image: "https://placehold.co/400x400/fef3c7/d97706?text=🌿",
  },
  {
    id: "2",
    slug: "protein-plant-powered",
    title: "Plant-Powered Protein: Everything You Need to Know",
    excerpt:
      "Complete amino acids, no meat required. A practical guide for vegetarians and curious omnivores.",
    category: "Vegetarian",
    tags: ["protein", "vegetarian", "legumes"],
    buzzTime: "8 min",
    publishedAt: "2026-05-28",
    emoji: "🫘",
    image: "https://placehold.co/400x400/dcfce7/16a34a?text=🫘",
  },
  {
    id: "3",
    slug: "iron-pregnancy-guide",
    title: "Iron During Pregnancy: The Golden Nutrient You Can't Ignore",
    excerpt:
      "Iron needs nearly double during pregnancy. Learn which foods deliver the most — and what helps absorption.",
    category: "Pregnancy",
    tags: ["iron", "pregnancy", "maternal nutrition"],
    buzzTime: "7 min",
    publishedAt: "2026-05-20",
    emoji: "🤱",
    image: "https://placehold.co/400x400/fce7f3/9d174d?text=🤱",
  },
  {
    id: "4",
    slug: "metabolism-myths",
    title: "5 Metabolism Myths — Busted by a Dietitian",
    excerpt:
      "Eating after 8pm, cold water, cheat days… we cut through the noise with actual science.",
    category: "Weight Management",
    tags: ["metabolism", "myths", "evidence-based"],
    buzzTime: "5 min",
    publishedAt: "2026-05-15",
    emoji: "🔬",
    image: "https://placehold.co/400x400/eff6ff/1d4ed8?text=🔬",
  },
  {
    id: "5",
    slug: "carb-loading-athletes",
    title: "Carb Loading Done Right: A Runner's Nutrition Playbook",
    excerpt:
      "When, what, and how much to eat before a big race — from a sports nutrition perspective.",
    category: "Sports Nutrition",
    tags: ["carbs", "running", "performance"],
    buzzTime: "9 min",
    publishedAt: "2026-05-10",
    emoji: "🏃",
    image: "https://placehold.co/400x400/fef3c7/b45309?text=🏃",
  },
  {
    id: "6",
    slug: "omega3-heart-hero",
    title: "Omega-3s: Tiny Fat, Giant Heart Benefits",
    excerpt:
      "Fish oil, flaxseed, walnuts — which sources are best, and how much do you actually need?",
    category: "Heart Health",
    tags: ["omega-3", "heart health", "fats"],
    buzzTime: "6 min",
    publishedAt: "2026-05-05",
    emoji: "❤️",
    image: "https://placehold.co/400x400/fce7f3/be185d?text=❤️",
  },
  {
    id: "7",
    slug: "gut-brain-connection",
    title: "Your Gut Has a Mind of Its Own — and It Matters",
    excerpt:
      "The gut-brain axis is one of nutrition's most exciting frontiers. Here's what we know so far.",
    category: "Gut Health",
    tags: ["gut-brain", "mental health", "microbiome"],
    buzzTime: "10 min",
    publishedAt: "2026-04-28",
    emoji: "🧠",
    image: "https://placehold.co/400x400/f3e8ff/7c3aed?text=🧠",
  },
  {
    id: "8",
    slug: "snack-smarter",
    title: "Snack Smarter: 12 Nutrient-Dense Bites That Actually Satisfy",
    excerpt:
      "Skip the processed crackers. These snacks will keep you full, focused, and fuelled.",
    category: "Weight Management",
    tags: ["snacks", "satiety", "practical"],
    buzzTime: "4 min",
    publishedAt: "2026-04-22",
    emoji: "🍎",
    image: "https://placehold.co/400x400/fef3c7/d97706?text=🍎",
  },
  {
    id: "9",
    slug: "magnesium-sleep-stress",
    title: "Magnesium: The Mineral That Could Change Your Sleep",
    excerpt:
      "Deficiency is surprisingly common and the effects creep up on you. Time to check your levels.",
    category: "Mental Wellness",
    tags: ["magnesium", "sleep", "stress"],
    buzzTime: "7 min",
    publishedAt: "2026-04-15",
    emoji: "🌙",
    image: "https://placehold.co/400x400/eff6ff/1e40af?text=🌙",
  },
];

export const pollenOfTheWeek = {
  name: "Turmeric",
  emoji: "🌾",
  tagline: "The golden root that fights inflammation",
  fact:
    "Curcumin, turmeric's active compound, has been shown to rival some anti-inflammatory drugs — without the side effects. Pair it with black pepper to boost absorption by up to 2,000%.",
  goldenScore: 9.2,
  servingSuggestion: "Add ½ tsp to scrambled eggs, soups, or smoothies.",
};
