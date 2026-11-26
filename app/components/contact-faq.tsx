"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How can I submit a remembrance?",
    a: "You can share a remembrance through the inquiry form on this page. Include your message, a favorite memory, and any photos you would like honored — our team will review it and help place it in Pikachu's memorial.",
  },
  {
    q: "What types of memorials are supported?",
    a: "We support written tributes, photo collections, shared stories, and contributions to the Pikachu Memorial Fund. Every submission is reviewed with care so each memory is honored appropriately.",
  },
  {
    q: "How can I get in touch?",
    a: "The quickest way to reach us is the contact form on this page. Send your question or message and a member of our team will follow up with you directly.",
  },
  {
    q: "Is there a cost to contact?",
    a: "No — reaching out is completely free. Submitting a remembrance, asking a question, or requesting guidance costs nothing. Optional contributions go directly to the Pikachu Memorial Fund.",
  },
];

export default function ContactFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <h2
          className="text-[#1a1917]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "32px", fontWeight: 700, lineHeight: 1.2 }}
        >
          Quick FAQ
        </h2>
        <p className="mt-2 text-[14px] leading-relaxed text-[#1a1917]/70">
          Find quick answers to common questions.
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
                    className="text-[15px] font-semibold text-[#1a1917]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#1a1917] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    strokeWidth={2}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 pr-8 text-[14px] leading-relaxed text-[#1a1917]/75">
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
