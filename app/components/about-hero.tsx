import Link from "next/link";
import { GeneratedImage_a53_about__hero_1 } from "../../components/generated-assets";

export default function AboutHero() {
  return (
    <section
      id="about__hero"
      className="w-full bg-[#f2efe8]"
      style={{ fontFamily: "var(--font-display)" }}
    >
      <div className="relative overflow-hidden">
        {/* Background image layer — full bleed, subject right */}
        <div className="absolute inset-0">
          <GeneratedImage_a53_about__hero_1 className="absolute inset-0 h-full w-full object-cover" />
          {/* Directional left-edge gradient fading to transparent over subject */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(242,239,232,0.97) 0%, rgba(242,239,232,0.92) 32%, rgba(242,239,232,0.55) 52%, rgba(242,239,232,0) 72%)",
            }}
          />
        </div>

        {/* Live text over image negative space */}
        <div className="relative z-10">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="flex flex-col justify-start py-16 md:py-24 lg:w-[52%]">
              <h1 className="text-[40px] font-bold leading-[1.1] tracking-tight text-[#1a1917] md:text-[52px]">
                About Pikachu
              </h1>
              <p
                className="mt-5 max-w-md text-[15px] leading-[1.6] text-[#1a1917]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Our Mission: To celebrate, remember, and support the everlasting
                memory of Pikachu and the Pokemon community.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-[6px] bg-[#9a3412] px-7 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#7e2b0e]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
