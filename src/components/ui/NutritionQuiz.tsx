"use client";

import { useState } from "react";
import { ChevronRight, RotateCcw } from "lucide-react";
import Link from "next/link";

const questions = [
  {
    id: "goal",
    question: "What's your main nutrition goal right now?",
    options: [
      { value: "weight", label: "Manage my weight", emoji: "⚖️" },
      { value: "muscle", label: "Build strength & muscle", emoji: "💪" },
      { value: "gut", label: "Improve my digestion", emoji: "🌿" },
      { value: "wellness", label: "General health & energy", emoji: "✨" },
    ],
  },
  {
    id: "diet",
    question: "How would you describe your current eating style?",
    options: [
      { value: "omni", label: "I eat everything", emoji: "🍽️" },
      { value: "plant", label: "Plant-based / vegetarian", emoji: "🥗" },
      { value: "highprot", label: "High protein focused", emoji: "🥩" },
      { value: "intuitive", label: "I try to eat intuitively", emoji: "🧘" },
    ],
  },
  {
    id: "time",
    question: "How much time can you dedicate to meal prep?",
    options: [
      { value: "low", label: "Very little — I need quick wins", emoji: "⚡" },
      { value: "medium", label: "1–2 hours on weekends", emoji: "📅" },
      { value: "high", label: "I genuinely love cooking", emoji: "👨‍🍳" },
    ],
  },
];

const results: Record<string, { type: string; emoji: string; tagline: string; tier: string; description: string }> = {
  "weight-omni-low": {
    type: "Busy Bee",
    emoji: "🐝",
    tagline: "Quick wins, lasting results",
    tier: "Worker Bee",
    description: "You need practical, no-fuss strategies that fit a busy life. The Worker Bee consult will give you a clear action plan you can start this week.",
  },
  "gut-plant-high": {
    type: "Gut Guardian",
    emoji: "🌿",
    tagline: "Nurturing your inner ecosystem",
    tier: "Queen Bee",
    description: "You're passionate about food and ready to go deep on gut health. The Queen Bee programme is designed for a full transformation.",
  },
  "muscle-highprot-medium": {
    type: "Power Forager",
    emoji: "💪",
    tagline: "Fuelling for performance",
    tier: "Forager",
    description: "Performance nutrition is your focus. The Forager programme delivers monthly meal plans optimised for your training goals.",
  },
  default: {
    type: "Wellness Warrior",
    emoji: "✨",
    tagline: "Balanced, evidence-based, sustainable",
    tier: "Forager",
    description: "You're building a holistic approach to health. The Forager programme will give you the ongoing support and structure to thrive.",
  },
};

function getResult(answers: Record<string, string>) {
  const key = `${answers.goal}-${answers.diet}-${answers.time}`;
  return results[key] ?? results.default!;
}

export function NutritionQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const question = questions[step];
  const result = done ? getResult(answers) : null;

  const handleAnswer = (value: string) => {
    const questionId = question?.id ?? "";
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep((s) => s + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
  };

  if (done && result) {
    return (
      <div className="bg-white border border-honey-200 rounded-3xl p-8 text-center max-w-md mx-auto">
        <div className="text-5xl mb-3">{result.emoji}</div>
        <p className="text-xs font-bold text-honey-600 uppercase tracking-widest mb-1">
          Your nutrition type
        </p>
        <h3 className="text-2xl font-black text-charcoal-900 mb-1">{result.type}</h3>
        <p className="text-honey-600 font-semibold text-sm mb-4">{result.tagline}</p>
        <p className="text-charcoal-600 text-sm leading-relaxed mb-6">{result.description}</p>
        <div className="flex flex-col gap-3">
          <Link
            href="/services"
            className="bg-honey-500 hover:bg-honey-600 text-white font-bold rounded-2xl px-6 py-3 transition-colors text-sm"
          >
            See {result.tier} package →
          </Link>
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 text-charcoal-500 hover:text-charcoal-700 text-sm transition-colors"
          >
            <RotateCcw size={14} />
            Retake quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-honey-200 rounded-3xl p-6 max-w-md mx-auto">
      {/* Progress */}
      <div className="flex gap-1.5 mb-6">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i <= step ? "bg-honey-500" : "bg-honey-100"
            }`}
          />
        ))}
      </div>

      <p className="text-xs font-bold text-charcoal-400 uppercase tracking-widest mb-2">
        Question {step + 1} of {questions.length}
      </p>
      <h3 className="text-lg font-black text-charcoal-900 mb-5 leading-snug">
        {question?.question}
      </h3>

      <div className="space-y-2.5">
        {question?.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleAnswer(opt.value)}
            className="w-full text-left flex items-center gap-3.5 bg-honey-50 hover:bg-honey-100 border border-honey-200 hover:border-honey-400 rounded-2xl px-4 py-3.5 transition-all duration-150 group"
          >
            <span className="text-xl shrink-0">{opt.emoji}</span>
            <span className="font-semibold text-charcoal-800 text-sm flex-1">{opt.label}</span>
            <ChevronRight
              size={16}
              className="text-honey-400 group-hover:translate-x-0.5 transition-transform shrink-0"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
