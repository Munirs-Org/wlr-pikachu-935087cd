import Link from "next/link";
import { GeneratedImage_a53_contact__contact_details_1 } from "../../components/generated-assets";

export default function ContactDetailsMap() {
  return (
    <section className="w-full bg-[#faf8f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-[#1a1917] font-[family-name:var(--font-display)] text-2xl md:text-[32px] font-bold leading-[1.2]">
          Why Choose Pikachu for Contact Pikachu
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
          {/* Stylized map illustration — left column */}
          <div className="overflow-hidden rounded-[10px] border border-[#dcd6ca] shadow-[0_1px_3px_rgba(26,25,23,0.05)]">
            <GeneratedImage_a53_contact__contact_details_1 className="h-full w-full object-cover" />
          </div>

          {/* Verified Channels — right column */}
          <div>
            <h3 className="text-[#1a1917] font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold">
              Verified Channels
            </h3>

            <ul className="mt-5 space-y-6">
              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9a3412]"
                />
                <div>
                  <p className="font-[family-name:var(--font-display)] text-[15px] font-semibold text-[#1a1917]">
                    General Inquiries Email
                  </p>
                  <p className="mt-1 text-sm leading-[1.5] text-[#1a1917]/70">
                    Reach the team by email for general questions.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9a3412]"
                />
                <div>
                  <p className="font-[family-name:var(--font-display)] text-[15px] font-semibold text-[#1a1917]">
                    Form Submission
                  </p>
                  <p className="mt-1 text-sm leading-[1.5] text-[#1a1917]/70">
                    A verified submission process connecting you with our
                    contact channels.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9a3412]"
                />
                <div>
                  <p className="font-[family-name:var(--font-display)] text-[15px] font-semibold text-[#1a1917]">
                    Frequently Asked Questions Link
                  </p>
                  <p className="mt-1 text-sm leading-[1.5] text-[#1a1917]/70">
                    Browse frequently asked questions for quick answers on the
                    page below.
                  </p>
                  <Link
                    href="/contact#faq"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#9a3412] underline-offset-4 hover:underline"
                  >
                    View the FAQ
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
