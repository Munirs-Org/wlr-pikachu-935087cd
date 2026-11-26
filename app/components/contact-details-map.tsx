import { GeneratedImage_a53_contact__contact_details_1 } from "../../components/generated-assets";

const channels = [
  {
    title: "General Inquiries Email",
    body: "Reach the team by email for general questions about Pikachu and the memorial site.",
  },
  {
    title: "Form Submission",
    body: "A verified submission process connecting you with our contact channels.",
  },
  {
    title: "Frequently Asked Questions Link",
    body: "Browse frequently asked questions for quick answers to common questions.",
  },
];

export default function ContactDetailsMap() {
  return (
    <section
      id="contact-contact-details-1"
      className="w-full bg-[#faf8f4] py-16"
      aria-label="Verified contact details and map"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[#1a1917] md:text-[32px]">
          Why Choose Pikachu for Contact Pikachu
        </h2>

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          {/* Left: stylized street map illustration */}
          <div className="overflow-hidden rounded-[10px] border border-[#dcd6ca] shadow-[0_1px_3px_rgba(26,25,23,0.05)]">
            <GeneratedImage_a53_contact__contact_details_1 className="h-full w-full object-cover" />
          </div>

          {/* Right: verified channels list */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#1a1917]">
              Verified Channels
            </h3>
            <ul className="mt-5 space-y-6">
              {channels.map((channel) => (
                <li key={channel.title} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9a3412]"
                  />
                  <div>
                    <h4 className="text-[15px] font-semibold leading-snug text-[#1a1917]">
                      {channel.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-[#1a1917]/70">
                      {channel.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
