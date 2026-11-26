"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How can I submit a remembrance?",
    a: "You can submit a remembrance through the contact form on this page. Share a memory, a story, or a few words about Pikachu, and our team will help preserve it as part of the memorial.",
  },
  {
    q: "What types of memorials are supported?",
    a: "We support written tributes, shared memories, photo dedications, and community contributions that celebrate Pikachu's life, achievements, and lasting legacy.",
  },
  {
    q: "How can I get in touch?",
    a: "The simplest way to get in touch is to use the inquiry form on this page. Once your message is submitted, our team will review it and respond with guidance on next steps.",
  },
  {
    q: "Is there a cost to contact?",
    a: "No. Reaching out to the Pikachu Memorial Fund is completely free. Questions, remembrances, and inquiries are always welcome at no cost.",
  },
];

export default function ContactFaqCta() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full" style={{ backgroundColor: "#faf8f4" }}>
      <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <h2
          className="font-bold"
          style={{ fontFamily: "var(--font-display, 'Plus Jakarta Sans'), sans-serif", color: "#1a1917", fontSize: "32px", lineHeight: 1.2 }}
        >
          Quick FAQ
        </h2>
        <p className="mt-2 text-sm" style={{ color: "#1a1917", opacity: 0.7 }}>
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
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm font-semibold" style={{ color: "#1a1917" }}>
                    {item.q}
                  </span>
                  <ChevronDown
                    className="h-4 w-4 shrink-0 transition-transform duration-200"
                    style={{ color: "#1a1917", transform: isOpen ? "rotate(180deg)" : "none" }}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed" style={{ color: "#1a1917", opacity: 0.75 }}>
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full" style={{ backgroundColor: "#9a3412" }}>
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2
            className="mx-auto max-w-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-display, 'Plus Jakarta Sans'), sans-serif", fontSize: "28px", lineHeight: 1.25 }}
          >
            Help Us Keep the Memory Burning Brightly. Support the Pikachu Memorial Fund.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ color: "#1a1917" }}
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}
