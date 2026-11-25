import Link from "next/link";
import { GeneratedImage_a53_about__hero_1 } from "../../components/generated-assets";

export default function AboutHero() {
  return (
    <section
      id="about__hero-1"
      className="relative w-full overflow-hidden bg-[#f2efe8]"
    >
      <div className="relative min-h-[420px] md:min-h-[460px]">
        <div className="absolute inset-0">
          <GeneratedImage_a53_about__hero_1 />
          {/* Directional edge gradient: solid cream on the left fading out partway, keeping the subject clear on the right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #f2efe8 0%, #f2efe8 42%, rgba(242,239,232,0.85) 52%, rgba(242,239,232,0) 68%)",
            }}
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-md">
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] text-[#1a1917] md:text-[52px]">
              About Pikachu
            </h1>
            <p className="mt-5 max-w-sm text-[15px] leading-[1.6] text-[#1a1917]">
              Our Mission: To celebrate, remember, and support the everlasting
              memory of Pikachu and the Pokemon community.
            </p>
            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-block rounded-[6px] bg-[#9a3412] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#7c2a0e]"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
