"use client";

import { GeneratedImage_a53_contact__contact_details_1 } from "../../components/generated-assets";

const channels = [
  {
    title: "General Inquiries Email",
    copy: "Reach the Pikachu memorial team by email for general questions about Pikachu, his story, and the memorial site.",
  },
  {
    title: "Form Submission",
    copy: "Use the verified submission process below to connect directly with our contact channels and share your message.",
  },
  {
    title: "Frequently Asked Questions Link",
    copy: "Browse the frequently asked questions for quick answers about tributes, memorials, and contributions.",
  },
];

export default function ContactDetails() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[32px] font-bold leading-[1.2] text-[#1a1917]">
          Why Choose Pikachu for Contact Pikachu
        </h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: stylized street-map illustration */}
          <div className="relative rounded-[12px] border border-[#dcd6ca] bg-[#e8e3d9] overflow-hidden min-h-[280px] lg:min-h-[340px]">
            <GeneratedImage_a53_contact__contact_details_1
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Right: verified channels */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-[24px] font-bold text-[#1a1917]">
              Verified Channels
            </h3>
            <ul className="mt-6 space-y-6">
              {channels.map((c) => (
                <li key={c.title} className="flex gap-3">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: "#9a3412" }}
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="font-[family-name:var(--font-display)] text-[17px] font-semibold text-[#1a1917]">
                      {c.title}
                    </h4>
                    <p className="mt-1 text-[14px] leading-[1.6] text-[#1a1917]/80">
                      {c.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("wlr:open-quote", {
                    detail: { target: "contact-details", cartModel: undefined },
                  })
                )
              }
              className="mt-8 inline-flex items-center rounded-[8px] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#9a3412", borderRadius: "8px" }}
            >
              Send a Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
