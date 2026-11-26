"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I submit a remembrance?",
    answer:
      "You can submit a remembrance through the inquiry form on this page. Share your story, memories, or photos of Pikachu, and our team will review your submission and help it become part of the memorial.",
  },
  {
    question: "What types of memorials are supported?",
    answer:
      "The Pikachu Memorial Site supports written tributes, photo remembrances, shared stories, and contributions to the Pikachu Memorial Fund — every way of honoring his life, achievements, and memory.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "The easiest way to reach us is the contact form above. Fill in your name, email, and message, and our team will respond promptly to your inquiry.",
  },
  {
    question: "Is there a cost to contact?",
    answer:
      "No. Reaching out is completely free. Submitting a remembrance, asking a question, or exploring ways to honor Pikachu costs nothing — we welcome every message.",
  },
];

export default function ContactFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-[32px] font-bold leading-[1.2] text-[#1a1917]">
          Quick FAQ
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#1a1917]/80">
          Find quick answers to common questions.
        </p>

        <div className="mt-8">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="border-t border-[#dcd6ca] last:border-b"
            >
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span className="text-base font-semibold text-[#1a1917]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#1a1917] transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              {open === i && (
                <p className="pb-4 pr-8 text-sm leading-relaxed text-[#1a1917]/75">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
