"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the Pikachu Memorial about?",
    a: "The Pikachu Memorial is a tribute celebrating Pikachu's life, achievements, and lasting legacy. It brings together virtual memorials, shared memories, and educational resources so friends of the Pokemon community can honor and remember Pikachu in meaningful ways.",
  },
  {
    q: "Can we learn more about the Pikachu Memorial?",
    a: "Yes. You can explore the About page for the story behind the memorial, browse the memorial elements featured on this site, or reach out through the contact page with any questions about contributing, sharing memories, or supporting related causes.",
  },
  {
    q: "How many memorial elements are part of the Pikachu memorial?",
    a: "The memorial brings together four core elements: virtual memorials, shared memories from the community, educational initiatives about Pikachu's life and legacy, and support for charitable causes connected to the Pokemon-themed community.",
  },
  {
    q: "How are donations used to support related Pokemon-themed causes?",
    a: "Donations to the Pikachu Memorial Fund help maintain the memorial, expand educational resources, and support charitable causes that benefit the Pokemon community. Every contribution goes toward keeping Pikachu's memory bright and his impact alive.",
  },
];

export default function HomeFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-bold text-[#1a1917] text-[28px] md:text-[30px] leading-[1.2]">
          FAQ / Trust
        </h2>
        <p className="mt-2 text-[14px] leading-[1.5] text-[#1a1917]/70">
          Answers to common questions about the Pikachu Memorial.
        </p>

        <div className="mt-8 border-t border-[#dcd6ca]">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-[#dcd6ca]">
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-[16px] font-semibold text-[#1a1917]">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#1a1917] transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  strokeWidth={2}
                />
              </button>
              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-200 ${
                  open === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-5 pr-8 text-[14px] leading-[1.6] text-[#1a1917]/75">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
