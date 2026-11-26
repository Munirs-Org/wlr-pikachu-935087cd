import Link from "next/link";

function MapIllustration() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden rounded-[10px] border border-[#dcd6ca] bg-[#eceae2]"
      style={{ aspectRatio: "16 / 10" }}
    >
      <svg
        viewBox="0 0 640 400"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* park blocks */}
        <rect x="0" y="30" width="150" height="110" rx="6" fill="#c9dfb6" />
        <rect x="60" y="300" width="130" height="90" rx="6" fill="#c9dfb6" />
        <rect x="480" y="150" width="110" height="90" rx="6" fill="#c9dfb6" />
        <rect x="530" y="290" width="100" height="100" rx="6" fill="#c9dfb6" />
        {/* pale-yellow district */}
        <rect x="230" y="60" width="180" height="130" rx="6" fill="#f6e9b8" />
        <rect x="300" y="240" width="150" height="110" rx="6" fill="#f6e9b8" />
        {/* city blocks */}
        <rect x="180" y="30" width="40" height="80" rx="4" fill="#dcd6ca" />
        <rect x="430" y="40" width="90" height="70" rx="4" fill="#dcd6ca" />
        <rect x="440" y="260" width="70" height="50" rx="4" fill="#dcd6ca" />
        <rect x="180" y="230" width="90" height="70" rx="4" fill="#dcd6ca" />
        {/* water */}
        <rect x="40" y="150" width="60" height="24" rx="10" fill="#bfd8dd" />
        {/* streets */}
        <g stroke="#ffffff" strokeWidth="14" strokeLinecap="round">
          <line x1="0" y1="170" x2="640" y2="170" />
          <line x1="0" y1="270" x2="640" y2="270" />
          <line x1="170" y1="0" x2="170" y2="400" />
          <line x1="420" y1="0" x2="420" y2="400" />
          <line x1="560" y1="0" x2="560" y2="400" />
        </g>
        <g stroke="#ffffff" strokeWidth="7" strokeLinecap="round">
          <line x1="0" y1="90" x2="640" y2="90" />
          <line x1="0" y1="220" x2="640" y2="220" />
          <line x1="0" y1="330" x2="640" y2="330" />
          <line x1="100" y1="0" x2="100" y2="400" />
          <line x1="290" y1="0" x2="290" y2="400" />
          <line x1="350" y1="0" x2="350" y2="400" />
          <line x1="500" y1="0" x2="500" y2="400" />
        </g>
        {/* minor diagonal road */}
        <line x1="380" y1="400" x2="640" y2="120" stroke="#ffffff" strokeWidth="10" />
      </svg>
    </div>
  );
}

export default function ContactDetailsMap() {
  return (
    <section
      id="contact-contact-details-1"
      className="w-full bg-[#faf8f4] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          className="font-[family-name:var(--font-display)] text-[28px] font-bold leading-tight text-[#1a1917] md:text-[32px]"
        >
          Why Choose Pikachu for Contact Pikachu
        </h2>

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <MapIllustration />

          <div>
            <h3 className="font-[family-name:var(--font-display)] text-[20px] font-semibold text-[#1a1917] md:text-[22px]">
              Verified Channels
            </h3>
            <ul className="mt-4 space-y-5">
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#9a3412]"
                />
                <div>
                  <p className="text-[15px] font-semibold text-[#1a1917]">
                    General Inquiries Email
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#1a1917]/70">
                    Reach the team by email for general questions, and verified
                    replies are shared from our general inquiries channel.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#9a3412]"
                />
                <div>
                  <p className="text-[15px] font-semibold text-[#1a1917]">
                    Form Submission
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#1a1917]/70">
                    A verified submission process connects you with our contact
                    channels and routes your message to the right place.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#9a3412]"
                />
                <div>
                  <p className="text-[15px] font-semibold text-[#1a1917]">
                    Frequently Asked Questions Link
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#1a1917]/70">
                    Browse frequently asked questions for quick answers before
                    reaching out.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
