import Link from "next/link";
import { GeneratedImage_a53_contact__contact_details_1 } from "../../components/generated-assets";

const channels = [
  {
    title: "General Inquiries Email",
    body: "Reach the Pikachu memorial team by email for general questions about Pikachu, his story, and the memorial site.",
  },
  {
    title: "Form Submission",
    body: "Use the verified submission process below to connect directly with our contact channels and share your message.",
  },
  {
    title: "Frequently Asked Questions Link",
    body: "Browse the frequently asked questions for quick answers about tributes, memorials, and contributions.",
  },
];

export default function ContactDetails() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.2] text-[#1a1917] md:text-4xl">
          Why Choose Pikachu for Contact Pikachu
        </h2>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: stylized street-map illustration */}
          <div className="overflow-hidden rounded-[10px] border border-[#dcd6ca] shadow-[0_1px_3px_rgba(26,25,23,0.05)]">
            <GeneratedImage_a53_contact__contact_details_1 className="h-full min-h-[280px] w-full object-cover" />
          </div>

          {/* Right: verified channels */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-[1.2] text-[#1a1917]">
              Verified Channels
            </h3>
            <ul className="mt-6 space-y-6">
              {channels.map((channel) => (
                <li key={channel.title} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#9a3412]"
                  />
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-lg font-semibold leading-[1.3] text-[#1a1917]">
                      {channel.title}
                    </p>
                    <p className="mt-1 text-sm leading-[1.5] text-[#1a1917]/70">
                      {channel.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-[6px] bg-[#9a3412] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#7f2a0e]"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
