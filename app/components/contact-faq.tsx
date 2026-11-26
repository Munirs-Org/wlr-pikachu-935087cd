"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How can I submit a remembrance?",
    a: "You can share a remembrance through the inquiry form on this page. Tell us your story about Pikachu — a memory, a message, or an achievement you would like honored — and our team will help place it on the memorial site.",
  },
  {
    q: "What types of memorials are supported?",
    a: "We support written tributes, shared photographs, milestone celebrations of Pikachu's life, and community contributions to the Pikachu Memorial Fund, so every remembrance finds a fitting home.",
  },
  {
    q: "How can I get in touch?",
    a: "Reach out through the contact form on this page and our team will respond promptly. You can also explore the Frequently Asked Questions on this page for quick answers to common questions.",
  },
  {
    q: "Is there a cost to contact?",
    a: "No — reaching out is completely free. Submitting a question, sharing a remembrance, or requesting guidance about the memorial carries no cost whatsoever.",
  },
];

export default function ContactFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="w-full py-16 md:py-20"
      style={{ backgroundColor: "#faf8f4" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          className="text-3xl md:text-4xl font-bold"
          style={{ color: "#1a1917", fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" }}
        >
          Quick FAQ
        </h2>
        <p className="mt-3 text-sm" style={{ color: "#1a1917" }}>
          Find quick answers to common questions.
        </p>

        <div className="mt-8">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b" style={{ borderColor: "#dcd6ca" }}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span
                    className="text-base font-semibold"
                    style={{ color: "#1a1917" }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 transition-transform duration-200"
                    style={{
                      color: "#1a1917",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {isOpen && (
                  <p
                    className="pb-4 pr-10 text-sm leading-relaxed"
                    style={{ color: "#1a1917", opacity: 0.75 }}
                  >
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
