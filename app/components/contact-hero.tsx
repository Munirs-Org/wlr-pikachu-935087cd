import { GeneratedImage_a53_contact__hero_1 } from "../../components/generated-assets";

export default function ContactHero() {
  return (
    <section
      id="contact-hero-1"
      aria-label="Contact Pikachu"
      className="relative w-full overflow-hidden bg-[#f2efe8]"
    >
      {/* Photo panel on the right with an angled left edge */}
      <div className="relative h-[240px] w-full sm:h-[280px] lg:h-[320px]">
        <div className="absolute inset-y-0 right-0 left-[30%] sm:left-[38%] lg:left-[46%]">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath:
                "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <GeneratedImage_a53_contact__hero_1 className="absolute inset-0 h-full w-full object-cover" />
          </div>
          {/* Angled cream edge gradient fading from the left, stopping partway across */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, #f2efe8 0%, rgba(242,239,232,0.55) 32%, rgba(242,239,232,0) 58%)",
              clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>

        {/* Headline on the left as separate DOM over the negative space */}
        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
            <h1 className="font-[var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight text-[#1a1917] sm:text-5xl lg:text-[56px]">
              Contact Pikachu
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
