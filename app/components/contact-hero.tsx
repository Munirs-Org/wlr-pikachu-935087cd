import { GeneratedImage_a53_contact__hero_1 } from "../../components/generated-assets";

export default function ContactHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#f2efe8" }}
      aria-labelledby="contact-hero-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* Left: warm surface panel with headline */}
        <div className="flex items-center px-6 sm:px-10 lg:pl-16 lg:pr-8 py-16 lg:py-24 bg-[#f2efe8]">
          <h1
            id="contact-hero-heading"
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1]"
            style={{
              fontFamily: "var(--font-display, 'Plus Jakarta Sans'), sans-serif",
              color: "#1a1917",
            }}
          >
            Contact Pikachu
          </h1>
        </div>

        {/* Right: memorial monument photo, subject right, full headroom */}
        <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[440px] overflow-hidden">
          <div className="absolute inset-0">
            <GeneratedImage_a53_contact__hero_1
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "center right" }}
            />
            {/* directional edge gradient from the left, stopping partway across —
                text-over-surface fade into a clear subject (no flat full tint,
                no hard diagonal clip) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, #f2efe8 0%, rgba(242,239,232,0.9) 14%, rgba(242,239,232,0) 48%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
