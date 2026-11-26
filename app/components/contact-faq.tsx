"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How can I submit a remembrance?",
    a: "Share a memory of Pikachu through the inquiry form on this page, or reach out through the verified channels listed above. Include a short story, a photo, or a few words of remembrance and our team will help place it among the tributes celebrating his life and achievements.",
  },
  {
    q: "What types of memorials are supported?",
    a: "The Pikachu Memorial Site welcomes written tributes, shared photographs, stories of his life and achievements, and contributions to the Pikachu Memorial Fund. Every submission is reviewed with care so each memory is honored faithfully.",
  },
  {
    q: "How can I get in touch?",
    a: "Use the inquiry form on this page to send a question or a remembrance, or follow the verified channels listed in the contact details above. Our team reviews every message and will respond with guidance on next steps.",
  },
  {
    q: "Is there a cost to contact?",
    a: "No — reaching out is free. Submitting a question, sharing a memory, or contributing to the Pikachu Memorial Fund carries no cost, and our team is happy to help you honor Pikachu's legacy.",
  },
];

export default function ContactFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-[#faf8f4] py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[32px] font-bold leading-[1.2] text-[#1a1917]">
          Quick FAQ
        </h2>
        <p className="mt-2 text-[14px] leading-[1.5] text-[#1a1917]/70">
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
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] font-semibold text-[#1a1917]">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#1a1917] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 pr-8 text-[14px] leading-[1.6] text-[#1a1917]/70">
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
