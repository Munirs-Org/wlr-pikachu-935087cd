"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs: { question: string; answer: string }[] = [
  {
    question: "What is the Pikachu Memorial about?",
    answer:
      "The Pikachu Memorial is a dedicated space celebrating Pikachu's life, achievements, and lasting legacy. It honors the joy Pikachu brought to the Pokemon community through virtual memorials, shared memories, and remembrance.",
  },
  {
    question: "Can we learn more about the Pikachu Memorial?",
    answer:
      "Yes. Visitors can explore Pikachu's story, discover the memorial elements, and learn how the community keeps his memory burning brightly. For anything more personal, reach out through our contact page and we will gladly share more.",
  },
  {
    question: "How many memorial elements are part of the Pikachu memorial?",
    answer:
      "The memorial brings together four core elements: virtual memorials, shared memories from the community, educational initiatives honoring Pikachu's journey, and charitable causes supported in his name.",
  },
  {
    question: "How are donations used to support related Pokemon-themed causes?",
    answer:
      "Every contribution to the Pikachu Memorial Fund goes toward keeping the memorial alive and supporting Pokemon-themed causes Pikachu stood for — community programs, educational resources, and charitable initiatives in his memory.",
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[30px] font-bold leading-[1.2] text-[#1a1917]">
          FAQ / Trust
        </h2>
        <p className="mt-2 text-sm leading-[1.5] text-[#1a1917]/70">
          Answers to common questions about the Pikachu Memorial.
        </p>

        <div className="mt-8">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="border-b border-[#dcd6ca] first:border-t"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[15px] md:text-base font-bold text-[#1a1917]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#1a1917] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-8 text-sm leading-[1.6] text-[#1a1917]/80">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
