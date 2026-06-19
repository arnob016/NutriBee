export interface NutrientGoal {
  id: string;
  name: string;
  unit: string;
  target: number;
  current: number;
  emoji: string;
  color: string;
  tip: string;
}

export const defaultNutrients: NutrientGoal[] = [
  {
    id: "protein",
    name: "Protein",
    unit: "g",
    target: 60,
    current: 42,
    emoji: "💪",
    color: "#f59e0b",
    tip: "Add a palm-sized portion of protein to every meal.",
  },
  {
    id: "fiber",
    name: "Fibre",
    unit: "g",
    target: 28,
    current: 18,
    emoji: "🌿",
    color: "#22c55e",
    tip: "Aim for 5+ different plant foods per day.",
  },
  {
    id: "water",
    name: "Water",
    unit: "L",
    target: 2.0,
    current: 1.4,
    emoji: "💧",
    color: "#38bdf8",
    tip: "Drink a glass before each meal and first thing in the morning.",
  },
  {
    id: "iron",
    name: "Iron",
    unit: "mg",
    target: 18,
    current: 10,
    emoji: "🔴",
    color: "#ef4444",
    tip: "Pair iron-rich foods with vitamin C for better absorption.",
  },
  {
    id: "calcium",
    name: "Calcium",
    unit: "mg",
    target: 1000,
    current: 650,
    emoji: "🦴",
    color: "#e2e8f0",
    tip: "Dairy, fortified plant milks, and leafy greens are all great sources.",
  },
  {
    id: "vitd",
    name: "Vit D",
    unit: "µg",
    target: 10,
    current: 7,
    emoji: "☀️",
    color: "#fbbf24",
    tip: "In winter, most people need to supplement — ask your GP.",
  },
  {
    id: "omega3",
    name: "Omega-3",
    unit: "g",
    target: 1.6,
    current: 0.8,
    emoji: "🐟",
    color: "#818cf8",
    tip: "Two portions of oily fish per week covers your omega-3 needs.",
  },
  {
    id: "folate",
    name: "Folate",
    unit: "µg",
    target: 400,
    current: 280,
    emoji: "🥦",
    color: "#4ade80",
    tip: "Dark leafy greens and legumes are excellent folate sources.",
  },
  {
    id: "magnesium",
    name: "Magnesium",
    unit: "mg",
    target: 320,
    current: 200,
    emoji: "🌙",
    color: "#c084fc",
    tip: "Nuts, seeds, and dark chocolate are magnesium-rich choices.",
  },
];

export const pollenTips = [
  {
    nutrient: "Vitamin C",
    tip: "Red peppers contain nearly 3x more vitamin C than oranges — and they're delicious roasted.",
    emoji: "🫑",
  },
  {
    nutrient: "Zinc",
    tip: "Oysters are the richest zinc source on earth, but pumpkin seeds are the best plant option.",
    emoji: "🌱",
  },
  {
    nutrient: "B12",
    tip: "B12 is only found reliably in animal products or fortified foods — if you're vegan, supplement.",
    emoji: "⚡",
  },
  {
    nutrient: "Potassium",
    tip: "A banana has potassium, but avocado, sweet potato, and white beans have even more.",
    emoji: "🥑",
  },
  {
    nutrient: "Selenium",
    tip: "Just 2 Brazil nuts per day gives you your full daily selenium — that's the whole dose!",
    emoji: "🥜",
  },
  {
    nutrient: "Iodine",
    tip: "Iodine deficiency is making a comeback. Seaweed, dairy, and iodised salt are your best friends.",
    emoji: "🌊",
  },
];
