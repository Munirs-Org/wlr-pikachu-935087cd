"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the Pikachu Memorial about?",
    a: "The Pikachu Memorial is a dedicated space celebrating Pikachu's life, achievements, and lasting place in the Pokemon community. It honors his memory through remembrance features, shared stories, and charitable support of related Pokemon-themed causes.",
  },
  {
    q: "Can we learn more about the Pikachu Memorial?",
    a: "Yes. The About page shares the story behind the memorial, the values that guide it, and how the community keeps Pikachu's memory burning brightly. You can also reach out through the contact page with any questions.",
  },
  {
    q: "How many memorial elements are part of the Pikachu memorial?",
    a: "The memorial brings together four core elements: virtual memorials, shared memories from visitors, educational initiatives, and charitable causes — each one created to honor Pikachu's legacy in a meaningful way.",
  },
  {
    q: "How are donations used to support related Pokemon-themed causes?",
    a: "Contributions to the Pikachu Memorial Fund support charitable causes connected to the Pokemon community, helping keep Pikachu's impact alive through programs and initiatives carried out in his memory.",
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[30px] font-bold leading-[1.2] text-[#1a1917]">
          FAQ / Trust
        </h2>
        <p className="mt-3 text-[14px] leading-[1.5] text-[#1a1917]/70">
          Answers to common questions about the Pikachu Memorial.
        </p>

        <div className="mt-8 border-t border-[#dcd6ca]">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-b border-[#dcd6ca]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[15px] md:text-[16px] font-semibold text-[#1a1917]">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#1a1917] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 pr-8 text-[14px] leading-[1.6] text-[#1a1917]/75">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
