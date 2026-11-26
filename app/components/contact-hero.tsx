import { GeneratedImage_a53_contact__hero_1 } from "../../components/generated-assets";

export default function ContactHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#f2efe8" }}
      aria-labelledby="contact-hero-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
        {/* Left: warm surface panel with headline */}
        <div className="flex items-center px-6 sm:px-10 lg:pl-16 lg:pr-8 py-16 lg:py-24">
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

        {/* Right: angled photo of memorial monument, subject right */}
        <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-[420px]">
          {/* angled clip: diagonal edge leaning left at top */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <GeneratedImage_a53_contact__hero_1 />
            {/* directional gradient from left, stopping partway across */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(242,239,232,1) 0%, rgba(242,239,232,0.85) 18%, rgba(242,239,232,0) 55%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
