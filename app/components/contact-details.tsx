import { GeneratedImage_a53_contact__contact_details_1 } from "../../components/generated-assets";

const channels = [
  {
    title: "General Inquiries Email",
    body: "Reach the team by email for general questions.",
  },
  {
    title: "Form Submission",
    body: "A verified submission process connecting you with our contact channels.",
  },
  {
    title: "Frequently Asked Questions Link",
    body: "Browse frequently asked questions for quick answers.",
  },
];

export default function ContactDetails() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#1a1917] md:text-[32px] md:leading-[1.2]">
          Why Choose Pikachu for Contact Pikachu
        </h2>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          {/* Left: stylized street-map illustration card */}
          <div className="overflow-hidden rounded-[10px] border border-[#dcd6ca] bg-[#f2efe8] shadow-[0_1px_3px_rgba(26,25,23,0.05)]">
            <GeneratedImage_a53_contact__contact_details_1 className="h-full w-full object-cover" />
          </div>

          {/* Right: Verified Channels list */}
          <div className="lg:pl-6">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#1a1917]">
              Verified Channels
            </h3>
            <ul className="mt-6 space-y-6">
              {channels.map((channel) => (
                <li key={channel.title} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9a3412]"
                  />
                  <div>
                    <p className="text-[15px] font-semibold leading-[1.3] text-[#1a1917]">
                      {channel.title}
                    </p>
                    <p className="mt-1 text-sm leading-[1.5] text-[#1a1917]/80">
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
