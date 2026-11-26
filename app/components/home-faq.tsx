"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the Pikachu Memorial about?",
    a: "The Pikachu Memorial is a dedicated space celebrating Pikachu's life, achievements, and lasting legacy. It brings together virtual memorials, shared memories, and educational initiatives so fans can honor Pikachu respectfully and keep his memory burning brightly.",
  },
  {
    q: "Can we learn more about the Pikachu Memorial?",
    a: "Yes. The About page shares the story behind the memorial — from Pikachu's journey of light to the community that keeps his legacy alive. You can also reach out through our contact form with any specific questions about the memorial and its elements.",
  },
  {
    q: "How many memorial elements are part of the Pikachu memorial?",
    a: "The memorial is built around four core elements: virtual memorials, shared memories from the community, educational initiatives, and charitable causes supported in Pikachu's name. Together they form a complete tribute to his life and impact.",
  },
  {
    q: "How do donations are used to support related Pokemon-themed causes?",
    a: "Donations to the Pikachu Memorial Fund support community-focused Pokemon-themed causes — from preserving the memorial itself to backing educational initiatives and charitable efforts that carry Pikachu's spirit of friendship forward.",
  },
];

export default function HomeFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <h2
          className="text-[#1a1917]"
          style={{
            fontFamily: "var(--font-display, 'Plus Jakarta Sans'), sans-serif",
            fontSize: "30px",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          FAQ / Trust
        </h2>
        <p className="mt-2 text-[14px] leading-[1.5] text-[#1a1917]/70">
          Answers to common questions about the Pikachu Memorial.
        </p>

        <div className="mt-8 border-t border-[#dcd6ca]">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-[#dcd6ca]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-[#9a3412]"
                >
                  <span
                    className="text-[#1a1917]"
                    style={{
                      fontFamily:
                        "var(--font-display, 'Plus Jakarta Sans'), sans-serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
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
                  <div className="pb-5 pr-10">
                    <p className="text-[14px] leading-[1.6] text-[#1a1917]/80">
                      {item.a}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-3 inline-flex items-center text-[14px] font-semibold text-[#9a3412] hover:underline"
                    >
                      Ask us a question
                    </Link>
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
