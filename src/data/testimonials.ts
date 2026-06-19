export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  tier: string;
  emoji: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    role: "Teacher & Mum of Two",
    quote:
      "I'd tried every diet going. NutriBee was the first approach that felt like actual science, not restriction. Six months in and my energy levels are unrecognisable.",
    tier: "Forager",
    emoji: "🌟",
    rating: 5,
  },
  {
    id: "2",
    name: "James K.",
    role: "Endurance Runner",
    quote:
      "My marathon PB dropped by 11 minutes after we worked on my fuelling strategy. The carb-loading plan alone was worth every penny.",
    tier: "Worker Bee",
    emoji: "🏃",
    rating: 5,
  },
  {
    id: "3",
    name: "Priya T.",
    role: "New Mum (Pregnancy Package)",
    quote:
      "Having expert guidance through pregnancy and postpartum was invaluable. I never felt judged, just supported. The recipes are genuinely delicious too!",
    tier: "Queen Bee",
    emoji: "🤱",
    rating: 5,
  },
  {
    id: "4",
    name: "David O.",
    role: "Software Engineer",
    quote:
      "I was sceptical about nutrition coaching but the evidence-based approach completely won me over. I actually understand *why* I'm eating what I'm eating now.",
    tier: "Forager",
    emoji: "💻",
    rating: 5,
  },
  {
    id: "5",
    name: "Elena R.",
    role: "Yoga Instructor",
    quote:
      "The gut health programme changed my life. Two years of digestive issues resolved in 8 weeks. I wish I'd found NutriBee sooner.",
    tier: "Queen Bee",
    emoji: "🧘",
    rating: 5,
  },
  {
    id: "6",
    name: "Tom B.",
    role: "Firefighter",
    quote:
      "Shift work absolutely wrecks your eating habits. The tailored advice for irregular schedules was something no generic diet plan could give me.",
    tier: "Forager",
    emoji: "🔥",
    rating: 5,
  },
];
