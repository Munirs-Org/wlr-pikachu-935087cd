"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is the Pikachu Memorial about?",
    a: "The Pikachu Memorial is a dedicated place to celebrate Pikachu's life and memory. It honors his achievements with virtual memorials, shared memories, educational initiatives, and support for charitable causes connected to the Pokemon community.",
  },
  {
    q: "Can we learn more about the Pikachu Memorial?",
    a: "Yes. Visitors can explore the About page to learn the story behind the memorial, the principles that guide it, and the ways the community continues to keep Pikachu's memory burning brightly.",
  },
  {
    q: "How many memorial elements are part of the Pikachu memorial?",
    a: "The memorial brings together four core elements: virtual memorials, shared memories, educational initiatives, and charitable causes. Each one offers a different way to honor and remember Pikachu.",
  },
  {
    q: "How are donations used to support related Pokemon-themed causes?",
    a: "Contributions to the Pikachu Memorial Fund support educational initiatives and community-focused Pokemon-themed causes, helping the memory of Pikachu make a meaningful impact.",
  },
];

export default function HomeFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1080px] px-5 md:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-[30px] font-bold leading-[1.2] text-[#1a1917]">
          FAQ / Trust
        </h2>
        <p className="mt-2 text-[14px] leading-[1.5] text-[#1a1917]/70">
          Answers to common questions about the Pikachu Memorial.
        </p>

        <div className="mt-8">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-[#dcd6ca] first:border-t">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-[15px] font-bold text-[#1a1917]">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#1a1917] transition-transform duration-200 ${
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
