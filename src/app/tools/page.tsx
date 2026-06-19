import { Download, ListChecks, BarChart3 } from "lucide-react";
import { NutrientTracker } from "~/components/ui/NutrientTracker";
import { NewsletterSignup } from "~/components/ui/NewsletterSignup";

const mealPlans = [
  {
    id: "1",
    name: "7-Day Gut Health Reset",
    description: "High-fibre, prebiotic-rich meals to support your microbiome.",
    emoji: "🌿",
    tag: "Gut Health",
    color: "bg-forest-100 border-forest-100",
  },
  {
    id: "2",
    name: "Plant-Based Power Week",
    description: "Complete plant proteins and micronutrients — beautifully mapped.",
    emoji: "🫘",
    tag: "Vegetarian",
    color: "bg-honey-100 border-honey-100",
  },
  {
    id: "3",
    name: "30-Min Weeknight Meals",
    description: "Busy week? These balanced dinners are on the table in 30 minutes.",
    emoji: "⏱️",
    tag: "Quick & Easy",
    color: "bg-amber-50 border-amber-100",
  },
  {
    id: "4",
    name: "Sports Nutrition Template",
    description: "Fuelling and recovery plans for training weeks — customisable by sport.",
    emoji: "🏋️",
    tag: "Performance",
    color: "bg-honey-50 border-honey-100",
  },
  {
    id: "5",
    name: "Pregnancy Nutrition Guide",
    description: "Trimester-by-trimester meal ideas with iron, folate, and DHA highlights.",
    emoji: "🤱",
    tag: "Pregnancy",
    color: "bg-pink-50 border-pink-100",
  },
  {
    id: "6",
    name: "Anti-Inflammatory 2-Week Plan",
    description: "Omega-3s, polyphenols, and cruciferous veg — a reset for the whole body.",
    emoji: "🫐",
    tag: "Anti-Inflammatory",
    color: "bg-purple-50 border-purple-100",
  },
];

const groceryCategories = [
  { name: "Produce", emoji: "🥦", items: ["Spinach", "Broccoli", "Sweet potato", "Avocado", "Cherry tomatoes"] },
  { name: "Proteins", emoji: "🥚", items: ["Eggs", "Salmon fillets", "Greek yogurt", "Lentils", "Chickpeas"] },
  { name: "Grains", emoji: "🌾", items: ["Rolled oats", "Brown rice", "Sourdough bread", "Quinoa"] },
  { name: "Pantry", emoji: "🫙", items: ["Olive oil", "Turmeric", "Chia seeds", "Tahini", "Honey"] },
];

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-500 via-honey-500 to-honey-400 hc-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10 text-center text-white">
          <div className="text-5xl mb-4">🛠️</div>
          <h1 className="text-4xl sm:text-5xl font-black mb-3">Hive Tools</h1>
          <p className="text-honey-100 text-lg max-w-xl mx-auto">
            Meal plans, grocery lists, and a daily nutrient tracker — everything you need to keep your hive buzzing.
          </p>
        </div>
        <div className="absolute -bottom-4 left-0 right-0 h-8 bg-cream rounded-t-[3rem]" />
      </section>

      {/* Meal Plan Library */}
      <section className="bg-cream pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 hex bg-honey-500 flex items-center justify-center">
              <Download size={18} className="text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal-900">
              Honeycomb Plan Library
            </h2>
          </div>
          <p className="text-charcoal-500 mb-8 ml-13">
            Download free, dietitian-approved PDF meal templates — ready to print or save.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mealPlans.map((plan) => (
              <div
                key={plan.id}
                className={`${plan.color} border rounded-3xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{plan.emoji}</span>
                  <span className="text-[10px] bg-white/80 text-charcoal-600 font-bold px-2.5 py-1 rounded-full border border-white/50">
                    {plan.tag}
                  </span>
                </div>
                <h3 className="font-black text-charcoal-900 mb-1.5">{plan.name}</h3>
                <p className="text-charcoal-500 text-sm leading-relaxed mb-4">{plan.description}</p>
                <button className="flex items-center gap-2 text-honey-700 hover:text-honey-900 font-bold text-sm group-hover:gap-3 transition-all">
                  <Download size={14} />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrient Tracker */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 hex bg-honey-500 flex items-center justify-center">
                  <BarChart3 size={18} className="text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-charcoal-900">
                  Daily Nutrient Tracker
                </h2>
              </div>
              <p className="text-charcoal-500 mb-6">
                Your hive fills up as you hit your daily nutrient goals. Tap a cell to log and see personalised tips.
              </p>

              <div className="bg-honey-50 border border-honey-200 rounded-2xl p-4 space-y-2 mb-6">
                <p className="text-xs font-bold text-honey-700 uppercase tracking-widest">How it works</p>
                <div className="space-y-1.5 text-sm text-charcoal-700">
                  <div className="flex items-start gap-2">
                    <span>🐝</span>
                    <span>Each hexagon represents a key nutrient target.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>🍯</span>
                    <span>The cell fills with honey as you log servings.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>✨</span>
                    <span>Fill all 9 cells to complete your daily hive!</span>
                  </div>
                </div>
              </div>
            </div>

            <NutrientTracker />
          </div>
        </div>
      </section>

      {/* Auto Grocery List */}
      <section className="bg-honey-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 hex bg-honey-500 flex items-center justify-center">
              <ListChecks size={18} className="text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal-900">
              Weekly Grocery List
            </h2>
          </div>
          <p className="text-charcoal-500 mb-8">A dietitian-curated starter list for a nutrient-dense week.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {groceryCategories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-3xl p-5 border border-honey-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{cat.emoji}</span>
                  <h3 className="font-black text-charcoal-800">{cat.name}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-charcoal-700">
                      <div className="w-4 h-4 hex bg-honey-100 border border-honey-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button className="inline-flex items-center gap-2 bg-honey-500 hover:bg-honey-600 text-white font-bold rounded-2xl px-6 py-3 transition-colors">
              <Download size={16} />
              Download full grocery list (PDF)
            </button>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
