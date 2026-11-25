"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How can I submit a remembrance?",
    a: "You can share a remembrance through the inquiry form on this page. Tell us your story, add a message honoring Pikachu, and our team will review it and help publish it on the memorial site.",
  },
  {
    q: "What types of memorials are supported?",
    a: "We support written tributes, shared memories, photo remembrances, and contributions to community memorial initiatives dedicated to celebrating Pikachu's life and achievements.",
  },
  {
    q: "How can I get in touch?",
    a: "The quickest way is the contact form on this page. Submit your question or remembrance and a member of our team will respond with guidance and next steps.",
  },
  {
    q: "Is there a cost to contact?",
    a: "No. Reaching out is completely free. Submitting a question, sharing a memory, or inquiring about the Pikachu Memorial Fund costs nothing.",
  },
];

export default function ContactFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="w-full bg-[#faf8f4]"
      style={{ borderTop: "1px solid #dcd6ca" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2
          className="text-[#1a1917]"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Quick FAQ
        </h2>
        <p
          className="mt-2 text-[#1a1917]"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            lineHeight: 1.5,
          }}
        >
          Find quick answers to common questions.
        </p>

        <div className="mt-8">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              style={{ borderBottom: "1px solid #dcd6ca" }}
            >
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span
                  className="font-semibold text-[#1a1917]"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-[#1a1917] transition-transform duration-200"
                  style={{ transform: open === i ? "rotate(180deg)" : "none" }}
                  strokeWidth={2}
                />
              </button>
              {open === i && (
                <p
                  className="pb-5 pr-8 text-[#1a1917]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.5,
                  }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
