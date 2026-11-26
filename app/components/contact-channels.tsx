import { GeneratedImage_a53_contact__contact_details_1 } from "../../components/generated-assets";

const channels = [
  {
    title: "General Inquiries Email",
    copy: "Reach the team by email for general questions about Pikachu and the memorial site.",
  },
  {
    title: "Form Submission",
    copy: "A verified submission process connecting you with our contact channels.",
  },
  {
    title: "Frequently Asked Questions Link",
    copy: "Browse frequently asked questions for quick answers to common inquiries.",
  },
];

export default function ContactChannels() {
  return (
    <section
      id="contact__contact-details-1"
      className="w-full bg-[#faf8f4] py-16 px-6 md:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-[32px] font-bold leading-[1.2] text-[#1a1917] mb-10">
          Why Choose Pikachu for Contact Pikachu
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
          {/* Left: stylized street map illustration */}
          <div className="overflow-hidden rounded-[10px] border border-[#dcd6ca] shadow-[0_1px_3px_rgba(26,25,23,0.05)]">
            <GeneratedImage_a53_contact__contact_details_1 className="h-full w-full object-cover aspect-[4/3]" />
          </div>

          {/* Right: verified channels list */}
          <div>
            <h3 className="font-display text-[20px] font-bold leading-[1.3] text-[#1a1917] mb-5">
              Verified Channels
            </h3>
            <ul className="space-y-5">
              {channels.map((channel) => (
                <li key={channel.title} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#9a3412]"
                  />
                  <div>
                    <p className="text-[15px] font-semibold leading-[1.3] text-[#1a1917]">
                      {channel.title}
                    </p>
                    <p className="mt-1 text-[14px] font-normal leading-[1.5] text-[#1a1917]/70">
                      {channel.copy}
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
