export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  goldenScore: number;
  prepTime: string;
  servings: number;
  emoji: string;
  image?: string;
  ingredients: string[];
  keyNutrients: { name: string; amount: string }[];
}

export const recipeCategories = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snacks",
  "Smoothies",
];

export const recipes: Recipe[] = [
  {
    id: "1",
    slug: "golden-turmeric-porridge",
    title: "Golden Turmeric Porridge",
    description:
      "A warming bowl that packs fiber, anti-inflammatory spices, and slow-release energy — all before 8 am.",
    category: "Breakfast",
    tags: ["vegetarian", "gut health", "anti-inflammatory"],
    goldenScore: 9.4,
    prepTime: "10 min",
    servings: 2,
    emoji: "🌾",
    image: "https://placehold.co/400x400/fef3c7/b45309?text=🌾",
    ingredients: [
      "1 cup rolled oats",
      "1 tsp turmeric",
      "½ tsp cinnamon",
      "1 tbsp chia seeds",
      "1 cup oat milk",
      "Handful of blueberries",
      "1 tbsp honey",
    ],
    keyNutrients: [
      { name: "Fiber", amount: "8g" },
      { name: "Antioxidants", amount: "★★★" },
      { name: "Iron", amount: "3mg" },
    ],
  },
  {
    id: "2",
    slug: "lentil-power-salad",
    title: "Lentil Power Salad with Lemon Tahini",
    description:
      "Protein-rich green lentils with roasted veg, seeds, and a zingy tahini dressing that makes it the best meal-prep lunch of the week.",
    category: "Lunch",
    tags: ["vegetarian", "high protein", "meal prep"],
    goldenScore: 9.7,
    prepTime: "25 min",
    servings: 4,
    emoji: "🥗",
    image: "https://placehold.co/400x400/dcfce7/15803d?text=🥗",
    ingredients: [
      "2 cups green lentils",
      "1 cup cherry tomatoes",
      "1 cucumber",
      "2 tbsp tahini",
      "1 lemon (juiced)",
      "Pumpkin seeds",
      "Fresh herbs",
    ],
    keyNutrients: [
      { name: "Protein", amount: "22g" },
      { name: "Fiber", amount: "16g" },
      { name: "Iron", amount: "6mg" },
    ],
  },
  {
    id: "3",
    slug: "salmon-sweet-potato",
    title: "Baked Salmon with Sweet Potato Mash",
    description:
      "Omega-3-rich salmon on a cloud of orange sweet potato, finished with a lemon-herb crust. Simple, satisfying, and seriously good for your heart.",
    category: "Dinner",
    tags: ["omega-3", "heart health", "high protein"],
    goldenScore: 9.8,
    prepTime: "35 min",
    servings: 2,
    emoji: "🐟",
    image: "https://placehold.co/400x400/fef3c7/d97706?text=🐟",
    ingredients: [
      "2 salmon fillets",
      "2 large sweet potatoes",
      "2 tbsp olive oil",
      "1 lemon",
      "Fresh dill",
      "Garlic (2 cloves)",
    ],
    keyNutrients: [
      { name: "Omega-3", amount: "2.4g" },
      { name: "Protein", amount: "34g" },
      { name: "Vitamin A", amount: "280% DV" },
    ],
  },
  {
    id: "4",
    slug: "berry-protein-smoothie",
    title: "Berry Protein Smoothie Bowl",
    description:
      "A thick, spoonable smoothie loaded with antioxidants, plant protein, and crunch from a homemade granola topping.",
    category: "Smoothies",
    tags: ["high protein", "antioxidants", "quick"],
    goldenScore: 8.9,
    prepTime: "5 min",
    servings: 1,
    emoji: "🫐",
    image: "https://placehold.co/400x400/ede9fe/6d28d9?text=🫐",
    ingredients: [
      "1 cup frozen mixed berries",
      "1 banana (frozen)",
      "1 scoop vanilla protein powder",
      "½ cup Greek yogurt",
      "1 tbsp almond butter",
      "Granola & seeds to top",
    ],
    keyNutrients: [
      { name: "Protein", amount: "28g" },
      { name: "Antioxidants", amount: "★★★" },
      { name: "Probiotics", amount: "✓" },
    ],
  },
  {
    id: "5",
    slug: "energy-balls",
    title: "No-Bake Honey Oat Energy Balls",
    description:
      "Ten minutes, eight ingredients, two dozen snack-ready bites. These are the kind of thing you'll make every Sunday.",
    category: "Snacks",
    tags: ["quick", "meal prep", "energy"],
    goldenScore: 8.5,
    prepTime: "10 min",
    servings: 24,
    emoji: "🍯",
    image: "https://placehold.co/400x400/fef3c7/92400e?text=🍯",
    ingredients: [
      "2 cups rolled oats",
      "⅓ cup honey",
      "½ cup nut butter",
      "⅓ cup dark chocolate chips",
      "2 tbsp chia seeds",
      "1 tsp vanilla",
    ],
    keyNutrients: [
      { name: "Fiber", amount: "3g" },
      { name: "Healthy Fats", amount: "6g" },
      { name: "Energy", amount: "140 kcal" },
    ],
  },
  {
    id: "6",
    slug: "chickpea-shakshuka",
    title: "Chickpea Shakshuka",
    description:
      "A Middle Eastern one-pan classic with the addition of chickpeas for a plant-protein boost. Serve with sourdough for ultimate gut-health pairing.",
    category: "Breakfast",
    tags: ["vegetarian", "gut health", "one-pan"],
    goldenScore: 9.5,
    prepTime: "30 min",
    servings: 4,
    emoji: "🍳",
    image: "https://placehold.co/400x400/fee2e2/991b1b?text=🍳",
    ingredients: [
      "1 can chickpeas",
      "1 can crushed tomatoes",
      "4 eggs",
      "1 onion",
      "1 red pepper",
      "Harissa paste",
      "Cumin, paprika, coriander",
    ],
    keyNutrients: [
      { name: "Protein", amount: "18g" },
      { name: "Iron", amount: "4mg" },
      { name: "Lycopene", amount: "★★★" },
    ],
  },
];
