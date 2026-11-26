"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What is the Pikachu Memorial about?",
    answer:
      "The Pikachu Memorial celebrates Pikachu's life, achievements, and lasting place in the Pokemon community. It gathers stories, memories, and tributes in one dedicated space so fans can honor the joy he brought and keep his legacy shining brightly.",
  },
  {
    question: "Can we learn more about the Pikachu Memorial?",
    answer:
      "Yes. Explore the About page for the full story behind the memorial, or reach out through our contact form and we will gladly share more about the memorial's mission, its elements, and how you can take part.",
  },
  {
    question: "How many memorial elements are part of the Pikachu memorial?",
    answer:
      "The memorial is built around four core elements: virtual memorials, shared memories, educational initiatives, and charitable causes. Together they honor Pikachu's legacy from remembrance to community impact.",
  },
  {
    question: "How are donations used to support related Pokemon-themed causes?",
    answer:
      "Donations to the Pikachu Memorial Fund support Pokemon-themed charitable causes, memorial upkeep, and community initiatives. Every contribution helps keep the memory burning brightly and extends Pikachu's spirit of friendship to others.",
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#faf8f4" }}
      aria-labelledby="home-faq-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <h2
          id="home-faq-heading"
          className="font-bold text-[#1a1917]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "30px", lineHeight: 1.2 }}
        >
          FAQ / Trust
        </h2>
        <p className="mt-2 text-[14px] leading-relaxed text-[#5a564e]">
          Answers to common questions about the Pikachu Memorial.
        </p>

        <div className="mt-8 w-full border-t border-[#dcd6ca]">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="border-b border-[#dcd6ca]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`home-faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[#9a3412]"
                >
                  <span
                    className="font-bold text-[#1a1917]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "16px", lineHeight: 1.3 }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-[#1a1917] transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`home-faq-panel-${i}`}
                    className="pb-5 pr-10 text-[14px] leading-relaxed text-[#5a564e]"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
